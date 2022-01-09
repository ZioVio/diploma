import { useEffect, useState } from 'react';
import { Storage } from '..';
import { APIResponse } from './../../types/apiResponse';
import { STORAGE_KEYS } from './storage.types';

export const useStorageItem = <T>(key: STORAGE_KEYS): APIResponse<T> => {
  const [data, setValue] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setErr] = useState<unknown>(undefined);

  useEffect(() => {
    setLoading(true);
    Storage.getFromStorage<T>(key)
      .then(setValue)
      .catch(setErr)
      .finally(() => setLoading(false));
  }, [key]);

  return {
    data,
    loading,
    error,
  };
};
