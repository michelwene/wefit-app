import * as S from "./styles";

interface CardProps {
  title: string;
  description: string;
  image: string;
  stars: number;
  language: string;
  onPress: () => void;
}
export function Card({
  title,
  description,
  image,
  stars,
  language,
  onPress,
}: CardProps) {
  return (
    <S.Card>
      <S.CardHeader>
        <S.CardTitle>
          {title.split("/")[0]}/
          <S.CardTitleBold>{title.split("/")[1]}</S.CardTitleBold>
        </S.CardTitle>
        <S.CardAvatar />
      </S.CardHeader>
      <S.CardContent>
        <S.CardContentDescription>
          <S.CardDescription>{description}</S.CardDescription>
        </S.CardContentDescription>
        <S.CardFooter>
          <S.CardFooterButton>
            <S.CardFooterStarIcon name="star-sharp" />
            <S.CardFooterButtonText>Favoritar</S.CardFooterButtonText>
          </S.CardFooterButton>

          <S.CardFooterStars>
            <S.CardFooterStarIcon name="star-sharp" />
            <S.CardFooterNumberStars>{stars}</S.CardFooterNumberStars>
          </S.CardFooterStars>
          <S.CardFooterLanguage>
            <S.CardFooterLanguageIcon name="circle" />
            <S.CardFooterLanguageText>{language}</S.CardFooterLanguageText>
          </S.CardFooterLanguage>
        </S.CardFooter>
      </S.CardContent>
    </S.Card>
  );
}
