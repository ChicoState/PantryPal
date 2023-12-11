/* 
 * File: PantryPal/appiumTest.js
 * Description: This is from the Appium documentation
 * It opens the settings app on the emulator,
 * it clicks on the "Battery" button, and closes the app. 
 */

const {remote} = require('webdriverio');

// These are from the Appium documentation
const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Android',
  'appium:appPackage': 'com.android.settings',
  'appium:appActivity': '.Settings',
};
const wdOpts = {
  hostname: process.env.APPIUM_HOST || '127.0.0.1',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
};
async function smokeTest() {
  const driver = await remote(wdOpts);
  try {
    await driver.pause(10000);
  } finally {
    await driver.deleteSession();
  }
}
smokeTest().catch(console.error);
