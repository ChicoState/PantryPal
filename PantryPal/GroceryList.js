import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';

//Implements the grocery list functionality

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

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Enter a Food Item"
        value={word}
        onChangeText={(text) => setWord(text)}
        style={{ borderWidth: 1, borderColor: 'gray', width: 200, padding: 8, marginVertical: 10 }}
      />
      <Button title="Add Item" onPress={handleAddWord} />
      <FlatList
        data={wordList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleCheckbox(item)}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
              <Text>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title="Clear List" onPress={clearList} />
    </View>
  );
};

export default GroceryList;
