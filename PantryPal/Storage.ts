/*
 * File: PantryPal/Storage.ts
 * Description: Firebase Firestore Cloud Database storage functions for PantryPal
 * Documentation: https://rnfirebase.io/firestore/usage
 */

// Necessary imports
import firestore from '@react-native-firebase/firestore';

const pantry = 'Pantry';

// Storage Functions
/*
 * Add a item to our pantry
 * @param name - name of the item, i.e. "milk", "eggs", etc
 * @param datePurchased - date the item was purchased
 * @param expiration - expiration date of item
 * @param quantity - quantity of item
 * @param freezer - if the item is in the freezer
 * @param fridge - if the item is in the fridge
 * @param inPantry - if the item is in the pantry
 */
export const addItem = async (
  name: string,
  datePurchased: string,
  expiration: string,
  quantity: number,
  fridge: Boolean,
  freezer: Boolean,
  inPantry: Boolean,
) => {
  // Create an object to store the data
  const itemData = {
    // Date purchased
    datePurchased: datePurchased,
    // Expiration date
    expiration: expiration,
    // Quantity of item
    quantity: quantity,
    // If the item is in the refrigerator
    fridge: fridge,
    // If the item is in the freezer
    freezer: freezer,
    // If the item is in the pantry
    pantry: inPantry,
  };

  // Try to save the item to the storage
  try {
    await firestore().collection(pantry).doc(name).set(itemData);
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    // Throw an error if we fail to save the data
    throw new addItemError('Failed to add item: ' + error);
  }
};

/*
 * Delete an item from our pantry
 * @param name - This should be the name of the item, ie "milk", "eggs", etc
 */
export const deleteItem = async (name: string) => {
  try {
    // Delete the item from storage
    await firestore().collection(pantry).doc(name).delete();
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    // Throw an error if we fail to save the data
    throw new deleteItemError('Failed to delete item: ' + error);
  }
};

/*
 * Update the entire item
 * @param name - name of the item, i.e. "milk", "eggs", etc
 * @param datePurchased - date the item was purchased
 * @param expiration - expiration date of item
 * @param quantity - quantity of item
 * @param freezer - if the item is in the freezer
 * @param fridge - if the item is in the fridge
 * @param inPantry - if the item is in the pantry
 */
export const editItem = async (
  name: string,
  datePurchased: string,
  expiration: string,
  quantity: number,
  fridge: Boolean,
  freezer: Boolean,
  inPantry: Boolean,
) => {
  try {
    // Update the item's data
    const itemData = {
      // Date purchased, convert it to an ISO string
      datePurchased: datePurchased,
      // Expiration date, convert it to an ISO string
      expiration: expiration,
      // Quantity of item
      quantity: quantity,
      // If the item is in the refrigerator
      fridge: fridge,
      // If the item is in the freezer
      freezer: freezer,
      // If the item is in the pantry
      pantry: inPantry,
    };
    // Update the item
    await firestore().collection(pantry).doc(name).set(itemData);
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    throw new updateItemError('Failed to update item: ' + error);
  }
};

/*
 * Load an item in our pantry from storage
 * @param name - name of the item, ie "milk", "eggs", etc, no underscores are allowed
 */
export const loadItem = async (name: string) => {
  try {
    // Get the item from storage using the name
    const itemDoc = await firestore().collection(pantry).doc(name).get();
    // If the item exists
    if (itemDoc.exists) {
      // Get the data from the item
      const itemData = itemDoc.data();
      // If there is data
      if (itemData) {
        // Convert the date strings back to Date objects
        itemData.datePurchased = new Date(itemData.datePurchased);
        itemData.expiration = new Date(itemData.expiration);
        // Return the data
        return itemData;
      }
      // If there is no data, return null
      return null;
    }
    // If the item doesn't exist, return null
    return null;
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    throw new loadItemError('Failed to load item: ' + error);
  }
};

// Load all the items in our pantry from storage
export const loadPantryData = async () => {
  try {
    // Grab all the documents in the collection
    const itemsQuerySnapshot = await firestore().collection(pantry).get();
    // If there are no documents, return null
    if (itemsQuerySnapshot.empty) {
      return null;
    }
    // If there are documents, convert the ISO strings back to Date objects
    const allStoredData = itemsQuerySnapshot.docs.map(doc => {
      const itemData = doc.data();
      itemData.datePurchased = new Date(itemData.datePurchased);
      itemData.expiration = new Date(itemData.expiration);
      return {key: doc.id, itemData};
    });
    // Return the data
    return allStoredData;
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    throw new loadPantryDataError('Failed to pantry data: ' + error);
  }
};

