import React from 'react';

import { View, Text } from 'react-native';
import { LayoutWrapper } from '../../components/layout-wrapper';

/* eslint-disable-next-line */
export interface ReceiptScreenProps {}

export function ReceiptScreen(props: ReceiptScreenProps) {
  return (
    <LayoutWrapper>
      <Text>Welcome to receiptScreen!</Text>
    </LayoutWrapper>
  );
}

export default ReceiptScreen;
