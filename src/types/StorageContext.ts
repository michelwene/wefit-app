import { UserProps } from "./User";

export type StorageContextData = {
  storeRepository: (value: UserProps) => void;
  repositoriesFromStorage: UserProps[];
  handleAddRepositories: (value: UserProps[]) => void;
  repositoriesFiltered: UserProps[];
};
