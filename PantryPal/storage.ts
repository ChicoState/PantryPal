// Storage functions for PantryPal
// File: Storage.ts
// Description: Storage functions for PantryPal

// Currently only supports local storage
// TODO: Add support for cloud storage, like Firebase

// Necessary imports
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class PantrySaveListError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PantrySaveError';
  }
}

export class PantryLoadListError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PantryLoadError';
  }
}

export class PantryDeleteError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ItemDeleteError';
  }
}

export class PantryUpdateError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ItemUpdateError';
  }
}

// Create storage object
const storage = new Storage({
  // Set maximum capacity of storage
  // Default is 1000 items
  size: 1000,

  // Set storage engine
  // Currently only supports AsyncStorage
  storageBackend: AsyncStorage,

  // Set expiration time of data in storage
  // Default is 1 day (1000 * 3600 * 24 milliseconds)
  // Set to null to disable expiration
  defaultExpires: null,

  // Cache data in memory, default is true
  enableCache: true,

  // If data is not found in storage,
  // return the corresponding sync method if specified
  sync: {
    // We'll leave this blank for now
  },
});

/*
 * Save the items in our pantry to storage
 *  key - This should be the name of the item, ie "milk", "eggs", etc, no underscores are allowed
 * @param datePurchased - date the item was purchased
 * @param quantity - quantity of item
 * @param location - location of item, ie "fridge", "freezer", "pantry", etc
 * @param bestBy - best by date of item
 * @param expiration - expiration date of item
 * @param expires - expiration time of data in storage, we are going to set this to null for now
 */
export const savePantryList = async (
  key: string,
  datePurchased: Date,
  quantity: Number,
  location: String,
  bestBy: Date,
  expiration: Date,
  onList: Boolean,
  purchasedItem: Boolean,
  expires = null,
) => {
  try {
    await storage.save({
      key: key,
      // Set the data we want to store
      // nameInStorage: data
      data: {
        // Date purchased
        whenPurchased: datePurchased,
        // Quantity of item
        amount: quantity,
        // Where it stored, ie "fridge", "freezer", "pantry", etc
        stored: location,
        // Date of best by
        best: bestBy,
        // Date of expiration
        expires: expiration,
        // If the item is on the shopping list
        shoppingList: onList,
        // If the item is on the shopping list has been purchased
        purchasedOnList: purchasedItem,
      },
      expires: expires,
    });
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    // Return null if there was an error storing the data for now
    throw new PantrySaveListError('Failed to save item: ' + error);
  }
};

// Load the items in our pantry from storage
/// @param key - This should be the name of the item, ie "milk", "eggs", etc, no underscores are allowed
export const loadPantryList = async (key: string) => {
  try {
    const data = await storage.load({
      key: key,
    });
    return data;
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    // Return null if there is no data for now
    // We will change this to return a custom error later
    throw new PantryLoadListError('Failed to load item: ' + error);
  }
};

// Delete the items in our pantry from storage
/// @param key - This should be the name of the item, ie "milk", "eggs", etc
export const deleteItem = async (key: string) => {
  try {
    await storage.remove({
      key: key,
    });
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    // Throw an error if there is no data
    throw new PantryDeleteError('Failed to delete item: ' + error);
  }
};

// Update methods for individual data points
// Update the purchase date of an item
export const updateDatePurchased = async (key: string, datePurchased: Date) => {
  try {
    await storage.save({
      key: key,
      data: {
        whenPurchased: datePurchased,
      },
    });
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    // Throw an error if there is no data
    throw new PantryUpdateError(
      'Failed to update items purchase date: ' + error,
    );
  }
};

// Update the quantity of an item
export const updateQuantity = async (key: string, quantity: Number) => {
  try {
    await storage.save({
      key: key,
      data: {
        amount: quantity,
      },
    });
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    // Throw an error if there is no data
    throw new PantryUpdateError('Failed to update items quantity: ' + error);
  }
};

// Update the location of an item
export const updateLocation = async (key: string, location: String) => {
  try {
    await storage.save({
      key: key,
      data: {
        stored: location,
      },
    });
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    // Throw an error if there is no data
    throw new PantryUpdateError('Failed to update items location: ' + error);
  }
};

// Update the best by date of an item
export const updateBestBy = async (key: string, bestBy: Date) => {
  try {
    await storage.save({
      key: key,
      data: {
        best: bestBy,
      },
    });
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    // Throw an error if there is no data
    throw new PantryUpdateError(
      'Failed to update items best by date: ' + error,
    );
  }
};

// Update the expiration date of an item
export const updateExpiration = async (key: string, expiration: Date) => {
  try {
    await storage.save({
      key: key,
      data: {
        expires: expiration,
      },
    });
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    // Throw an error if there is no data
    throw new PantryUpdateError(
      'Failed to update items expiration date: ' + error,
    );
  }
};

// Update the shopping list status of an item
export const updateShoppingList = async (key: string, onList: Boolean) => {
  try {
    await storage.save({
      key: key,
      data: {
        shoppingList: onList,
      },
    });
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    // Throw an error if there is no data
    throw new PantryUpdateError(
      'Failed to update items shopping list status: ' + error,
    );
  }
};

// Update if the item was purchased on the shopping list
export const updatePurchasedOnList = async (
  key: string,
  purchasedItem: Boolean,
) => {
  try {
    await storage.save({
      key: key,
      data: {
        purchasedOnList: purchasedItem,
      },
    });
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    // Throw an error if there is no data
    throw new PantryUpdateError(
      'Failed to update items purchased on list status: ' + error,
    );
  }
};
