# Documentation
This is intended to be a guide for ourselves to understand the how to use the libraries and their various components. It is not intended to be a user guide for the app itself.

## Table of Contents
1. [License References](#1-license-references)
2. [Frameworks Used](#2-frameworks-used)
3. [Libraries Used](#3-libraries-used)
    1. [React-Native-Storage](#31-react-native-storage)
        1. [Installation](#311-installation)
4. [How to Run](#4-how-to-run)
    1. [Prerequisites](#41-prerequisites)
    2. [Install Dependencies](#42-install-dependencies)
    3. [Run the Application](#43-run-the-application)
        1. [Start the Metro Server](#431-start-the-metro-server)
        2. [Start the Application](#432-start-the-application)

## 1. License References
According to the terms of the MIT License, we must include the following references in the project:
- [LICENSES.md](LICENSES.md)

## 2. Frameworks Used
- [React-Native](https://reactnative.dev/)
- [NodeJS](https://nodejs.org/en/)

## 3. Libraries Used

### 3.1. React-Native-Storage
- [React-Native-Storage](https://github.com/sunnylqm/react-native-storage)

#### 3.1.1. Installation
In the project directory, you can run:
```bash
# using npm
npm install react-native-storage
npm install @react-native-async-storage/async-storage
# OR using Yarn
yarn add react-native-storage
yarn add @react-native-async-storage/async-storage
```

## 4. How to Run

### 4.1. Prerequisites
- [Android Studio](https://developer.android.com/studio)
- [NodeJS](https://nodejs.org/en/)
- [React-Native](https://reactnative.dev/)
- Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

### 4.2. Install Dependencies
- Run `npm install` in the root directory of the project.

### 4.3. Run the Application
This is one way to run our app — you can also run it directly from within Android Studio.

### 4.3.1 Start the Metro Server
- First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.
- To start Metro, run the following command from the _root_ of our React Native project (/PantryPal): 
```bash
# using npm
npm start
# OR using Yarn
yarn start
```

### 4.3.2 Start the Application
- Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of our React Native project (/PantryPal). Run the following command to start our _Android_ app:
```bash
# using npm
npm run android
# OR using Yarn
yarn android
```
- If everything is set up _correctly_, you should see our new app running in your _Android Emulator_ shortly.