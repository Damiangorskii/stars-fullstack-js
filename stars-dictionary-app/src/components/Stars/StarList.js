import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const StarList = () => {
  const [stars, setStars] = useState([]);
  const [error, setError] = useState('');

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

  return (
    <div>
      <h2>Star List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {stars.map((star) => (
          <li key={star._id}>{star.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StarList;
