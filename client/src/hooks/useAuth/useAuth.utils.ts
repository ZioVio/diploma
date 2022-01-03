import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { FIREBASE_WEB_CLIENT_ID } from 'src/config';

GoogleSignin.configure({
  webClientId: FIREBASE_WEB_CLIENT_ID,
  offlineAccess: true,
});

export const googleSignIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const user = await GoogleSignin.signIn();
    const creds = auth.GoogleAuthProvider.credential(
      user.idToken,
      user.serverAuthCode || undefined,
    );
    await auth().signInWithCredential(creds);
    return user;
  } catch (error) {
    throw (error as { code: unknown })?.code;
  }
};

export const googleLogout = async () => {
  auth().signOut();
  await GoogleSignin.revokeAccess();
  await GoogleSignin.signOut();
};
