import { User } from 'src/types/user';

export type AuthMethods = {
  setUser: (user: User | null | undefined) => void;
};

export type AuthState = {
  isLoggedIn: boolean;
  user: User | null | undefined;
};

export type AuthContextType = AuthMethods & AuthState;
