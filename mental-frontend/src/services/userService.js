import api from './api';

const userService = {
  getUserDetails: async (userId) => {
    return api.get(`users/${userId}`);
  },
};

export default userService;
