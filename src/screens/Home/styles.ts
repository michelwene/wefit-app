import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { FlatList } from "react-native";
import { UserProps } from ".";

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

export const Content = styled.SafeAreaView`
  flex: 1;
  width: 100%;

  margin-top: 16px;
`;

export const CardList = styled(FlatList as new () => FlatList<UserProps>).attrs(
  {
    contentContainerStyle: { paddingBottom: getBottomSpace() },
    showsVerticalScrollIndicator: false,
  }
)``;
