import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

const setAuthToken = token => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiService = {
  login: async credentials => {
    try {
      const response = await api.post('/users/login', credentials);
      const token = response.data.data;
      setAuthToken(token);
      return token;
    } catch (error) {
      throw error;
    }
  },

  register: async userData => {
    try {
      const response = await api.post('/users/signup', userData);
      const token = response.data.data;
      return token;
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

  getStar: async starId => {
    try {
      const response = await api.get(`/stars/${starId}`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  addStar: async starData => {
    try {
      const token = localStorage.getItem('userToken');
      if (token) {
        setAuthToken(token);
      }
      const response = await api.post('/stars', starData);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  editStar: async (starId, starData) => {
    try {
      const token = localStorage.getItem('userToken');
      if (token) {
        setAuthToken(token);
      }
      const response = await api.put(`/stars/${starId}`, starData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteStar: async starId => {
    try {
      const token = localStorage.getItem('userToken');
      if (token) {
        setAuthToken(token);
      }
      const response = await api.delete(`/stars/${starId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default apiService;
