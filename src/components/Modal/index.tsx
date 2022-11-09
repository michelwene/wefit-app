import {
  Text,
  View,
  Modal as ModalNative,
  Pressable,
  Alert,
  StyleSheet,
} from "react-native";
import * as S from "./styles";

export function Modal({ isOpen, handleClose }) {
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
          <S.WrapperButtons>
            <S.ButtonClose onPress={() => handleClose()}>
              <S.TextButtonClose>cancelar</S.TextButtonClose>
            </S.ButtonClose>
            <S.ButtonSubmit onPress={() => handleClose()}>
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
