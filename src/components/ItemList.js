import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

// Functional component to render a list of items
const ItemList = ({ items, onItemPress }) => {
  // Function to render each item in the list
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => onItemPress(item)}>
      {/* View container for each item */}
      <View style={styles.item}>
        {/* Display item name */}
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    // FlatList to render a scrollable list of items
    <FlatList
      data={items} // Data to be rendered in the list
      renderItem={renderItem} // Function to render each item
      keyExtractor={(item) => item.id.toString()} // Unique key for each item
    />
  );
};

// Styles for the component
const styles = StyleSheet.create({
  // Style for each item container
  item: {
    backgroundColor: '#f9c2ff', // Background color for each item
    padding: 20, // Padding inside each item
    marginVertical: 8, // Vertical margin between items
    marginHorizontal: 16, // Horizontal margin between items
  },
  // Style for the item title
  title: {
    fontSize: 18, // Font size for item name
  },
});

export default ItemList;
