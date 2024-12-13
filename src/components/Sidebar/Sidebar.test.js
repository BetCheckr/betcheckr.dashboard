import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Sidebar } from './Sidebar';
import { updateActiveMenuItem, updateIsMobileMenuOpen } from '@store/components/sidebar.store';

const mockStore = configureStore([]);

describe('Sidebar Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      sidebar: {
        activeMenuItem: 'dashboard',
      },
    });
  });

  it('renders the sidebar with the correct title', () => {
    render(
      <Provider store={store}>
        <Sidebar />
      </Provider>
    );

    expect(screen.getByText(/BetCheckr/i)).toBeInTheDocument();
  });

  it('renders the menu items', () => {
    render(
      <Provider store={store}>
        <Sidebar />
      </Provider>
    );

    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Tipsters/i)).toBeInTheDocument();
    expect(screen.getByText(/Statistics/i)).toBeInTheDocument();
  });

  it('highlights the active menu item', () => {
    render(
      <Provider store={store}>
        <Sidebar />
      </Provider>
    );

    const activeItem = screen.getByText(/Dashboard/i);
    expect(activeItem).toHaveClass('bg-white/10 text-white');
  });

  it('dispatches actions on menu item click', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');

    render(
      <Provider store={store}>
        <Sidebar />
      </Provider>
    );

    fireEvent.click(screen.getByText(/Tipsters/i));

    expect(dispatchSpy).toHaveBeenCalledWith(updateActiveMenuItem('tipsters'));
    expect(dispatchSpy).toHaveBeenCalledWith(updateIsMobileMenuOpen(false));
  });

  it('renders the close button when isMobile is true', () => {
    render(
      <Provider store={store}>
        <Sidebar isMobile={true} />
      </Provider>
    );

    expect(screen.getByLabelText(/Close menu/i)).toBeInTheDocument();
  });

  it('dispatches action to close mobile menu when close button is clicked', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');

    render(
      <Provider store={store}>
        <Sidebar isMobile={true} />
      </Provider>
    );

    fireEvent.click(screen.getByLabelText(/Close menu/i));

    expect(dispatchSpy).toHaveBeenCalledWith(updateIsMobileMenuOpen(false));
  });
});