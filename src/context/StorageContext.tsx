import { createContext, useState, useMemo, useContext, useEffect } from "react";
import { Alert } from "react-native";
import { StorageContextData } from "../types/StorageContext";
import { UserProps } from "../types/User";
import { Storage } from "../hooks/useStorage";

interface StorageContextProps {
  children: React.ReactNode;
}

export const StorageContext = createContext({} as StorageContextData);

export function StorageProvider({ children }: StorageContextProps) {
  const [repositories, setRepositories] = useState<UserProps[]>([]);
  const [repositoriesFromStorage, setRepositoriesFromStorage] = useState<
    Array<UserProps>
  >([]);

  const { useAsyncStorageMethods, useGetAllKeys, useGetAllRepositories } =
    new Storage();

  const getMultipleRepositories = async () => {
    try {
      let keys: Array<string> = [];
      keys = (await useGetAllKeys()) as Array<string>;

      const repositoryKeys: Array<string> = keys;
      const repositoriesFromStorage = await useGetAllRepositories(
        repositoryKeys
      );
      setRepositoriesFromStorage(repositoriesFromStorage!);
    } catch (e) {
      Alert.alert("Erro ao buscar os repositórios favoritados");
    }
  };

  const storeRepository = async (value: Partial<UserProps>) => {
    try {
      const { removeFromStorage, setForStorage } = useAsyncStorageMethods(
        `@repository_Key${value.id}`
      );
      if (value.isFavorited) {
        await removeFromStorage();
        await getMultipleRepositories();
        return;
      }
      const jsonValue = JSON.stringify(value);
      await setForStorage(jsonValue);
      await getMultipleRepositories();
    } catch (e) {
      Alert.alert("Erro ao salvar o repositório");
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

  useEffect(() => {
    (async () => {
      await getMultipleRepositories();
    })();
  }, []);

  const value = useMemo(
    () => ({
      storeRepository,
      repositoriesFromStorage,
      handleAddRepositories,
      repositoriesFiltered,
    }),
    [repositoriesFromStorage, repositoriesFiltered, repositories]
  );

  return (
    <StorageContext.Provider value={value}>{children}</StorageContext.Provider>
  );
}

export const useStorage = () => useContext(StorageContext);
