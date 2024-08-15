This React Native application consists of two screens: a List View and a Details View. The app fetches data from the API endpoint https://api.restful-api.dev/objects and displays it on the respective screens. The app is designed to be responsive, so it works on both mobile devices and the web.

Have nodejs installed and I installed Expo CLI globally, 
Install required dependencies by running "npm install"
Start the development server "npm run start" or npx expo start then choose w if you want to open from the web.

List View: The first screen shows a list of items fetched from https://api.restful-api.dev/objects.
Details View: Tap or click on any item in the list to view detailed information about that item.

To stop the Expo development server, press Ctrl + C in the terminal.


PROJECT STRUCTURE
ApiDisplayApp/
├── App.js                       # Entry point of the app
├── src
   ├── components/               # Reusable components
      │   ├── ItemList.js        # Component for rendering an item in the List View
      │   └── ItemDetails.js     # Component for rendering details in the Details View
   ├── screens/                  # App screens
      │   ├── ListViewScreen.js  # List View screen
      │   └── DetailsViewScreen.js # Details View screen
   ├── utils/                   # Utils
      │   └── deviceUtils.js    # Utility functions for device detection
├── assets/                     # Images and other assets
├── package.json                # NPM package file
└── README.md                   # This file (for guide)

There was no design followed but in other versions the design will be improved.
