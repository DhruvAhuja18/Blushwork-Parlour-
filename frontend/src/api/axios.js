import axios from 'axios';

// Create an Axios instance configured to point to our Node/Express backend
const api = axios.create({
  baseURL: 'http://localhost:5001/api', // Pointing to the backend running locally
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
