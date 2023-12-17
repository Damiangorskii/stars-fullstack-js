import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';
import api from '../../services/api';

const StarList = () => {
  const [stars, setStars] = useState([]);
  const [error, setError] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const starsData = await api.getStars();
        setStars(starsData);
        console.log(starsData);
      } catch (error) {
        setError('Error fetching stars. Please try again.');
      }
    };
    fetchStars();
  }, []);

  const handleDelete = async id => {
    try {
      await api.deleteStar(id);
      setStars(stars.filter(star => star._id !== id));
    } catch (error) {
      setError('Error while deleting star. Please try again.');
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-white mb-3">Stars List</h2>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <div className="row">
        {stars.map(star => (
          <div key={star._id} className="col-md-4 mb-3">
            <div className="card bg-dark text-white">
              <Link to={`/stars/${star._id}`}>
                <img
                  src={`http://localhost:8080/${star.starImage}`}
                  alt={star.name}
                  className="card-img-top img-fluid"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title text-center">
                  <Link to={`/stars/${star._id}`} className="text-light">
                    {star.name}
                  </Link>
                </h5>
                {user && (
                  <>
                    <Link
                      to={`/edit-star/${star._id}`}
                      className="btn btn-secondary btn-sm w-100 mb-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(star._id)}
                      className="btn btn-outline-light btn-sm w-100"
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarList;
