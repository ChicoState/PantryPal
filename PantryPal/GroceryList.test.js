import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import GroceryList from './GroceryList';

test('adds an item to the list', () => {
  const { getByPlaceholderText, getByText } = render(<GroceryList />);

  const foodItemInput = getByPlaceholderText('Enter a Food Item');
  const quantityInput = getByPlaceholderText('Enter Quantity');
  const addItemButton = getByText('Add Item');

  fireEvent.changeText(foodItemInput, 'Tomatoes');
  fireEvent.changeText(quantityInput, '2');
  fireEvent.press(addItemButton);

  expect(getByText('Tomatoes : 2')).toBeTruthy();
});
