export type { User as GoogleUser } from '@react-native-google-signin/google-signin';

export type User = {
  id: string;
  name: string | null;
  photoUrl: string | null;
  // todo add anything else
};
