import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(12)}px;
  background-color: ${({ theme }) => theme.colors.shape};

  padding: 0px 16px 0px 16px;

  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
`;

export const Content = styled.ScrollView`
  flex: 1;
  width: 100%;

  margin-top: 16px;
`;

export const Card = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};

  align-items: center;
  display: flex;
  flex-direction: column;

  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
  padding: 12px 16px;

  margin-left: 16px;
  margin-right: 16px;
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

export const CardTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  font-weight: 400;

  color: "#070707";

  line-height: 15px;
`;

export const CardTitleBold = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;

  color: ${({ theme }) => theme.colors.text_dark};
  line-height: 15px;
`;

export const CardAvatar = styled.Image`
  width: 30px;
  height: 30px;

  border: 1px solid #000;

  border-radius: 50px;
`;

export const CardContent = styled.View`
  width: 100%;

  margin-top: 16px;

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardContentDescription = styled.View`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const CardDescription = styled.Text`
  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;

  line-height: 15px;
`;

export const CardFooter = styled.View`
  width: 100%;
  margin-top: 16px;

  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardFooterButton = styled.TouchableOpacity`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 8px 10px;

  background-color: ${({ theme }) => theme.colors.bg_btn_secondary};
  border-radius: 4px;
`;

export const CardFooterStarIcon = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.text_btn_secondary};
  font-size: ${RFValue(20)}px;
`;

export const CardFooterButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  line-height: 15px;

  margin-left: 10px;

  color: ${({ theme }) => theme.colors.text_btn_secondary};
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

export const CardFooterLanguage = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardFooterLanguageIcon = styled(FontAwesome)`
  color: ${({ theme }) => theme.colors.language};
  font-size: ${RFValue(8)}px;
`;

export const CardFooterLanguageText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  line-height: 15px;

  margin-left: 6px;
`;
