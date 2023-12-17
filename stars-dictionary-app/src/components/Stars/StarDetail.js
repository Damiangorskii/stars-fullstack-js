import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import api from '../../services/api';
import { useAuth } from '../../auth/AuthContext';

const StarDetail = () => {
  const [star, setStar] = useState(null);
  const params = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStarData = async () => {
      try {
        const response = await api.getStar(params.id);
        console.log('Successfully retrieved star', response);
        setStar(response);
      } catch (error) {
        console.error('Failed to fetch star details', error);
      }
    };

    fetchStarData();
  }, [params.id]);

  if (!star) {
    return <p>Loading star details...</p>;
  }

  const handleDelete = async () => {
    try {
      await api.deleteStar(params.id);
      navigate('/');
    } catch (error) {
      console.error('Failed to delete star', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="card bg-dark text-white">
            <img
              src={`http://localhost:8080/${star.starImage}`}
              alt={star.name}
              className="card-img-top"
              style={{ objectFit: 'cover', height: '300px' }}
            />
            <div className="card-header text-center">
              <h2>{star.name}</h2>
            </div>
            <div className="card-body">
              <p>
                <strong>Name:</strong> {star.name}
              </p>
              <p>
                <strong>Type:</strong> {star.type}
              </p>
              <p>
                <strong>Mass:</strong> {star.mass} Solar Masses
              </p>
              <p>
                <strong>Radius:</strong> {star.radius} Solar Radii
              </p>
              <p>
                <strong>Temperature:</strong> {star.temperature} K
              </p>
              <p>
                <strong>Luminosity:</strong> {star.luminosity} Solar
                Luminosities
              </p>
              <p>
                <strong>Age:</strong> {star.age} Million Years
              </p>
              <p>
                <strong>Distance From Earth:</strong> {star.distanceFromEarth}{' '}
                Light Years
              </p>
              <p>
                <strong>Constellation:</strong> {star.constellation}
              </p>
              <p>
                <strong>Discovered By:</strong> {star.discoveredBy}
              </p>
              <p>
                <strong>Discovery Year:</strong> {star.discoveryYear}
              </p>
              <p>
                <strong>Notes:</strong> {star.notes}
              </p>
              {user && (
                <div className="text-center mt-4">
                  <Link
                    to={`/edit-star/${params.id}`}
                    className="btn btn-secondary me-2"
                  >
                    Edit
                  </Link>
                  <button onClick={handleDelete} className="btn btn-danger">
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarDetail;
