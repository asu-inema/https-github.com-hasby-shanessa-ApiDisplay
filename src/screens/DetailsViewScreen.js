import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const DetailsViewScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      {item.data && (
        <>
          <Text style={styles.subtitle}>Details:</Text>
          {Object.entries(item.data).map(([key, value]) => (
            <Text key={key} style={styles.detail}>
              {key}: {JSON.stringify(value)}
            </Text>
          ))}
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  detail: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default DetailsViewScreen;