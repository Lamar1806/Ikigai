import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screen components
import { WalletScreen } from '../pages/WalletScreen';
import { NFTScreen } from '../pages/NFTScreen';
import { BrowserScreen } from '../pages/BrowserScreen';
import { SwapScreen } from '../pages/SwapScreen';
import { EarnScreen } from '../pages/EarnScreen';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Wallet"
        component={WalletScreen}
        options={{ headerShown: false }} // Hide the header for the home screen
      />
      <Stack.Screen name="NFT" component={NFTScreen} />
      <Stack.Screen name="Browser" component={BrowserScreen} />
      <Stack.Screen name="Swap" component={SwapScreen} />
      <Stack.Screen name="Earn" component={EarnScreen} />
    </Stack.Navigator>
  );
};