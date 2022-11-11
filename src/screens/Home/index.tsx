import React, { useEffect, useMemo, useState } from "react";
import * as S from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { ModalSearchUser } from "../../components/ModalSearchUser";
import { IconButton } from "../../components/IconButton";
import { ListRenderItem, Text } from "react-native";
import { Card } from "../../components/Card";
import axios, { AxiosError } from "axios";
import { EmptyMessage } from "../../components/EmptyMessage";
import { DetailModal } from "../../components/DetailModal";

export interface UserProps {
  id: number;
  full_name: string;
  owner: {
    avatar_url: string;
  };
  language: string;
  description: string;
  stargazers_count: number;
}

export function Home() {
  const [repositories, setRepositories] = useState<Array<UserProps>>([]);
  const [isOpenModalSearchUser, setIsOpenModalSearchUser] = useState(false);
  const [isOpenModalDetailRepository, setIsOpenModalDetailRepository] =
    useState(false);

  function handleOpenModalSearchUser() {
    setIsOpenModalSearchUser(true);
  }

  function handleOpenModalDetailUser() {
    setIsOpenModalDetailRepository(true);
  }

  function handleCloseModalSearchUser() {
    setIsOpenModalSearchUser(false);
  }

  function handleCloseModalDetailUser() {
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
      onPress={() => handleOpenModalDetailUser()}
    />
  );

  const renderCard: ListRenderItem<UserProps> = ({ item }) => (
    <Item data={item} />
  );
  return (
    <>
      <S.Container>
        <S.Header>
          <S.Title>WeFit</S.Title>
          <IconButton
            onPress={() => handleOpenModalSearchUser()}
            icon={<FontAwesome name="gear" size={25} color="black" />}
          />
        </S.Header>
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
      />
    </>
  );
}
