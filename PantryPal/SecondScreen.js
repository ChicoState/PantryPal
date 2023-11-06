/*
 * File: PantryPal/SecondScreen.js
 * Description: This is the second screen of the app. It will display the pantry items.
 */

// Import the necessary libraries
import React, { useEffect, useState } from "react";
import {
  Button, 
  FlatList,
  ImageBackground,
  Modal,
  Text,
  TextInput,
  View,  
} from "react-native";
// This is the snackbar
import Snackbar from "react-native-snackbar";
// These are the storage methods
import {
  loadPantryData,
  deleteItem,
} from './Storage.ts';
// Import the styles
import styles from './Styles.js';
// Load the background image
import image from './Images/pantryimage.jpg';
import DateTimePicker from '@react-native-community/datetimepicker';


//Will be the pantry screen
const SecondScreen = ({navigation}) => {
  // This is the state for the pantry data
  const [pantryData, setPantryData] = useState({});
  // This is for the state of the delete confirmation modal
  const [isDialogVisible, setIsDialogVisible] = useState(false); 
  // This is the state for the selected item
  const [item, setSelectedItem] = useState(null);
  // Function to toggle the delete confirmation modal
  const toggleDialog = () => {
    setIsDialogVisible(!isDialogVisible);
  };

  // This is for the edit item
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  // These are the states for the input fields for editing
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [datePurchased, setDatePurchased] = useState(new Date());
  const [expirationDate, setExpirationDate] = useState(new Date());
  const [inRefrigerator, setInRefrigerator] = useState(false);
  const [inFreezer, setInFreezer] = useState(false);
  const [inPantry, setInPantry] = useState(false);
  const[errorMessage, setErrorMessage] = useState('');
  const[showDatePicker, setShowDatePicker] = useState(false);
  const[editItem, setEditItem] = useState(null);

  // This is to fetch the pantry data from the firebase
  const fetchData = async () => {
    const pantryData = await loadPantryData();
    setPantryData(pantryData);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const openEditModal = () => {
    setEditModalVisible(true);
  };

  const closeEditModal = () => {
    setEditModalVisible(false);
  };

  // This loads the pantry data from local storage
  useEffect(() => {
    fetchData();
  }, {});

  // This is the render method for the pantry items
  const renderItem = ({ item }) => (
    <View >
      <View style={styles.textContainer}>
        <Text style={styles.text2}>{item.key}</Text>
        <Text style={styles.text3}>     Quantity: {item.itemData.quantity}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text3}>Date Purchased: {item.itemData.datePurchased.toDateString()}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text3}>Expiration Date: {item.itemData.expiration.toDateString()}</Text>
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
      <View style={styles.buttonContainer}>
        <Button
          title="Edit Item"
          color = 'darkorange'
          style={styles.editButton}
          onPress={() => {
            setName(item.key);
            setQuantity(item.itemData.quantity);
            setDatePurchased(new Date(item.itemData.datePurchased));
            setExpirationDate(new Date(item.itemData.expiration));
            setInRefrigerator(item.itemData.fridge);
            setInFreezer(item.itemData.freezer);
          }}
        />
        <Text>          </Text>
        <Button
          title="Delete Item"
          color = 'darkred'
          onPress={() => {
            setSelectedItem(item); // Set the selected item
            toggleDialog();
          }}
        />
      </View>
    </View>
  );

  return (
    <ImageBackground
      source={image}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {pantryData.length === 0 ? (
          <>
            <Text style={styles.text}>Your pantry is empty!</Text>
            <Text style={styles.text}>You should add some items!</Text>
            <Button title="Add Item" onPress={() => navigation.navigate("Add Item")} />
          </>
        ) : (
          <>
            <Text style={styles.text}>Your pantry items:</Text>
            <FlatList
              data={pantryData}
              renderItem={renderItem}
              keyExtractor={(item) => item.key}
            />
            <View style={styles.buttonContainer2}>
              <Button 
                title="Add Item"
                color = 'green'
                onPress={() => navigation.navigate("Add Item")}
              />
            </View>
          </>
        )}  
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isDialogVisible}
      >
        <View style={styles.modalContainer}>
          <Text style = {styles.confirmationText}>Are you sure you want to delete the item from your pantry?</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="No"
              color = 'darkgreen'
              onPress={toggleDialog}
            />
            <Text>          </Text>
            <Button
              title="Yes"
              color = 'darkred'
              onPress={async () => {
                if (item) {
                  await deleteItem(item.key);
                  fetchData(); // Refresh pantry data
                  toggleDialog();
                  Snackbar.show({
                    text: "Item deleted!",
                    duration: Snackbar.LENGTH_SHORT,
                  });
                }
              }}
            />
          </View>
        </View>
      </Modal>
      <Modal 
        animationType="slide"
        transparent={true}
        visible={isEditModalVisible}
      >
        <View style={styles.textContainer}>
          <Text style={styles.text}>Editing Item: {name}</Text>
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
          <Button title='Cancel' onPress={closeEditModal} />
        </View>
      </Modal>
    </ImageBackground>
  );
  
};

export default SecondScreen;