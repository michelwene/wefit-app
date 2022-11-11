import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { Modal } from "../../components/Modal";
import { IconButton } from "../../components/IconButton";
import { api } from "../../services/api";
import { Text } from "react-native";
import { Card } from "../../components/Card";

interface UserProps {
  id: number;
  name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  language: string;
  description: string;
  stargazers_count: number;
}

export function Home() {
  const [repositories, setRepositories] = useState<UserProps[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleOpenModal() {
    setIsOpenModal(true);
  }

  function handleCloseModal() {
    setIsOpenModal(false);
  }

  async function handleSelectRepository(name: string) {
    try {
      const response = await api.get(`/${name}/repos`);
      const repositories = response.data.map((repository: UserProps) => {
        return {
          id: repository.id,
          name: repository.name,
          owner: repository.owner.login,
          avatar_url: repository.owner.avatar_url,
          language: repository.language,
          description: repository.description,
          stargazers_count: repository.stargazers_count,
        };
      });
      setRepositories(repositories);
    } catch (error) {
      console.log("deu erro mano");
    }
  }

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
          <Card
            title="appswefit/create-react-app"
            description="Yarn Workspaces Monorepo support for Create-React-App / React-Scripts."
            stars={110}
            language="TypeScript"
            image=""
            onPress={() => {}}
          />
        </S.Content>
      </S.Container>
      <Modal
        isOpen={isOpenModal}
        handleClose={() => handleCloseModal()}
        handleSelectedUser={(name) => handleSelectRepository(name)}
      />
    </>
  );
}
