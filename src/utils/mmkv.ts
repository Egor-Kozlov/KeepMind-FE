import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

enum StorageKeys {
  onboardingCompleted = 'onboardingCompleted',
}

const setItem = (key: string, value: string): void => {
  storage.set(key, value);
};

const getItem = async (
  key: string,
): Promise<string | Record<string, unknown> | undefined> => {
  try {
    if (storage.contains(key)) {
      return await JSON.parse(storage.getString(key) as string);
    }
  } catch (error) {
    return undefined;
  }
};

const removeItem = (key: string): void => {
  storage.delete(key);
};

const clearAll = (): void => {
  storage.clearAll();
};

export {StorageKeys, clearAll, getItem, removeItem, setItem};
