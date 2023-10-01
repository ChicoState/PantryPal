// Storage functions for PantryPal
// File: Storage.ts
// Description: Storage functions for PantryPal

// Currently only supports local storage
// TODO: Add support for cloud storage, like Firebase

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
  // return the corresponding sync method
  // Default is true
  sync: {
    // We'll leave this blank for now
  },
});

export default storage;

/*
 * Save the items in our pantry to storage
 *  key - This should be the name of the item, ie "milk", "eggs", etc, no underscores are allowed
 * @param purchased - date the item was purchased
 * @param quantity - quantity of item
 * @param location - location of item, ie "fridge", "freezer", "pantry", etc
 * @param bestBy - best by date of item
 * @param expiration - expiration date of item
 * @param expires - expiration time of data in storage, we are going to set this to null for now
 */
export const savePantry = async (
  key: string,
  purchased: Date,
  quantity: Number,
  location: String,
  bestBy: Date,
  expiration: Date,
  expires = null,
) => {
  try {
    await storage.save({
      key: key,
      data: {
        // Date purchased
        purchased: purchased,
        // Quantity of item
        quantity: quantity,
        // Where it stored, ie "fridge", "freezer", "pantry", etc
        location: location,
        // Date of best by
        bestBy: bestBy,
        // Date of expiration
        expiration: expiration,
      },
      expires: expires,
    });
  } catch (error) {
    console.log(error);
  }
};

// Load the items in our pantry from storage
/// @param key - This should be the name of the item, ie "milk", "eggs", etc, no underscores are allowed
export const loadPantry = async (key: string) => {
  try {
    const data = await storage.load({
      key: key,
    });
    return data;
  } catch (error) {
    console.log(error);
    // Return null if there is no data
    return null;
  }
};

// Delete the items in our pantry from storage
/// @param key - This should be the name of the item, ie "milk", "eggs", etc
export const deletePantry = async (key: string) => {
  try {
    await storage.remove({
      key: key,
    });
  } catch (error) {
    console.log(error);
    // Return null if there is no data
    return null;
  }
};
