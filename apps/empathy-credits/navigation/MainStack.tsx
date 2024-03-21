import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screen components
import { WalletScreen } from '../pages/WalletScreen';
import { CoinDetailScreen } from '../pages/CoinDetailScreen';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Wallet"
        component={WalletScreen}
        options={{ headerShown: false }} // Hide the header for the home screen
      />
      <Stack.Screen name="CoinDetailScreen" component={CoinDetailScreen} />
    </Stack.Navigator>
  );
};
