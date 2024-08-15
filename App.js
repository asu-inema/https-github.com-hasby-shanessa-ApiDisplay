import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListViewScreen from './src/screens/ListViewScreen';
import DetailsViewScreen from './src/screens/DetailsViewScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="List" component={ListViewScreen} options={{ title: 'Item List' }} />
        <Stack.Screen name="Details" component={DetailsViewScreen} options={{ title: 'Item Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}