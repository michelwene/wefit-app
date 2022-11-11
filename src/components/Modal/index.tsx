import React, { useState } from "react";
import {
  Text,
  View,
  Modal as ModalNative,
  Pressable,
  Alert,
  StyleSheet,
} from "react-native";
import * as S from "./styles";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { UserProps } from "../../screens/Home";
import { AxiosError } from "axios";

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  handleSelectedUser: (repositories: Array<UserProps>) => void;
}

export function Modal({ isOpen, handleClose, handleSelectedUser }: ModalProps) {
  const [user, setUser] = useState("");

  function handleChangeText(text: string) {
    setUser(text);
  }

  async function handleSelectRepository(name: string) {
    try {
      const response = await api.get(`/${name}/repos`);
      const apiRepositories: Array<UserProps> = response.data.map(
        (repository: UserProps) => {
          return {
            id: repository.id,
            full_name: repository.full_name,
            owner: repository.owner.login,
            avatar_url: repository.owner.avatar_url,
            language: repository.language,
            description: repository.description,
            stargazers_count: repository.stargazers_count,
          };
        }
      );
      handleSelectedUser(apiRepositories);
      handleClose();
      setUser("");
    } catch (error) {
      const err = error as AxiosError;
      if (err.response && err.response.status === 404) {
        return Alert.alert("Usuário não encontrado");
      }
      return Alert.alert("Ocorreu um erro ao buscar repositórios");
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
    <ModalNative
      transparent={true}
      animationType="slide"
      visible={isOpen}
      onRequestClose={() => handleClose()}
    >
      <S.Container>
        <S.ModalContainer>
          <S.Title style={styles.modalText}>
            Alterar usuário selecionado!
          </S.Title>
          <Input
            placeholder="Nome do usuário"
            onChangeText={(text) => handleChangeText(text)}
            value={user}
          />
          <S.WrapperButtons>
            <S.ButtonClose onPress={() => handleClose()}>
              <S.TextButtonClose>cancelar</S.TextButtonClose>
            </S.ButtonClose>
            <S.ButtonSubmit onPress={() => handleConfirm()}>
              <S.TextButtonSubmit>Salvar</S.TextButtonSubmit>
            </S.ButtonSubmit>
          </S.WrapperButtons>
        </S.ModalContainer>
      </S.Container>
    </ModalNative>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  textStyle: {
    color: "blue",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "left",
  },
});
