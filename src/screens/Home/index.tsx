import React, { useEffect, useMemo, useState } from "react";
import * as S from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { Modal } from "../../components/Modal";
import { IconButton } from "../../components/IconButton";
import { api } from "../../services/api";
import { FlatList, ListRenderItem, Text } from "react-native";
import { Card } from "../../components/Card";
import axios, { AxiosError } from "axios";
import { EmptyMessage } from "../../components/EmptyMessage";

export interface UserProps {
  id: number;
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  language: string;
  description: string;
  stargazers_count: number;
}

export function Home() {
  const [repositories, setRepositories] = useState<Array<UserProps>>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleOpenModal() {
    setIsOpenModal(true);
  }

  function handleCloseModal() {
    setIsOpenModal(false);
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
      onPress={() => {}}
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
            onPress={() => handleOpenModal()}
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
      <Modal
        isOpen={isOpenModal}
        handleClose={() => handleCloseModal()}
        handleSelectedUser={(repositories) => setRepositories(repositories)}
      />
    </>
  );
}
