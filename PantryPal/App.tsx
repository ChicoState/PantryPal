import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import GroceryList from './GroceryList';
import SecondScreen from './SecondScreen';
import AddItem from './AddItem';
import DeleteItem from './DeleteItem';

const Stack = createStackNavigator();

//App just consists of a stack navigator currently
//To navigate to a screen create a file for it, import it, and add it below
//To add navigation button go to home screen

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pantry Pal">
        <Stack.Screen name="Pantry Pal" component={HomeScreen} />
        <Stack.Screen name="Grocery List" component={GroceryList} />
        <Stack.Screen name="Pantry" component={SecondScreen} />
        <Stack.Screen name="Add Item" component={AddItem} />
        <Stack.Screen name="Delete Item" component={DeleteItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
