import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
// This is the local storage methods
import {
  storage,
  loadPantry,
  saveItem,
  loadItem,
  deleteItem,
  updateDatePurchased,
  updateQuantity,
  updateLocation,
  updateExpirationDate,
  updateBestBy,
  updateExpiration,
  PantryLoadListError,
  
} from './Storage';


//Will be the pantry screen
//Empty right now

const SecondScreen = ({navigation}) => {
  const [pantryData, setPantryData] = useState([]);

  // This loads the pantry data from local storage
  useEffect(() => {
    // Load the pantry data from local storage
    loadPantry()
      .then(async (pantryKeys) => {
        const loadedDataPromises = pantryKeys.map((key) => loadItem(key));
        const loadedData = await Promise.all(loadedDataPromises);
        setPantryData(loadedData);
      })
      .catch((error) => {
        // This is for debugging purposes
        console.log(error);
        // This is for the user
        throw new PantryLoadListError('Failed to load pantry list' + error);
      });
  }, []);

  // This is the render method
  const renderItem = ({ item }) => (
    <view>
      <Text>Name: {item.name}</Text>
      <Text>Quantity: {item.quantity}</Text>
      <Text>Date Purchased: {item.datePurchased}</Text>
      <Text>Expiration Date: {item.expiration}</Text>

    </view>
  )

  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title = "Add Item" onPress = {() => navigation.navigate('AddItem')} />
      <Button title = "Delete Item" onPress = {() => navigation.navigate('DeleteItem')} />
      {pantryData.length === 0 ?(
        <Text>You have no items in your pantry.</Text>
      ) :(
        <FlatList>
          data = {pantryData}
          renderItem = {renderItem}
          keyExtractor = {item => item.key}
        </FlatList>
      )}
    </View>
  );
};

export default SecondScreen;