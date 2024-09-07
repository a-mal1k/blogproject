import { createSlice } from '@reduxjs/toolkit';

const querySlice = createSlice({
  name: 'searchQuery',
  initialState: {
    searchQuery: 'Uncategorized',
    langQuery: 'en'
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setLangQuery: (state, action) => {
        state.langQuery = action.payload;
    }
  }
});

export const { setSearchQuery, setLangQuery } = querySlice.actions;
export default querySlice.reducer;
