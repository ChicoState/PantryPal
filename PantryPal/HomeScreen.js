import React from 'react';
import {View, Text, Button, ImageBackground, StyleSheet} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('./Images/italy.jpg')}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={styles.container}>
        <Text style={styles.title}> Pantry Pal </Text>
        <View style={styles.button}>
          <Button
            title="Go to Grocery List"
            color="teal"
            onPress={() => navigation.navigate('Grocery List')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Go to Pantry"
            color="maroon"
            onPress={() => navigation.navigate('Pantry')}
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
  title: {
    fontSize: 50,
    position: 'absolute', // Position the title at the top
    marginTop: 150,
    top: 20, // Adjust as needed for vertical positioning
    fontFamily: 'Trebuchet MS', // Change to your desired font
    color: 'midnightblue', // Change to your desired color
    fontWeight: 'bold',
    borderWidth: 5, // Add a border
    borderColor: 'white', // Border color
    borderRadius: 10, // Border radius
    padding: 10, // Padding inside the border
    backgroundColor: 'powderblue',
  },
  button: {
    marginBottom: 15,
  },
});

export default HomeScreen;
