import React, { useCallback } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenHeader } from 'src/components';
import { useNavigation } from '@react-navigation/native';

import {
  DOCUMENTS,
  PDF_ROUTE,
  SCAN_ROUTE,
  SIGN,
  VERIFY,
} from './MainNavigator.consts';
import { MyDocuments, Sign } from './screens';
import { PDF } from './screens/PDF';
import { Scan } from './screens/Scan';

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
        onViewDocument={document =>
          navigation.navigate(
            PDF_ROUTE as never,
            {
              document,
            } as never,
          )
        }
        onConnectToAnotherSign={() => {
          navigation.navigate(SCAN_ROUTE as never);
        }}
      />
    ),
    [navigation],
  );

  const ScanScreen = useCallback(() => {
    return (
      <Scan
        onScanned={text => {
          console.log('onScanned CB', text);
        }}
      />
    );
  }, []);

  return (
    <MainStack.Navigator>
      <MainStack.Group
        screenOptions={{
          header: ScreenHeader,
        }}>
        <MainStack.Screen
          name={DOCUMENTS}
          component={MyDocumentsScreen}
          options={{
            title: 'My documents',
          }}
        />
        <MainStack.Screen
          name={SIGN}
          component={SignScreen}
          options={{
            title: 'Sign',
          }}
        />
        <MainStack.Screen
          name={PDF_ROUTE}
          component={PDF}
          options={{
            title: 'Document to sign',
          }}
        />
        <MainStack.Screen
          name={SCAN_ROUTE}
          component={ScanScreen}
          options={{
            title: 'Scan to connect',
          }}
        />
      </MainStack.Group>
    </MainStack.Navigator>
  );
};
