import React, { FC } from 'react';

import { View, TextInput as TextInputNative, StyleSheet } from 'react-native';

/* eslint-disable-next-line */
export interface TextInputProps {
  value: string;
  onChangeText: (value: string) => void;
}

export const TextInput: FC<TextInputProps> = ({ value, onChangeText }) => {
  return (
    <>
      <TextInputNative value={value} onChangeText={onChangeText} />
    </>
  );
};

const styles = StyleSheet.create({});

export default TextInput;
