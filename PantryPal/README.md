# PantryPal
- See the [Documentation](/Documentation/README.md) for more information about the things used in the project.


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
- /PantryPal/Images - Contains the images used in the project.
- /PantryPal/AddItem.js - Contains the add pantry item screen.
- /PantryPal/App.tsx - This is the main file of the app and contains navigation stack for the different screens.
- /PantryPal/declarations.d.ts - Contains the typescript declarations for the project.
- /PantryPal/EditItem.tsx - Contains the edit pantry item screen.
- /PantryPal/GroceryList.js - Contains the grocery list screen.
- /PantryPal/HomeScreen.js - Contains buttons to navigate to the screens.
- /PantryPal/MealScreen.js - Contains a list of preloaded meals.
- /PantryPal/Notifications.js - Contains the notification functions.
- /PantryPal/Pantry.js - Contains the pantry screen.
- /PantryPal/PantryStorage.ts - Contains the firebase storage functions for the Pantry.
- /PantryPal/README.md - This file.
- /PantryPal/Styles.js - Contains the styles for the pantry, edit item, and add item screens.
- /PantryPal/tsconfig.json - Contains the typescript configuration for the project.