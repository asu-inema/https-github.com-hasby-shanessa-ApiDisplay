import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';

// Functional component for listing items
const ListViewScreen = ({ navigation }) => {
  // State to hold the list of items
  const [items, setItems] = useState([]);
  // State to manage loading state
  const [loading, setLoading] = useState(true);
  // State to manage error messages
  const [error, setError] = useState(null);
  // // Setting layout
  // const [orientation, setOrientation] = useState('portrait');


// Effect hook to fetch data on component mount
//   useEffect(() => {
//     fetchData();

//   const updateOrientation = () => {
//     const { width, height } = Dimensions.get('window');
//     setOrientation(width > height ? 'landscape' : 'portrait');
//   };
  
//   Dimensions.addEventListener('change', updateOrientation);
//   updateOrientation(); // Initial call

//   return () => {
//     Dimensions.removeEventListener('change', updateOrientation);
//   };
// }, []);


  // Effect hook to fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      // Making an API request to fetch data
      const response = await axios.get('https://api.restful-api.dev/objects');
      // Update state with fetched data and stop loading
      setItems(response.data);
      setLoading(false);
    } catch (err) {
      // Handle error by setting an error message and stop loading
      setError('An error occurred while fetching data');
      setLoading(false);
    }
  };

  // Function to render each item in the list
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { item })}>
      <View style={styles.item}>
        {/* Display item name */}
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  // Show loading spinner while data is being fetched
  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Show error message if there is an error
  if (error) {
    return (
      <View style={styles.centered}>
        <Text>{error}</Text>
      </View>
    );
  }

  // Render the list of items using FlatList
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()} // Use item ID as key
      />
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  // Container style for the screen
  container: {
    flex: 1,
    paddingTop: 22, // Add top padding
  },
  // Style for each item in the list
  item: {
    padding: 20, // Add padding around each item
    borderBottomWidth: 1, // Add bottom border
    borderBottomColor: '#cccccc', // Set border color
  },
  // Style for the item title
  title: {
    fontSize: 18, // Font size for item name
  },
  // Centered style for loading and error views
  centered: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
});

export default ListViewScreen;
