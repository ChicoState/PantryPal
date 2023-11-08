/*
 * File: PantryPal/EditItem.js
 * Description: This is the EditItem screen
 * It allows the user to edit an item in the pantry.
 * It is accessed from the Pantry screen.
 */

import React, {useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  Modal,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
// Storage functions
import {
  editItem,
  loadItem,
} from './Storage.ts';
// This is for the route from the pantry screen
import { useRoute } from '@react-navigation/native';
// This is the snackbar
import Snackbar from 'react-native-snackbar';
// Import the styles
import styles from './Styles.js';
// Load the background image
import image from './Images/pantryimage.jpg';

const EditItem = ({navigaton}) => {
  // This the route to the item
  const route = useRoute();
  // This is the item to edit
  const itemName  = route.params.key;
  // These are the states for the input fields
  const[quantity, setQuantity] = useState(0);
  const[datePurchased, setDatePurchased] = useState(new Date());
  const[expirationDate, setExpirationDate] = useState(new Date());
  const[inRefrigerator, setInRefrigerator] = useState(false);
  const[inFreezer, setInFreezer] = useState(false);
  const[inPantry, setInPantry] = useState(false);
  const[errorMessage, setErrorMessage] = useState('');
  const[showDatePicker, setShowDatePicker] = useState(false);
  const[itemData, setItemData] = useState([]);
  // const [selectedItem, setSelectedItem] = useState(null);
  // const [isEditModalVisible, setEditModalVisible] = useState(false);

  // Screen Functions
  // This is the function to show the date picker
  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  // This to fetch the item data from the firebase
  const fetchData = async () => {
    const item = await loadItem(itemName);
    setItemData(item);
  };

  const updateItem = async () => {
    try {
      await editItem(
        name,
        datePurchased.toString(),
        expirationDate.toString(),
        quantity,
        inRefrigerator,
        inFreezer,
        inPantry,
      );
      // Reset the input fields
      setDatePurchased(new Date());
      setExpirationDate(new Date());
      setQuantity(0);
      setInRefrigerator(false);
      setInFreezer(false);
      setInPantry(false);

    } catch (error) {
      setErrorMessage(error.message);
      // Show the error on the snackbar
      Snackbar.show({
        text: errorMessage,
        duration: Snackbar.LENGTH_LONG,
      });
    }
  }

  // This is to handle the incoming data from the route
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <ImageBackground
      source={image}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View>
        <Text> Editing Item: {itemName} </Text>
        <TextInput
          keyboardType='numeric'
          placeholder='Enter a Quantity'
          onChangeText={setQuantity}
          value={quantity}
          maxLength={5}
          style={styles.textBox2}
        />
        <Button title='Select Date Purchased' onPress={showDatepicker} />
        <Text style={styles.status}>Date Purchased: {datePurchased.toDateString()}</Text>
        {showDatePicker && (
          <DateTimePicker
            value={datePurchased}
            mode='date'
            display='default'
            onChange={(_, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) {
                setDatePurchased(new Date (selectedDate));
              }
            }}
          />
        )}
        <Button title='Select Expiration' onPress={showDatepicker} />
        <Text style={styles.status}>Expires: {expirationDate.toDateString()}</Text>
        {showDatePicker && (
          <DateTimePicker
            value={expirationDate}
            mode='date'
            display='default'
            onChange={(_, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) {
                setExpirationDate(new Date(selectedDate));
              }
            }}
          />
        )}
        <Button title='In Refrigerator' onPress={() => setInRefrigerator(!inRefrigerator)} />
        <Text style={styles.status}>In Refrigerator?: {inRefrigerator ? 'Yes' : 'No'}</Text>
        <Button title='Freezer' onPress={() => setInFreezer(!inFreezer)} />
        <Text style={styles.status}>In Freezer?: {inFreezer ? 'Yes' : 'No'}</Text>
        <Button title='Pantry' onPress={() => setInPantry(!inPantry)} />
        <Text style={styles.status}>In Pantry: {inPantry ? 'Yes' : 'No'}</Text>
        
        <Button color={'green'} title='Save Changes' onPress={ async () => {
          await updateItem();
        }} />
      </View>
    </ImageBackground>
  );
}

export default EditItem;