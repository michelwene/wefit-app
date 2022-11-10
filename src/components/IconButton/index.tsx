import * as S from "./styles";

interface IconButtonProps {
  icon: React.ReactNode;
  onPress: () => void;
}

export function IconButton({ onPress, icon }: IconButtonProps) {
  return <S.Button onPress={onPress}>{icon}</S.Button>;
}
