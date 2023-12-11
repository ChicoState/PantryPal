import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MealScreen from './MealScreen';

test('renders MealScreen', () => {
  const { getByPlaceholderText, getByText } = render(<MealScreen />);

  const mealInput = getByPlaceholderText('Enter a Meal');
  const addMealButton = getByText('Add Meal');

  fireEvent.changeText(mealInput, 'New Meal');
  fireEvent.press(addMealButton);
});

test('displays all pre-coded meals in a modal', () => {
  const { getByText, queryByText } = render(<MealScreen />);

  const displayAllMealsButton = getByText('Display All Meals');

  fireEvent.press(displayAllMealsButton);

  fireEvent.press(queryByText('Close'));
});

test('adds a meal to the list', () => {
  const { getByPlaceholderText, getByText, queryByText } = render(<MealScreen />);

  const mealInput = getByPlaceholderText('Enter a Meal');
  const addMealButton = getByText('Add Meal');

  fireEvent.changeText(mealInput, 'New Meal');
  fireEvent.press(addMealButton);

  expect(queryByText('New Meal')).toBeTruthy();
});

test('removes a meal from the list', () => {
  const { getByPlaceholderText, getByText, queryByText } = render(<MealScreen />);

  const mealInput = getByPlaceholderText('Enter a Meal');
  const addMealButton = getByText('Add Meal');

  fireEvent.changeText(mealInput, 'New Meal');
  fireEvent.press(addMealButton);

  const removeButton = getByText('X');
  fireEvent.press(removeButton);

  expect(queryByText('New Meal')).toBeFalsy();
});

test('displays meal details correctly', () => {
  const { getByPlaceholderText, getByText, queryByText } = render(<MealScreen />);

  const mealInput = getByPlaceholderText('Enter a Meal');
  const addMealButton = getByText('Add Meal');

  fireEvent.changeText(mealInput, 'Spaghetti Bolognese');
  fireEvent.press(addMealButton);

  const mealItem = getByText('Spaghetti Bolognese - 500 calories\nIngredients: Spaghetti, Bolognese sauce, Ground beef');
  expect(mealItem).toBeTruthy();
});
