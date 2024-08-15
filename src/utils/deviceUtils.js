import { Dimensions } from 'react-native';

// Function to determine if the device is a tablet
export const isTablet = () => {
  // Get the width and height of the device window
  const { width, height } = Dimensions.get('window');
  
  // Calculate the aspect ratio of the device
  const aspectRatio = height / width;
  
  // A common threshold for distinguishing tablets from phones is an aspect ratio of <= 1.6
  return aspectRatio <= 1.6;
};

// Function to determine if the device orientation is landscape
export const isLandscape = () => {
  // Get the width and height of the device window
  const { width, height } = Dimensions.get('window');
  
  // Compare width and height to check if the device is in landscape mode
  return width > height;
};
