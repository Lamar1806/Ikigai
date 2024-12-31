import React from 'react';
import { HorizontalScrollableList } from '@ikigai/ui-components-native';
import { LayoutWrapper } from '../../components/layout-wrapper';
import { menu, getItemsByCategory } from '../../mock-data/menu';

/* eslint-disable-next-line */
export interface HomeScreenProps {}

export function HomeScreen(props: HomeScreenProps) {
  const items = [
    {
      name: 'Item 1',
      page: 'menuItemScreen',
      image: 'https://via.placeholder.com/100',
    },
    {
      name: 'Item 2',
      page: 'menuItemScreen',
      image: 'https://via.placeholder.com/100',
    },
    {
      name: 'Item 3',
      page: 'menuItemScreen',
      image: 'https://via.placeholder.com/100',
    },
    {
      name: 'Item 4',
      page: 'menuItemScreen',
      image: 'https://via.placeholder.com/100',
    },
  ];

  return (
    <LayoutWrapper>
      <HorizontalScrollableList
        title="Breakfast"
        items={getItemsByCategory('food')}
        toScreen="menuItemScreen"
      />
      <HorizontalScrollableList
        title="Coffee"
        items={getItemsByCategory('coffee')}
        toScreen="menuItemScreen"
      />
      <HorizontalScrollableList
        title="Promotions"
        items={getItemsByCategory('holidayAddOns')}
        toScreen="menuItemScreen"
      />
    </LayoutWrapper>
  );
}

export default HomeScreen;
