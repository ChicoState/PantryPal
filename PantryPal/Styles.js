/* 
 * File: PantryPal/Styles.js
 * Description: This is the styles for the pantry, add item and edit item screens.
 */

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  addContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative", // Add this to allow absolute positioning'
    backgroundColor: "powderblue",
    marginTop: 150,
    marginBottom: 150,
    borderColor: "black",
    borderRadius: 25, // Rounded border
    borderWidth: 5, // 5 point border width
    padding: 20,
    
  },
  addText: {
    fontSize: 20,
    fontFamily: "Trebuchet MS", // Change to your desired font
    color: "black", // Change to your desired color
    fontWeight: "bold",
  },
  addText2: {
    fontSize: 16,
    fontFamily: "Trebuchet MS", // Change to your desired font
    color: "black", // Change to your desired color
    fontWeight: "bold",
  },
  addText3: {
    fontSize: 32,
    fontFamily: "Trebuchet MS", // Change to your desired font
    color: "black", // Change to your desired color
    fontWeight: "bold",
  },
  addTextContainer: {
    flexDirection: "row", // Arrange items in a row horizontally
    justifyContent: "space-between", // Space between the buttons
    marginTop: 5, // Add space between the item details and buttons
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row', // Arrange items in a row horizontally
    justifyContent: 'space-between', // Space between the buttons
    marginTop: 10, // Add space between the item details and buttons
  },
  buttonContainer2: {
    flexDirection: 'row', // Arrange items in a row horizontally
    justifyContent: 'center', // Space between the buttons
    marginTop: 10, // Add space between the item details and buttons
    marginBottom: 10,
  },
  buttonContainer3: {
    flexDirection: 'row', // Arrange items in a row horizontally
    justifyContent: 'center', // Space between the buttons
    marginTop: 50, // Add space between the item details and buttons
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  confirmationText: {
    fontSize: 20,
    fontFamily: 'Trebuchet MS', // Change to your desired font
    color: 'white', // Change to your desired color
    fontWeight: 'bold',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Add this to allow absolute positioning
  },
  headerContainer: {
    flexDirection: 'row', // Arrange items in a row horizontally
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 5,
    // borderWidth: 5, // 5 point border width
    alignItems: 'center',

  },
  itemContainer: {
    flex: 0.3,
    justifyContent: 'space-between',
    backgroundColor: 'floralwhite',
    borderColor: 'black',
    borderRadius: 20, // Rounded border
    borderWidth: 5, // 5 point border width
    // position: "relative", // Add this to allow absolute positioning
    padding: 20,
    margin: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background color with transparency
  },
  pantryContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Add this to allow absolute positioning
  },
  status: {
    fontSize: 18,
    fontFamily: 'Trebuchet MS', // Change to your desired font
    color: 'black', // Change to your desired color
    fontWeight: 'bold',
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
    color: "blue", // Change to your desired color
    fontWeight: "bold",
    borderWidth: 5, // Add a border
    borderColor: "blue", // Border color
    borderRadius: 10, // Border radius
    padding: 10, // Padding inside the border
    backgroundColor: "powderblue",
  },
  textContainer: {
    flexDirection: "row", // Arrange items in a row horizontally
    justifyContent: "space-between", // Space between the buttons
    marginTop: 10, // Add space between the item details and buttons
  },
  textContainer2: {
    flexDirection: "row", // Arrange items in a row horizontally
    justifyContent: "center", // Space between the buttons
    marginTop: 10, // Add space between the item details and buttons
  },
  text: {
    fontSize: 24,
    fontFamily: "Trebuchet MS", // Change to your desired font
    color: "black", // Change to your desired color
    fontWeight: "bold",
  },
  text2: {
    fontSize: 20,
    fontFamily: "Trebuchet MS", // Change to your desired font
    color: "black", // Change to your desired color
    fontWeight: "bold",
  },
  text3: {
    fontSize: 16,
    fontFamily: "Trebuchet MS", // Change to your desired font
    color: "black", // Change to your desired color
    fontWeight: "bold",
  },
  textBox: {
    borderWidth: 3,
    borderColor: 'black',
    height: 40,
    width: 200,
    padding: 10,
    marginVertical: 5,
    marginBottom: 5,
  },
  textBox2: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    height: 40,
    width: 200,
    padding: 10,
    marginVertical: 10,
    marginBottom: 10,
  },
});

export default styles;