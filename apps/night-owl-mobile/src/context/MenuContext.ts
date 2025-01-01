import { createContext, SetStateAction } from 'react';
import { ActiveFilter, useMenu } from '../hooks/use-menu';

type MenuContextType = ReturnType<typeof useMenu>;

export const MenuContext = createContext<MenuContextType>({
  searchText: '',
  setSearchText: function (value: SetStateAction<string>): void {
    throw new Error('Function not implemented.');
  },
  filteredData: [],
  activeFilter: 'default' as ActiveFilter,
  setActiveFilter: function (value: SetStateAction<string>): void {
    throw new Error('Function not implemented.');
  },
  handleFilter: undefined,
});
