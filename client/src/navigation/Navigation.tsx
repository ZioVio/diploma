import React from 'react';
import { useWatchApiUpdate } from 'src/api/setup.hooks';
import { useAuthContext } from 'src/contexts/AuthContext';
import { AuthNavigator } from './AuthNavigator/AuthNavigator';
import { MainNavigator } from './MainMavigator/MainNavigator';
import { useTryRecoverSession } from './Navigaton.hooks';

export const Navigation: React.FC = () => {
  useWatchApiUpdate();

  const { isLoggedIn } = useAuthContext();
  const { loading } = useTryRecoverSession();

  if (loading) {
    // todo maybe make some splash
    // I will never do this =)
    return null;
  }
  if (!isLoggedIn) {
    return <AuthNavigator />;
  }
  return <MainNavigator />;
};
