import { AxiosResponse } from 'axios';
import axios_coin_gecko_free from './axios';

export const pingCoinGecko = () => {
  return axios_coin_gecko_free
    .get('/ping', {
      headers: {
        accept: 'application/json',
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
