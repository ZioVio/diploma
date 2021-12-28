import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { HOME } from './MainNavigator.consts';

const MainStack = createNativeStackNavigator();

// todo remove
const HomeScreen = () => (
  <View>
    <Text>HOME</Text>
  </View>
);

export const MainNavigator: React.FC = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name={HOME} component={HomeScreen} />
    </MainStack.Navigator>
  );
};
