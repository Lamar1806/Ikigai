import React from 'react';

import { View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface MenuItemProps {}

export function MenuItem(props: MenuItemProps) {
  return (
    <View>
      <Text>Welcome to menuItem!</Text>
    </View>
  );
}

export default MenuItem;
