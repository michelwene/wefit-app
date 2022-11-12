import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
interface PlaceholderLabelProps {
  isFocused: boolean;
  isFilled: boolean;
}
export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.text_inactiv};

  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.text};

  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  width: 100%;
  height: 70px;
  margin: 10px 0px;
  padding: 10px 12px 8px;

  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const PlaceholderLabel = styled.Text<PlaceholderLabelProps>`
  font-size: ${RFValue(12)}px;
  font-weight: ${({ theme }) => theme.fonts.regular};
  letter-spacing: 0.15px;
  line-height: 12px;

  height: 12px;
  left: 12px;
  position: absolute;

  color: ${({ theme }) => theme.colors.text_label};

  ${({ isFilled, isFocused }) =>
    isFocused || isFilled
      ? css`
          transform: translateY(+10px);
        `
      : css`
          transform: translateY(+30px);
        `}
`;

export const LabeledInput = styled.TextInput`
  color: ${({ theme }) => theme.colors.text_input};
  flex: 1;
  font-size: ${RFValue(16)}px;

  width: 100%;
  height: 24px;
`;
