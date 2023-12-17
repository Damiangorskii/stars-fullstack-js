import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSuccessfulRegistration = token => {
    console.log('Successfully registrated! ', token);
    navigate('/login');
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const { email, password } = formData;
      const response = await api.register({ email, password });
      if (response) {
        handleSuccessfulRegistration(response);
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  useEffect(() => {
    return () => {
      setError('');
    };
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <h2 className="text-white mb-4 text-center">Register</h2>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <div className="card bg-dark p-4 rounded">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-white">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label text-white">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="confirmPassword"
                  className="form-label text-white"
                >
                  Confirm Password:
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="form-control"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
