import * as S from "./styles";
import { Header } from "../../components/Header";
import { useState } from "react";
import { UserProps } from "../Home";
import { Card } from "../../components/Card";
import { ListRenderItem, Text, Alert } from "react-native";
import { EmptyMessage } from "../../components/EmptyMessage";
import { useStorage } from "../../context/StorageContext";
import { DetailModal } from "../../components/DetailModal";
import { ModalSearchUser } from "../../components/ModalSearchUser";
import { Props } from "../RootStackParams";
import { NetworkConsumer } from "react-native-offline";

export function Favorites({ navigation }: Props) {
  const [isOpenModalSearchUser, setIsOpenModalSearchUser] = useState(false);
  const { repositoriesFromStorage, storeRepository, handleAddRepositories } =
    useStorage();
  const [isOpenModalDetailRepository, setIsOpenModalDetailRepository] =
    useState(false);
  const [selectedRepository, setSelectedRepository] = useState<
    Partial<UserProps>
  >({});
  const [isConnected, setIsConnected] = useState(true);
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
      onFavorite={() => {}}
      isFavorited={true}
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
                    {repositoriesFromStorage[0] &&
                    repositoriesFromStorage.length > 0 ? (
                      <S.CardList
                        data={repositoriesFromStorage}
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
                    {repositoriesFromStorage[0] &&
                    repositoriesFromStorage.length > 0 ? (
                      <S.CardList
                        data={repositoriesFromStorage}
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
            }
          }}
        </NetworkConsumer>
      </S.Container>
      <ModalSearchUser
        isOpen={isOpenModalSearchUser}
        handleClose={() => handleCloseModalSearchUser()}
        handleSelectedUser={(repositories) => {
          navigation.navigate("Listagem");
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
          isFavorited: true,
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
