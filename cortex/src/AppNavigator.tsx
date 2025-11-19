import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MissionScreen from './screens/MissionScreen';
import ProfileScreen from './screens/ProfileScreen';
import Header from './components/Header';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          header: () => <Header title="Cortex Pocket" onPressProfile={() => navigation.navigate('Profile')} />,
        })}
      />
      <Stack.Screen
        name="Mission"
        component={MissionScreen}
        options={({ navigation }) => ({
          header: () => (
            <Header
              title="Missão"
              onPressProfile={() => navigation.navigate('Profile')}
              onPressBack={() => navigation.navigate('Home')}
              showBackButton={true}
            />
          ),
        })}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Seu Progresso' }} />
    </Stack.Navigator>
  );
}



