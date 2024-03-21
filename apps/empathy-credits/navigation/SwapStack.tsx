// SwapStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BuyCryptoScreen } from '../pages/BuyCryptoScreen';
import SwapTabStack from './SwapTabStack';
import { CreditCardPage } from '../pages/CreditCardPage';

const Stack = createStackNavigator();

export const SwapStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Swap"
        component={SwapTabStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Buy" component={BuyCryptoScreen} />
      <Stack.Screen name="Payment" component={CreditCardPage} />
    </Stack.Navigator>
  );
};
