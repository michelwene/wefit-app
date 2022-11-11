import * as S from "./styles";

interface LanguageProps {
  language: string;
}

export function Language({ language }: LanguageProps) {
  return (
    <S.Language>
      <S.LanguageIcon name="circle" />
      <S.LanguageText>{language || "N/C"}</S.LanguageText>
    </S.Language>
  );
}
