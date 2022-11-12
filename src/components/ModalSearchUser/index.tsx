import React, { useState } from "react";
import { Modal, Alert } from "react-native";
import * as S from "./styles";
import { Input } from "../Input";
import { api } from "../../services/api";
import { AxiosError } from "axios";
import { UserProps } from "../../types/User";

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  handleSelectedUser: (repositories: Array<UserProps>) => void;
  isConnection?: boolean;
}

export function ModalSearchUser({
  isOpen,
  handleClose,
  handleSelectedUser,
  isConnection,
}: ModalProps) {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleChangeText(text: string) {
    setUser(text);
  }

  function onRequestCloseModal() {
    setUser("");
    handleClose();
  }

  async function handleSelectRepository(name: string) {
    try {
      if (!isConnection) {
        return Alert.alert(
          "Você está offline",
          "Para buscar um usuário, você precisa estar conectado à internet"
        );
      }
      setIsLoading(true);
      const response = await api.get(`/${name}/repos`);
      const apiRepositories: Array<UserProps> = response.data.map(
        (repository: UserProps) => {
          return {
            id: repository.id,
            full_name: repository.full_name,
            owner: {
              avatar_url: repository.owner.avatar_url,
            },
            language: repository.language,
            description: repository.description,
            stargazers_count: repository.stargazers_count,
            html_url: repository.html_url,
            isFavorited: false,
          };
        }
      );
      handleSelectedUser(apiRepositories);
      handleClose();
      setUser("");
    } catch (error) {
      const err = error as AxiosError;
      if (err.response && err.response.status === 404) {
        return Alert.alert("Usuário não encontrado", "Tente novamente");
      }
      return Alert.alert("Ocorreu um erro ao buscar repositórios");
    } finally {
      setIsLoading(false);
    }
  }

  function handleConfirm() {
    if (user) {
      handleSelectRepository(user);
    } else {
      Alert.alert("Digite o nome do usuário", "O campo não pode estar vazio");
    }
  }

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isOpen}
      onRequestClose={() => handleClose()}
    >
      <S.Container>
        <S.ModalContainer>
          <S.Title>Alterar usuário selecionado!</S.Title>
          <Input
            placeholder="Nome do usuário"
            onChangeText={(text) => handleChangeText(text)}
            value={user}
          />
          <S.WrapperButtons>
            <S.ButtonClose onPress={() => onRequestCloseModal()}>
              <S.TextButtonClose>cancelar</S.TextButtonClose>
            </S.ButtonClose>
            <S.ButtonSubmit
              onPress={() => handleConfirm()}
              isLoading={isLoading}
            >
              {isLoading && <S.Loading />}
              <S.TextButtonSubmit disabled={isLoading}>
                Salvar
              </S.TextButtonSubmit>
            </S.ButtonSubmit>
          </S.WrapperButtons>
        </S.ModalContainer>
      </S.Container>
    </Modal>
  );
}
