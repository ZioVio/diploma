import axios from 'axios';
import useAxios from 'axios-hooks';

import { SERVER_URL } from 'src/config';
import { useAuthContext } from 'src/contexts/AuthContext';
import { useEffect } from 'react';

export const useWatchApiUpdate = () => {
  const { user } = useAuthContext();
  useEffect(() => {
    const api = axios.create({
      baseURL: SERVER_URL,
      headers: {
        ...(user?.id && { Authorization: user?.id }),
      },
    });

    useAxios.configure({
      axios: api,
    });
  }, [user?.id]);
};
