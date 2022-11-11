import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

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