// Load the names of all the items in our pantry
export const loadPantryKeys = async () => {
  try {
    const itemsQuerySnapshot = await firestore().collection(pantry).get();
    // If there are no documents, return null
    if (itemsQuerySnapshot.empty) {
      return null;
    }
    // If there are documents, return the ids
    return itemsQuerySnapshot.docs.map(doc => doc.id);
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    throw new loadPantryCollectionError(
      'Failed to load pantry items: ' + error,
    );
  }
};

// Update methods for items
/*
 * Update the purchase date of an item
 * @param name - name of the item, ie "milk", "eggs", etc
 * @param datePurchased - date the item was purchased
 */
export const updateDatePurchased = async (
  name: string,
  datePurchased: Date,
) => {
  try {
    const datePurchasedString = datePurchased.toISOString();
    await firestore().collection(pantry).doc(name).update({
      datePurchased: datePurchasedString,
    });
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    throw new updateDatePurchasedError(
      'Failed to update date purchased: ' + error,
    );
  }
};

/*
 * Update the expiration date of an item
 * @param name - name of the item, ie "milk", "eggs", etc
 * @param expiration - expiration date of item
 */
export const updateExpiration = async (name: string, expiration: Date) => {
  try {
    const expirationString = expiration.toISOString();
    await firestore().collection(pantry).doc(name).update({
      expiration: expirationString,
    });
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    throw new updateExpirationError(
      'Failed to update expiration date: ' + error,
    );
  }
};

/*
 * Update the location of an item
 * @param name - name of the item, ie "milk", "eggs", etc
 * @param fridge - if the item is in the fridge
 * @param freezer - if the item is in the freezer
 * @param pantry - if the item is in the pantry
 */
export const updateLocation = async (
  name: string,
  fridge: Boolean,
  freezer: Boolean,
  inPantry: Boolean,
) => {
  try {
    await firestore().collection(pantry).doc(name).update({
      fridge: fridge,
      freezer: freezer,
      pantry: inPantry,
    });
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    throw new updateLocationError('Failed to update location: ' + error);
  }
};

/*
 * Update the name of an item
 * @param name - current name of the item, ie "milk", "eggs", etc
 * @param newName - new name of the item
 */
export const updateName = async (name: string, newName: string) => {
  try {
    // Run a transaction to update the name
    // This ensures that both the update and delete operations happen atomically, providing data consistency.
    await firestore().runTransaction(async transaction => {
      // Get a reference to the old item and the new item
      const oldItemRef = firestore().collection(pantry).doc(name);
      const newItemRef = firestore().collection(pantry).doc(newName);

      // Get the old item's data
      const oldItemSnapshot = await transaction.get(oldItemRef);
      if (!oldItemSnapshot.exists) {
        throw new updateNameError('Item does not exist: ' + name);
      }

      // Create a snapshot of the old item's data
      const itemData = oldItemSnapshot.data();

      // Create a new item with the new name
      const newItemData = {
        ...itemData,
      };

      // Set the new item and delete the old item
      transaction.set(newItemRef, newItemData);
      transaction.delete(oldItemRef);
    });
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    throw new updateNameError('Failed to update name: ' + error);
  }
};

/*
 * Update the quantity of an item
 * @param name - Current name of the item, ie "milk", "eggs", etc
 * @param quantity - quantity of item
 */
export const updateQuantity = async (name: string, quantity: number) => {
  try {
    await firestore().collection(pantry).doc(name).update({
      quantity: quantity,
    });
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    throw new updateQuantityError('Failed to update quantity: ' + error);
  }
};

// Various Error Handlers for Storage Functions
// Error for adding an item
export class addItemError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'addItemError';
  }
}

// Error for deleting an item
export class deleteItemError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'deleteItemError';
  }
}

// Error for loading an item
export class loadItemError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'loadItemError';
  }
}

// Error for loading all the items in our pantry
export class loadPantryDataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'loadPantryDataError';
  }
}
// Error for loading the keys of all the items in our pantry
export class loadPantryCollectionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'loadKeysError';
  }
}

// No data error
export class noItemOrDataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'noDataError';
  }
}

// Error for parsing data
export class parseDataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'parseDataError';
  }
}

// Error for updating the purchase date of an item
export class updateDatePurchasedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'updateDatePurchasedError';
  }
}

// Error for updating the expiration date of an item
export class updateExpirationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'updateExpirationError';
  }
}

// Error for updating an item
export class updateItemError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'updateItemError';
  }
}

// Error for updating the location of an item
export class updateLocationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'updateLocationError';
  }
}

// Error for updating the name of an item
export class updateNameError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'updateNameError';
  }
}

// Error for updating the quantity of an item
export class updateQuantityError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'updateQuantityError';
  }
}
