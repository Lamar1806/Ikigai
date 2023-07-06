import React from 'react';

import { View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface ScrollViewProps {}

export function ScrollView(props: ScrollViewProps) {
  return (
    <View>
      <Text>Welcome to scrollView!</Text>
    </View>
  );
}

export default ScrollView;
