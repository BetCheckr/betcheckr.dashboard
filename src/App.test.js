import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store/store';
import { App } from './App.jsx';

describe('App Component', () => {
  test('renders without crashing', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const dashboardElement = getByRole('heading', { name: /Dashboard/i });
    expect(dashboardElement).toBeInTheDocument();
  });
});
