import React from 'react';

const StarDetail = ({ star }) => {
  if (!star) {
    return <p>No star details available.</p>;
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
