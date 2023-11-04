import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, ImageBackground, TouchableOpacity } from 'react-native';

// Implements the grocery list functionality

const GroceryList = ({ navigation }) => {
  const [word, setWord] = useState('');
  const [wordList, setWordList] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});

  const handleAddWord = () => {
    if (word.trim() !== '') {
      setWordList([...wordList, word]);
      setCheckedItems({ ...checkedItems, [word]: false });
      setWord('');
    }
  };

  const toggleCheckbox = (item) => {
    setCheckedItems({ ...checkedItems, [item]: !checkedItems[item] });
  };

  const clearList = () => {
    setWordList([]);
    setCheckedItems({});
  };

  const handleRemoveWord = (itemToRemove) => {
    const updatedWordList = wordList.filter((item) => item !== itemToRemove);
    setWordList(updatedWordList);
    // Remove the checked status as well
    const updatedCheckedItems = { ...checkedItems };
    delete updatedCheckedItems[itemToRemove];
    setCheckedItems(updatedCheckedItems);
  };

  return (
    <ImageBackground
      source={require('./Images/italy.jpg')}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          placeholder="Enter a Food Item"
          value={word}
          onChangeText={(text) => setWord(text)}
          style={{ borderWidth: 1, borderColor: 'gray', width: 200, padding: 8, marginVertical: 10 }}
        />
        <Button title="Add Item" onPress={handleAddWord} color="teal" />
        <FlatList
          data={wordList}
          style={{ marginTop: 10 }}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white', // Add the background color here
                padding: 8, // Add padding here
                borderRadius: 4, // Add border radius here
                marginBottom: 8, // Add margin at the bottom to separate entries
              }}
            >
              <TouchableOpacity onPress={() => toggleCheckbox(item)}>
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
                  {checkedItems[item] && (
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
              <Text>{item}</Text>
              <View style={{ marginLeft: 10 }}>
                <Button title="X" onPress={() => handleRemoveWord(item)} color="maroon" />
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