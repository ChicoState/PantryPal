/*
 * File: PantryPal/App.tsx
 * This is the main file for the app.
 * It contains the navigation stack for the app.
 * To add a new screen, create a new file for it, import it, and add it to the stack.
 * To add a navigation button, go to HomeScreen.js and add a new button to the view.
 */

// Necessary imports
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// Import the screens
import HomeScreen from './HomeScreen.js';
import GroceryList from './GroceryList.js';
import Pantry from './Pantry.js';
import AddItem from './AddItem.js';
import EditItem from './EditItem.js';

/*
 * Create the navigation stacks for the app
 * The main navigation stack is Stack
 * The pantry navigation stack is PantryStack
 * If you want to add a new navigation stack, create a new variable and add it to the Stack.Navigator
 * If you want to add a new screen to a navigation stack, add a new Stack.Screen and then add a new button to the screen in the HomeScreen
 */
const Stack = createStackNavigator();
const PantryStack = createStackNavigator();

// This is navigation stack for the Pantry screen
const PantryStackScreen = () => {
  return (
    <PantryStack.Navigator>
      <PantryStack.Screen name="Your Pantry" component={Pantry} />
      <PantryStack.Screen name="Add Item" component={AddItem} />
      <PantryStack.Screen name="Edit Item" component={EditItem} />
    </PantryStack.Navigator>
  );
};

// This is the main navigation stack for the app
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
