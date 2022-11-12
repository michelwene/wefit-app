import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

interface FavoriteProps {
  isFavorite: boolean;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ModalHeader = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.background_dark};

  width: 100%;
  height: ${getStatusBarHeight() + RFValue(56)}px;
`;

export const WrapperHeader = styled.View`
  padding: 0px 8px 0px 16px;
  align-items: center;
  flex-direction: row;

  width: 100%;
`;

export const ModalHeaderButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
`;

export const ModalHeaderButtonIcon = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(24)}px;
`;

export const ModalHeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.shape};
  margin-left: 16px;
`;

export const Content = styled.View`
  width: 100%;

  border-radius: 4px 4px 0px 0px;
  align-items: center;
  justify-content: space-between;

  flex: 1;
`;

export const Info = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 4px;
  padding: 16px;

  width: 100%;
`;

export const ContentDescription = styled.View`
  margin-top: 16px;

  width: 100%;
`;

export const ContentLanguage = styled.View`
  margin-top: 16px;
  width: 100%;
`;

export const Footer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};

  align-self: flex-end;
  justify-content: center;
`;

export const WrapperButtons = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 16px;
`;

export const ButtonLink = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  padding: 8px 11px;
  margin-bottom: 16px;
`;

export const ButtonFavorite = styled.TouchableOpacity<FavoriteProps>`
  align-items: center;
  flex-direction: row;
  justify-content: center;

  background-color: ${({ theme, isFavorite }) =>
    isFavorite ? theme.colors.shape : theme.colors.text_btn_secondary};

  border: ${({ theme, isFavorite }) =>
    isFavorite ? `1px solid ${theme.colors.background_dark}` : "none"};
  border-radius: 4px;

  box-shadow: 0px 3px 1px ${({ theme }) => theme.colors.text};

  width: 100%;
  padding: 8px 11px;
`;

export const ButtonLinkText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;
  line-height: 26px;

  letter-spacing: 0.46px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.primary};
  margin-right: 8px;
`;

export const ButtonFavoriteText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;
  line-height: 26px;

  letter-spacing: 0.46px;
  text-transform: uppercase;

  color: #000000;

  margin-right: 8px;
`;

export const ButtonLinkIcon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(24)}px;
`;

export const ButtonFavoriteIcon = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.background_dark};
  font-size: ${RFValue(24)}px;
`;
