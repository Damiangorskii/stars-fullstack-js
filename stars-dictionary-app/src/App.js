import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './auth/AuthContext';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Header from './components/Common/Header';
import StarList from './components/Stars/StarList';
import StarDetail from './components/Stars/StarDetail';
import StarForm from './components/Stars/StarForm';
import api from './services/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
  const { user } = useAuth();
  console.log('elo', user);
  const handleSubmit = async (formData, id) => {
    try {
      let response;
      if (id) {
        response = await api.editStar(id, formData);
        console.log('Successfully updated star', response);
      } else {
        response = await api.addStar(formData);
        console.log('Successfully added new star', response);
      }
      return { success: true, data: response };
    } catch (error) {
      console.error('Operation failed', error);
      return { success: false, error };
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
          <Route
            path="/add-star"
            element={ user ? <StarForm onSubmit={handleSubmit} /> : <Navigate to="/login" />}
          />
          <Route
            path="/edit-star/:id"
            element={ user ? <StarForm onSubmit={handleSubmit} /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
  );
};

export default App;
