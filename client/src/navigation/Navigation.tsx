import React from 'react';
import { useAuthContext } from 'src/contexts/AuthContext';
import { AuthNavigator } from './AuthNavigator/AuthNavigator';
import { MainNavigator } from './MainMavigator/MainNavigator';

export const Navigation: React.FC = () => {
  const { isLoggedIn } = useAuthContext();
  if (!isLoggedIn) {
    return <AuthNavigator />;
  }
  return <MainNavigator />;
};
