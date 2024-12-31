import { createContext, SetStateAction } from 'react';
import { useMenu } from '../hooks/use-app-menu';

type MenuContextType = ReturnType<typeof useMenu>;

export const MenuContext = createContext<MenuContextType>({
  searchText: '',
  setSearchText: function (value: SetStateAction<string>): void {
    throw new Error('Function not implemented.');
  },
  filteredData: [],
  activeFilter: '',
  setActiveFilter: function (value: SetStateAction<string>): void {
    throw new Error('Function not implemented.');
  },
  handleFilter: undefined,
});
