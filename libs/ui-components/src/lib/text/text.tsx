import React from 'react';

import { View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface TextProps {}

export function Text(props: TextProps) {
  return (
    <View>
      <Text>Welcome to text!</Text>
    </View>
  );
}

export default Text;
