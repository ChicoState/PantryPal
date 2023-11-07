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
// This is the local storage methods
import {
  editItem,  
} from './Storage.ts';
// This is for the route
import { useRoute } from '@react-navigation/native';
// This is the snackbar
import Snackbar from 'react-native-snackbar';
// Import the styles
import styles from './Styles.js';
// Load the background image
import image from './Images/pantryimage.jpg';

const EditItem = ({navigator}) => {
  // This the route to the item
  const route = useRoute();
  // This is the item to edit
  const { item } = route.params?.data;

  // These are the states for the input fields
  const[quantity, setQuantity] = useState(0);
  const[datePurchased, setDatePurchased] = useState(item.itemData.datePurchased);
  const[expirationDate, setExpirationDate] = useState(item.itemData.expirationDate);
  const[inRefrigerator, setInRefrigerator] = useState(item.itemData.inRefrigerator);
  const[inFreezer, setInFreezer] = useState(item.itemData.inFreezer);
  const[inPantry, setInPantry] = useState(item.itemData.inPantry);
  const[errorMessage, setErrorMessage] = useState('');
  const[showDatePicker, setShowDatePicker] = useState(false);
  const[pantryData, setPantryData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditModalVisible, setEditModalVisible] = useState(false);

  const openEditModal = (item) => {
    setSelectedItem(item);
    setEditModalVisible(true);
  };

  const closeEditModal = () => {
    setEditModalVisible(false);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const EditItem = async () => {
    setEditModalVisible(false);
  }

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
      Snackbar.show({
        text: 'Item edited successfully',
        duration: Snackbar.LENGTH_LONG,
      });
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
    if (route.params?.item) {
      setSelectedItem(route.params.item);
    }
  }, [route.params?.item]);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => openEditModal(item)}>
      <View style={styles.textContainer}>
        <Text style={styles.text2}>Name: {item.key}</Text>
        <Text style={styles.text3}>     Quantity: {item.quantity}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text3}>Date Purchased: {item.datePurchased}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text3}>Expiration Date: {item.expiration}</Text>
      </View>
      <View style={styles.textContainer2}>
        <Text style={styles.text3}>Location of {item.key}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text3}>Refrigerator: {item.itemData.fridge ? 'Yes' : 'No'}</Text>
        <Text style={styles.text3}>     Freezer: {item.itemData.freezer ? 'Yes' : 'No'}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text3}>Pantry: {item.itemData.pantry ? 'Yes' : 'No'}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={image}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style = {styles.container}>
        <FlatList
          data={pantryData}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
        />

        {/* Edit Item Modal */}
        <Modal visible={isEditModalVisible}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Editing Item: {selectedItem.key}</Text>
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
                    setDatePurchased(new Date(selectedDate));
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
            {/* Add form fields for editing item properties */}
            <Button title='Save' onPress={editItem} />
            <Text>     </Text>
            <Button title='Cancel' onPress={closeEditModal} />
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
}

export default EditItem;