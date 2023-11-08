/*
 * File: PantryPal/Pantry.js
 * Description: This is the Pantry screen
 * It allows the user to add, edit, and delete items from the pantry.
 * It is accessed from the HomeScreen.
 */

// Necessary Imports
import React, { useEffect, useState } from "react";
import {
  Button, 
  FlatList,
  ImageBackground,
  Modal,
  RefreshControl,
  Text,
  View,  
} from "react-native";
// This is the snackbar
import Snackbar from "react-native-snackbar";
// These are the storage methods used
import {
  loadPantryData,
  deleteItem,
  editItem,
} from './Storage.ts';
// Import the styles
import styles from './Styles.js';
// Load the background image
import image from './Images/pantryimage.jpg';
import DateTimePicker from '@react-native-community/datetimepicker';


// This is the pantry screen
const Pantry = ({navigation}) => {
  // This is the state for the pantry data
  const [pantryData, setPantryData] = useState({});
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
  // This is for the state of the delete confirmation modal
  const [isDialogVisible, setIsDialogVisible] = useState(false); 
  // This is the state for the selected item
  const [item, setItem] = useState(null);
  // This is the state for the refreshing
  const [refreshing, setRefreshing] = useState(false);
  
  // Screen Functions
  // Toggles the delete confirmation modal
  const toggleDialog = () => {
    setIsDialogVisible(!isDialogVisible);
  };

  // This is to fetch the pantry data from the firebase
  const fetchData = async () => {
    const pantryData = await loadPantryData();
    setPantryData(pantryData);
  };

  // This is to pull down to refresh the pantry data
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
  }, []);

  // This loads the pantry data from The firebase
  useEffect(() => {
    fetchData();
  }, [pantryData.key, pantryData.itemData]);

  // This is the render method for the individual pantry items
  // TODO: Change the button colors inside the modal for delete
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
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
            navigation.navigate('Edit Item', key=item.key);
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
  
  // This is the actual screen that is rendered
  return (
    <ImageBackground
      source={image}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {pantryData.length === 0 ? (
          <>
            <View style={styles.itemContainer}>
              <Text style={styles.text}>Your pantry is empty!</Text>
              <Text style={styles.text}>You should add some items!</Text>
            </View>
            <Button title="Add Item" onPress={() => navigation.navigate("Add Item")} />
          </>
        ) : (
          <>
            <Text style={styles.text}>Your pantry items</Text>
            <View style={styles.pantryContainer}>
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
                <Text>          </Text>
                <Button
                  title="Refresh"
                  color = 'teal'
                  onPress={() => fetchData()}
                />
              </View>
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
              color = 'red'
              onPress={toggleDialog}
            />
            <Text>          </Text>
            <Button
              title="Yes"
              color = 'green'
              onPress= { async () => {
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
    </ImageBackground>
  );
};

export default Pantry;