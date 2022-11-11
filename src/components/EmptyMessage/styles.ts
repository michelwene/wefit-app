import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.bold};
  letter-spacing: 0.15px;
  line-height: 24px;
  text-align: center;
`;

export const Message = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  letter-spacing: 0.15px;
  line-height: 24px;
  text-align: center;
`;
