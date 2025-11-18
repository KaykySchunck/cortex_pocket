import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { MissionList } from '../components/MissionList';
import { ConfirmModal } from '../components/ConfirmModal';
import { Question } from '../data/questions';
import {
  loadUserState,
  getCompletedMissions,
  resetAccountHard,
  UserState,
} from '../storage/userStorage';
import { TOPIC_TITLES } from '../data/topics';

const EMPTY_USER: UserState = {
  xp: 0,
  nivel: 'Iniciante',
  missoesConcluidas: [],
  temasSelecionados: [],
};

export default function ProfileScreen({ navigation }: any) {
  const [user, setUser] = useState<UserState>(EMPTY_USER);
  const [completedMissions, setCompletedMissions] = useState<Question[]>([]);
  const [showResetModal, setShowResetModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const loadProfile = useCallback(async () => {
    const state = await loadUserState();
    setUser(state);
    const completed = await getCompletedMissions();
    setCompletedMissions(completed);
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadProfile();
    }, [loadProfile])
  );

  const handleReset = () => {
    console.log('[ProfileScreen] Botão reset pressionado');
    setShowResetModal(true);
  };

  const confirmReset = async () => {
    setShowResetModal(false);
    console.log('[ProfileScreen] 🔴 Usuário confirmou reset - iniciando processo...');
    
    try {
      const resetState = await resetAccountHard();
      console.log('[ProfileScreen] ✅ AsyncStorage limpo. Estado resetado:', resetState);
      
      setUser(EMPTY_USER);
      setCompletedMissions([]);
      console.log('[ProfileScreen] ✅ Estado local atualizado para valores zerados');
      
      await new Promise(resolve => setTimeout(resolve, 400));
      
      const reloadedState = await loadUserState();
      const reloadedMissions = await getCompletedMissions();
      
      console.log('[ProfileScreen] 📊 Estado recarregado após reset:', {
        xp: reloadedState.xp,
        nivel: reloadedState.nivel,
        missoes: reloadedMissions.length,
        temas: reloadedState.temasSelecionados.length,
        missoesConcluidas: reloadedState.missoesConcluidas.length,
      });
      
      const resetSuccessful = 
        reloadedState.xp === 0 &&
        reloadedState.nivel === 'Iniciante' &&
        reloadedMissions.length === 0 &&
        reloadedState.temasSelecionados.length === 0;
      
      if (!resetSuccessful) {
        console.error('[ProfileScreen] ⚠️ Reset pode não ter funcionado completamente!');
      }
      
      setUser(reloadedState);
      setCompletedMissions(reloadedMissions);
      
      setTimeout(() => {
        loadProfile();
      }, 200);
      
      setSuccessMessage(
        `Todos os seus dados foram zerados:\n\n• XP: ${reloadedState.xp}\n• Nível: ${reloadedState.nivel}\n• Missões concluídas: ${reloadedMissions.length}\n• Temas selecionados: ${reloadedState.temasSelecionados.length}\n\nVocê pode começar do zero!`
      );
      setShowSuccessModal(true);
    } catch (error) {
      console.error('[ProfileScreen] ❌ Erro ao resetar:', error);
      setErrorMessage(
        `Não foi possível resetar completamente o progresso.\n\nErro: ${error instanceof Error ? error.message : 'Desconhecido'}\n\nSoluções:\n1. Feche e reabra o app\n2. Limpe o cache do app\n3. Reinstale o app\n\nSe o problema persistir, os dados podem estar corrompidos.`
      );
      setShowErrorModal(true);
    }
  };

  const cancelReset = () => {
    console.log('[ProfileScreen] Reset cancelado pelo usuário');
    setShowResetModal(false);
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    console.log('[ProfileScreen] Navegando para Home...');
    navigation.replace('Home');
  };

  const handleErrorClose = () => {
    setShowErrorModal(false);
  };

  const handlePressMission = (mission: Question) => {
    navigation.navigate('Mission', { questionId: mission.id, isRedo: true });
  };

  const totalMissoes = completedMissions.length;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Seu Progresso</Text>
        <Text style={styles.subtitle}>Tudo sobre sua jornada de aprendizado.</Text>
      </View>

      <View style={styles.statsBox}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{user.nivel}</Text>
          <Text style={styles.statLabel}>Nível</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{user.xp}</Text>
          <Text style={styles.statLabel}>XP</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{totalMissoes}</Text>
          <Text style={styles.statLabel}>Missões concluídas</Text>
        </View>
      </View>

      <View style={styles.themeBox}>
        <Text style={styles.sectionTitle}>Temas selecionados</Text>
        <View style={styles.themeTags}>
          {user.temasSelecionados.length === 0 ? (
            <Text style={styles.emptyText}>Nenhum tema selecionado ainda.</Text>
          ) : (
            user.temasSelecionados.map(themeId => (
              <View key={themeId} style={styles.themeTag}>
                <Text style={styles.themeTagText}>{TOPIC_TITLES[themeId]}</Text>
              </View>
            ))
          )}
        </View>
      </View>

      <MissionList
        title="Missões concluídas"
        missions={completedMissions}
        emptyMessage="Você ainda não concluiu missões. Bora começar?"
        onPressMission={handlePressMission}
        highlightCompleted
      />

      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.resetText}>Resetar Progresso</Text>
      </TouchableOpacity>

      <ConfirmModal
        visible={showResetModal}
        title="⚠️ Resetar Progresso"
        message={'Tem certeza que deseja apagar TODO o seu progresso?\n\nIsso irá:\n• Zerar seu XP\n• Resetar seu nível para "Iniciante"\n• Limpar todas as missões concluídas\n• Remover temas selecionados\n\nEsta ação NÃO pode ser desfeita!'}
        confirmText="Sim, resetar tudo"
        cancelText="Cancelar"
        onConfirm={confirmReset}
        onCancel={cancelReset}
        confirmButtonStyle="destructive"
      />

      <ConfirmModal
        visible={showSuccessModal}
        title="✅ Progresso resetado com sucesso!"
        message={successMessage}
        confirmText="OK"
        onConfirm={handleSuccessClose}
        onCancel={handleSuccessClose}
        confirmButtonStyle="default"
        showCancelButton={false}
      />

      <ConfirmModal
        visible={showErrorModal}
        title="❌ Erro ao resetar"
        message={errorMessage}
        confirmText="OK"
        onConfirm={handleErrorClose}
        onCancel={handleErrorClose}
        confirmButtonStyle="default"
        showCancelButton={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  header: {
    backgroundColor: '#4e7cff',
    padding: 32,
    paddingTop: 48,
  },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 6 },
  subtitle: { color: '#eef2ff', fontSize: 16 },
  statsBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    margin: 20,
    marginTop: -30,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statItem: { alignItems: 'center' },
  statValue: { fontSize: 24, fontWeight: 'bold', color: '#4e7cff', marginBottom: 4 },
  statLabel: { fontSize: 14, color: '#666', textAlign: 'center' },
  themeBox: { marginHorizontal: 20, marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  themeTags: { flexDirection: 'row', flexWrap: 'wrap' },
  themeTag: {
    backgroundColor: 'rgba(78, 124, 255, 0.1)',
    borderColor: '#4e7cff',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  themeTagText: { color: '#4e7cff', fontWeight: '600' },
  emptyText: { color: '#999', fontStyle: 'italic' },
  resetButton: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 10,
  },
  resetText: { color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 16 },
});
