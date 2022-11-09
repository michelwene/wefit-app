import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

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
