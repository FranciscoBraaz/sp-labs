import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sp-labs.vercel.app/api1',
});

export default api;
