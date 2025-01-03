import { useState, useEffect } from 'react';
import { flattenedMenu } from '../mock-data/menu';

export type ActiveFilter = 'Drinks' | 'Sides' | 'Add-Ons';

// useMenu Hook
export const useMenu = () => {
  const [searchText, setSearchText] = useState('');
  const [activeFilter, setActiveFilter] = useState<ActiveFilter | null>(null);
  const [filteredData, setFilteredData] = useState(flattenedMenu);

  // todo - addons will be sauces
  // Categories mapping for active filters
  const filterCategories: Record<ActiveFilter, string[]> = {
    Drinks: ['coffee', 'tea', 'otherDrinks', 'milk'],
    'Add-Ons': ['addOns'],
    Sides: ['sides'],
  };

  // Update filteredData whenever searchText or activeFilter changes
  useEffect(() => {
    let updatedData = flattenedMenu;

    // Apply search text filtering
    if (searchText) {
      updatedData = updatedData.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // Apply active filter category
    if (activeFilter) {
      const allowedCategories = filterCategories[activeFilter];
      updatedData = updatedData.filter((item) =>
        allowedCategories.includes(item.category)
      );
    }

    setFilteredData(updatedData);
  }, [searchText, activeFilter]);

  // Toggle filter logic
  const handleFilter = (category: ActiveFilter) => {
    setActiveFilter((prevFilter) =>
      prevFilter === category ? null : category
    );
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
