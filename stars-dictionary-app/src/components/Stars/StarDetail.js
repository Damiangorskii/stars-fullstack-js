import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

const StarDetail = () => {
  const [star, setStar] = useState(null);
  const params = useParams();

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

  return (
    <div>
      <h2>Star Details</h2>
      <p>Name: {star.name}</p>
      <p>Type: {star.type}</p>
      <p>Mass: {star.mass}</p>
      <p>Radius: {star.radius}</p>
      <p>Temperature: {star.temperature}</p>
      <p>Luminosity: {star.luminosity}</p>
      <p>Age: {star.age}</p>
      <p>Distance From Earth: {star.distanceFromEarth}</p>
      <p>Constellation: {star.constellation}</p>
      <p>Discovered By: {star.discoveredBy}</p>
      <p>Discovery Year: {star.discoveryYear}</p>
      <p>Notes: {star.notes}</p>
    </div>
  );
};

export default StarDetail;
