import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './Home';

describe('HomePage Component', () => {
  it('renders the header and link correctly', () => {
    // Render the component wrapped in MemoryRouter for routing support
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    // Verify the header text is rendered
    const header = screen.getByText(/Welcome to BetCheckr HomePage/i);
    expect(header).toBeInTheDocument();

    // Verify the link is rendered and has the correct attributes
    const link = screen.getByRole('link', { name: /Go to Example Page/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/bet/1');
  });
});
