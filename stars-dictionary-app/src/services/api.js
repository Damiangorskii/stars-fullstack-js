import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbWlhbkB0ZXN0LmNvbSIsImlhdCI6MTcwMjU4MjY3NiwiZXhwIjoxNzAyNTg2Mjc2fQ.Z0cdQX_Ow7bfvSruPSasF-BzQ2cMM0hygGhzJ_0RqHo',
  },
});

const apiService = {
  login: async (credentials) => {
    try {
      const response = await api.post('/users/login', credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  register: async (userData) => {
    try {
      const response = await api.post('/users/signup', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getStars: async () => {
    try {
      const response = await api.get('/stars');
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  getStar: async (starId) => {
    try {
      const response = await api.get(`/stars/${starId}`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  addStar: async (starData) => {
    try {
      const response = (await api.post('/stars', starData));
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  editStar: async (starId, starData) => {
    try {
      const response = await api.put(`/stars/${starId}`, starData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteStar: async (starId) => {
    try {
      const response = await api.delete(`/stars/${starId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default apiService;
