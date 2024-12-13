import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store/store';
import { App } from './App.jsx';
import { createRoot } from 'react-dom/client';

describe('Main Component', () => {
  test('renders without crashing', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const dashboardElement = getByRole('heading', { name: /Dashboard/i });
    expect(dashboardElement).toBeInTheDocument();
  });

  test('renders the App component within the Provider', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    createRoot(container).render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const appElement = await screen.findAllByText('Dashboard');
    expect(appElement.length).toBeGreaterThan(0);

    container.remove();
  });
});