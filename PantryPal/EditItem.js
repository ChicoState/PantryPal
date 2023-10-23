import React, {useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
// This is the local storage methods
import {
  storage,
  loadPantry,
  loadPantryKeys,
  updateDatePurchased,
  updateQuantity,
  updateLocation,
  updateExpirationDate,
  updateBestBy,
  updateExpiration,
  PantryLoadListError,
  PantryLoadItemError,
  PantryLoadKeysError
  
} from "./Storage.ts";

const EditItem = ({navigation}) => {
  const[name, setName] = useState("");
  const[quantity, setQuantity] = useState("");
  const[datePurchased, setDatePurchased] = useState(new Date());
  const[expirationDate, setExpirationDate] = useState(new Date());
  const[inRefrigerator, setInRefrigerator] = useState(false);
  const[inFreezer, setInFreezer] = useState(false);
  const[inPantry, setInPantry] = useState(false);
  const[errorMessage, setErrorMessage] = useState("");
  const[showDatePicker, setShowDatePicker] = useState(false);
  const[pantryData, setPantryData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditModalVisible, setEditModalVisible] = useState(false);


  const validateName = (inputText) => {
    if (inputText.trim() === "") {
      Snackbar.show({
        text: "Please enter an item",
        duration: Snackbar.LENGTH_SHORT,
      });
      setErrorMessage("No item entered");
      setName("");
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
      setName(inputText);
    }
  }

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
    textBox2: {
      borderWidth: 2,
      borderColor: "black",
      height: 40,
      width: 200,
      padding: 8,
      marginVertical: 10,
      marginBottom: 10,
    },
    title: {
      fontSize: 40,
      position: "absolute", // Position the title at the top
      textAlign: "center",
      marginTop: 0,
      marginBottom: 20,
      top: 20, // Adjust as needed for vertical positioning
      fontFamily: "Trebuchet MS", // Change to your desired font
      color: "orange", // Change to your desired color
      fontWeight: "bold",
      borderWidth: 5, // Add a border
      borderColor: "orange", // Border color
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
    status: {
      fontSize: 14,
      fontFamily: "Trebuchet MS", // Change to your desired font
      color: "black", // Change to your desired color
      fontWeight: "bold",
      marginBottom: 10,
    },
  });

  useEffect(() => {
    // Load the pantry data from local storage
    const loadData = async () => {
      try {
        const pantryKeys = await loadPantryKeys();
        const loadedDataPromises = pantryKeys.map((key) => loadItem(key));
        const loadedData = await Promise.all(loadedDataPromises);
        setPantryData(loadedData);
      } catch (error) {
        console.error('Failed to load pantry data:', error);
        throw new PantryLoadKeysError('Failed to load pantry keys' + error);
      }
    };

    loadData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => openEditModal(item)}>
      <Text>Item: {item.name}</Text>
      <Text>Quantity: {item.quantity}</Text>
      <Text>Date Purchased: {item.whenPurchased.toDateString()}</Text>
      <Text>Expiration Date: {item.expiration.toDateString()}</Text>
    </TouchableOpacity>
  );

  return (
    <View style = {styles.container}>
      {pantryData.length === 0 ? (
        <><Text style={styles.text}>Your pantry is empty!</Text>
        <Text style={styles.text}>Add some items!</Text></>
      ) : (
        <FlatList
          data={pantryData}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      )}

      {/* Edit Item Modal */}
      <Modal visible={isEditModalVisible}>
        <View>
          <Text style={styles.text}>Editing Item: {selectedItem?.key}</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="Enter a Quantity"
            onChangeText={setQuantity}
            value={quantity}
            maxLength={5}
            style={styles.textBox2}
          />
          <Button title="Select Date Purchased" onPress={showDatepicker} />
          <Text style={styles.status}>Date Purchased: {datePurchased.toDateString()}</Text>
          {showDatePicker && (
            <DateTimePicker
              value={datePurchased}
              mode="date"
              display="default"
              onChange={(_, selectedDate) => {
                setShowDatePicker(false);
                if (selectedDate) {
                  setDatePurchased(selectedDate);
                }
              }}
            />
          )}
          <Button title="Select Expiration" onPress={showDatepicker} />
          <Text style={styles.status}>Expires: {expirationDate.toDateString()}</Text>
          {showDatePicker && (
            <DateTimePicker
              value={expirationDate}
              mode="date"
              display="default"
              onChange={(_, selectedDate) => {
                setShowDatePicker(false);
                if (selectedDate) {
                  setExpirationDate(selectedDate);
                }
              }}
            />
          )}
          <Button title="In Refrigerator" onPress={() => setInRefrigerator(!inRefrigerator)} />
          <Text style={styles.status}>In Refrigerator?: {inRefrigerator ? "Yes" : "No"}</Text>
          <Button title="Freezer" onPress={() => setInFreezer(!inFreezer)} />
          <Text style={styles.status}>In Freezer?: {inFreezer ? "Yes" : "No"}</Text>
          <Button title="Pantry" onPress={() => setInPantry(!inPantry)} />
          <Text style={styles.status}>In Pantry: {inPantry ? "Yes" : "No"}</Text>
          {/* Add form fields for editing item properties */}
          <Button title="Save" onPress={EditItem} />
          <Button title="Cancel" onPress={closeEditModal} />
        </View>
      </Modal>
    </View>
  );
}

export default EditItem;