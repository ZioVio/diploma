import { useEffect, useState } from 'react';
import { useAuthContext } from 'src/contexts/AuthContext';
import { User } from 'src/types';
import { useStorageItem } from 'src/utils/storage';
import { STORAGE_KEYS } from 'src/utils/storage/storage.types';

export const useTryRecoverSession = (): { loading: boolean } => {
  const { data: cachedUser, loading } = useStorageItem<User>(STORAGE_KEYS.USER);
  const { setUser } = useAuthContext();
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    if (loading) {
      return;
    }
    if (cachedUser) {
      setUser(cachedUser);
    }
    setReady(true);
  }, [cachedUser, loading, setUser]);

  return {
    loading: loading || !ready,
  };
};
