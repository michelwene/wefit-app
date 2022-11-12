import { Modal, Text, Linking, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Description } from "../Description";
import { Language } from "../Language";
import { Title } from "../Title";
import * as S from "./styles";
import { useState, useEffect } from "react";
import { UserProps } from "../../screens/Home";

interface DetailModalProps {
  isOpen: boolean;
  handleClose: () => void;
  repository: UserProps;
  storeRepository: (value: UserProps) => void;
}

export function DetailModal({
  isOpen,
  handleClose,
  repository,
  storeRepository,
}: DetailModalProps) {
  function handleOpenLink() {
    Linking.openURL(repository.html_url);
  }

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
            <Title title={repository.full_name} />
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
                isFavorite={repository.isFavorited}
                onPress={() =>
                  storeRepository({
                    id: repository.id,
                    full_name: repository.full_name,
                    description: repository.description,
                    language: repository.language,
                    html_url: repository.html_url,
                    isFavorited: repository.isFavorited,
                    owner: {
                      avatar_url: repository.owner.avatar_url,
                    },
                    stargazers_count: repository.stargazers_count,
                  })
                }
              >
                <S.ButtonFavoriteText>
                  {repository.isFavorited ? "desfavoritar" : "favoritar"}
                </S.ButtonFavoriteText>
                <S.ButtonFavoriteIcon
                  name={repository.isFavorited ? "star-outline" : "star-sharp"}
                />
              </S.ButtonFavorite>
            </S.WrapperButtons>
          </S.Footer>
        </S.Content>
      </S.Container>
    </Modal>
  );
}
