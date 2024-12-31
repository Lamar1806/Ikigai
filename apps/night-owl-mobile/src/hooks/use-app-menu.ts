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

  // State for active filter
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Dummy filter function based on category
  const handleFilter = (category: string) => {
    setActiveFilter(category === activeFilter ? null : category);
    // Implement filtering logic in the context or here if needed
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
