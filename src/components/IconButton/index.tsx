import * as S from "./styles";

export function IconButton({ onPress, icon }) {
  return <S.Button onPress={onPress}>{icon}</S.Button>;
}
