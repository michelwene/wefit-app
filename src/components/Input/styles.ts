import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
interface PlaceholderLabelProps {
  isFocused: boolean;
  isFilled: boolean;
}
export const Container = styled.View`
  background-color: "rgba(0, 0, 0, 0.06)";

  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.text};

  border-radius: 4px 4px 0px 0px;

  width: 100%;
  height: 70px;
  margin: 10px 0px;
  padding: 10px 12px 8px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 3px;
`;
export const PlaceholderLabel = styled.Text<PlaceholderLabelProps>`
  font-weight: ${({ theme }) => theme.fonts.regular};
  letter-spacing: 0.15px;
  line-height: 12px;
  font-size: ${RFValue(12)}px;

  position: absolute;
  left: 12px;
  height: 12px;
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
  flex: 1;
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text_input};

  width: 100%;
  height: 24px;
`;
