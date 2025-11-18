import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type HeaderProps = {
  title: string;
  onPressProfile: () => void;
  onPressBack?: () => void;
  showBackButton?: boolean;
};

export default function Header({ title, onPressProfile, onPressBack, showBackButton = false }: HeaderProps) {
  return (
    <View style={styles.container}>
      {showBackButton && onPressBack ? (
        <TouchableOpacity onPress={onPressBack} style={styles.backButton} accessibilityRole="button">
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.spacer} />
      )}
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onPressProfile} accessibilityRole="button" style={styles.avatarButton}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarIcon}>👤</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: '#f9f9f9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  spacer: {
    width: 0,
    height: 32,
  },
  backButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 24,
    color: '#1c1c1e',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1c1c1e',
    flex: 1,
    marginLeft: 12,
  },
  avatarButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#d0d0d5',
  },
  avatarPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e0e0e5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarIcon: {
    fontSize: 24,
    color: '#8a8a95',
  },
});
