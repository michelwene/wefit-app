import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";

interface FavoriteProps {
  isFavorite: boolean;
}

export const Card = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 4px;

  align-items: center;
  display: flex;
  flex-direction: column;

  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
  padding: 12px 16px;

  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
`;

export const CardHeader = styled.View`
  width: 100%;

  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-bottom: 16px;

  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.border_bottom};
`;

export const CardAvatar = styled.ImageBackground`
  width: 30px;
  height: 30px;
`;

export const CardContent = styled.View`
  width: 100%;

  margin-top: 16px;

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardFooter = styled.View`
  width: 100%;
  margin-top: 16px;

  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardFooterButton = styled.TouchableOpacity<FavoriteProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 8px 10px;

  background-color: ${({ theme, isFavorite }) =>
    isFavorite ? theme.colors.shape : theme.colors.bg_btn_secondary};

  border: ${({ theme, isFavorite }) =>
    isFavorite ? `1px solid ${theme.colors.background_dark}` : "none"};

  border-radius: 4px;
`;

export const CardFooterButtonIcon = styled(Ionicons)<FavoriteProps>`
  color: ${({ theme, isFavorite }) =>
    isFavorite
      ? theme.colors.background_dark
      : theme.colors.text_btn_secondary};

  font-size: ${RFValue(20)}px;
`;

export const CardFooterStarIcon = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.text_btn_secondary};
  font-size: ${RFValue(20)}px;
`;

export const CardFooterButtonText = styled.Text<FavoriteProps>`
  color: ${({ theme, isFavorite }) =>
    isFavorite ? theme.colors.text_dark : theme.colors.text_btn_secondary};

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  line-height: 15px;

  margin-left: 10px;
`;

export const CardFooterStars = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardFooterNumberStars = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  line-height: 15px;

  margin-left: 8px;
`;
