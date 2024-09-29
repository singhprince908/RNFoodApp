import Config from 'react-native-config';

export const endpoints = {
  getCatalogue: `${Config.API_BASE_URL}/api/catalogues?populate=image`,
  login:  `${Config.API_BASE_URL}/api/auth/local`,
  register: `${Config.API_BASE_URL}/api/auth/local/register`
};
