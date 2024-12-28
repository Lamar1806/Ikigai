import React from 'react';
import { HorizontalScrollableList } from '@ikigai/ui-components-native';
import { LayoutWrapper } from '../../components/layout-wrapper';
import { menu } from '../../mock-data/menu';

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
        items={menu.food}
        toScreen="menuItemScreen"
      />
      <HorizontalScrollableList
        title="Coffee"
        items={menu.coffee}
        toScreen="menuItemScreen"
      />
      <HorizontalScrollableList
        title="Promotions"
        items={menu.holidayAddOns}
        toScreen="menuItemScreen"
      />
    </LayoutWrapper>
  );
}

export default HomeScreen;
