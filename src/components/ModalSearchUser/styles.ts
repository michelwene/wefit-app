import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Platform } from "react-native";
interface ButtonLoadingProps {
  isLoading: boolean;
}

export const KeyboardAvoidingView = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === "ios" ? "padding" : "height",
})`
  flex: 1;
  width: 100%;

  align-items: center;
  justify-content: flex-end;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.View`
  align-items: center;
  background-color: white;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  padding: 35px;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.roboto.regular};
  font-style: normal;
  text-align: left;
  width: 100%;
`;

export const WrapperButtons = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ButtonClose = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.shape};
  flex: 1;
`;

export const TextButtonClose = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.roboto.medium};
  letter-spacing: 0.46px;
  line-height: 26px;
  text-align: center;
  text-transform: uppercase;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: "#FFFFFF",
  size: "small",
})``;

export const ButtonSubmit = styled.TouchableOpacity<ButtonLoadingProps>`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;

  background-color: ${({ theme, isLoading }) =>
    isLoading ? theme.colors.text_inactiv : theme.colors.primary};
  border-radius: 4px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);

  flex: 1;
`;

export const TextButtonSubmit = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.roboto.medium};
  letter-spacing: 0.46px;
  line-height: 26px;
  padding: 8px 0px;
  text-align: center;
  text-transform: uppercase;

  margin-left: 12px;
`;
