import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Question } from '../data/questions';
import { TOPIC_TITLES } from '../data/topics';
import {
  XP_REWARD,
  completeMission,
  getAvailableMissions,
  getNextQuestionsForTopic,
  getQuestionById,
  getTopicQuestions,
} from '../storage/userStorage';

type Mode = 'topic' | 'single';

export default function MissionScreen({ navigation, route }: any) {
  const topicId: string | undefined = route?.params?.topicId;
  const questionId: string | undefined = route?.params?.questionId;
  const isRedoParam: boolean = Boolean(route?.params?.isRedo);

  const [mode, setMode] = useState<Mode>(topicId ? 'topic' : 'single');
  const [queue, setQueue] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [question, setQuestion] = useState<Question | null>(null);
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isRedo, setIsRedo] = useState(isRedoParam);

  const carregarSessao = useCallback(async () => {
    setMode(topicId ? 'topic' : 'single');
    setAnswered(false);
    setSelectedOption(null);
    setIsRedo(isRedoParam);

    try {
      if (topicId) {
        // Modo tópico: carrega até 10 perguntas do tópico
        const questions = await getNextQuestionsForTopic(topicId, 10);
        if (questions.length > 0) {
          setQueue(questions);
          setCurrentIndex(0);
          setQuestion(questions[0]);
        } else {
          // Se não há perguntas disponíveis
          const totalQuestions = getTopicQuestions(topicId).length;
          if (totalQuestions === 0) {
            // Não há perguntas cadastradas para este tópico
            Alert.alert(
              'Perguntas não disponíveis', 
              'Este tema ainda não possui perguntas cadastradas. Elas serão adicionadas em breve!',
              [{ text: 'OK', onPress: () => navigation.navigate('Home') }]
            );
          } else {
            // Todas as perguntas foram respondidas
            Alert.alert('Tema concluído!', 'Você já respondeu todas as perguntas deste tema.', [
              { text: 'OK', onPress: () => navigation.navigate('Home') },
            ]);
          }
        }
        return;
      }

      if (questionId) {
        // Modo pergunta única
        const target = await getQuestionById(questionId);
        if (target) {
          setQueue([target]);
          setCurrentIndex(0);
          setQuestion(target);
          return;
        }
      }

      // Fallback: pega primeira missão disponível
      const fallback = await getAvailableMissions();
      if (fallback.length > 0) {
        setQueue([fallback[0]]);
        setCurrentIndex(0);
        setQuestion(fallback[0]);
      } else {
        setQueue([]);
        setQuestion(null);
      }
    } catch (error) {
      console.error('Erro ao carregar sessão:', error);
      Alert.alert('Erro', 'Não foi possível carregar as perguntas. Tente novamente.');
      navigation.navigate('Home');
    }
  }, [topicId, questionId, isRedoParam, navigation]);

  useFocusEffect(
    useCallback(() => {
      carregarSessao();
    }, [carregarSessao])
  );

  useEffect(() => {
    if (queue.length > 0 && currentIndex < queue.length) {
      setQuestion(queue[currentIndex]);
      // Reseta o estado quando muda de pergunta
      setAnswered(false);
      setSelectedOption(null);
    } else {
      setQuestion(null);
    }
  }, [queue, currentIndex]);

  const handleAnswer = async (index: number) => {
    if (!question || answered) return;

    setSelectedOption(index);
    const alternativa = question.alternativas[index];
    const acertou = alternativa?.correta;

    if (acertou) {
      // Marca como respondida imediatamente para mostrar explicação
      setAnswered(true);
      
      // Salva o progresso apenas se não for redo
      if (!isRedo) {
        try {
          await completeMission(question.id);
        } catch (error) {
          console.error('Erro ao completar missão:', error);
        }
      }
    } else {
      // Se errou, mostra alerta mas permite tentar novamente
      Alert.alert('Ops!', 'Essa alternativa não está correta. Tente novamente.', [
        { text: 'OK', onPress: () => setSelectedOption(null) }
      ]);
    }
  };

  const goToNext = () => {
    if (currentIndex < queue.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setAnswered(false);
      setSelectedOption(null);
    } else {
      if (mode === 'topic') {
        Alert.alert('Tema concluído!', 'Você finalizou todas as perguntas deste tema.', [
          { text: 'OK', onPress: () => navigation.navigate('Home') },
        ]);
      } else {
        navigation.navigate('Home');
      }
    }
  };

  if (!question) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>Nenhuma pergunta disponível.</Text>
      </View>
    );
  }

  const totalQuestions = queue.length;
  const currentQuestionNumber = currentIndex + 1;
  const remainingInTopic = mode === 'topic' ? queue.length - currentIndex - 1 : 0;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {mode === 'topic' && (
        <View style={styles.progressBar}>
          <Text style={styles.progressText}>
            Pergunta {currentQuestionNumber} de {totalQuestions}
          </Text>
          {remainingInTopic > 0 && (
            <Text style={styles.remainingText}>Restam {remainingInTopic} perguntas neste tema.</Text>
          )}
        </View>
      )}

      <View style={styles.questionCard}>
        <Text style={styles.category}>{TOPIC_TITLES[question.topicId]}</Text>
        <Text style={styles.questionText}>{question.enunciado}</Text>
      </View>

      <View style={styles.optionsContainer}>
        {question.alternativas.map((alt, index) => {
          const isSelected = selectedOption === index;
          const isCorrect = alt.correta;
          const showResult = answered && isCorrect; // Mostra resultado para todas as corretas quando respondido
          const showWrong = answered && isSelected && !isCorrect; // Mostra erro apenas na selecionada errada

          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.option,
                isSelected && !answered && styles.optionSelected,
                showResult && styles.optionCorrect,
                showWrong && styles.optionWrong,
              ]}
              onPress={() => handleAnswer(index)}
              disabled={answered}
            >
              <Text
                style={[
                  styles.optionText,
                  isSelected && !answered && styles.optionTextSelected,
                  showResult && styles.optionTextCorrect,
                  showWrong && styles.optionTextWrong,
                ]}
              >
                {alt.texto}
              </Text>
              {showResult && <Text style={styles.checkmark}>✓</Text>}
            </TouchableOpacity>
          );
        })}
      </View>

      {answered && question.explanation && (
        <View style={styles.explanationContainer}>
          <View style={styles.explanationHeader}>
            <Text style={styles.explanationTitle}>💡 Entenda melhor</Text>
          </View>

          <View style={styles.correctAnswerBox}>
            <Text style={styles.correctAnswerLabel}>✅ Resposta Correta:</Text>
            <Text style={styles.correctAnswerText}>{question.explanation.correctAnswer}</Text>
            <Text style={styles.whyCorrectText}>{question.explanation.whyCorrect}</Text>
          </View>

          {question.explanation.wrongAnswers.length > 0 && (
            <View style={styles.wrongAnswersBox}>
              <Text style={styles.wrongAnswersLabel}>❌ Por que as outras estão erradas:</Text>
              {question.explanation.wrongAnswers.map((wrong, idx) => (
                <View key={idx} style={styles.wrongAnswerItem}>
                  <Text style={styles.wrongAnswerText}>{wrong.texto}</Text>
                  <Text style={styles.whyWrongText}>{wrong.whyWrong}</Text>
                </View>
              ))}
            </View>
          )}

          <View style={styles.realWorldBox}>
            <Text style={styles.realWorldLabel}>🌍 No mundo real:</Text>
            <Text style={styles.realWorldText}>{question.explanation.realWorldExample}</Text>
          </View>

          {question.explanation.companiesUsing.length > 0 && (
            <View style={styles.companiesBox}>
              <Text style={styles.companiesLabel}>🏢 Empresas que usam isso:</Text>
              <View style={styles.companiesList}>
                {question.explanation.companiesUsing.map((company, idx) => (
                  <View key={idx} style={styles.companyTag}>
                    <Text style={styles.companyText}>{company}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      )}

      {answered && (
        <TouchableOpacity style={styles.nextButton} onPress={goToNext}>
          <Text style={styles.nextButtonText}>
            {currentIndex >= queue.length - 1 ? 'Concluir tema' : 'Próxima pergunta'}
          </Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6fa',
  },
  progressBar: {
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 20,
    marginTop: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  progressText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4e7cff',
    textAlign: 'center',
  },
  remainingText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 4,
  },
  questionCard: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  category: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4e7cff',
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  questionText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1f1f24',
    lineHeight: 26,
  },
  optionsContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#e0e0e5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionSelected: {
    borderColor: '#4e7cff',
    backgroundColor: '#f0f4ff',
  },
  optionCorrect: {
    borderColor: '#28a745',
    backgroundColor: '#d4edda',
  },
  optionWrong: {
    borderColor: '#dc3545',
    backgroundColor: '#f8d7da',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  optionTextSelected: {
    color: '#4e7cff',
    fontWeight: '600',
  },
  optionTextCorrect: {
    color: '#28a745',
    fontWeight: '600',
  },
  optionTextWrong: {
    color: '#dc3545',
    fontWeight: '600',
  },
  checkmark: {
    fontSize: 20,
    color: '#28a745',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  explanationContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  explanationHeader: {
    marginBottom: 16,
  },
  explanationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f1f24',
  },
  correctAnswerBox: {
    backgroundColor: '#d4edda',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#28a745',
  },
  correctAnswerLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#28a745',
    marginBottom: 8,
  },
  correctAnswerText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#155724',
    marginBottom: 8,
  },
  whyCorrectText: {
    fontSize: 14,
    color: '#155724',
    lineHeight: 20,
  },
  wrongAnswersBox: {
    marginBottom: 16,
  },
  wrongAnswersLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#dc3545',
    marginBottom: 12,
  },
  wrongAnswerItem: {
    backgroundColor: '#f8d7da',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#dc3545',
  },
  wrongAnswerText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#721c24',
    marginBottom: 4,
  },
  whyWrongText: {
    fontSize: 13,
    color: '#721c24',
    lineHeight: 18,
  },
  realWorldBox: {
    backgroundColor: '#e7f3ff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#4e7cff',
  },
  realWorldLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4e7cff',
    marginBottom: 8,
  },
  realWorldText: {
    fontSize: 14,
    color: '#1f1f24',
    lineHeight: 20,
  },
  companiesBox: {
    marginTop: 8,
  },
  companiesLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f1f24',
    marginBottom: 12,
  },
  companiesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  companyTag: {
    backgroundColor: '#4e7cff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  companyText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
  nextButton: {
    backgroundColor: '#4e7cff',
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
    marginTop: 40,
  },
});
