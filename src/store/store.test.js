import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer, { updateActiveMenuItem, updateIsMobileMenuOpen } from './components/sidebar.store';
import store from './store';

describe('Redux Store', () => {
  it('should be configured with the correct reducer for sidebar', () => {
    const state = store.getState();
    expect(state.sidebar).toBeDefined(); // Verifica que el reducer de sidebar esté en el estado
  });

  it('should have the correct initial state for sidebar', () => {
    const initialState = store.getState().sidebar;
    const expectedInitialState = {
      activeMenuItem: 'dashboard',
      isMobileMenuOpen: false,
    };
    expect(initialState).toEqual(expectedInitialState);
  });

  it('should update activeMenuItem when updateActiveMenuItem action is dispatched', () => {
    store.dispatch(updateActiveMenuItem('statistics'));
    const state = store.getState().sidebar;
    expect(state.activeMenuItem).toBe('statistics');
  });

  it('should update isMobileMenuOpen when updateIsMobileMenuOpen action is dispatched', () => {
    store.dispatch(updateIsMobileMenuOpen(true)); // Despacha la acción
    const state = store.getState().sidebar;
    expect(state.isMobileMenuOpen).toBe(true); // Verifica que isMobileMenuOpen haya cambiado a 'true'
  });

  it('should toggle isMobileMenuOpen state correctly', () => {
    store.dispatch(updateIsMobileMenuOpen(true)); // Despacha para abrir el menú
    let state = store.getState().sidebar;
    expect(state.isMobileMenuOpen).toBe(true); // Verifica que el menú esté abierto

    store.dispatch(updateIsMobileMenuOpen(false)); // Despacha para cerrar el menú
    state = store.getState().sidebar;
    expect(state.isMobileMenuOpen).toBe(false); // Verifica que el menú esté cerrado
  });
});
