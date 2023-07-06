import React from 'react';

import { StyleSheet, Text as TextNative, TextStyle } from 'react-native';

/* eslint-disable-next-line */
export interface TextProps {
  text: string;
  style?: TextStyle;
}

export function Text({ text, style }) {
  return (
    <>
      <TextNative style={{ ...textStyle, ...style }}>{text}</TextNative>
    </>
  );
}

const textStyle = StyleSheet.create({
  text: {},
});

export default Text;
