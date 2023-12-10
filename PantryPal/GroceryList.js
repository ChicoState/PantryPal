import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import image from './Images/italy.jpg';

const GroceryList = ({ navigation }) => {
  const [foodItem, setFoodItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [groceryList, setGroceryList] = useState([]);

  const handleAddItem = () => {
    if (foodItem.trim() !== '' && quantity.trim() !== '') {
      const newItem = { name: foodItem, quantity: quantity, checked: false };
      setGroceryList([...groceryList, newItem]);
      setFoodItem('');
      setQuantity('');
    }
  };

  const toggleCheckbox = (index) => {
    const updatedList = [...groceryList];
    updatedList[index].checked = !updatedList[index].checked;
    setGroceryList(updatedList);
  };

  const handleRemoveItem = (index) => {
    const updatedList = [...groceryList];
    updatedList.splice(index, 1);
    setGroceryList(updatedList);
  };

  const clearList = () => {
    setGroceryList([]);
  };

  return (
    <ImageBackground
      source={image}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          placeholder="Enter a Food Item"
          value={foodItem}
          onChangeText={(text) => setFoodItem(text)}
          style={{ borderWidth: 1, borderColor: 'gray', width: 200, padding: 8, marginVertical: 10, backgroundColor: 'white' }}
        />
        <TextInput
          placeholder="Enter Quantity"
          value={quantity}
          onChangeText={(text) => setQuantity(text)}
          style={{ borderWidth: 1, borderColor: 'gray', width: 200, padding: 8, marginBottom: 10, backgroundColor: 'white' }}
          keyboardType="numeric"
        />
        <Button title="Add Item" onPress={handleAddItem} color="teal" />
        <FlatList
          data={groceryList}
          numColumns = {1}
          style={{ marginTop: 10 }}
          renderItem={({ item, index }) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: 8,
                borderRadius: 8,
                marginRight: 5,
                marginBottom: 8,
              }}
            >
              <TouchableOpacity onPress={() => toggleCheckbox(index)}>
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 4,
                    marginRight: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {item.checked && (
                    <View
                      style={{
                        width: 16,
                        height: 16,
                        backgroundColor: 'green',
                        borderRadius: 2,
                      }}
                    />
                  )}
                </View>
              </TouchableOpacity>
              <Text>{item.name} : {item.quantity}</Text>
              <View style={{ marginLeft: 7 }}>
                <Button title="X" onPress={() => handleRemoveItem(index)} color="maroon" />
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <Button title="Clear List" onPress={clearList} color="teal" />
      </View>
    </ImageBackground>
  );
};

export default GroceryList;
