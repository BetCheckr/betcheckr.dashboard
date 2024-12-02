import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./pages/HomePage', () => {
  const MockHomePage = () => <div>HomePage Mock</div>;
  MockHomePage.displayName = 'HomePage';
  return MockHomePage;
});

jest.mock('./pages/BetPage', () => {
  const MockBetPage = () => <div>BetPage Mock</div>;
  MockBetPage.displayName = 'BetPage';
  return MockBetPage;
});

test('renders HomePage by default', () => {
  render(<App />);

  expect(screen.getByText('HomePage Mock')).toBeInTheDocument();
});
