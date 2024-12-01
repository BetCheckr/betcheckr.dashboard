import { render, screen, fireEvent } from '@testing-library/react';
import ExampleComponent from './ExampleComponent';

test('renders button and handles click', () => {
  render(<ExampleComponent />);

  const button = screen.getByText('Click me!!!!');
  fireEvent.click(button);

  expect(button).toBeInTheDocument();
});
