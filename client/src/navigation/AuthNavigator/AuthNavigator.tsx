import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LOGIN } from './AuthNavigator.consts';
import { Text, View } from 'react-native';

const AuthStack = createNativeStackNavigator();

// todo remove
const LoginScreen = () => (
  <View>
    <Text>LOGIN</Text>
  </View>
);

export const AuthNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator initialRouteName={LOGIN}>
      <AuthStack.Screen name={LOGIN} component={LoginScreen} />
    </AuthStack.Navigator>
  );
};
