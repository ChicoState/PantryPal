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

const DeleteItem = ({navigation}) => {
  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

    </View>
  )
}

export default DeleteItem;