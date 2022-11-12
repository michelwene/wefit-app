import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  height: ${getStatusBarHeight() + RFValue(56)}px;
  background-color: ${({ theme }) => theme.colors.shape};

  padding: 0px 16px 0px 16px;
`;

export const WrapperHeader = styled.View`
  padding: 7px 8px 0px 16px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;

  letter-spacing: 0.15px;
`;
