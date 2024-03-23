import axiosPackage from 'axios';

export const axios = axiosPackage.create({
  baseURL: 'http://localhost:3000/', // Replace with your API's base URL
});
