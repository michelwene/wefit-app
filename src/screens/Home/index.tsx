import React, { useState } from "react";
import { Alert } from "react-native";
import * as S from "./styles";
import { ModalSearchUser } from "../../components/ModalSearchUser";
import { ListRenderItem } from "react-native";
import { Card } from "../../components/Card";
import { EmptyMessage } from "../../components/EmptyMessage";
import { DetailModal } from "../../components/DetailModal";
import { Header } from "../../components/Header";
import { useStorage } from "../../context/StorageContext";
import { NetworkConsumer } from "react-native-offline";
import { UserProps } from "../../types/User";

export function Home() {
  const [isConnected, setIsConnected] = useState(true);
  const [isOpenModalSearchUser, setIsOpenModalSearchUser] = useState(false);
  const [isOpenModalDetailRepository, setIsOpenModalDetailRepository] =
    useState(false);
  const { storeRepository, handleAddRepositories, repositoriesFiltered } =
    useStorage();
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
        <NetworkConsumer>
          {({ isConnected }) => {
            if (isConnected) {
              setIsConnected(true);
              return (
                <>
                  <Header onPress={() => handleOpenModalSearchUser()} />
                  <S.Content>
                    {repositoriesFiltered.length > 0 ? (
                      <S.CardList
                        data={repositoriesFiltered}
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
                </>
              );
            } else {
              setIsConnected(false);
              return (
                <>
                  <Header
                    onPress={() =>
                      Alert.alert(
                        "Sem conexão com a internet",
                        "Verifique sua conexão para tentar buscar um novo repositório"
                      )
                    }
                  />
                  <S.Content>
                    <EmptyMessage
                      title="Sem conexão com a internet"
                      message="Verifique sua conexão com a internet"
                    />
                  </S.Content>
                </>
              );
            }
          }}
        </NetworkConsumer>
      </S.Container>
      <ModalSearchUser
        isOpen={isOpenModalSearchUser}
        handleClose={() => handleCloseModalSearchUser()}
        handleSelectedUser={(repositories) => {
          handleAddRepositories(repositories);
        }}
        isConnection={isConnected}
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
          stargazers_count: selectedRepository.stargazers_count || 0,
        }}
        storeRepository={(values) => storeRepository(values)}
        isConnection={isConnected}
      />
    </>
  );
}
