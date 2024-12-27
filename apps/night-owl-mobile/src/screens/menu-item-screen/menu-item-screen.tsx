import React from 'react';
import { View, Text } from 'react-native';
import { LayoutWrapper } from '../../components/layout-wrapper';
/* eslint-disable-next-line */
export interface MenuItemScreenProps {}

export function MenuItemScreen(props: MenuItemScreenProps) {
  return (
    <LayoutWrapper showTopNavBar={false}>
      <Text>Welcome to menu-item-screen!</Text>
    </LayoutWrapper>
  );
}
