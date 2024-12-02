import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    activeMenuItem: 'dashboard',
    isMobileMenuOpen: false,
  },
  reducers: {
    updateActiveMenuItem: (state, action) => {
      state.activeMenuItem = action.payload;
    },
    updateIsMobileMenuOpen: (state, action) => {
      state.isMobileMenuOpen = action.payload;
    },
  },
});

// Exporta las acciones
export const { updateActiveMenuItem, updateIsMobileMenuOpen } = sidebarSlice.actions;

// Exporta el reducer
export default sidebarSlice.reducer;
