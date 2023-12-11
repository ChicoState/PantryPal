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
} from './PantryStorage.ts';
// Import the styles
import styles from './Styles.js';
// Load the background image
import image from './Images/pantryimage.jpg';

// This is the pantry screen
const Pantry = ({navigation}) => {
  // This is the state for the pantry data from the firebase
  const [pantryData, setPantryData] = useState({});
  // These are the states for the input fields for editing
  const [name, setName] = useState('');
  // This is for the state of the delete confirmation modal
  const [isDialogVisible, setIsDialogVisible] = useState(false); 
  
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

  // This loads the pantry data from The firebase
  useEffect(() => {
    fetchData();
  }, [pantryData.key, pantryData.itemData]);

  // This is the render method for the individual pantry items
  const renderItem = ({ item }) => (
    // This is the container for the item
    <View style={styles.itemContainer}>
      {/* This is the text container for the item name and quantity */}
      <View style={styles.textContainer}>
        <Text style={styles.text2}>{item.key}</Text>
        <Text style={styles.text3}>     Quantity: {item.itemData.quantity}</Text>
      </View>
      {/* This is the text container for the date purchased */}
      <View style={styles.textContainer}>
        <Text style={styles.text3}>Date Purchased: {item.itemData.datePurchased.toDateString()}</Text>
      </View>
      {/* This is the text container for the expiration date */}
      <View style={styles.textContainer}>
        <Text style={styles.text3}>Expiration Date: {item.itemData.expiration.toDateString()}</Text>
      </View>
      {/* This is the text container for the location of the item */}
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
            navigation.navigate('Edit Item', { itemName: item.key });
          }}
        />
        <Text>          </Text>
        <Button
          title="Delete Item"
          color = 'darkred'
          onPress={() => {
            setName(item.key); // Set the name of the item
            // setSelectedItem(item); // Set the selected item
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
        {/* If the pantry is empty, let the user know and let them add items */}
        {pantryData.length === 0 ? (
          <>
            <View style={styles.itemContainer}>
              <Text style={styles.text}>Your pantry is empty!</Text>
              <Text style={styles.text}>You should add some items!</Text>
            </View>
            <Button title="Add Item" onPress={() => navigation.navigate("Add Item")} />
          </>
        ) :
        // If the pantry is not empty, show the pantry items 
        (
          <>
            <View style={styles.headerContainer}>
              <Text style={styles.text}>Your Pantry</Text>
            </View>
            <View style={styles.pantryContainer}>
              <FlatList
                data={pantryData}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
              />
              <View style={styles.buttonContainer2}>
              <Button
                  title="Home"
                  color = 'grey'
                  onPress={() => navigation.navigate("Home Screen")}
                />
                <Text>          </Text>
                <Button 
                  title="Add Item"
                  color = 'green'
                  onPress={() => navigation.navigate("Add Item")}
                />
                <Text>          </Text>
                <Button
                  title="Refresh"
                  color='teal'
                  onPress={() => {
                    fetchData();
                    Snackbar.show({
                      text: 'Pantry refreshed',
                      duration: Snackbar.LENGTH_SHORT,
                    });
                  }}
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
        {/* This is the delete item modal */}
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
                if (name) {
                  await deleteItem(name);
                  fetchData(); // Refresh pantry data
                  toggleDialog(); // Close the modal
                  Snackbar.show({ // Show a snackbar
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