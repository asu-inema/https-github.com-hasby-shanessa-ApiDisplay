import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// Functional component to display details of an item
const DetailsViewScreen = ({ route }) => {
  // Destructure item from route parameters
  const { item } = route.params;
  // // Layout
  // const [orientation, setOrientation] = useState('portrait');


  // useEffect(() => {
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


  return (
    // ScrollView to allow scrolling if content is long
    <ScrollView style={styles.container}>
      {/* Display the item name */}
      <Text style={styles.title}>{item.name}</Text>

      {/* Conditional rendering of details if item.data exists */}
      {item.data && (
        <>
          {/* Subtitle for details section */}
          <Text style={styles.subtitle}>Details:</Text>

          {/* Iterate over item.data and display each key-value pair */}
          {Object.entries(item.data).map(([key, value]) => (
            <Text key={key} style={styles.detail}>
              {/* Display key and value, with value stringified */}
              {key}: {JSON.stringify(value)}
            </Text>
          ))}
        </>
      )}
    </ScrollView>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  // Style for the container view
  container: {
    flex: 1, // Flex to take full available space
    padding: 20, // Padding around the content
  },
  // Style for the item title
  title: {
    fontSize: 24, // Font size for title
    fontWeight: 'bold', // Bold font weight
    marginBottom: 16, // Space below the title
  },
  // Style for the subtitle
  subtitle: {
    fontSize: 20, // Font size for subtitle
    fontWeight: 'bold', // Bold font weight
    marginTop: 16, // Space above the subtitle
    marginBottom: 8, // Space below the subtitle
  },
  // Style for each detail entry
  detail: {
    fontSize: 16, // Font size for detail text
    marginBottom: 8, // Space below each detail entry
  },
});

export default DetailsViewScreen;
