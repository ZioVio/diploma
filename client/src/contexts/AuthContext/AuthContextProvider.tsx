import React, { useCallback, useMemo, useState } from 'react';
import { AuthContext, defaultValue } from './AuthContext.consts';
import { AuthContextType, AuthState } from './AuthContext.types';

export const AuthContextProvider: React.FC = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(defaultValue);

  const setUser = useCallback<AuthContextType['setUser']>(user => {
    setAuthState({
      user,
      isLoggedIn: Boolean(user),
    });
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
