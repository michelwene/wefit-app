import * as S from "./styles";

interface DescriptionProps {
  description: string;
}

export function Description({ description = "" }: DescriptionProps) {
  return (
    <S.ContentDescription>
      <S.CardDescription>{description}</S.CardDescription>
    </S.ContentDescription>
  );
}
