import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Pantry from './Pantry';

test('renders Pantry', () => {
  const { getByText, getByTestId } = render(<Pantry />);

  // Check if the component renders correctly
  expect(getByText('Your Pantry')).toBeTruthy();

  // Check if the "Add Item" button is rendered
  expect(getByTestId('add-item-button')).toBeTruthy();
});

test('navigates to Add Item screen when "Add Item" button is pressed', () => {
  const mockNavigation = { navigate: jest.fn() };
  const { getByText } = render(<Pantry navigation={mockNavigation} />);

  // Trigger the onPress event of the "Add Item" button
  fireEvent.press(getByText('Add Item'));

  // Check if the navigate function is called with the correct argument
  expect(mockNavigation.navigate).toHaveBeenCalledWith('Add Item');
});
