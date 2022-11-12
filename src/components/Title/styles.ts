import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const CardTitle = styled.Text`
  color: "#070707";
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  font-weight: 400;
  line-height: 15px;
`;

export const CardTitleBold = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  line-height: 15px;
`;
