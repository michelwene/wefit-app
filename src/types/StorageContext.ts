import { UserProps } from "./User";

export type StorageContextData = {
  storeRepository: (value: UserProps) => void;
  getMultiple: () => Promise<void>;
  repositoriesFromStorage: UserProps[];
  handleAddRepositories: (value: UserProps[]) => void;
  repositoriesFiltered: UserProps[];
};
