/*
 * File: PantryPal/EditItem.js
 * Description: This is the EditItem screen
 * It allows the user to edit an item in the pantry.
 * It is accessed from the Pantry screen.
 */

import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, Button, TextInput, ImageBackground} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
// Storage functions
import {editItem, loadItem} from './Storage';
// This is for the route from the pantry screen
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
// This is the snackbar
import Snackbar from 'react-native-snackbar';
// Import the styles
import styles from './Styles.js';
// Load the background image
// import image from './Images/pantryimage.jpg';

//
type MyParamList = ParamListBase & {
  EditItem: {itemName: string};
  route: RouteProp<MyParamList, 'EditItem'>;
};

interface EditItemProps {
  navigation: NavigationProp<MyParamList, 'EditItem'>;
  route: RouteProp<MyParamList, 'EditItem'>;
}

// This is the edit item screen
const EditItem: React.FC<EditItemProps> = ({navigation, route}) => {
  const itemName: string = route.params.itemName;
  const [quantity, setQuantity] = useState<number>(0);
  const [datePurchased, setDatePurchased] = useState<Date>(new Date());
  const [expirationDate, setExpirationDate] = useState<Date>(new Date());
  const [inRefrigerator, setInRefrigerator] = useState<boolean>(false);
  const [inFreezer, setInFreezer] = useState<boolean>(false);
  const [inPantry, setInPantry] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [showDatePickerPurchase, setShowDatePickerPurchase] =
    useState<boolean>(false);
  const [showDatePickerExpiration, setShowDatePickerExpiration] =
    useState<boolean>(false);
  const image = require('./Images/pantryimage.jpg');

  const showDatepicker = (datePickerType: string): void => {
    if (datePickerType === 'purchase') {
      setShowDatePickerPurchase(true);
    } else if (datePickerType === 'expiration') {
      setShowDatePickerExpiration(true);
    }
  };

  const fetchData = useCallback(async (): Promise<void> => {
    try {
      const item = await loadItem(itemName);
      // Set the item data
      if (item === null) {
        throw new Error('Item not found!');
      }
      setQuantity(item.quantity);
      setDatePurchased(new Date(item.datePurchased));
      setExpirationDate(new Date(item.expiration));
      setInRefrigerator(item.fridge);
      setInFreezer(item.freezer);
      setInPantry(item.pantry);
      // Handle the item data as needed
    } catch (error: any) {
      setErrorMessage(error.message);
      Snackbar.show({
        text: errorMessage,
        duration: Snackbar.LENGTH_LONG,
      });
    }
  }, [errorMessage, itemName]);

  const updateItem = async (): Promise<void> => {
    try {
      await editItem(
        itemName,
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
    } catch (error: any) {
      console.log(error.message);
      setErrorMessage(error.message);
      Snackbar.show({
        text: 'Failed to update item!',
        duration: Snackbar.LENGTH_LONG,
      });
    }
  };

  // Number input validation
  const validateQuantity = (inputText: any) => {
    const number = parseInt(inputText, 10);
    if (isNaN(number)) {
      Snackbar.show({
        text: 'Please enter a valid number',
        duration: Snackbar.LENGTH_SHORT,
      });
      setQuantity(0);
      setErrorMessage('Not a number');
    } else if (number < 0) {
      Snackbar.show({
        text: 'Please enter a positive number',
        duration: Snackbar.LENGTH_SHORT,
      });
      setQuantity(0);
      setErrorMessage('Negative number');
    } else {
      setErrorMessage('');
      setQuantity(inputText);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <ImageBackground
      source={image}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.addContainer}>
        <View style={styles.addTextContainer}>
          <Text style={styles.addText}>Editing {itemName}</Text>
        </View>
        <TextInput
          keyboardType="numeric"
          placeholder="Enter a Quantity"
          onChangeText={quantity => validateQuantity(quantity)}
          value={quantity}
          maxLength={5}
          style={styles.textBox2}
        />
        <View style={styles.addTextContainer}>
          <Text style={styles.status}>
            Purchased: {datePurchased.toDateString()}
          </Text>
        </View>
        <View style={styles.addTextContainer}>
          <Text style={styles.status}>
            Expires: {expirationDate.toDateString()}
          </Text>
        </View>
        <View style={styles.buttonContainer2}>
          <Button
            title="Purchase Date"
            color="goldenrod"
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
            title="Expiration Date"
            color="darkred"
            onPress={() => showDatepicker('expiration')}
          />
          {showDatePickerExpiration && (
            <DateTimePicker
              value={expirationDate}
              mode="date"
              display="default"
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
          <Text style={styles.addText}>Location of {itemName}</Text>
        </View>
        <View style={styles.addTextContainer}>
          <Text style={styles.addText}>
            Refrigerator: {inRefrigerator ? 'Yes' : 'No'}
          </Text>
          <Text style={styles.addText}>
            {'     '}
            Freezer: {inFreezer ? 'Yes' : 'No'}
          </Text>
        </View>
        <View style={styles.addTextContainer}>
          <Text style={styles.addText}>Pantry: {inPantry ? 'Yes' : 'No'}</Text>
        </View>
        <View style={styles.buttonContainer2}>
          <Button
            title="Refrigerator"
            color="blue"
            onPress={() => setInRefrigerator(!inRefrigerator)}
          />
          <Text>          </Text>
          <Button
            title="Freezer"
            color="purple"
            onPress={() => setInFreezer(!inFreezer)} />
          <Text>          </Text>
          <Button
            title="Pantry"
            color="slategray"
            onPress={() => setInPantry(!inPantry)}
          />
        </View>
        <View style={styles.buttonContainer2}>
          <Button
            color={'green'}
            title="Edit Item"
            onPress={async () => {
              if (quantity === 0) {
                Snackbar.show({
                  text: 'Cannot save item without a quantity!',
                  duration: Snackbar.LENGTH_SHORT,
                });
              } else {
                await updateItem();
                Snackbar.show({
                  text: 'Item updated!',
                  duration: Snackbar.LENGTH_SHORT,
                });
                navigation.goBack();
              }
            }}
          />
          <Text>          </Text>
          <Button
            color={'red'}
            title="Cancel"
            onPress={() => {
              navigation.goBack();
          }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default EditItem;
