import AsyncStorage from '@react-native-async-storage/async-storage';
import { QUESTIONS, QUESTION_MAP, Question, QUESTIONS_BY_TOPIC } from '../data/questions';
import { TOPICS } from '../data/topics';

const STORAGE_KEY = '@cortex_user_state_v2';
const XP_PER_MISSION = 10;
export const XP_REWARD = XP_PER_MISSION;

export type Level = 'Iniciante' | 'Explorador' | 'Futurista';

export type UserState = {
  xp: number;
  nivel: Level;
  missoesConcluidas: string[];
  temasSelecionados: string[];
};

export type TopicProgress = {
  topicId: string;
  answered: number;
  total: number;
  remaining: number;
};

const DEFAULT_USER: UserState = {
  xp: 0,
  nivel: 'Iniciante',
  missoesConcluidas: [],
  temasSelecionados: [],
};

function sanitizeState(state: any): UserState {
  if (!state || typeof state !== 'object') {
    return { ...DEFAULT_USER };
  }

  const missoesConcluidas = Array.isArray(state.missoesConcluidas)
    ? state.missoesConcluidas.filter((id: unknown): id is string => typeof id === 'string')
    : [];

  const temasSelecionados = Array.isArray(state.temasSelecionados)
    ? state.temasSelecionados.filter((id: unknown): id is string => typeof id === 'string')
    : [];

  const xp = typeof state.xp === 'number' ? state.xp : DEFAULT_USER.xp;

  return {
    xp,
    nivel: calculateLevel(xp),
    missoesConcluidas,
    temasSelecionados,
  };
}

/**
 * Carrega o estado do usuário do AsyncStorage.
 * 
 * Se não encontrar dados ou houver erro de parse:
 * - Remove a chave corrompida
 * - Retorna o estado padrão (DEFAULT_USER)
 * 
 * Isso garante que o app sempre tenha um estado válido.
 */
export async function loadUserState(): Promise<UserState> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    
    // Se não há dados, retorna estado padrão
    if (!raw || raw === 'null' || raw === 'undefined') {
      console.log('[loadUserState] ℹ️ Nenhum dado encontrado, retornando estado padrão');
      return { ...DEFAULT_USER };
    }
    
    // Tenta fazer parse do JSON
    let parsed: any;
    try {
      parsed = JSON.parse(raw);
    } catch (parseError) {
      console.error('[loadUserState] ❌ Erro ao fazer parse do JSON:', parseError);
      // Se o JSON está corrompido, remove a chave e retorna padrão
      await AsyncStorage.removeItem(STORAGE_KEY);
      return { ...DEFAULT_USER };
    }
    
    // Sanitiza e retorna o estado válido
    const sanitized = sanitizeState(parsed);
    console.log('[loadUserState] ✅ Estado carregado:', {
      xp: sanitized.xp,
      nivel: sanitized.nivel,
      missoes: sanitized.missoesConcluidas.length,
      temas: sanitized.temasSelecionados.length,
    });
    
    return sanitized;
    
  } catch (error) {
    console.error('[loadUserState] ❌ Erro ao carregar estado:', error);
    // Em caso de erro, remove a chave e retorna padrão
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
    } catch (removeError) {
      console.error('[loadUserState] ❌ Erro ao remover chave corrompida:', removeError);
    }
    return { ...DEFAULT_USER };
  }
}

/**
 * Salva o estado do usuário no AsyncStorage.
 * 
 * Sempre serializa com JSON.stringify para garantir formato correto.
 * Trata erros de escrita silenciosamente.
 */
export async function saveUserState(state: UserState): Promise<void> {
  try {
    const serialized = JSON.stringify(state);
    await AsyncStorage.setItem(STORAGE_KEY, serialized);
    console.log('[saveUserState] ✅ Estado salvo com sucesso');
  } catch (error) {
    console.error('[saveUserState] ❌ Erro ao salvar estado:', error);
    throw error; // Propaga o erro para o chamador tratar
  }
}

export function calculateLevel(xp: number): Level {
  if (xp < 100) return 'Iniciante';
  if (xp < 250) return 'Explorador';
  return 'Futurista';
}

export async function completeMission(questionId: string, options: { awardXp?: boolean } = {}) {
  const { awardXp = true } = options;
  const state = await loadUserState();

  if (!state.missoesConcluidas.includes(questionId)) {
    state.missoesConcluidas.push(questionId);
    if (awardXp) {
      state.xp += XP_PER_MISSION;
    }
    state.nivel = calculateLevel(state.xp);
    await saveUserState(state);
  }

  return state;
}

/**
 * Reseta completamente o progresso do usuário.
 * 
 * Seguindo boas práticas de AsyncStorage:
 * 1. Remove TODAS as chaves possíveis (incluindo versões antigas)
 * 2. NÃO salva estado padrão imediatamente - deixa o storage vazio
 * 3. O próximo loadUserState() retornará o DEFAULT_USER automaticamente
 * 4. Isso evita problemas de cache e garante reset completo
 */
