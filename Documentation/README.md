# Documentation
This is intended to be a guide for ourselves to understand how to use the libraries and their various components. It is not intended to be a user guide for the app itself.


## Table of Contents
1. [File Information](#1-file-information)
2. [License References](#2-license-references)
3. [Frameworks & Tools Used](#3-frameworks-&-tools-used)
4. [Modules & Libraries Used](#4-modules-&-libraries-used)
    1. [Fixing Vulnerabilities](#41-fixing-vulnerabilities)
    2. [React-Native-Firebase](#42-react-native-firebase)
        1. [Installation](#421-installation)
        2. [Setup](#422-setup)
    3. [React-Native-DateTimePicker](#43-react-native-datetimepicker)
        1. [Installation](#431-installation)
    4. [NP](#43-np)
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
    10. [](#410-)
5. [How to Run](#5-how-to-run)
    1. [Prerequisites](#51-prerequisites)
    2. [Install Dependencies](#52-install-dependencies)
    3. [Run the Application](#53-run-the-application)
        1. [Start the Metro Server](#531-start-the-metro-server)
        2. [Start the Application](#532-start-the-application)


## 1. Project File Information
- /PantryPal - The root directory of the project.
- /PantryPal/AddItem.js - Contains the add pantry item screen
- /PantryPal/App.tsx - Contains navigation stack for the different screens
- /PantryPal/EditItem.js - Contains the edit pantry item screen
- /PantryPal/GroceryList.js - Contains the grocery list screen
- /PantryPal/HomeScreen.js - Contains buttons to navigate to the screens
- /PantryPal/Pantry.js - Contains the pantry screen
- /PantryPal/Storage.ts - Contains the firebase storage functions
- /PantryPal/Styles.js - Contains the styles for the pantry, edit item, and add item screens
- View the files for more information on the functions and components used.


## 2. License References
According to the terms of the MIT License, we must include the following references in the project:
- [Licenses](LICENSES.md)


## 3. Frameworks & Tools Used
- [Firebase](https://firebase.google.com/)
- [React](https://react.dev/)
- [React-Native](https://reactnative.dev/)
- [NodeJS](https://nodejs.org/en/)


## 4. Modules & Libraries Used
- All of the libraries used in this project are listed below. The links will take you to the GitHub, or the webpage for each library.
- After each pull of the main branch, always make sure you run the following command in the root of the project directory to make sure you have all of the required libraries:
```bash
npm install
```

### 4.1. Fixing Vulnerabilities
You may encounter the following when installing packages:
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

#### 4.2.1. Installation
This requires several different packages to be installed.
In the root of the project directory, you can run:
```bash
npm install --save @react-native-firebase/app
npm install @react-native-firebase/firestore
npm install @react-native-firebase/auth
```

### 4.2.2. Setup
You are going to need to generate a new SHA-1 key for the project. This is used for the Firebase Authentication.
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


## 5. How to Run

### 5.1. Prerequisites
- [Android Studio](https://developer.android.com/studio)
- [NodeJS](https://nodejs.org/en/)
- [React-Native](https://reactnative.dev/)
- Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

### 5.2. Install Dependencies
- Run `npm install` in the root directory of the project.

### 5.3. Run the Application
This is one way to run our app — you can also run it directly from within Android Studio.

#### 5.3.1 Start the Metro Server
- First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.
- To start Metro, run the following command from the _root_ of our React Native project (/PantryPal): 
```bash
npm start
```

#### 5.3.2 Start the Application
- Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of our React Native project (/PantryPal). Run the following command to start our _Android_ app:
```bash
npm run android
```
- If everything is set up _correctly_, you should see our new app running in your _Android Emulator_ shortly.