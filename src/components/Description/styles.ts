import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ContentDescription = styled.View`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardDescription = styled.Text`
  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-size: ${RFValue(12)}px;

  line-height: 15px;
`;
