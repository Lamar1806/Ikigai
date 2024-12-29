import React from 'react';

import { View, Text } from 'react-native';
import { LayoutWrapper } from '../../components/layout-wrapper';

/* eslint-disable-next-line */
export interface AccountScreenProps {}

export function AccountScreen(props: AccountScreenProps) {
  return (
    <LayoutWrapper showTopNavBar={false}>
      <Text>Welcome to accountScreen!</Text>
    </LayoutWrapper>
  );
}

export default AccountScreen;
