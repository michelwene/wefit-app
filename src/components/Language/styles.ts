import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Language = styled.View`
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
