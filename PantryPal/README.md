# PantryPal
- See the [Documentation](/Documentation/README.md) for more information about the things used in the project.


# Description
**PantryPal** is an Android and web application focusing on keeping track of the food in your pantry and their expiration dates. It also features a shopping list creator to help with planning shopping trips to replace any expired food.


# Getting Started
>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.
>**Note**: This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 1: Install the Dependencies
To install the dependencies of this project, run the following command from the _root_ of this project (/PantryPal):
```bash
# using npm
npm install
```

## Step 2: Start the Metro Server
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

## Step 3: Start the Application
Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of the React Native project (/PantryPal). Run the following command to start the _Android_ or _iOS_ app:
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


# File Information
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