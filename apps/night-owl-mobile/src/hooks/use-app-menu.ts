import { useState } from 'react';
import { menu } from '../mock-data/menu';
// useAppMenu Hook
export const useMenu = () => {
  const [searchText, setSearchText] = useState('');

  // Flatten the menu categories into a single array for easier searching and rendering
  const menuItems = Object.values(menu).flat();

  // Filter items based on the search text
  const filteredData = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return { searchText, setSearchText, filteredData };
};
