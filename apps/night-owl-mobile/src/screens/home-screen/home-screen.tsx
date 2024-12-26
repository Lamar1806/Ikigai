import React from 'react';
import { HorizontalScrollableList } from '@ikigai/ui-components-native';
import { LayoutWrapper } from '../../components/layout-wrapper';
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
    <LayoutWrapper>
      <HorizontalScrollableList title="Breakfast" items={items} />
      <HorizontalScrollableList title="Coffee" items={items} />
      <HorizontalScrollableList title="Promotions" items={items} />
    </LayoutWrapper>
  );
}

export default HomeScreen;
