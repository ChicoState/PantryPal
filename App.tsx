import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import GroceryList from './GroceryList';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Pantry Pal">
        <Stack.Screen name = "Pantry Pal" component = {HomeScreen} />
        <Stack.Screen name = "Grocery List" component = {GroceryList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;