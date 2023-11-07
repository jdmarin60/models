import axios from 'axios';


const axiosInstance = axios.create({
  //baseURL: process.env.REACT_APP_LB_URL, // Replace with your ELB URL
  baseURL: 'http://localhost:5001',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;