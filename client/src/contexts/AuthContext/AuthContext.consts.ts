import React from 'react';
import { noop } from 'src/utils/noop';
import { AuthContextType } from './AuthContext.types';

export const defaultValue: AuthContextType = {
  isLoggedIn: false,
  user: null,
  setUser: noop,
};

export const AuthContext = React.createContext<AuthContextType>(defaultValue);
