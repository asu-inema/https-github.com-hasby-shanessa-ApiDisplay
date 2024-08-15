import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListViewScreen from './src/screens/ListViewScreen';
import DetailsViewScreen from './src/screens/DetailsViewScreen';

// Create a stack navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    // Navigation container that holds the navigation state
    <NavigationContainer>
      {/* Stack navigator to manage stack-based navigation */}
      <Stack.Navigator initialRouteName="List">
        {/* Screen for listing items */}
        <Stack.Screen
          name="List" // Name of the route
          component={ListViewScreen} // Component to render for this route
          options={{ title: 'Item List' }} // Options for this screen, like the title
        />
        
        {/* Screen for displaying details of an item */}
        <Stack.Screen
          name="Details" // Name of the route
          component={DetailsViewScreen} // Component to render for this route
          options={{ title: 'Item Details' }} // Options for this screen, like the title
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
