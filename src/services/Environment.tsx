import {Platform} from 'react-native';

const version = 'v.1';

const localDomain = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2';

const ENV = {
  dev: {
    env: 'development',
    appVersion: `${version} [Dev]`,
    apiUrl: {
      earthtrack: '',
    },
  },
  local: {
    env: 'local',
    appVersion: `${version} [Local]`,
    apiUrl: {
      earthtrack: `http://${localDomain}:3460/api`,
    },
  },
  prod: {
    env: 'production',
    appVersion: version,
    apiUrl: {
      earthtrack: '',
    },
  },
};

export const getEnvVars = () => {
  return ENV.local;
};
