import styled from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { FlatList } from "react-native";
import { UserProps } from "../../types/User";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
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
