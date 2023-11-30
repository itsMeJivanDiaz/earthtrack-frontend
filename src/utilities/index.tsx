import {android, apple, windows, unknown} from '../assets/images';
import {ImageSourcePropType} from 'react-native';

const capitalize = (str: string): string => {
  return str.at(0)?.toUpperCase() + str.slice(1);
};

const getImages = (category: string): ImageSourcePropType => {
  if (category === 'ios') {
    return apple;
  } else if (category === 'android') {
    return android;
  } else if (category === 'windows') {
    return windows;
  }
  return unknown;
};

export {capitalize, getImages};
