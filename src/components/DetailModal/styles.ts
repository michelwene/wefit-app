import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Dimensions } from "react-native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const ModalHeader = styled.View`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.background_dark};

  width: 100%;
  height: ${Dimensions.get("window").height * 0.1}px;

  padding: 0px 8px 0px 16px;
`;

export const ModalHeaderButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
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

export const ModalContainer = styled.View`
  width: 100%;
  background-color: white;
  border-radius: 4px 4px 0px 0px;
  padding: 35px;
  align-items: center;
`;

export const ModalContent = styled.View`
  width: 100%;
`;

export const ContentTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  font-weight: 400;

  color: "#070707";

  line-height: 15px;
`;

export const ContentTitleBold = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;

  color: ${({ theme }) => theme.colors.text_dark};
  line-height: 15px;
`;

export const ContentLanguage = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LanguageIcon = styled(FontAwesome)`
  color: ${({ theme }) => theme.colors.language};
  font-size: ${RFValue(8)}px;
`;

export const LanguageText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  line-height: 15px;

  margin-left: 6px;
`;

export const WrapperButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
