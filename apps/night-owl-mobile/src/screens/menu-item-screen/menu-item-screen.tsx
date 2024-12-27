import React from 'react';
import { View, Text } from 'react-native';
import { LayoutWrapper } from '../../components/layout-wrapper';
import { useNavigation, useRoute } from '@react-navigation/native';

export interface MenuItemScreenProps {}

export function MenuItemScreen(props: MenuItemScreenProps) {
  const route = useRoute(); // Access the current route
  const navigation = useNavigation(); // Access the navigation object
  const { item } = route.params; // Retrieve the itemName from route params
  console.log(route.params);
  console.log(item.name);

  // Dynamically set the screen title
  React.useEffect(() => {
    navigation.setOptions({
      title: item.name, // Set the title to the item name
    });
  }, [navigation, item]);

  return (
    <LayoutWrapper showTopNavBar={false}>
      <Text>Welcome to {item.name}!</Text>
    </LayoutWrapper>
  );
}
