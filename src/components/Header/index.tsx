import * as S from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { IconButton } from "../IconButton";

interface HeaderProps {
  onPress: () => void;
}

export function Header({ onPress }: HeaderProps) {
  return (
    <S.Header>
      <S.WrapperHeader>
        <S.Title>WeFit</S.Title>
        <IconButton
          icon={<FontAwesome name="gear" size={25} color="black" />}
          onPress={onPress}
        />
      </S.WrapperHeader>
    </S.Header>
  );
}
