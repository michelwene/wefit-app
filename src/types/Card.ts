export interface CardProps {
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
