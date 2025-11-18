import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { TOPIC_GROUPS, TOPIC_MAP } from '../data/topics';
import { loadUserState, getAllTopicProgress, TopicProgress, UserState } from '../storage/userStorage';

type TopicProgressMap = Record<string, TopicProgress>;

export default function HomeScreen({ navigation }: any) {
  const [user, setUser] = useState<UserState | null>(null);
  const [topicProgress, setTopicProgress] = useState<TopicProgressMap>({});
  const [loading, setLoading] = useState(true);

  const loadDashboard = useCallback(async () => {
    setLoading(true);
    const state = await loadUserState();
    setUser(state);
    const progress = await getAllTopicProgress();
    const map = progress.reduce<TopicProgressMap>((acc, item) => {
      acc[item.topicId] = item;
      return acc;
    }, {});
    setTopicProgress(map);
    setLoading(false);
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadDashboard();
    }, [loadDashboard])
  );

  const handleStartTopic = (topicId: string) => {
    navigation.navigate('Mission', { topicId });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Cortex Pocket 🧠</Text>
        <Text style={styles.subtitle}>Escolha um tema e encare as 10 perguntas daquele assunto.</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#4e7cff" style={{ marginTop: 40 }} />
      ) : (
        <>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>
              Nível: <Text style={styles.infoValue}>{user?.nivel}</Text>
            </Text>
            <Text style={styles.infoLabel}>
              XP: <Text style={styles.infoValue}>{user?.xp}</Text>
            </Text>
            <Text style={styles.infoLabel}>
              Perguntas respondidas: <Text style={styles.infoValue}>{user?.missoesConcluidas.length}</Text>
            </Text>
          </View>

          {TOPIC_GROUPS.map(group => (
            <View key={group.id} style={styles.group}>
              <Text style={styles.groupTitle}>{group.title}</Text>
              {group.topicIds.map(topicId => {
                const topic = TOPIC_MAP[topicId];
                const progress = topicProgress[topicId] ?? {
                  topicId,
                  answered: 0,
                  total: 10,
                  remaining: 10,
                };
                
                // Só desabilita se houver perguntas E todas foram respondidas
                // Se total === 0, significa que não há perguntas ainda, então permite abrir
                const hasQuestions = progress.total > 0;
                const allAnswered = hasQuestions && progress.remaining === 0;

                return (
                  <View key={topicId} style={styles.topicCard}>
                    <View style={styles.topicHeader}>
                      <Text style={styles.topicTitle}>{topic.title}</Text>
                      <Text style={styles.topicProgress}>
                        {progress.answered}/{progress.total}
                      </Text>
                    </View>
                    <Text style={styles.topicSummary}>{topic.summary}</Text>
                    <Text style={styles.topicRemaining}>
                      {hasQuestions 
                        ? `Restam ${progress.remaining} perguntas para fechar este tema.`
                        : 'Perguntas serão adicionadas em breve.'}
                    </Text>
                    <View style={styles.topicActions}>
                      <TouchableOpacity
                        style={[styles.topicButton, allAnswered && styles.topicButtonDisabled]}
                        onPress={() => handleStartTopic(topicId)}
                        disabled={allAnswered}
                      >
                        <Text style={styles.topicButtonText}>
                          {allAnswered ? 'Tema concluído' : 'Responder agora'}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </View>
          ))}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f6fa' },
  header: { paddingHorizontal: 20, paddingTop: 32, paddingBottom: 16 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#333', marginBottom: 6, textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#555', textAlign: 'center' },
  infoBox: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoLabel: { fontSize: 16, color: '#666', marginBottom: 8 },
  infoValue: { fontSize: 18, fontWeight: 'bold', color: '#4e7cff' },
  group: { marginHorizontal: 20, marginBottom: 24 },
  groupTitle: { fontSize: 18, fontWeight: '700', color: '#2f2f35', marginBottom: 12 },
  topicCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  topicHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  topicTitle: { fontSize: 16, fontWeight: '700', color: '#1f1f24', flex: 1, marginRight: 12 },
  topicProgress: { fontSize: 14, fontWeight: '600', color: '#4e7cff' },
  topicSummary: { fontSize: 14, color: '#5c5c63', marginTop: 8 },
  topicRemaining: { fontSize: 13, color: '#8a8a95', marginTop: 6 },
  topicActions: { marginTop: 12 },
  topicButton: {
    backgroundColor: '#4e7cff',
    paddingVertical: 12,
    borderRadius: 10,
  },
  topicButtonDisabled: {
    backgroundColor: '#c5c9e4',
  },
  topicButtonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 15 },
});
