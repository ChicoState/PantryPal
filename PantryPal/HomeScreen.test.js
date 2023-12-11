import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from './HomeScreen';

test('renders HomeScreen', () => {
  const { getByText, getByTestId } = render(<HomeScreen />);

  // Check if the component renders correctly
  expect(getByText('Grocery List')).toBeTruthy();
  expect(getByText('Pantry')).toBeTruthy();
  expect(getByText('Meal Plans')).toBeTruthy();
  expect(getByText('PantryPal Inc 2023')).toBeTruthy();
});

test('navigates to Grocery List screen', () => {
  const mockNavigation = { navigate: jest.fn() };
  const { getByText } = render(<HomeScreen navigation={mockNavigation} />);

  fireEvent.press(getByText('Grocery List'));

  expect(mockNavigation.navigate).toHaveBeenCalledWith('Grocery List');
});

test('navigates to Pantry screen', () => {
  const mockNavigation = { navigate: jest.fn() };
  const { getByText } = render(<HomeScreen navigation={mockNavigation} />);

  fireEvent.press(getByText('Pantry'));

  expect(mockNavigation.navigate).toHaveBeenCalledWith('Pantry');
});

test('navigates to Meal Plans screen', () => {
  const mockNavigation = { navigate: jest.fn() };
  const { getByText } = render(<HomeScreen navigation={mockNavigation} />);

  fireEvent.press(getByText('Meal Plans'));

  expect(mockNavigation.navigate).toHaveBeenCalledWith('Meal Plans');
});
