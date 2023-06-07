import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import extend-expect
import Calculator from '../components/Calculator';

test('renders Calculator correctly', () => {
  const { container } = render(<Calculator />);
  expect(container).toMatchSnapshot();
});

test('updates calculator data correctly when a button is clicked', () => {
  const { getAllByText } = render(<Calculator />);

  fireEvent.click(getAllByText('2')[0]); // Select the first matching element
  expect(getAllByText('2')[0]).toBeInTheDocument();

  fireEvent.click(getAllByText('+')[0]);
  expect(getAllByText('+')[0]).toBeInTheDocument();

  fireEvent.click(getAllByText('5')[0]);
  expect(getAllByText('5')[0]).toBeInTheDocument();

  fireEvent.click(getAllByText('=')[0]);
  expect(getAllByText('7')[0]).toBeInTheDocument();
});
