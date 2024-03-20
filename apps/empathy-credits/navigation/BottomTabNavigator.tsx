import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

// Screen components for each tab
import { WalletScreen } from '../pages/WalletScreen';
import { NFTScreen } from '../pages/NFTScreen';
import { BrowserScreen } from '../pages/BrowserScreen';
import { SwapScreen } from '../pages/SwapScreen';
import { EarnScreen } from '../pages/EarnScreen';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="wallet" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="NFT"
        component={NFTScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="file-alt" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Browser"
        component={BrowserScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="globe" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Swap"
        component={SwapScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="exchange-alt" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Earn"
        component={EarnScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="hand-holding-usd" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
