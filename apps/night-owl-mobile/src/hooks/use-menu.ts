import { useState, useEffect } from 'react';
import { flattenedMenu } from '../mock-data/menu';
export type ActiveFilter = 'Drinks' | 'Sides' | 'Add-Ons';

// useAppMenu Hook
export const useMenu = () => {
  const [searchText, setSearchText] = useState('');
  const [activeFilter, setActiveFilter] = useState<ActiveFilter | null>(null);
  const [filteredData, setFilteredData] = useState(flattenedMenu);

  // Flatten the menu categories into a single array for easier searching and rendering
  const menuItems = flattenedMenu;

  console.log('menuItems', menuItems);

  // Update filteredData whenever searchText or activeFilter changes
  useEffect(() => {
    let updatedData = menuItems;

    // Filter by search text
    if (searchText) {
      updatedData = updatedData.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // Filter by active category
    if (activeFilter) {
      if (activeFilter === 'Drinks') {
        updatedData = updatedData.filter(
          (item) =>
            item.category === 'coffee' ||
            item.category === 'tea' ||
            item.category === 'otherDrinks'
        );
      }
      if (activeFilter === 'Add-Ons') {
        updatedData = updatedData.filter((item) => item.category === 'addOns');
      }
      // updatedData = updatedData.filter(
      //   (item) => item.category === activeFilter
      // );
    }

    setFilteredData(updatedData);
  }, [searchText, activeFilter, menuItems]);

  // Dummy filter function based on category
  const handleFilter = (category: ActiveFilter) => {
    setActiveFilter(category === activeFilter ? null : category);
  };

  return {
    searchText,
    setSearchText,
    filteredData,
    activeFilter,
    setActiveFilter,
    handleFilter,
  };
};
