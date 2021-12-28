import { useContext } from 'react';

import { AuthContext } from './AuthContext.consts';

export const useAuthContext = () => useContext(AuthContext);
