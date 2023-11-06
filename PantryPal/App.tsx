/*
 * This is the main file for the app.
 * It contains the navigation stack for the app.
 * To add a new screen, create a new file for it, import it, and add it to the stack.
 * To add a navigation button, go to HomeScreen.js and add a new button to the view.
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import GroceryList from './GroceryList';
import SecondScreen from './SecondScreen';
import AddItem from './AddItem';

const Stack = createStackNavigator();
const PantryStack = createStackNavigator();

// This is navigation stack for the pantry screen
const PantryStackScreen = () => {
  return (
    <PantryStack.Navigator>
      <PantryStack.Screen name="Your Pantry" component={SecondScreen} />
      <PantryStack.Screen name="Add Item" component={AddItem} />
    </PantryStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home Screen">
        <Stack.Screen
          name="Home Screen"
          component={HomeScreen}
          options={{headerShown: false}} // Hide header for HomeScreen
        />
        <Stack.Screen name="Grocery List" component={GroceryList} />
        <Stack.Screen
          name="Pantry"
          component={PantryStackScreen}
          options={{headerShown: false}} // Hide header for PantryStackScreen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
