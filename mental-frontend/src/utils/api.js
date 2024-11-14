import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const fetchData = async (endpoint) => {
  const response = await api.get(endpoint);
  return response.data;
};

export const postData = async (endpoint, data) => {
  const response = await api.post(endpoint, data);
  return response.data;
};
