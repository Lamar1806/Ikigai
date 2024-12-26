import React from 'react';

import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { HorizontalScrollableList } from '@ikigai/ui-components-native';
import { BottomNavbar } from '../../components/bottom-nav-bar';
import { TopNavBar } from '../../components/top-nav-bar';
/* eslint-disable-next-line */
export interface HomeScreenProps {}

export function HomeScreen(props: HomeScreenProps) {
  const items = [
    {
      name: 'Item 1',
      page: 'Item1Page',
      image: 'https://via.placeholder.com/100',
    },
    {
      name: 'Item 2',
      page: 'Item2Page',
      image: 'https://via.placeholder.com/100',
    },
    {
      name: 'Item 3',
      page: 'Item3Page',
      image: 'https://via.placeholder.com/100',
    },
    {
      name: 'Item 4',
      page: 'Item4Page',
      image: 'https://via.placeholder.com/100',
    },
  ];

  return (
    <SafeAreaView style={{ backgroundColor: 'black' }}>
      <ScrollView style={{ backgroundColor: 'black' }}>
        <View style={{ backgroundColor: 'white' }}>
          <TopNavBar />
          <HorizontalScrollableList title="Breakfast" items={items} />
          <HorizontalScrollableList title="Coffee" items={items} />
          <HorizontalScrollableList title="Promotions" items={items} />
          <BottomNavbar />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
