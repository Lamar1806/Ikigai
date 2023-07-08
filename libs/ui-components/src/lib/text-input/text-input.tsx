import React, { FC } from 'react';

import {
  TextInput as TextInputNative,
  StyleSheet,
  TextStyle,
  TextInputProps as TextInputNativeProps,
} from 'react-native';

export interface TextInputProps extends TextInputNativeProps {
  style: TextStyle;
}

export const TextInput: FC<TextInputProps> = ({ style, ...rest }) => {
  const combinedStyle = StyleSheet.flatten([styles.textInput, style]);
  return <TextInputNative {...rest} style={combinedStyle} />;
};

const styles = StyleSheet.create({
  textInput: {},
});

export default TextInput;
