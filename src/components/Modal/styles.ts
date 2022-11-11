import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { ActivityIndicator } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
  align-items: center;
`;

export const ModalContainer = styled.View`
  width: 100%;
  background-color: white;
  border-radius: 4px 4px 0px 0px;
  padding: 35px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-style: normal;
  text-align: left;
  width: 100%;
`;

export const WrapperButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const ButtonClose = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.shape};
  flex: 1;
`;

export const TextButtonClose = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  letter-spacing: 0.46px;
  line-height: 26px;
  text-align: center;
  text-transform: uppercase;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: "#FFFFFF",
  size: "small",
})``;

export const ButtonSubmit = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);

  flex: 1;
`;

export const TextButtonSubmit = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  letter-spacing: 0.46px;
  line-height: 26px;
  padding: 8px 0px;
  text-align: center;
  text-transform: uppercase;

  margin-left: 12px;
`;
