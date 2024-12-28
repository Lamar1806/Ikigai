import React from 'react';

import { View, Text } from 'react-native';
import { LayoutWrapper } from '../../components/layout-wrapper';

/* eslint-disable-next-line */
export interface MenuScreenProps {}

export function MenuScreen(props: MenuScreenProps) {
  return (
    <LayoutWrapper>
      <Text>Welcome to menuScreen!</Text>
    </LayoutWrapper>
  );
}

export default MenuScreen;
