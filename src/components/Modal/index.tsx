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

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  handleSelectedUser: (name: string) => void;
}

export function Modal({ isOpen, handleClose, handleSelectedUser }: ModalProps) {
  const [user, setUser] = useState("");

  function handleChangeText(text: string) {
    setUser(text);
  }

  function handleConfirm() {
    if (user) {
      handleSelectedUser(user);
      handleClose();
      setUser("");
    } else {
      Alert.alert("Digite o nome do usuário");
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
