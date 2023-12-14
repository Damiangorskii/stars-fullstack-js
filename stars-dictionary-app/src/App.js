import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Header from './components/Common/Header';
import StarList from './components/Stars/StarList';
import StarDetail from './components/Stars/StarDetail';
import StarForm from './components/Stars/StarForm';
import api from './services/api';

const App = () => {
  const handleSubmit = async (formData) => {
    try {
      const response = await api.addStar(formData);
      console.log('Star added successfully', response);
    } catch (error) {
      console.error('Failed to add star', error);
    }
  };


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<StarList />} exact />
        <Route path="/stars/:id" element={<StarDetail />} />
        <Route path="/add-star" element={<StarForm onSubmit={handleSubmit} />} />
        <Route path="/edit-star/:id" element={<StarForm onSubmit={handleSubmit} />} />
      </Routes>
    </Router>
  );
};

export default App;
