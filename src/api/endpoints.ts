import Config from 'react-native-config';

export const endpoints = {
  getCatalogue: `${Config.API_BASE_URL}/api/catalogues?populate*`,
};
