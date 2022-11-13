import React, { useState, useCallback, useRef } from "react";
import * as S from "./styles";
import { TextInputProps } from "react-native";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { Modal, Alert, StyleSheet, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface InputProps extends TextInputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
}

export function Input({ placeholder, onChangeText, value }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const inputRef = useRef<any>(null);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    if (inputRef.current) setIsFilled(!!inputRef.current.value);
  }, []);

  const handleChangeText = useCallback((text: string) => {
    onChangeText(text);
    if (inputRef.current) inputRef.current.value = text;
  }, []);

  return (
    <S.Container>
      <S.PlaceholderLabel
        isFocused={isFocused}
        isFilled={isFilled}
        onPress={() => setIsFocused(!isFocused)}
      >
        {placeholder}
      </S.PlaceholderLabel>
      <BottomSheetTextInput
        ref={inputRef}
        keyboardAppearance="dark"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={handleChangeText}
        value={value}
        style={styles.LabeledInput}
      />
    </S.Container>
  );
}

const styles = StyleSheet.create({
  LabeledInput: {
    flex: 1,
    width: "100%",
    height: 24,
    fontSize: RFValue(16),
    color: "rgba(0, 0, 0, 0.87)",
    fontFamily: "Roboto_400Regular",
  },
});
