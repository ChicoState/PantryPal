// File: PantryPal/Storage.ts
// Description: Storage functions for PantryPal

// Currently only supports local storage
// TODO: Add support for cloud storage, like Firebase or AWS

// Necessary imports
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    // We"ll leave this blank for now
  },
});
// I"m not sure if we need to export this, but I"m going to for now
// I"m pretty sure that we can just use the storage object we created above and just call the methods on it
export default storage;

// Various Error Handlers
// Error for saving the list of items
export class PantrySaveListError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PantrySaveError';
  }
}

// Error for loading the list of items in the pantry
export class PantryLoadKeysError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PantryLoadKeysError';
  }
}

// Error for deleting an item
export class PantryDeleteError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ItemDeleteError';
  }
}

// Error for updating an individual item
export class PantryUpdateError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ItemUpdateError';
  }
}

// Error for loading an individual item
export class PantryLoadItemError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PantryLoadItemError';
  }
}

export class ShoppingListLoadError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ShoppingListLoadError';
  }
}

// Loading Functions
// Get the keys of all the items in our pantry from storage
export const loadPantryKeys = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    // Throw an error if there is no data
    // throw new PantryLoadKeysError('Failed to load pantry: ' + error);
    return [];
  }
};

export const loadPantry = async () => {
  try {
    // Get the keys of the items in storage
    const keys = await AsyncStorage.getAllKeys();
    // Filter out the keys that are not in our pantry
    return keys;
    // return pantryKeys;
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    // Return nothing if there is no data or an error
    return [];
  }
};

// Get the keys of the items only on our shopping list from storage
export const loadShoppingList = async () => {
  try {
    // Get the keys of the items in storage
    const keys = await AsyncStorage.getAllKeys();
    // Filter out the keys that are not on our shopping list
    const shoppingListKeys = [];
    // Check if the item is on our shopping list
    for (const key of keys) {
      const data = await loadItem(key);
      if (data.shoppingList) {
        shoppingListKeys.push(key);
      }
    }
    return shoppingListKeys;
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    // Throw an error if there is no data
    throw new ShoppingListLoadError('Failed to load shopping list: ' + error);
  }
};

/*
 * Save an item in our pantry to storage
 * @param key - This should be the name of the item, ie "milk", "eggs", etc, no underscores are allowed
 * @param name - name of item, should be the same as key
 * @param datePurchased - date the item was purchased
 * @param quantity - quantity of item
 * @param freezer - if the item is in the freezer
 * @param fridge - if the item is in the fridge
 * @param pantry - if the item is in the pantry
 * @param expiration - expiration date of item
 * @param onList - if the item is on the shopping list
 * @param purchasedItem - if the item is on the shopping list and has been purchased
 * @param expires - expiration time of data in storage, we are going to set this to null for now
 */
export const saveItem = async (
  key: string,
  datePurchased: Date,
  quantity: Number,
  fridge: Boolean,
  freezer: Boolean,
  pantry: Boolean,
  expiration: Date,
  onList: Boolean,
  purchasedItem: Boolean,
  inPantry: Boolean,
  expires = null,
) => {
  try {
    await storage.save({
      key: key,
      // Set the data we want to store
      // nameInStorage: data
      data: {
        // Item name
        name: key,
        // Date purchased
        whenPurchased: datePurchased,
        // Quantity of item
        amount: quantity,
        // If the item is in the refrigerator
        fridge: fridge,
        // If the item is in the freezer
        freezer: freezer,
        // If the item is in the pantry
        pantry: pantry,
        // Date of expiration
        expiration: expiration,
        // If the item is on the shopping list
        // shoppingList: onList,
        // If the item is on the shopping list has been purchased
        // purchasedOnList: purchasedItem,
      },
      expires: expires,
    });
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    // Throw an error if we fail to save the data
    throw new PantrySaveListError('Failed to save item: ' + error);
  }
};

// Load an item in our pantry from storage
/// @param key - This should be the name of the item, ie "milk", "eggs", etc, no underscores are allowed
export const loadItem = async (key: string) => {
  try {
    const data = await storage.load({
      key: key,
    });
    return data;
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    // Throw an error if there is no data
    throw new PantryLoadItemError('Failed to load item: ' + error);
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
    // Throw an error if there is an issue
    return new PantryDeleteError('Failed to delete item: ' + error);
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
    // Throw an error if there is  an issue
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
    // Throw an error if there is an issue
    throw new PantryUpdateError('Failed to update items quantity: ' + error);
  }
};

// Update the location of an item
export const updateLocation = async (
  key: string,
  fridge: Boolean,
  freezer: Boolean,
  pantry: Boolean,
) => {
  try {
    await storage.save({
      key: key,
      data: {
        fridge: fridge,
        freezer: freezer,
        pantry: pantry,
      },
    });
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    // Throw an error if there is an issue
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
export const updateOnList = async (key: string, onList: Boolean) => {
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
  purchased: Boolean,
) => {
  try {
    await storage.save({
      key: key,
      data: {
        purchasedOnList: purchased,
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

// Update if the item is in our pantry
export const updateInPantry = async (key: string, inPantry: Boolean) => {
  try {
    await storage.save({
      key: key,
      data: {
        inPantry: inPantry,
      },
    });
  } catch (error) {
    // This is for debugging purposes
    console.log(error);
    // Throw an error if there is no data
    throw new PantryUpdateError(
      'Failed to update items in pantry status: ' + error,
    );
  }
};
