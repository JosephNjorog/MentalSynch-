import api from './api';

const authService = {
  login: async (credentials) => {
    return api.post('login', credentials);
  },
  register: async (userData) => {
    return api.post('register', userData);
  },
};

export default authService;
