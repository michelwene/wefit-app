import React, { useState } from "react";
import { Text } from "react-native";
import * as S from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { Modal } from "../../components/Modal";
import { IconButton } from "../../components/IconButton";

export function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleOpenModal() {
    setIsOpenModal(true);
  }

  function handleCloseModal() {
    setIsOpenModal(false);
  }

  function handleSelectRepository(name: string) {
    console.log(name);
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
      </S.Container>
      <Modal
        isOpen={isOpenModal}
        handleClose={() => handleCloseModal()}
        handleSelectedUser={(name) => handleSelectRepository(name)}
      />
    </>
  );
}
