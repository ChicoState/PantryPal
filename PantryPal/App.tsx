import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from './HomeScreen';
import GroceryList from './GroceryList';
import SecondScreen from './SecondScreen';
import AddItem from './AddItem';
import EditItem from './EditItem';
import DeleteItem from './DeleteItem';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

// This is the tab navigator for the pantry screen
function Pantry() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'midnightblue',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {
          fontSize: 16,
          fontFamily: 'Trebuchet MS',
          fontWeight: 'bold',
        },
        tabBarStyle: {backgroundColor: 'powderblue'},
      }}>
      <Tab.Screen name="Your Pantry" component={SecondScreen} />
      <Tab.Screen name="Add Item" component={AddItem} />
      <Tab.Screen name="Edit Item" component={EditItem} />
      <Tab.Screen name="Delete Item" component={DeleteItem} />
    </Tab.Navigator>
  );
}

//App just consists of a stack navigator currently
//To navigate to a screen create a file for it, import it, and add it below
//To add navigation button go to home screen

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pantry Pal">
        <Stack.Screen name="Pantry Pal" component={HomeScreen} />
        <Stack.Screen name="Grocery List" component={GroceryList} />
        <Stack.Screen
          name="Pantry"
          component={Pantry}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
