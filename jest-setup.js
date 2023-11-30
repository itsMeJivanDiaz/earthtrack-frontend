import {jest} from '@jest/globals';
import {NativeModules} from 'react-native';

NativeModules.ReactLocalization = {
  language: 'en',
};

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('react-native-toast-message');
