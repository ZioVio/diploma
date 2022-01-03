import { User } from 'src/types';

export type UseAuthHook = () => {
  signIn: () => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  user: User | null | undefined;
};
