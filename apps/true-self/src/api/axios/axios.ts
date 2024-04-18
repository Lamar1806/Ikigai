import axios_package, { AxiosError } from 'axios';

const baseURL = {
  coinGecko: 'http://localhost:3333',
};

const axios = axios_package.create({
  baseURL: baseURL.coinGecko,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axios.interceptors.request.use(
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
axios.interceptors.response.use(
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

export default axios;
