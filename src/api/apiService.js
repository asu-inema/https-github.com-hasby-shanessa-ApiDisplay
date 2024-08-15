import axios from 'axios';

// Base URL for the API endpoint
const API_URL = 'https://api.restful-api.dev/objects';

// Function to fetch items from the API
export const fetchItems = async () => {
  try {
    // Make an HTTP GET request to the API
    const response = await axios.get(API_URL);

    // Return the data from the response
    return response.data;
  } catch (error) {
    // Log any errors that occur during the request
    console.error('Error fetching data:', error);

    // Rethrow the error to be handled by the caller
    throw error;
  }
};
