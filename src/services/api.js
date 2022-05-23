import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://sp-labs.vercel.app/api',
});

export default api;
