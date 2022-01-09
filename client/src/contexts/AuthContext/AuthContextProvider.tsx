import React, { useCallback, useMemo, useState } from 'react';
import { Storage } from 'src/utils';
import { STORAGE_KEYS } from 'src/utils/storage/storage.types';
import { AuthContext, defaultValue } from './AuthContext.consts';
import { AuthContextType, AuthState } from './AuthContext.types';

export const AuthContextProvider: React.FC = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(defaultValue);

  const setUser = useCallback<AuthContextType['setUser']>(user => {
    const isLoggedIn = Boolean(user);
    setAuthState({
      user,
      isLoggedIn,
    });
    return Storage.setToStorage(STORAGE_KEYS.USER, isLoggedIn ? user : null);
  }, []);

  const authContextValue = useMemo<AuthContextType>(
    () => ({
      ...authState,
      setUser,
    }),
    [authState, setUser],
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
