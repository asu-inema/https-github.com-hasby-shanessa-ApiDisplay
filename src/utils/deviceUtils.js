import { Dimensions } from 'react-native';

export const isTablet = () => {
  const { width, height } = Dimensions.get('window');
  const aspectRatio = height / width;
  return aspectRatio <= 1.6;
};

export const isLandscape = () => {
  const { width, height } = Dimensions.get('window');
  return width > height;
};