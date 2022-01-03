import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-paper';
import { Text, View } from 'react-native';
import { HOME } from './MainNavigator.consts';
import { useAuth } from 'src/hooks/useAuth/useAuth';

const MainStack = createNativeStackNavigator();

// todo remove
const HomeScreen = () => {
  const { user, logout } = useAuth();
  return (
    <View>
      {user && <Text>{JSON.stringify(user, null, 2)}</Text>}
      <Text>HOME</Text>
      <Button onPress={logout}>LOGOUT</Button>
    </View>
  );
};

export const MainNavigator: React.FC = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name={HOME} component={HomeScreen} />
    </MainStack.Navigator>
  );
};
