import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './components/sidebar.store';

// Configuración del store
const store = configureStore({
  reducer: {
    sidebar: sidebarReducer
  },
});

export default store;
