import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LOGIN } from './AuthNavigator.consts';
import { Login } from './screens/Login';

const AuthStack = createNativeStackNavigator();

export const AuthNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator initialRouteName={LOGIN}>
      <AuthStack.Screen name={LOGIN} component={Login} />
    </AuthStack.Navigator>
  );
};
