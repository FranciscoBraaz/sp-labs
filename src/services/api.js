import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sp-labs.vercel.app/api',
});

export default api;
