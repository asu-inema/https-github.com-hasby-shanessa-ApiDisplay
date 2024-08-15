import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


// Functional component to display item details
const ItemDetails = ({ item }) => {
  return (
    // Container view for the item details
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.data.description}</Text>
      <Text style={styles.price}>Price: ${item.data.price}</Text>
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
    // Container style for padding and layout
  container: {
    padding: 20, // Adds padding around the container
  },
  // Style for the item title
  title: {
    fontSize: 24, // Larger font size for the title
    fontWeight: 'bold', // Bold font weight for emphasis
    marginBottom: 10, // Space below the title
  },
   // Style for the item description
  description: {
    fontSize: 16, // Font size for the description
    marginBottom: 10, // Space below the description
  },
  // Style for the item price
  price: {
    fontSize: 18, // Font size for the price
    fontWeight: 'bold', // Bold font weight for emphasis
  },
});

export default ItemDetails;