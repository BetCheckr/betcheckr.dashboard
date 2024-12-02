/* eslint-disable no-undef */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Mock de createRoot
jest.mock('react-dom/client', () => ({
  createRoot: jest.fn(() => ({
    render: jest.fn(),
  })),
}));

describe('Index file', () => {
  test('renders the App component inside StrictMode', () => {
    // Crear el rootElement antes de importar el archivo main.jsx
    const rootElement = document.createElement('div');
    rootElement.id = 'root';
    document.body.appendChild(rootElement);

    // Importa el archivo main.jsx
    require('./main.js');

    // Verifica que createRoot haya sido llamado con el elemento correcto
    expect(createRoot).toHaveBeenCalledWith(rootElement);

    // Verifica que se haya llamado al método render
    const mockRender = createRoot.mock.results[0].value.render;
    expect(mockRender).toHaveBeenCalledTimes(1);
    expect(mockRender.mock.calls[0][0].type).toBe(StrictMode);
    expect(mockRender.mock.calls[0][0].props.children.type).toBe(App);
  });
});
