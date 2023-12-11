/*
 * File: PantryPal/GroceryListStorage.ts
 * Description: Grocery List Storage Functions for PantryPal
 */

// Necessary imports
import firestore from '@react-native-firebase/firestore';

// This is our Grocery List collection
const groceryList = 'Grocery List';

// Grocery List Storage Functions
/*
 * Add a item to our Grocery list
 * @param name - name of the item, i.e. "milk", "eggs", etc
 * @param quantity - quantity of item
 */
export const addGroceryListItem = async (name: string, quantity: number) => {
  // Create an object to store the data
  const itemData = {
    quantity: quantity,
  };

  // Try to save the item to the storage
  try {
    await firestore().collection(groceryList).doc(name).set(itemData);
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    // Throw an error if we fail to save the data
    throw new addItemError('Failed to add item to Grocery list: ' + error);
  }
};

/*
 * Delete an item from our Grocery list
 * @param name - This should be the name of the item, ie "milk", "eggs", etc
 */
export const deleteGroceryListItem = async (name: string) => {
  try {
    // Delete the item from storage
    await firestore().collection(groceryList).doc(name).delete();
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    // Throw an error if we fail to save the data
    throw new deleteItemError(
      'Failed to delete item from Grocery list: ' + error,
    );
  }
};

/*
 * Delete all items from our Grocery list on a clear
 */
export const deleteAllGroceryListItems = async () => {
  try {
    // Get the Grocery list from storage
    const groceryListData = await firestore().collection(groceryList).get();
    // If there no documents, return null
    if (groceryListData.empty) {
      return null;
    }
    // If there are documents, delete them

    groceryListData.forEach(doc => {
      firestore().collection(groceryList).doc(doc.id).delete();
    });

    
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    // Throw an error if we fail to save the data
    throw new deleteItemError(
      'Failed to delete the Grocery list: ' + error,
    );
  }
};

/*
 * Get the grocery list data
 */
export const getGroceryListData = async () => {
  try {
    // Get the Grocery list from storage
    const itemsQuerySnapshot = await firestore().collection(groceryList).get();
    // If there no documents, return null
    if (itemsQuerySnapshot.empty) {
      return null;
    }
    // If there are documents, return them with the id's
    const groceryListData = itemsQuerySnapshot.docs.map(doc => {
      const itemData = doc.data();
      return {key: doc.id, itemData};
    });
    // Return the Grocery list data
    return groceryListData;
  } catch (error) {
    // This is for debugging purpose
    console.log(error);
    // Throw an error if we fail to save the data
    throw new getGroceryListDataError(
      'Failed load grocery list data: ' + error,
    );
  }
};

/*
 * Get all items from our Grocery list
 */
export const getGroceryListKeys = async () => {
  try {
    // Get the Grocery list from storage
    const groceryListData = await firestore().collection(groceryList).get();
    // Return the Grocery list data
    return groceryListData;
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    // Throw an error if we fail to save the data
    throw new getGroceryListCollection(
      'Failed to load grocery list items' + error,
    );
  }
};

/*
 * Update an item in our Grocery list
 * @param name - name of the item, i.e. "milk", "eggs", etc
 * @param quantity - quantity of item
 */
export const updateGroceryListItem = async (name: string, quantity: number) => {
  // Create an object to store the data
  const itemData = {
    quantity: quantity,
  };
  try {
    // Update the item in storage
    await firestore().collection(groceryList).doc(name).update(itemData);
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    // Throw an error if we fail to save the data
    throw new updateItemError(
      'Failed to update item in Grocery list: ' + error,
    );
  }
};

// Various handlers for the Grocery List Storage Functions
// Error for adding an item to the Grocery list
export class addItemError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'addItemError';
  }
}

// Error for deleting an item from either the pantry or Grocery list
export class deleteItemError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'deleteItemError';
  }
}

// Error for getting the Grocery list data
export class getGroceryListDataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'getGroceryListDataError';
  }
}

// Error for getting the Grocery list
export class getGroceryListCollection extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'getGroceryListCollection';
  }
}

// Error for updating an item
export class updateItemError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'updateItemError';
  }
}
