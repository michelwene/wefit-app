import AsyncStorage, {
  useAsyncStorage,
} from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { UserProps } from "../types/User";

export const useStorageMethods = (key: string) => {
  const { getItem, removeItem, setItem } = useAsyncStorage(key);

  const setForStorage = async (value: string) => {
    try {
      await setItem(value);
    } catch (e) {
      Alert.alert("Ocorreu um erro ao salvar os dados.");
    }
  };

  const removeFromStorage = async () => {
    try {
      await removeItem();
    } catch (e) {
      Alert.alert("Ocorreu um erro ao remover o item");
    }
  };

  const getFromStorage = async () => {
    try {
      const data = await getItem();
      return data;
    } catch (e) {
      Alert.alert("Ocorreu um erro ao buscar os dados.");
    }
  };
  return {
    getFromStorage,
    setForStorage,
    removeFromStorage,
  };
};

export const useGetAllKeys = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (e) {
    Alert.alert("Ocorreu um erro ao buscar as chaves");
  }
};

export const useGetAllRepositories = async (keys: string[]) => {
  try {
    const jsonValue = keys.map((key) => {
      return AsyncStorage.getItem(key);
    });
    const values = await Promise.all(jsonValue);
    const repositoriesFromStorage: UserProps[] = values.map((value) => {
      return JSON.parse(value!);
    });
    return repositoriesFromStorage;
  } catch (e) {
    Alert.alert("Ocorreu um erro ao buscar os dados");
  }
};
