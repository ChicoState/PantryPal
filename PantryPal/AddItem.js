import React, {useEffect, useState } from 'react';
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  FlatList,
  Button,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
// This is the local storage methods
import {
  addItem,
  addItemError
} from './Storage.ts';
// This is the snackbar
import Snackbar from 'react-native-snackbar';
// Import the styles
import styles from './Styles.js';
// Load the background image
import image from './Images/pantryimage.jpg';


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
  // This is temporary to let the user know edit is not available
  const [isDialogVisible, setDialogVisible] = useState(false);

  // This is the function to show the date picker
  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  // This the the temporary function to let the user know edit is not available
  const showDialog = () => {
    setDialogVisible(true);
  };
  const hideDialog = () => {
    setDialogVisible(false);
  };

  // This is the function to add an item to our pantry
  const saveItem = async () => {
    try {
      await addItem(
        name,
        datePurchased.toString(),
        expirationDate.toString(),
        quantity,
        inRefrigerator,
        inFreezer,
        inPantry,
      );
      Snackbar.show({
        text: 'Item added successfully',
        duration: Snackbar.LENGTH_SHORT,
      });
      // Clear the input fields after adding
      setName('');
      setQuantity(0);
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
      throw new Error('Item not added');
    }
  }

  // Text input validation
  const validateName = (inputText) => {
    if (inputText.trim() === '') {
      Snackbar.show({
        text: 'Please enter a valid name!',
        duration: Snackbar.LENGTH_SHORT,
      });
      errorMessage('No item entered');
      setErrorMessage(errorMessage);
      setName('');
      setQuantity(0);
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
  
  return (
    <ImageBackground
      source={image}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View>
        <TextInput
          placeholder='Enter Name'
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
        
        <Button color={'green'} title='Save Item' onPress={ async () => {
          await saveItem();
          Snackbar.show({
            text: 'Item added successfully',
            duration: Snackbar.LENGTH_SHORT,
          });
          navigation.navigate('Pantry');
        }} />
      </View>
    </ImageBackground>
  )

}

export default AddItem;