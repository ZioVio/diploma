import { useState, useCallback } from 'react';
import { useAuthContext } from 'src/contexts/AuthContext';
import { mapGoogleUser } from 'src/utils/mapGoogleUser';
import { UseAuthHook } from './useAuth.types';
import { googleSignIn, googleLogout } from './useAuth.utils';

export const useAuth: UseAuthHook = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setUser, user } = useAuthContext();
  const signIn = useCallback(async () => {
    try {
      setLoading(true);
      const googleUser = await googleSignIn();
      setUser(mapGoogleUser(googleUser));
    } finally {
      setLoading(false);
    }
  }, [setUser]);

  const logout = useCallback(async () => {
    try {
      setLoading(true);
      await googleLogout();
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, [setUser]);

  return {
    loading,
    logout,
    signIn,
    user,
  };
};
