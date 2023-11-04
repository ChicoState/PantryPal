import React, {useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
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
  PantrySaveListError
  
} from './Storage.ts';
// This is the snackbar
import Snackbar from 'react-native-snackbar';

const AddItem = ({navigation}) => {
  // These are the states for the input fields
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [datePurchased, setDatePurchased] = useState(new Date());
  const [expirationDate, setExpirationDate] = useState(new Date());
  const [inRefrigerator, setInRefrigerator] = useState(false);
  const [inFreezer, setInFreezer] = useState(false);
  const [inPantry, setInPantry] = useState(false);
  // This is the state for the error message
  const [errorMessage, setErrorMessage] = useState('');
  // This is the state for the date picker
  const [showDatePicker, setShowDatePicker] = useState(false);

  // This is the function to show the date picker
  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  // This is the function to add an item to our pantry
  const addItem = async () => {
    try {
      await saveItem(name, datePurchased, quantity, inRefrigerator, inFreezer, inPantry, expirationDate);
      Snackbar.show({
        text: 'Item added successfully',
        duration: Snackbar.LENGTH_SHORT,
      });
      // Clear the input field after adding
      setName('');
      setQuantity('');
      setDatePurchased(new Date());
      setExpirationDate(new Date());
      setInRefrigerator(false);
      setInFreezer(false);
      setInPantry(false);
    } 
    catch (error) {
      console.log(error);
      Snackbar.show({
        text: 'Item not added',
        duration: Snackbar.LENGTH_SHORT,
      });
      throw new PantrySaveListError('Item not added');
    }
  }

  const validateName = (inputText) => {
    if (inputText.trim() === '') {
      Snackbar.show({
        text: 'Please enter an item',
        duration: Snackbar.LENGTH_SHORT,
      });
      setErrorMessage('No item entered');
      setName('');
      setQuantity('');
      setDatePurchased(new Date());
      setExpirationDate(new Date());
      setInRefrigerator(false);
      setInFreezer(false);
      setInPantry(false);
    }
    // inputText.includes(' ') ||
    else if (inputText.includes('_')) {
      Snackbar.show({
        text: 'Item name cannot contain underscores',
        duration: Snackbar.LENGTH_SHORT,
      });
      setErrorMessage('Item name contains underscores');
      setName('');
      setQuantity('');
      setDatePurchased(new Date());
      setExpirationDate(new Date());
      setInRefrigerator(false);
      setInFreezer(false);
      setInPantry(false);
    }
    else {
      setErrorMessage('');
      setErrorMessage(errorMessage);
      setName(inputText);
    }
  };

  const validateDate = (inputDate) => {
    if (inputDate === null) {
      Snackbar.show({
        text: 'Please enter a date',
        duration: Snackbar.LENGTH_SHORT,
      });
      errorMessage('No date entered');
      setErrorMessage(errorMessage);
      setDatePurchased(new Date());
    }
    else {
      setErrorMessage('');
      setDatePurchased(inputDate);
    }
  }


  const validateExpDate = (inputDate) => {
    currentDate = new Date();
    if (inputDate === null || inputDate < currentDate) {
      Snackbar.show({
        text: 'Please enter a valid date',
        duration: Snackbar.LENGTH_SHORT,
      });
      setErrorMessage('No or invalid date entered');
      setDatePurchased(new Date());
    }
    else {
      setErrorMessage('');
      setDatePurchased(inputDate);
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative', // Add this to allow absolute positioning
    },
    textBox: {
      borderWidth: 2,
      borderColor: 'black',
      height: 40,
      width: 200,
      padding: 8,
      marginVertical: 10,
    },
    textBox2: {
      borderWidth: 2,
      borderColor: 'black',
      height: 40,
      width: 200,
      padding: 8,
      marginVertical: 10,
      marginBottom: 10,
    },
    title: {
      fontSize: 40,
      position: 'absolute', // Position the title at the top
      textAlign: 'center',
      marginTop: 0,
      marginBottom: 20,
      top: 20, // Adjust as needed for vertical positioning
      fontFamily: 'Trebuchet MS', // Change to your desired font
      color: 'darkgreen', // Change to your desired color
      fontWeight: 'bold',
      borderWidth: 5, // Add a border
      borderColor: 'green', // Border color
      borderRadius: 10, // Border radius
      padding: 10, // Padding inside the border
      backgroundColor: 'powderblue',
    },
    text: {
      fontSize: 24,
      fontFamily: 'Trebuchet MS', // Change to your desired font
      color: 'black', // Change to your desired color
      fontWeight: 'bold',
    },
    status: {
      fontSize: 14,
      fontFamily: 'Trebuchet MS', // Change to your desired font
      color: 'black', // Change to your desired color
      fontWeight: 'bold',
      marginBottom: 10,
    },
  });
  
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>Add an Item</Text>
      <TextInput
        placeholder='Enter a Food Item'
        value={name}
        onChangeText={(name) => validateName(name)}
        style={styles.textBox2}
      />
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
              setDatePurchased(selectedDate);
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
              setExpirationDate(selectedDate);
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
      <Button color={'green'} title='Add Item'onPress={addItem} />
    </View>
  )

}

export default AddItem;