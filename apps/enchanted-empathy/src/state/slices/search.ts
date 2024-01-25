// searchSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchResult {
  id: string;
  // Add other search result details as needed
}

const initialState: SearchResult[] = [];

const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearchResults: (state, action: PayloadAction<SearchResult[]>) => {
      return action.payload;
    },
    clearSearchResults: (state) => {
      return [];
    },
    // Add other search-related actions
  },
});

export const { updateSearchResults, clearSearchResults } = SearchSlice.actions;

export default SearchSlice.reducer;
