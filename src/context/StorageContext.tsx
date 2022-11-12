import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState, useMemo, useContext, useEffect } from "react";
import { Alert } from "react-native";
import { StorageContextData } from "../types/StorageContext";
import { UserProps } from "../types/User";

interface StorageContextProps {
  children: React.ReactNode;
}

export const StorageContext = createContext({} as StorageContextData);

export function StorageProvider({ children }: StorageContextProps) {
  const [repositories, setRepositories] = useState<UserProps[]>([]);
  const [repositoriesFromStorage, setRepositoriesFromStorage] = useState<
    Array<UserProps>
  >([]);

  const storeRepository = async (value: Partial<UserProps>) => {
    try {
      if (value.isFavorited) {
        await AsyncStorage.removeItem(`@repository_Key${value.id}`);
        await getMultiple();
        return;
      }
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@repository_Key${value.id}`, jsonValue);
      await getMultiple();
    } catch (e) {
      Alert.alert("Erro ao salvar o repositório");
    }
  };

  const getMultiple = async () => {
    try {
      let keys = [] as any;
      keys = await AsyncStorage.getAllKeys();
      const repositoryKeys: Array<string> = keys;
      const jsonValue = repositoryKeys.map((key) => {
        return AsyncStorage.getItem(key);
      });
      const values = await Promise.all(jsonValue);
      const repositoriesFromStorage = values.map((value) => {
        return JSON.parse(value!);
      });
      setRepositoriesFromStorage(repositoriesFromStorage);
    } catch (e) {
      Alert.alert("Erro ao buscar os repositórios favoritados");
    }
  };

  const handleAddRepositories = (repository: UserProps[]) => {
    setRepositories(repository);
  };

  const repositoriesFiltered = repositories.filter((repository) => {
    return !repositoriesFromStorage.find(
      (repositoryFromStorage) => repositoryFromStorage.id === repository.id
    );
  });

  const value = useMemo(
    () => ({
      getMultiple,
      storeRepository,
      repositoriesFromStorage,
      handleAddRepositories,
      repositoriesFiltered,
    }),
    [repositoriesFromStorage, repositoriesFiltered, repositories]
  );

  useEffect(() => {
    (async () => {
      await getMultiple();
    })();
  }, []);

  return (
    <StorageContext.Provider value={value}>{children}</StorageContext.Provider>
  );
}

export const useStorage = () => useContext(StorageContext);
