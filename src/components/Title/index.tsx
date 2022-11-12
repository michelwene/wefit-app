import * as S from "./styles";

interface TitleProps {
  title: string;
}

export function Title({ title = "" }: TitleProps) {
  return (
    <S.CardTitle>
      {title.split("/")[0]}/
      <S.CardTitleBold>{title.split("/")[1]}</S.CardTitleBold>
    </S.CardTitle>
  );
}
