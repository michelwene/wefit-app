import React, { useState, useCallback, useRef } from "react";
import * as S from "./styles";
import { TextInput, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
}
interface InputReference extends TextInput {
  value: string;
}

export function Input({ placeholder, onChangeText, value }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const inputRef = useRef<InputReference>(null);

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
      <S.LabeledInput
        keyboardAppearance="dark"
        ref={inputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={handleChangeText}
        value={value}
      />
    </S.Container>
  );
}
