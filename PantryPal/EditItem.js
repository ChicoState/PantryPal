import React, {useEffect, useState } from 'react';
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
  
} from './Storage.js';

const EditItem = ({navigation}) => {
  const[name, ] = useState('');

  const EditItem = async () => {
    
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
    title: {
      fontSize: 40,
      position: 'absolute', // Position the title at the top
      textAlign: 'center',
      marginTop: 0,
      marginBottom: 20,
      top: 20, // Adjust as needed for vertical positioning
      fontFamily: 'Trebuchet MS', // Change to your desired font
      color: 'yellow', // Change to your desired color
      fontWeight: 'bold',
      borderWidth: 5, // Add a border
      borderColor: 'white', // Border color
      borderRadius: 10, // Border radius
      padding: 10, // Padding inside the border
      backgroundColor: 'black',
    },
    text: {
      fontSize: 24,
      fontFamily: 'Trebuchet MS', // Change to your desired font
      color: 'black', // Change to your desired color
      fontWeight: 'bold',
    },
  });
  
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>Edit an Item</Text>

    </View>
  )

}

export default EditItem;