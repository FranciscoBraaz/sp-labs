import axios from 'axios';

// let url;

// if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
//   url = 'https://sp-labs.vercel.app/api';
// } else {
//   url = 'https://sp-labs.vercel.app/api';
// }

const api = axios.create({
  baseURL: 'https://sp-labs.vercel.app/api',
});

export default api;
