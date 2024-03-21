// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TradeScreen } from '../pages/TradeScreen';
import { MarketScreen } from '../pages/MarketScreen';

const Tab = createMaterialTopTabNavigator();

export default function SwapStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen style={{}} name="Trade" component={TradeScreen} />
      <Tab.Screen name="Market" component={MarketScreen} />
    </Tab.Navigator>
  );
}
