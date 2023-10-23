import React, {useState} from "react";
import {View, Text, TextInput, Button, StyleSheet} from "react-native";
// This is the local storage methods
import {deleteItem, PantryDeleteError} from "./Storage.ts";
// This is the snackbar
import Snackbar from "react-native-snackbar";

// This is the delete item screen
const DeleteItem = ({navigation}) => {
  // Text input for the item to be deleted
  const[text, setText] = useState("");
  // Doing input validation
  const [errorMessage, setErrorMessage] = useState("");

  const validateInput = (inputText) => {
    if (inputText.trim() === "") {
      Snackbar.show({
        text: "Please enter an item",
        duration: Snackbar.LENGTH_SHORT,
      });
      setErrorMessage("No item entered");
      setText("");
    }
    else if (inputText.includes(" ") || inputText.includes("_")) {
      Snackbar.show({
        text: "Item name cannot contain spaces or underscores",
        duration: Snackbar.LENGTH_SHORT,
      });
      setErrorMessage("Item name contains spaces or underscores");
      setText("");
    }
    else {
      setErrorMessage("");
      setText(inputText);
    }
  };

  // This is the function that deletes the item
  const remove = async () => {
    if(!errorMessage && text.trim() !== "") {
      try {
        // Delete the item from the list
        await deleteItem(text);
        // Show a snackbar indicating success
        Snackbar.show({
          text: "Item deleted successfully",
          duration: Snackbar.LENGTH_SHORT,
        });
        // Clear the input field after deleting
        setText("");
      } 
      catch (error) {
        // Log the error
        console.log(error);
        // Show a snackbar indicating failure
        Snackbar.show({
          text: "Item not deleted",
          duration: Snackbar.LENGTH_SHORT,
        });
        // Clear the input field
        setText("");
        // Throw an error
        throw new PantryDeleteError("Item not deleted error: " + error);
      }
    };
  };

  // This is the StyleSheet
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      position: "relative", // Add this to allow absolute positioning
    },
    textBox: {
      borderWidth: 2,
      borderColor: "black",
      height: 40,
      width: 200,
      padding: 8,
      marginVertical: 10,
    },
    title: {
      fontSize: 40,
      position: "absolute", // Position the title at the top
      textAlign: "center",
      marginTop: 0,
      marginBottom: 20,
      top: 20, // Adjust as needed for vertical positioning
      fontFamily: "Trebuchet MS", // Change to your desired font
      color: "darkred", // Change to your desired color
      fontWeight: "bold",
      borderWidth: 5, // Add a border
      borderColor: "darkred", // Border color
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
  });
  
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>Delete Item</Text>
      <TextInput
        placeholder="Enter a Food Item"
        value={text}
        onChangeText={(text) => validateInput(text)}
        style={styles.textBox}
      />
      <Button color={"red"} title="Delete Item" onPress={remove} />
    </View>
  )
}

export default DeleteItem;