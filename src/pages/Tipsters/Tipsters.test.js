import { render, screen } from '@testing-library/react';
import TipstersPage from './Tipsters'; // Asegúrate de ajustar la ruta

describe('TipstersPage Component', () => {
  it('renders the TipstersPage heading', () => {
    render(<TipstersPage />);
    const headingElement = screen.getByRole('heading', { name: /TipstersPage/i });
    expect(headingElement).toBeInTheDocument();
  });
});