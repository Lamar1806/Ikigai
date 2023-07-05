import React from 'react';

import { View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface ViewProps {}

export function View(props: ViewProps) {
  return (
    <View>
      <Text>Welcome to view!</Text>
    </View>
  );
}

export default View;
