import React from 'react';
import { render, screen } from '@testing-library/react';
import CurrentPositionSelect from './CurrentPositionSelect';

test('renders learn react link', () => {
  render(<CurrentPositionSelect />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
