/* 
 * File: PantryPal/tests.js
 * Description: These are the tests for the PantryPal app
 * It opens the app, clicks on the "Add Item" button,
 * adds an item, clicks on the "Edit Item" button,
 * edits the item, clicks on the "Delete Item" button.
 */

const { run } = require('jest');
const {remote} = require('webdriverio');

// Create the capabilities for the PantryPal app
const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Android',
  'appium:appPackage': 'com.pantrypal',
  'appium:appActivity': '.MainActivity',
};

// Create the wdOpts for the PantryPal app
const wdOpts = {
  hostname: process.env.APPIUM_HOST || '127.0.0.1',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
};

// This is the function to add an item
async function addItem() {
  const driver = await remote(wdOpts);
  try {
    // Wait for the app to load
    await driver.pause(10000);
    // Click on the "Pantry" button
    await driver.$('android=new UiSelector().text("Pantry")').click();
    // Wait for the pantry screen to load
    await driver.pause(10000);
    // Click on the "Add Item" button
    await driver.$('android=new UiSelector().text("Add Item")').click();
    // Wait for the add item screen to load
    await driver.pause(10000);
    // Enter the item name
    await driver.$('android=new UiSelector().text("Item Name")').setValue("Test Item");
    // Enter the item quantity
    await driver.$('android=new UiSelector().text("Item Quantity")').setValue("1");
    // Click on the "Purchase Date" button
    await driver.$('android=new UiSelector().text("Purchase Date")').click();
    // Wait for the date picker to load
    await driver.pause(10000);
    // Click on the "OK" button
    await driver.$('android=new UiSelector().text("OK")').click();
    // Click on the "Expiration Date" button
    await driver.$('android=new UiSelector().text("Expiration Date")').click();
    // Wait for the date picker to load
    await driver.pause(10000);
    // Click on the "OK" button
    await driver.$('android=new UiSelector().text("OK")').click();
    // Click on the "Refrigerator" button
    await driver.$('android=new UiSelector().text("Refrigerator")').click();
    // Click on the "Add Item" button
    await driver.$('android=new UiSelector().text("Add Item")').click();
    // Wait for the pantry screen to load
    await driver.pause(10000);
  } finally {
    await driver.deleteSession();
  }
};

// This is the function to edit an item
async function editItem() {
  const driver = await remote(wdOpts);
  try {
    // Wait for the app to load
    await driver.pause(10000);
    // Click on the "Pantry" button
    await driver.$('android=new UiSelector().text("Pantry")').click();
    // Wait for the pantry screen to load
    await driver.pause(10000);
    // Click on the "Edit Item" button
    await driver.$('android=new UiSelector().text("Edit Item")').click();
    // Wait for the item screen to load
    await driver.pause(10000);
    // Click on the "Edit Item" button
    await driver.$('android=new UiSelector().text("Edit Item")').click();
    // Wait for the edit item screen to load
    await driver.pause(10000);
    // Enter the item name
    await driver.$('android=new UiSelector().text("Item Name")').setValue("Test Item 2");
    // Enter the item quantity
    await driver.$('android=new UiSelector().text("Item Quantity")').setValue("2");
    // Click on the "Purchase Date" button
    await driver.$('android=new UiSelector().text("Purchase Date")').click();
    // Wait for the date picker to load
    await driver.pause(10000);
    // Click on the "OK" button
    await driver.$('android=new UiSelector().text("OK")').click();
    // Click on the "Expiration Date" button
    await driver.$('android=new UiSelector().text("Expiration Date")').click();
    // Wait for the date picker to load
    await driver.pause(10000);
    // Click on the "OK" button
    await driver.$('android=new UiSelector().text("OK")').click();
    // Click on the "Freezer" button
    await driver.$('android=new UiSelector().text("Freezer")').click();
    // Click on the "Edit Item" button
    await driver.$('android=new UiSelector().text("Edit Item")').click();
    // Wait for the pantry screen to load
    await driver.pause(10000);
  } finally {
    await driver.deleteSession();
  }
};

// This is the function to delete an item
async function deleteItem() {
  const driver = await remote(wdOpts);
  try {
    // Wait for the app to load
    await driver.pause(10000);
    // Click on the "Pantry" button
    await driver.$('android=new UiSelector().text("Pantry")').click();
    // Wait for the pantry screen to load
    await driver.pause(10000);
    // Click on the "Test Item 2" button
    await driver.$('android=new UiSelector().text("Test Item 2")').click();
    // Wait for the item screen to load
    await driver.pause(10000);
    // Click on the "Delete Item" button
    await driver.$('android=new UiSelector().text("Delete Item")').click();
    // Wait for the delete confirmation modal to load
    await driver.pause(10000);
    // Click on the "Yes" button
    await driver.$('android=new UiSelector().text("Yes")').click();
    // Wait for the pantry screen to load
    await driver.pause(10000);
  } finally {
    await driver.deleteSession();
  }
}

// Create a function to run all of the tests at once
async function PantryTests() {
  console.log('Running Tests...');
  await addItem();
  await editItem();
  await deleteItem();
  console.log('Tests Completed.');
}

// Run the tests
PantryTests().catch(console.error);