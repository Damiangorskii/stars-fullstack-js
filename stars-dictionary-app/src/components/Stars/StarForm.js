import React, { useState, useEffect } from 'react';

const StarForm = ({ onSubmit, starToEdit }) => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    mass: 0,
    radius: 0,
    temperature: 0,
    luminosity: 0,
    age: 0,
    distanceFromEarth: 0,
    constellation: '',
    discoveredBy: 'Unknown',
    discoveryYear: '',
    notes: '',
  });

  useEffect(() => {
    if (starToEdit) {
      setFormData(starToEdit);
    }
  }, [starToEdit]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <h2>{starToEdit ? 'Edit Star' : 'Add Star'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <label>Type:</label>
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        />
        <br />
        <label>Mass:</label>
        <input
          type="number"
          name="mass"
          value={formData.mass}
          onChange={handleChange}
          required
        />
        <br />
        <label>Radius:</label>
        <input
          type="number"
          name="radius"
          value={formData.radius}
          onChange={handleChange}
          required
        />
        <br />
        <label>Temperature:</label>
        <input
          type="number"
          name="temperature"
          value={formData.temperature}
          onChange={handleChange}
          required
        />
        <br />
        <label>Luminosity:</label>
        <input
          type="number"
          name="luminosity"
          value={formData.luminosity}
          onChange={handleChange}
          required
        />
        <br />
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <br />
        <label>Distane from Earth:</label>
        <input
          type="number"
          name="distanceFromEarth"
          value={formData.distanceFromEarth}
          onChange={handleChange}
          required
        />
        <br />
        <label>Constellation:</label>
        <input
          type="text"
          name="constellation"
          value={formData.constellation}
          onChange={handleChange}
          required
        />
        <br />
        <label>Discovered by:</label>
        <input
          type="text"
          name="discoveredBy"
          value={formData.discoveredBy}
          onChange={handleChange}
        />
        <br />
        <label>Discovery year:</label>
        <input
          type="number"
          name="discoveryYear"
          value={formData.discoveryYear}
          onChange={handleChange}
        />
        <br />
        <label>Notes:</label>
        <input
          type="text"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />
        <br />
        <button type="submit">{starToEdit ? 'Update Star' : 'Add Star'}</button>
      </form>
    </div>
  );
};

export default StarForm;
