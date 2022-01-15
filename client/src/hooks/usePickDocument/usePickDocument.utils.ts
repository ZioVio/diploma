import { PermissionsAndroid } from 'react-native';

export const requestPermissions = async (): Promise<boolean> => {
  try {
    const result = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
    console.log('result:', result);
    return result === PermissionsAndroid.RESULTS.GRANTED;
  } catch (error) {
    console.log(error);
    return false;
  }
};
