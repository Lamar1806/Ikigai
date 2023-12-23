import React, { FC } from 'react';

import {
  StyleSheet,
  Text as TextNative,
  TextProps as TextNativeProps,
} from 'react-native';

/* eslint-disable-next-line */
export interface TextProps extends TextNativeProps {
  style?: TextNativeProps['style'];
}

export const Text: FC<TextProps> = ({ style, children, ...rest }) => {
  const combinedStyle = StyleSheet.flatten([styles.text, style]);
  return (
    <TextNative style={combinedStyle} {...rest}>
      {children}
    </TextNative>
  );
};

const styles = StyleSheet.create({
  text: {},
});
