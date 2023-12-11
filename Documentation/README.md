# Documentation
This is intended to be a guide to understand how to use the libraries and their various components. It is not intended to be a user guide for the app itself.


## Table of Contents
1. [Project File Information](#1-project-file-information)
2. [License References](#2-license-references)
3. [Languages & Tools Used](#3-languages-&-tools-used)
4. [Modules & Libraries](#4-modules-&-libraries)
    1. [Fixing Vulnerabilities](#41-fixing-vulnerabilities)
    2. [React-Native-Firebase](#42-react-native-firebase)
        1. [Installation](#421-installation)
        2. [Setup](#422-setup)
        3. [Firebase Collections](#423-firebase-collections)
    3. [React-Native-DateTimePicker](#43-react-native-datetimepicker)
        1. [Installation](#431-installation)
    4. [NP](#44-np)
        1. [Installation](#441-installation)
    5. [React-Native-Version](#45-react-native-version)
        1. [Installation](#451-installation)
    6. [React-Navigation](#46-react-navigation)
        1. [Installation](#461-installation)
    7. [React-Native-Pager-View](#47-react-native-pager-view)
        1. [Installation](#471-installation)
    8. [React-Native-Snackbar](#48-react-native-snackbar)
        1. [Installation](#481-installation)
    9. [React-Native-Pager-View](#49-react-native-pager-view)
    10. [React-Native-Notifications](#410-react-native-notifications)
        1. [Installation](#4101-installation)
    11. [Jest](#411-jest)
        1. [Installation](#4111-installation)
    12. [Appium](#412-appium)
        1. [Installation](#4121-installation)
5. [How to Run](#5-how-to-run)
    1. [Prerequisites](#51-prerequisites)
    2. [Install Dependencies](#52-install-dependencies)
    3. [Run the Application](#53-run-the-application)
        1. [Start the Metro Server](#531-start-the-metro-server)
        2. [Start the Application](#532-start-the-application)
6. Testing
    1. [Appium](#61-appium)


## 1. Project File Information
- / - The root of the GitHub repository.
- /Documentation - Contains documentation for the project.
- /Documentation/README.md - This file.
- /Documentation/LICENSES.md - Contains a list of the licenses for the libraries used in the project.
- /Documentation/Licenses - Contains copies of the licenses for the libraries used in the project.
- /PantryPal - The root project directory. This contains the source code for the project.
- /PantryPal/&#95;&#95;tests&#95;&#95; - Contains the tests for the project.
- /PantryPal/&#95;&#95;tests&#95;&#95;/Appium - Contains the Appium tests for the app.
- /PantryPal/&#95;&#95;tests&#95;&#95;/Appium/appiumTest.js - This is the test from the documentation.
- /PantryPal/&#95;&#95;tests&#95;&#95;/Appium/tests.js - Contains Appium the tests for the app.
- /PantryPal/&#95;&#95;tests&#95;&#95;/App.test.tsx - Contains the tests for the App.
- /PantryPal/&#95;&#95;tests&#95;&#95;/GroceryList.test.js - Contains the tests for the GroceryList.
- /PantryPal/&#95;&#95;tests&#95;&#95;/HomeScreen.test.js - Contains the tests for the HomeScreen.
- /PantryPal/&#95;&#95;tests&#95;&#95;/MealScreen.test.js - Contains the tests for the MealScreen.
- /PantryPal/&#95;&#95;tests&#95;&#95;/PantryScreen.test.js - Contains the tests for the PantryScreen.
- /PantryPal/Images - Contains the images used in the project.
- /PantryPal/.eslintrc.js - Contains the eslint configuration for the project.
- /PantryPal/.prettierrc.js - Contains the prettier configuration for the project.
- /PantryPal/AddItem.js - Contains the add pantry item screen.
- /PantryPal/app.json - Contains the app information for the project.
- /PantryPal/App.tsx - This is the main file of the app and contains navigation stack for the different screens.
- /PantryPal/babel.config.js - Contains the babel configuration for the project.
- /PantryPal/declarations.d.ts - Contains the typescript declarations for the project.
- /PantryPal/EditItem.tsx - Contains the edit pantry item screen.
- /PantryPal/GroceryList.js - Contains the grocery list screen.
- /PantryPal/GroceryListStorage.ts - Contains the firebase storage functions for the Grocery List. (Currently not used)
- /PantryPal/jest.config.js - Contains the jest configuration for the project.
- /PantryPal/HomeScreen.js - Contains buttons to navigate to the screens.
- /PantryPal/index.js - Contains the index for the project.
- /PantryPal/MealScreen.js - Contains a list of preloaded meals.
- /PantryPal/metor.config.js - Contains the metro configuration for the project.
- /PantryPal/Notifications.js - Contains the notification functions. (Currently not used)
- /PantryPal/package.json - Contains the package information for the project.
- /PantryPal/Pantry.js - Contains the pantry screen.
- /PantryPal/PantryScreen.test.js - Contains the tests for the pantry screen.
- /PantryPal/PantryStorage.ts - Contains the firebase storage functions for the Pantry.
- /PantryPal/README.md - Readme for the app.
- /PantryPal/Styles.js - Contains the styles for the pantry, edit item, and add item screens.
- /PantryPal/tsconfig.json - Contains the typescript configuration for the project.
- /LICENSE.md - PantryPal project license.
- /README.md - The readme for the github repository.
- View the files and their included comments for more detailed information.


## 2. License References
According to the terms and conditions of the various licenses, we must include the following references in the project:
- [Licenses](LICENSES.md)


## 3. Languages & Tools Used
- [Android Studio](https://developer.android.com/studio)
- [Appium](https://appium.io/)
- [Firebase](https://firebase.google.com/)
- [React](https://react.dev/)
- [React-Native](https://reactnative.dev/)
- [NodeJS](https://nodejs.org/en/)
- [Jest](https://jestjs.io/)


## 4. Modules & Libraries
- Most of the libraries used in this project are listed below. The links will take you to the GitHub, or the webpage for each library.
- After each pull of the main branch, always make sure you run the following command in the root of the project directory to make sure you have all of the required libraries:
```bash
npm install
```

### 4.1. Fixing Vulnerabilities
You may encounter a similar notice when installing packages:
```bash
4 vulnerabilities (1 high, 3 critical)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force
```
To fix the vulnerabilities, run the following command in the root of the project directory:
```bash
npm audit fix --force
```


### 4.2. React-Native-Firebase
- [React-Native-Firebase](https://github.com/invertase/react-native-firebase)
- [React-Native-Firebase - Firestore](https://rnfirebase.io/firestore/usage)

#### 4.2.1. Installation
This requires several different packages to be installed.
In the root of the project directory, you can run:
```bash
npm install --save @react-native-firebase/app
npm install @react-native-firebase/firestore
npm install @react-native-firebase/auth
```

### 4.2.2. Setup
You are going to need to generate a new SHA-1 key for the project. This is used to sign the app when it gets built.
- In the root of the project directory, you can run:
```bash
keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```
- Replace `my-release-key.keystore` with the name of the file you want to generate.
- Replace 'my-key-alias' with the name of the alias you want to use.
- Follow all of the prompts, and remember the password you use, I recommend the default password 'android'.
- Once you have generated your key, you need to grab the SHA-1 key from it.
- In the root of the project directory, you can run:
```bash
keytool -list -v -keystore my-release-key.keystore
```
- Replace `my-release-key.keystore` with the name of the file you generated.
- Copy the SHA-1 key.
- Add the SHA-1 key to the SHA certificate fingerprints in the Firebase console project settings.
- Download the `google-services.json` file from the Firebase console project settings.
- Add the `google-services.json` file to the `PantryPal/android/app` directory of the project.

#### 4.2.3. Firebase Collections
As of now, we have two collections in our Firebase Firestore database.
- `Pantry` - This collection contains all of the pantry items.
- `GroceryList` - This collection contains all of the grocery list items.

### 4.3. React Native DateTimePicker
- [React Native DateTimePicker](https://github.com/react-native-datetimepicker/datetimepicker)

#### 4.3.1. Installation
In the root of the project directory, you can run:
```bash
npm install @react-native-community/datetimepicker --save
```


### 4.4. NP
- [NP](https://github.com/sindresorhus/np)

#### 4.4.1. Installation
In the root of the project directory, you can run:
```bash
npm install --global np
```


### 4.5 React Native Version
- [React-Native-Version](https://github.com/stovmascript/react-native-version)

#### 4.5.1 Installation
In the root of the project directory, you can run:
```bash
$ npm install react-native-version --save-dev
```


### 4.6 React Navigation
- [React-Navigation](https://reactnavigation.org/docs/getting-started)

#### 4.6.1 Installation
In the root of the project directory, you can run:
```bash
npm install @react-navigation/material-top-tabs
```


### 4.7 React Native Pager-View
- [React-Native-Pager-View](https://github.com/callstack/react-native-pager-view)

#### 4.7.1 Installation
In the root of the project directory, you can run:
```bash
npm install react-native-pager-view
```


### 4.8 React Native Snackbar
- [React-Native-Snackbar](https://github.com/cooperka/react-native-snackbar/tree/main)

#### 4.8.1 Installation
In the root of the project directory, you can run:
```bash
npm install react-native-snackbar --save
```


### 4.9 React-Native-Pager-View
- [React-Native-Pager-View](https://github.com/callstack/react-native-pager-view)


### 4.10 React-Native-Notifications
- [React-Native-Notifications](https://github.com/wix/react-native-notifications)

#### 4.10.1 Installation
In the root of the project directory, you can run:
```bash
npm install react-native-notifications --save
```


### 4.11 Jest
- [Jest](https://jestjs.io/)
- [Jest - Getting Started](https://jestjs.io/docs/en/getting-started)

#### 4.11.1 Installation
In the root of the project directory, you can run:
```bash
npm install --save-dev jest
npm install --save-dev @babel/preset-typescript
npm install --save-dev jest-transform-stub
npm install --save-dev jest-expo-asset
```


### 4.12 Appium
- [Appium](https://appium.io/)
- [Appium - Getting Started](https://appium.io/docs/en/about-appium/getting-started/?lang=en)

#### 4.12.1 Installation
In the root of the project directory, you can run:
```bash
npm i --location=global appium
```
- After installing Appium, you can check that it is installed correctly by running:
```bash
appium
```
- You should see something like this:
```bash
[Appium] Welcome to Appium v2.2.3
```
- You then need to install the Appium drivers, which are used to run the tests on the Android emulator.
```bash
appium driver install uiautomator2
```
- It should produce output that looks something like:
```bash
Attempting to find and install driver 'uiautomator2'
✔ Installing 'uiautomator2' using NPM install spec 'appium-uiautomator2-driver'
Driver uiautomator2@2.0.5 successfully installed
- automationName: UiAutomator2
- platformNames: ["Android"]
```
- After installing the Appium drivers, you can check that it is installed correctly by running:
```bash
appium
```
- You should see that the newly-installed driver is listed as available:
```bash
[Appium] Available drivers:
[Appium]   - uiautomator2@2.0.5 (automationName 'UiAutomator2')
```
- To write an Appium test in JavaScript (Node.js), we also need to install an Appium-compatible client library
```bash
npm i --save-dev webdriverio
```


## 5. How to Run

### 5.1. Prerequisites
- [Android Studio](https://developer.android.com/studio)
- [NodeJS](https://nodejs.org/en/)
- [React-Native](https://reactnative.dev/)
- Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

### 5.2. Install Dependencies
- Run `npm install` in the root directory of the project.

### 5.3. Run the Application
>**Note**: This is one way to run our app — you can also run it directly from within Android Studio and Xcode respectively.

#### 5.3.1 Start the Metro Server
- First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.
- To start Metro, run the following command from the _root_ of our React Native project (/PantryPal): 
### For Android
```bash
# using npm
npm run android
```
### For iOS
```bash
# using npm
npm run ios
```

#### 5.3.2 Start the Application
- Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of our React Native project (/PantryPal). Run the following command to start our _Android_ app:
### For Android
```bash
# using npm
npm run android
```
### For iOS
```bash
# using npm
npm run ios
```

>**Note**: If everything is set up _correctly_, you should see our app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

>**Note**: This is one way to run our app — you can also run it directly from within Android Studio and Xcode respectively.

## 6. Testing
- [Appium](https://appium.io/)

### 6.1. Appium
- [Appium - Getting Started](https://appium.io/docs/en/about-appium/getting-started/?lang=en)
