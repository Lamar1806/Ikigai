// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TradeScreen } from '../pages/TradeScreen';
import { MarketScreen } from '../pages/MarketScreen';
import { SwapStack } from './SwapStack';

const Tab = createMaterialTopTabNavigator();

export default function SwapTabStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Trade" component={TradeScreen} />
      <Tab.Screen name="Market" component={MarketScreen} />
    </Tab.Navigator>
  );
}
