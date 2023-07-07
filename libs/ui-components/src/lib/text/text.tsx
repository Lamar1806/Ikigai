import React, { ReactElement } from 'react';

import { StyleSheet, Text as TextNative, TextStyle } from 'react-native';

/* eslint-disable-next-line */
export interface TextProps {
  style?: TextStyle;
  children: ReactElement;
}

export function Text({ text, style, children }) {
  return (
    <>
      <TextNative style={{ ...textStyle, ...style }}>{children}</TextNative>
    </>
  );
}

const textStyle = StyleSheet.create({
  text: {},
});

export default Text;
