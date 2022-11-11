import { Description } from "../Description";
import { Language } from "../Language";
import { Title } from "../Title";
import * as S from "./styles";

interface CardProps {
  title: string;
  description: string;
  image: {
    uri: string;
  };
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
    <S.Card onPress={onPress}>
      <S.CardHeader>
        <Title title={title} />
        <S.CardAvatar source={image} resizeMode="cover" borderRadius={50} />
      </S.CardHeader>
      <S.CardContent>
        <Description description={description} />
        <S.CardFooter>
          <S.CardFooterButton>
            <S.CardFooterStarIcon name="star-sharp" />
            <S.CardFooterButtonText>Favoritar</S.CardFooterButtonText>
          </S.CardFooterButton>

          <S.CardFooterStars>
            <S.CardFooterStarIcon name="star-sharp" />
            <S.CardFooterNumberStars>{stars}</S.CardFooterNumberStars>
          </S.CardFooterStars>
          <Language language={language} />
        </S.CardFooter>
      </S.CardContent>
    </S.Card>
  );
}
