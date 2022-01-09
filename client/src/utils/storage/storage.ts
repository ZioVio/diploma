import AsyncStorage from '@react-native-community/async-storage';

export const setToStorage = async (
  key: string,
  value: unknown,
): Promise<void> => {
  return AsyncStorage.setItem(key, JSON.stringify(value));
};

export const removeFromStorage = async (key: string): Promise<void> => {
  return AsyncStorage.removeItem(key);
};

export async function getFromStorage<T = object>(
  key: string,
  defaultValue?: T,
): Promise<T | undefined> {
  const value = await AsyncStorage.getItem(key);
  return value ? (JSON.parse(value) as T) : defaultValue;
}
