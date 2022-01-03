import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import {
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import { useAuth } from 'src/hooks/useAuth/useAuth';

export const Login: React.FC = () => {
  const onError = useCallback((code: unknown) => {
    if (code === statusCodes.IN_PROGRESS) {
      console.log('statusCodes.IN_PROGRESS');
    } else if (code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log(
        'statusCodes.PLAY_SERVICES_NOT_AVAILABLE:',
        statusCodes.PLAY_SERVICES_NOT_AVAILABLE,
      );
    } else if (code === statusCodes.SIGN_IN_CANCELLED) {
      console.log(
        'statusCodes.SIGN_IN_CANCELLED:',
        statusCodes.SIGN_IN_CANCELLED,
      );
    } else if (code === statusCodes.SIGN_IN_REQUIRED) {
      console.log(
        'statusCodes.SIGN_IN_REQUIRED:',
        statusCodes.SIGN_IN_REQUIRED,
      );
    } else {
      console.log('code:', code);
    }
  }, []);

  const { signIn } = useAuth();

  const onSignPress = useCallback(() => {
    signIn().catch(onError);
  }, [onError, signIn]);

  return (
    <View>
      <GoogleSigninButton onPress={onSignPress} />
      <Text>LOGIN</Text>
    </View>
  );
};
