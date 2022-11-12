import React, { useState } from "react";
import { Alert } from "react-native";
import * as S from "./styles";
import { ModalSearchUser } from "../../components/ModalSearchUser";
import { ListRenderItem } from "react-native";
import { Card } from "../../components/Card";
import { EmptyMessage } from "../../components/EmptyMessage";
import { DetailModal } from "../../components/DetailModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Header } from "../../components/Header";

export type UserProps = {
  id: number;
  full_name: string;
  owner: {
    avatar_url: string;
  };
  language: string;
  description: string;
  stargazers_count: number;
  html_url: string;
  isFavorited: boolean;
};

export function Home() {
  const [repositories, setRepositories] = useState<Array<UserProps>>([]);
  const [isOpenModalSearchUser, setIsOpenModalSearchUser] = useState(false);
  const [isOpenModalDetailRepository, setIsOpenModalDetailRepository] =
    useState(false);
  const [selectedRepository, setSelectedRepository] = useState<
    Partial<UserProps>
  >({});

  function handleOpenModalSearchUser() {
    setIsOpenModalSearchUser(true);
  }

  function handleOpenModalDetailUser(repository: UserProps) {
    setSelectedRepository(repository);
    setIsOpenModalDetailRepository(true);
  }

  function handleCloseModalSearchUser() {
    setIsOpenModalSearchUser(false);
  }

  function handleCloseModalDetailUser() {
    setSelectedRepository({});
    setIsOpenModalDetailRepository(false);
  }

  const storeRepository = async (value: Partial<UserProps>) => {
    try {
      if (value.isFavorited) {
        try {
          await AsyncStorage.removeItem(`@repository_Key${value.id}`);
          const newRepositories = repositories.map((repository) => {
            if (repository.id === value.id) {
              repository.isFavorited = false;
            }
            return repository;
          });
          setRepositories(newRepositories);
          return;
        } catch (e) {
          Alert.alert("Erro ao remover repositório dos favoritos");
        }
      } else {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(`@repository_Key${value.id}`, jsonValue);
        const newRepositories = repositories.map((repository) => {
          if (repository.id === value.id) {
            repository.isFavorited = true;
          }
          return repository;
        });
        setRepositories(newRepositories);
      }
    } catch (e) {
      Alert.alert("Erro ao salvar o repositório");
    }
  };

  const Item = ({ data }: { data: UserProps }) => (
    <Card
      description={data.description}
      language={data.language}
      image={{
        uri: data.owner.avatar_url,
      }}
      stars={data.stargazers_count}
      title={data.full_name}
      onPress={() => handleOpenModalDetailUser(data)}
      onFavorite={() =>
        storeRepository({
          id: data.id,
          full_name: data.full_name,
          description: data.description,
          language: data.language,
          html_url: data.html_url,
          isFavorited: data.isFavorited,
          owner: {
            avatar_url: data.owner.avatar_url,
          },
          stargazers_count: data.stargazers_count,
        })
      }
      isFavorited={data.isFavorited}
    />
  );

  const renderCard: ListRenderItem<UserProps> = ({ item }) => (
    <Item data={item} />
  );

  return (
    <>
      <S.Container>
        <Header onPress={() => handleOpenModalSearchUser()} />
        <S.Content>
          {repositories.length > 0 ? (
            <S.CardList
              data={repositories}
              renderItem={renderCard}
              keyExtractor={(repository: UserProps) => repository.id}
            />
          ) : (
            <EmptyMessage
              title="Nenhum repositório encontrado"
              message="Aperte na engrenagem para selecionar um novo usuário"
            />
          )}
        </S.Content>
      </S.Container>
      <ModalSearchUser
        isOpen={isOpenModalSearchUser}
        handleClose={() => handleCloseModalSearchUser()}
        handleSelectedUser={(repositories) => setRepositories(repositories)}
      />
      <DetailModal
        isOpen={isOpenModalDetailRepository}
        handleClose={() => handleCloseModalDetailUser()}
        repository={{
          id: selectedRepository.id || 0,
          full_name: selectedRepository.full_name || "",
          description: selectedRepository.description || "",
          language: selectedRepository.language || "",
          html_url: selectedRepository.html_url || "",
          isFavorited: selectedRepository.isFavorited || false,
          owner: {
            avatar_url: selectedRepository.owner?.avatar_url || "",
          },
        }}
        storeRepository={(values) => storeRepository(values)}
      />
    </>
  );
}
