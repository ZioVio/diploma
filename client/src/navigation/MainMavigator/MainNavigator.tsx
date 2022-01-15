import React, { useCallback } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenHeader } from 'src/components';
import { useNavigation } from '@react-navigation/native';

import { DOCUMENTS, SIGN, VERIFY } from './MainNavigator.consts';
import { MyDocuments, Sign } from './screens';

const MainStack = createNativeStackNavigator();

export const MainNavigator: React.FC = () => {
  const navigation = useNavigation();
  const MyDocumentsScreen = useCallback(
    () => (
      <MyDocuments
        // a stupid fix to a stupid typing problem
        onSign={() => navigation.navigate(SIGN as never)}
        onVerify={() => navigation.navigate(VERIFY as never)}
      />
    ),
    [navigation],
  );

  const SignScreen = useCallback(
    () => (
      <Sign
        onSigned={() => navigation.navigate(DOCUMENTS as never)}
        // todo add error toast
        onError={console.error}
      />
    ),
    [navigation],
  );
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={DOCUMENTS}
        component={MyDocumentsScreen}
        options={{
          header: ScreenHeader,
          title: 'My documents',
        }}
      />
      <MainStack.Screen
        name={SIGN}
        component={SignScreen}
        options={{
          header: ScreenHeader,
          title: 'Sign',
        }}
      />
    </MainStack.Navigator>
  );
};
