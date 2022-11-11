import * as S from "./styles";

interface EmptyMessageProps {
  title: string;
  message: string;
}

export function EmptyMessage({ message, title }: EmptyMessageProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Message>{message}</S.Message>
    </S.Container>
  );
}