export async function resetAccountHard(): Promise<UserState> {
  try {
    console.log('[resetAccountHard] Iniciando reset completo...');
    
    // Lista TODAS as chaves possíveis que podem existir
    const keysToRemove = [
      STORAGE_KEY,                    // Chave atual
      '@cortex_user',                 // Chave legada v1
      '@cortex_user_state',           // Chave legada v2
      '@cortex_user_state_v1',        // Versão 1
      '@cortex_user_state_v2',        // Versão 2 (atual)
    ];
    
    // Remove cada chave individualmente
    const removalPromises = keysToRemove.map(async (key) => {
      try {
        await AsyncStorage.removeItem(key);
        console.log(`[resetAccountHard] ✅ Chave removida: ${key}`);
        return true;
      } catch (err) {
        // Não é erro se a chave não existir
        console.log(`[resetAccountHard] ℹ️ Chave não encontrada ou já removida: ${key}`);
        return false;
      }
    });
    
    await Promise.all(removalPromises);
    
    // Aguarda um pouco para garantir que AsyncStorage processou a remoção
    await new Promise(resolve => setTimeout(resolve, 150));
    
    // Verifica se realmente foi removido
    const verification = await AsyncStorage.getItem(STORAGE_KEY);
    if (verification) {
      console.warn('[resetAccountHard] ⚠️ Dados ainda existem após remoção, forçando remoção novamente...');
      await AsyncStorage.removeItem(STORAGE_KEY);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    // IMPORTANTE: NÃO salva o estado padrão aqui!
    // Deixa o storage vazio. O loadUserState() retornará DEFAULT_USER automaticamente
    // quando não encontrar dados. Isso evita problemas de cache.
    
    console.log('[resetAccountHard] ✅ Reset completo! Storage limpo.');
    console.log('[resetAccountHard] ℹ️ Próximo loadUserState() retornará estado padrão automaticamente.');
    
    // Retorna o estado padrão para uso imediato
    return { ...DEFAULT_USER };
    
  } catch (error) {
    console.error('[resetAccountHard] ❌ Erro ao resetar:', error);
    
    // Fallback: tenta limpar TUDO do AsyncStorage (cuidado: isso remove outras chaves também)
    try {
      console.warn('[resetAccountHard] Tentando fallback: AsyncStorage.clear()');
      await AsyncStorage.clear();
      console.log('[resetAccountHard] ✅ AsyncStorage.clear() executado com sucesso');
    } catch (clearError) {
      console.error('[resetAccountHard] ❌ Erro ao limpar tudo:', clearError);
    }
    
    // Retorna estado padrão mesmo em caso de erro
    return { ...DEFAULT_USER };
  }
}

export async function setThemes(topicIds: string[]) {
  const state = await loadUserState();
  state.temasSelecionados = topicIds;
  await saveUserState(state);
  return state;
}

function getTopicsFilter(temasSelecionados: string[]) {
  if (temasSelecionados.length === 0) {
    return TOPICS.map(topic => topic.id);
  }
  return temasSelecionados;
}

export async function getAvailableMissions(): Promise<Question[]> {
  const state = await loadUserState();
  const topicsFilter = getTopicsFilter(state.temasSelecionados);
  return QUESTIONS.filter(question => {
    const matchesTopic = topicsFilter.includes(question.topicId);
    const notCompleted = !state.missoesConcluidas.includes(question.id);
    return matchesTopic && notCompleted;
  });
}

export async function getCompletedMissions(): Promise<Question[]> {
  const state = await loadUserState();
  const seen = new Set(state.missoesConcluidas);
  if (!seen.size) return [];
  return state.missoesConcluidas
    .map(id => QUESTION_MAP[id])
    .filter((question): question is Question => Boolean(question));
}

export async function getQuestionById(questionId: string) {
  return QUESTION_MAP[questionId];
}

export function getTopicQuestions(topicId: string): Question[] {
  return QUESTIONS_BY_TOPIC[topicId]?.slice() ?? [];
}

export async function getTopicProgress(topicId: string): Promise<TopicProgress> {
  const state = await loadUserState();
  const allQuestions = getTopicQuestions(topicId);
  const total = allQuestions.length;
  const answered = state.missoesConcluidas.filter(id => QUESTION_MAP[id]?.topicId === topicId).length;
  const remaining = Math.max(total - answered, 0);
  return { topicId, answered, total, remaining };
}

export async function getAllTopicProgress(): Promise<TopicProgress[]> {
  const state = await loadUserState();
  const progress = TOPICS.map(topic => {
    const total = getTopicQuestions(topic.id).length;
    const answered = state.missoesConcluidas.filter(id => QUESTION_MAP[id]?.topicId === topic.id).length;
    const remaining = Math.max(total - answered, 0);
    return { topicId: topic.id, answered, total, remaining };
  });
  return progress;
}

export async function getNextQuestionsForTopic(topicId: string, limit = 10): Promise<Question[]> {
  const state = await loadUserState();
  const remaining = getTopicQuestions(topicId).filter(q => !state.missoesConcluidas.includes(q.id));
  return remaining.slice(0, limit);
}

// Funções legadas para compatibilidade ------------------------------
export async function carregarProgresso(): Promise<UserState> {
  return loadUserState();
}

export async function salvarProgresso(data: UserState) {
  await saveUserState(data);
}

export async function resetarProgresso(): Promise<UserState> {
  return resetAccountHard();
}
