import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import GroceryList from './GroceryList';
import SecondScreen from './SecondScreen';

const Stack = createStackNavigator();

//App just consists of a stack navigator currently
//To navigate to a screen create a file for it, import it, and add it below
//To add navigation button go to home screen

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home Screen">
        <Stack.Screen 
          name = "Home Screen" 
          component = {HomeScreen} 
          options={{ headerShown: false }} // Hide header for HomeScreen
          />
        <Stack.Screen name = "Grocery List" component = {GroceryList} />
        <Stack.Screen name = "Pantry" component = {SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;