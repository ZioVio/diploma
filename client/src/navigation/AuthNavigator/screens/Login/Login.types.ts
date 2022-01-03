import { GoogleUser } from 'src/types/user';

export type GoogleAuthHook = () => {
  signIn: () => Promise<GoogleUser>;
  logout: () => Promise<void>;
};
