import axios from 'axios';

let url;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  url = 'https://cors-anywhere.herokuapp.com/https://sp-labs.vercel.app/api';
} else {
  url = 'https://sp-labs.vercel.app/api';
}

const api = axios.create({
  baseURL: url,
});

export default api;
