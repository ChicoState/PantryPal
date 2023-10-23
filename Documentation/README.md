# Documentation
This is intended to be a guide for ourselves to understand the how to use the libraries and their various components. It is not intended to be a user guide for the app itself.

## Table of Contents
1. [File Information](#1-file-information)
2. [License References](#2-license-references)
3. [Frameworks Used](#3-frameworks-used)
4. [Libraries Used](#4-libraries-used)
    1. [React-Native-Storage](#41-react-native-storage)
        1. [Installation](#411-installation)
        2. [Fixing Vulnerabilities](#412-fixing-vulnerabilities)
    2. [React-Native-DateTimePicker](#42-react-native-datetimepicker)
        1. [Installation](#421-installation)
        2. [Fixing Vulnerabilities](#422-fixing-vulnerabilities)
    3. [NP](#43-np)
        1. [Installation](#431-installation)
    4. [React-Native-Version](#44-react-native-version)
        1. [Installation](#441-installation)
    5. [React-Navigation](#45-react-navigation)
        1. [Installation](#451-installation)
    6. [React-Native-Pager-View](#46-react-native-pager-view)
        1. [Installation](#461-installation)
    7. [React-Native-Snackbar](#47-react-native-snackbar)
        1. [Installation](#471-installation)
5. [How to Run](#5-how-to-run)
    1. [Prerequisites](#51-prerequisites)
    2. [Install Dependencies](#52-install-dependencies)
    3. [Run the Application](#53-run-the-application)
        1. [Start the Metro Server](#531-start-the-metro-server)
        2. [Start the Application](#532-start-the-application)

## 1. Project File Information
- /PantryPal - The root directory of the project.
- /PantryPal/GroceryList.js - Contains the grocerylist functionality
- /PantryPal/HomeScreen.js - Contains buttons to navigate to screens
- /PantryPal/App.tsx - Contains navigation stack to navigate screens
- /PantryPal/SecondScreen.js - Will contain the pantry functionality
- /PantryPal/Storage.ts - Contains the local storage functionality
- /PantryPal/AddItem.js - Contains the add pantry item functionality
- /PantryPal/EditItem.js - Contains the edit pantry item functionality
- /PantryPal/DeleteItem.js - Contains the delete pantry item functionality
- View the files for more information

## 2. License References
According to the terms of the MIT License, we must include the following references in the project:
- [LICENSES](LICENSES.md)

## 3. Frameworks Used
- [React](https://react.dev/)
- [React-Native](https://reactnative.dev/)
- [NodeJS](https://nodejs.org/en/)

## 4. Libraries Used
- All of the libraries used in this project are listed below. The links will take you to the GitHub page for each library.
- After each pull of the main branch, always make sure you run the following command in the root of the project directory to make sure you have all of the required libraries:
```bash
npm install
```

### 4.1. React-Native-Storage
- [React-Native-Storage](https://github.com/sunnylqm/react-native-storage)

#### 4.1.1. Installation
In the root of the project directory, you can run:
```bash
npm install react-native-storage
npm install @react-native-async-storage/async-storage
```

#### 4.1.2. Fixing Vulnerabilities
You may encounter the following error when you run the commands above:
```bash
4 vulnerabilities (1 high, 3 critical)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force
```

To fix this, run the following command:
```bash
npm audit fix --force
```

### 4.2. React Native DateTimePicker
- [React Native DateTimePicker](https://github.com/react-native-datetimepicker/datetimepicker)

#### 4.2.1. Installation
In the root of the project directory, you can run:
```bash
npm install @react-native-community/datetimepicker --save
```

### 4.3. NP
- [NP](https://github.com/sindresorhus/np)

#### 4.3.1. Installation
In the root of the project directory, you can run:
```bash
npm install --global np
```

### 4.4 React-Native-Version
- [React-Native-Version](https://github.com/stovmascript/react-native-version)

#### 4.4.1 Installation
In the root of the project directory, you can run:
```bash
$ npm install react-native-version --save-dev
```

### 4.5 React-Navigation
- [React-Navigation](https://reactnavigation.org/docs/getting-started)

#### 4.5.1 Installation
In the root of the project directory, you can run:
```bash
npm install @react-navigation/material-top-tabs
```

### 4.6 React-Native-Pager-View
- [React-Native-Pager-View](https://github.com/callstack/react-native-pager-view)

#### 4.6.1 Installation
In the root of the project directory, you can run:
```bash
npm i react-native-pager-view
```

### 4.7 React-Native-Snackbar
- [React-Native-Snackbar](https://github.com/cooperka/react-native-snackbar/tree/main)

#### 4.7.1 Installation
In the root of the project directory, you can run:
```bash
npm install react-native-snackbar --save
```

### 4.6 React-Native-Pager-View
- [React-Native-Pager-View](https://github.com/callstack/react-native-pager-view)

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