// SwapStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BuyScreen } from '../pages/BuyScreen';
import SwapTabStack from './SwapTabStack';

const Stack = createStackNavigator();

export const SwapStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SwapTabStack" component={SwapTabStack} />
      <Stack.Screen name="Buy" component={BuyScreen} />
    </Stack.Navigator>
  );
};
