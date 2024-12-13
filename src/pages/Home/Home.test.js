import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '@store/store';
import { HomePage } from './Home';

describe('Home Component', () => {
  test('should render HomePage correctly with active menu', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    const dashboardButton = getByRole('button', { name: /Dashboard/i });
    const settingsButton = getByRole('button', { name: /Tipsters/i });
    const profileButton = getByRole('button', { name: /Statistics/i });

    expect(dashboardButton).toBeInTheDocument();
    expect(settingsButton).toBeInTheDocument();
    expect(profileButton).toBeInTheDocument();
  });

  test('should toggle mobile menu when button is clicked', () => {
    const { getByLabelText, getAllByRole } = render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    expect(getByLabelText('Open menu')).toBeInTheDocument();
    fireEvent.click(getByLabelText('Open menu'));
    const dashboardButton = getAllByRole('button', { name: /Dashboard/i });
    expect(dashboardButton.length).toBeGreaterThan(0);
  });

  test('should filter tipsters based on category', () => {
    const { getByText, getByRole } = render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    fireEvent.click(getByRole('button', { name: /Football/i }));

    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('Tom Brown')).toBeInTheDocument();
  });

  test('should display recent predictions correctly', () => {
    const {getByRole} = render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    expect(getByRole('heading', { name: /Recent Predictions/i })).toBeInTheDocument();
  });
});



