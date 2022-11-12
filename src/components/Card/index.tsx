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
  onFavorite: () => void;
  isFavorited: boolean;
}
export function Card({
  title,
  description,
  image,
  stars,
  language,
  onPress,
  onFavorite,
  isFavorited,
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
          {isFavorited === false && (
            <S.CardFooterButton onPress={onFavorite} isFavorite={isFavorited}>
              <S.CardFooterButtonIcon
                name="star-sharp"
                isFavorite={isFavorited}
              />
              <S.CardFooterButtonText isFavorite={isFavorited}>
                {isFavorited ? "Desfavoritar" : "Favoritar"}
              </S.CardFooterButtonText>
            </S.CardFooterButton>
          )}
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
