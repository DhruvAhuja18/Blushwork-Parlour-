import axios from 'axios';

// Create an Axios instance configured to point to our Node/Express backend
const api = axios.create({
  baseURL: '/api', // Relative path triggers Vite Proxy in Dev, and Vercel routing in Prod
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
