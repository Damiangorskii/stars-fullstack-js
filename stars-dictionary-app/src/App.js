import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Header from './components/Common/Header';
import StarList from './components/Stars/StarList';
import StarDetail from './components/Stars/StarDetail';
import StarForm from './components/Stars/StarForm';
import api from './services/api';

const App = () => {
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
    } catch (error) {
      console.error('Operation failed', error);
    }
  };

  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<StarList />} exact />
          <Route path="/stars/:id" element={<StarDetail />} />
          <Route
            path="/add-star"
            element={<StarForm onSubmit={handleSubmit} />}
          />
          <Route
            path="/edit-star/:id"
            element={<StarForm onSubmit={handleSubmit} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
