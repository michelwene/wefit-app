import { Modal, Text } from "react-native";
import { Description } from "../Description";
import * as S from "./styles";

interface DetailModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

export function DetailModal({ isOpen, handleClose }: DetailModalProps) {
  return (
    <Modal
      animationType="slide"
      visible={isOpen}
      onRequestClose={() => handleClose()}
    >
      <S.Container>
        <S.ModalHeader>
          <S.ModalHeaderButton onPress={() => handleClose()}>
            <S.ModalHeaderButtonIcon name="arrowleft" />
          </S.ModalHeaderButton>
          <S.ModalHeaderTitle>Detalhes</S.ModalHeaderTitle>
        </S.ModalHeader>
        <S.ModalContainer>
          <S.ModalContent>
            <S.ContentTitle>
              Nome do <S.ContentTitleBold>ContentTitleBold</S.ContentTitleBold>
            </S.ContentTitle>
            <Description description="Minha descrição" />
          </S.ModalContent>
          <S.WrapperButtons></S.WrapperButtons>
        </S.ModalContainer>
      </S.Container>
    </Modal>
  );
}
