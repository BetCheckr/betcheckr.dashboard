import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BetPage from './BetPage';

describe('BetPage Component', () => {
  it('renders the header and link correctly', () => {
    // Render the component within MemoryRouter for routing support
    render(
      <MemoryRouter>
        <BetPage />
      </MemoryRouter>
    );

    // Check for the header text
    const header = screen.getByText(/Welcome to BetCheckr BetPage/i);
    expect(header).toBeInTheDocument();

    // Check for the link and its text
    const link = screen.getByRole('link', { name: /Go to Bet 1/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/bet/1');
  });
});
