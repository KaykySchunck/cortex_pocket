import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Question } from '../data/questions';
import { TOPIC_TITLES } from '../data/topics';

type MissionListProps = {
  title: string;
  missions: Question[];
  emptyMessage: string;
  onPressMission?: (mission: Question) => void;
  highlightCompleted?: boolean;
};

export function MissionList({
  title,
  missions,
  emptyMessage,
  onPressMission,
  highlightCompleted,
}: MissionListProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {missions.length === 0 ? (
        <Text style={styles.emptyText}>{emptyMessage}</Text>
      ) : (
        missions.map(mission => (
          <TouchableOpacity
            key={mission.id}
            style={[styles.card, highlightCompleted ? styles.completedCard : styles.availableCard]}
            onPress={() => onPressMission?.(mission)}
            activeOpacity={0.85}
          >
            <Text style={styles.missionTitle}>{mission.enunciado}</Text>
            <Text style={styles.topicLabel}>{TOPIC_TITLES[mission.topicId]}</Text>
          </TouchableOpacity>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  emptyText: {
    color: '#999',
    fontStyle: 'italic',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  availableCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#4e7cff',
  },
  completedCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#28a745',
  },
  missionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f1f24',
    marginBottom: 6,
  },
  topicLabel: {
    fontSize: 14,
    color: '#6a6a6f',
  },
});
