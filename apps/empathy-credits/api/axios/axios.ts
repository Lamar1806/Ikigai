import axios, { AxiosError } from 'axios';

const baseURL = {
  coinGecko: process.env.EXPO_PUBLIC_COIN_GECKO_API,
};

const axios_coin_gecko_free = axios.create({
  baseURL: baseURL.coinGecko,
});

// Add a request interceptor
axios_coin_gecko_free.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    // console.log('Request sent:', config);
    return config;
  },
  (error) => {
    // Do something with request error
    // console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios_coin_gecko_free.interceptors.response.use(
  (response) => {
    // Do something with response data
    // console.log('Response received:', response);
    return response;
  },
  (error: AxiosError) => {
    // Do something with response error
    // console.error('Response error:', error);
    return Promise.reject(error);
  }
);

export default axios_coin_gecko_free;
