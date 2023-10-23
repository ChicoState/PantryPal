import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList, 
  StyleSheet,
} from "react-native";
// This is the snackbar
import Snackbar from "react-native-snackbar";
// This is the local storage methods
import {
  loadPantryKeys,
  loadItem,
  PantryLoadListError,
} from './Storage.ts';


//Will be the pantry screen
//Empty right now

const SecondScreen = ({navigation}) => {
  const [pantryData, setPantryData] = useState([]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      position: "relative", // Add this to allow absolute positioning
    },
    title: {
      fontSize: 40,
      position: "absolute", // Position the title at the top
      textAlign: "center",
      marginTop: 0,
      marginBottom: 20,
      top: 20, // Adjust as needed for vertical positioning
      fontFamily: "Trebuchet MS", // Change to your desired font
      color: "blue", // Change to your desired color
      fontWeight: "bold",
      borderWidth: 5, // Add a border
      borderColor: "blue", // Border color
      borderRadius: 10, // Border radius
      padding: 10, // Padding inside the border
      backgroundColor: "powderblue",
    },
    text: {
      fontSize: 24,
      fontFamily: "Trebuchet MS", // Change to your desired font
      color: "black", // Change to your desired color
      fontWeight: "bold",
    },
    text2: {
      fontSize: 16,
      fontFamily: "Trebuchet MS", // Change to your desired font
      color: "black", // Change to your desired color
      fontWeight: "bold",
    },
    text3: {
      fontSize: 12,
      fontFamily: "Trebuchet MS", // Change to your desired font
      color: "black", // Change to your desired color
      fontWeight: "bold",
    }
  });

  // This loads the pantry data from local storage
  useEffect(() => {
    const loadData = async () => {
      try {
        const pantryKeys = await loadPantryKeys();
        console.log("The pantry keys are:", pantryKeys);
        if (pantryKeys.length === 0) {
          throw new PantryLoadListError('Pantry list is empty');
        }
        const loadedDataPromises = pantryKeys.map((key) => loadItem(key));
        const loadedData = await Promise.all(loadedDataPromises);
        setPantryData(loadedData);
      }
      catch (error) {
        // This is for debugging purposes
        console.log(error);
        // This is for the user
        throw new PantryLoadListError('Failed to load pantry list', error);
      }
    };
    // // Load the pantry data from local storage
    // loadPantry()
    //   .then(async (pantryKeys) => {
    //     console.log("The pantry keys are:", pantryKeys);
    //     const loadedDataPromises = pantryKeys.map((key) => loadItem("${key}"));
    //     const loadedData = await Promise.all(loadedDataPromises);
    //     setPantryData(loadedData);
    //   })
    //   .catch((error) => {
    //     // This is for debugging purposes
    //     console.log(error);
    //     // This is for the user
    //     throw new PantryLoadListError('Failed to load pantry list' + error);
    //   });
  }, []);

  // This is the render method
  const renderItem = ({ item }) => (
    <view>
      <Text style = {styles.text2}>Name: {item.name}</Text>
      <Text style = {styles.text3}>Quantity: {item.quantity}</Text>
      <Text style = {styles.text3}>Date Purchased: {item.datePurchased}</Text>
      <Text style = {styles.text3}>Expiration Date: {item.expiration}</Text>
      <Text style = {styles.text3}>In Refrigerator?: {item.fridge}</Text>
      <Text style = {styles.text3}>In Freezer?: {item.freezer}</Text>
      <Text style = {styles.text3}>In Pantry?: {item.pantry}</Text>
    </view>
  )
  // If the 
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>Your Pantry</Text>

      {pantryData.length === 0 ?(
        <><Text style={styles.text}>Your pantry is empty!</Text>
        <Text style={styles.text}>Add some items!</Text></>
      ) : (
        <FlatList>
          data = {pantryData}
          renderItem = {renderItem}
          keyExtractor = {(item) => item.key}
        </FlatList>
      )}
    </View>
  );
};

export default SecondScreen;