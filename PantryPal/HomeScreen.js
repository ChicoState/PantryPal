/* 
 * File Name: PantryPal/HomeScreen.js
 * Description: This is the HomeScreen screen
 * It allows the user to navigate to the grocery list and pantry screens.
 * It is the first screen the user sees.
 * It is accessed from the App.tsx file.
 * If you want navigate to a new screen, add a button and add the screen to the navigator.
 */

import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, Image } from 'react-native';
import image1 from './Images/italy.jpg';
import image2 from './Images/pantrypal.jpg';

// This is the HomeScreen
const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={image1}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={styles.container}>
        <Image
          source={image2}
          style={{ width: 350, height: 200, resizeMode: 'contain' }}
        />
        <View style={styles.button}>
          <Button
            title="Grocery List"
            color="teal"
            onPress={() => navigation.navigate('Grocery List')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Pantry"
            color="maroon"
            onPress={() => navigation.navigate('Pantry')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Meal Plans"
            color="brown"
            onPress={() => navigation.navigate('Meal Plans')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Add this to allow absolute positioning
  },
  button: {
    marginBottom: 15,
  },
});

export default HomeScreen;