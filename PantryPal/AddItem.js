/* 
 * File: PantryPal/AddItem.js
 * Description: This is the add item screen
 * It allows the user to add an item to the pantry.
 * It is accessed from the Pantry screen.
 */

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
} from './PantryStorage.ts';
// This is the snackbar
import Snackbar from 'react-native-snackbar';
// Import the styles
import styles from './Styles.js';
// Load the background image
import image from './Images/pantryimage.jpg';

// This is the add item screen
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
  // These are the states for the date pickers
  const [showDatePickerPurchase, setShowDatePickerPurchase] = useState(false);
  const [showDatePickerExpiration, setShowDatePickerExpiration] = useState(false);

  // This is the function to show the date picker
  const showDatepicker = (datePickerType) => {
    if (datePickerType === 'purchase') {
      setShowDatePickerPurchase(true);
    } else if (datePickerType === 'expiration') {
      setShowDatePickerExpiration(true);
    }
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
      // Reset the input fields
      setName('');
      setDatePurchased(new Date());
      setExpirationDate(new Date());
      setQuantity('');
      setInRefrigerator(false);
      setInFreezer(false);
      setInPantry(false);
      Snackbar.show({
        text: 'Item added!',
        duration: Snackbar.LENGTH_SHORT,
      });
      // Go back to the pantry screen
      navigation.goBack();
    } 
    catch (error) {
      console.log(error);
      Snackbar.show({
        text: 'Item not added!',
        duration: Snackbar.LENGTH_SHORT,
      });
      throw new Error('Item not added' + error);
    }
  }

  // Text input validation
  const validateName = (inputText) => {
    if (inputText.trim() === '') {
      Snackbar.show({
        text: 'Please enter a name',
        duration: Snackbar.LENGTH_SHORT,
      });
      setName('');
      setErrorMessage('No item name')
    }
    else {
      setErrorMessage('');
      setName(inputText);
    }
  };

  // Number input validation
  const validateQuantity = (inputText) => {
    const number = parseInt(inputText);
    if (isNaN(number)) {
      Snackbar.show({
        text: 'Please enter a valid number',
        duration: Snackbar.LENGTH_SHORT,
      });
      setQuantity(0);
      setErrorMessage('Not a number');
    }
    else if (number < 0) {
      Snackbar.show({
        text: 'Please enter a positive number',
        duration: Snackbar.LENGTH_SHORT,
      });
      setQuantity(0);
      setErrorMessage('Negative number');
    }
    else {
      setErrorMessage('');
      setQuantity(inputText);
    }
  };
  
  return (
    <ImageBackground
      source={image}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={styles.addContainer}>
        <TextInput
          placeholder='Enter Name'
          value={name}
          onChangeText={(name) => validateName(name)}
          style={styles.textBox2}
        />
        <TextInput
          keyboardType='numeric'
          placeholder='Enter a Quantity'
          onChangeText={(quantity) => validateQuantity(quantity)}
          value={quantity}
          maxLength={5}
          style={styles.textBox2}
        />
        <View style={styles.addTextContainer}>
          <Text style={styles.status}>Purchased: {datePurchased.toDateString()}</Text>
        </View>
        <View style={styles.addTextContainer}>
          <Text style={styles.status}>Expires: {expirationDate.toDateString()}</Text>
        </View>
        <View style={styles.buttonContainer2}>
          <Button
            title='Purchase Date'
            color='goldenrod'
            onPress={() => showDatepicker('purchase')}
          />
          {showDatePickerPurchase && (
            <DateTimePicker
              value={datePurchased}
              mode='date'
              display='default'
              onChange={(_, selectedPurDate) => {
                setShowDatePickerPurchase(false);
                if (selectedPurDate) {
                  setDatePurchased(new Date(selectedPurDate));
                }
              }}
            />
          )}
          <Text>          </Text>
          <Button
            title='Expiration Date'
            color='darkred'
            onPress={() => showDatepicker('expiration')}
          />
          {showDatePickerExpiration && (
            <DateTimePicker
              value={expirationDate}
              mode='date'
              display='default'
              onChange={(_, selectedExpDate) => {
                setShowDatePickerExpiration(false);
                if (selectedExpDate) {
                  setExpirationDate(new Date(selectedExpDate));
                }
              }}
            />
          )}
        </View>
        <View style={styles.addTextContainer}>
          <Text style={styles.addText}>Location of {name}</Text>
        </View>
        <View style={styles.addTextContainer}>
          <Text style={styles.addText}>Refrigerator: {inRefrigerator ? 'Yes' : 'No'}</Text>
          <Text style={styles.addText}>     Freezer: {inFreezer ? 'Yes' : 'No'}</Text>
        </View>
        <View style={styles.addTextContainer}>
          <Text style={styles.addText}>Pantry: {inPantry ? 'Yes' : 'No'}</Text>
        </View>
        <View style={styles.buttonContainer2}>
          <Button
            title='Refrigerator'
            color = 'blue'
            onPress={() => setInRefrigerator(!inRefrigerator)}
          />
          <Text>          </Text>
          <Button
            title='Freezer'
            color = 'purple'
            onPress={() => setInFreezer(!inFreezer)} />
          <Text>          </Text>
          <Button
          title='Pantry'
          color = 'slategray'
          onPress={() => setInPantry(!inPantry)} />
        </View>
        <View style={styles.buttonContainer3}>
          <Button color={'green'} title='Add Item' onPress={ async () => {
            if (name.trim() === '') {
              Snackbar.show({
                text: 'Cannot save nameless item!',
                duration: Snackbar.LENGTH_SHORT,
              });
            } if (quantity === 0) {
              Snackbar.show({
                text: 'Cannot save item without a quantity!',
                duration: Snackbar.LENGTH_SHORT,
              });
            }
            else {
              await saveItem();
            }
          }} 
          />
          <Text>          </Text>
          <Button color={'red'} title='Cancel' onPress={() => {
            navigation.goBack();
          }}
          />
        </View>
      </View>
    </ImageBackground>
  )
}

export default AddItem;