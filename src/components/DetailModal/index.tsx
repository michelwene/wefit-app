import { Modal, Text, Linking, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Description } from "../Description";
import { Language } from "../Language";
import { Title } from "../Title";
import * as S from "./styles";
import { useState, useEffect } from "react";

type Repository = {
  id: number;
  title: string;
  description: string;
  language: string;
  link: string;
  isFavorited: boolean;
};

interface DetailModalProps {
  isOpen: boolean;
  handleClose: () => void;
  repository: Repository;
  storeRepository: (value: Repository) => void;
}

export function DetailModal({
  isOpen,
  handleClose,
  repository,
  storeRepository,
}: DetailModalProps) {
  const [isFavorite, setIsFavorite] = useState(repository.isFavorited);

  function handleOpenLink() {
    Linking.openURL(repository.link);
  }

  useEffect(() => {
    setIsFavorite(repository.isFavorited);
  }, [repository.isFavorited]);

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
        <S.Content>
          <S.Info>
            <Title title={repository.title} />
            <S.ContentDescription>
              <Description description={repository.description} />
            </S.ContentDescription>
            <S.ContentLanguage>
              <Language language={repository.language} />
            </S.ContentLanguage>
          </S.Info>
          <S.Footer>
            <S.WrapperButtons>
              <S.ButtonLink onPress={() => handleOpenLink()}>
                <S.ButtonLinkText>Ver repositório</S.ButtonLinkText>
                <S.ButtonLinkIcon name="link" />
              </S.ButtonLink>
              <S.ButtonFavorite
                isFavorite={isFavorite}
                onPress={() =>
                  storeRepository({
                    id: repository.id,
                    title: repository.title,
                    description: repository.description,
                    language: repository.language,
                    link: repository.link,
                    isFavorited: isFavorite,
                  })
                }
              >
                <S.ButtonFavoriteText>
                  {isFavorite ? "desfavoritar" : "favoritar"}
                </S.ButtonFavoriteText>
                <S.ButtonFavoriteIcon
                  name={isFavorite ? "star-outline" : "star-sharp"}
                />
              </S.ButtonFavorite>
            </S.WrapperButtons>
          </S.Footer>
        </S.Content>
      </S.Container>
    </Modal>
  );
}
