import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import MyApp from './pages/_app';

test('renders learn react link', () => {
  render(<MyApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
