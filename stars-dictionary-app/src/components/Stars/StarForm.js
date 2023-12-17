import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

const StarForm = ({ onSubmit, starToEdit }) => {
  const [error, setError] = useState('');
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
  const [starImage, setStarImage] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      const fetchStarData = async () => {
        try {
          const response = await api.getStar(params.id);
          setFormData({
            name: response.name || '',
            type: response.type || '',
            mass: response.mass || 0,
            radius: response.radius || 0,
            temperature: response.temperature || 0,
            luminosity: response.luminosity || 0,
            age: response.age || 0,
            distanceFromEarth: response.distanceFromEarth || 0,
            constellation: response.constellation || '',
            discoveredBy: response.discoveredBy || 'Unknown',
            discoveryYear: response.discoveryYear || '',
            notes: response.notes || '',
          });
        } catch (error) {
          console.error('Failed to fetch star data', error);
        }
      };

      fetchStarData();
    }
  }, [params.id]);

  useEffect(() => {
    if (starToEdit) {
      setFormData(starToEdit);
    }
  }, [starToEdit]);

  const handleFileChange = e => {
    setStarImage(e.target.files[0]);
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formatLabel = key => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase());
  };

  const getInputType = key => {
    if (['mass', 'radius', 'temperature', 'luminosity', 'age', 'distanceFromEarth', 'discoveryYear'].includes(key)) {
      return 'number';
    } else {
      return 'text';
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach(key => {
      data.append(key, formData[key]);
    });

    if (starImage) {
      data.append('starImage', starImage);
    }

    const result = await onSubmit(data, params.id);
    if (result.success) {
      navigate('/');
    } else {
      setError('Error occurred');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <h2 className="text-white mb-4 text-center">
            {params.id || starToEdit ? 'Edit Star' : 'Add Star'}
          </h2>
          <div className="card bg-dark p-4 rounded">
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              {Object.keys(formData).map(key => (
                <div key={key} className="mb-3">
                  <label htmlFor={key} className="form-label text-white">
                    {formatLabel(key)}:
                  </label>
                  <input
                    type={getInputType(key)}
                    id={key}
                    name={key}
                    className="form-control"
                    value={formData[key]}
                    onChange={handleChange}
                    required={
                      key !== 'notes' &&
                      key !== 'discoveredBy' &&
                      key !== 'discoveryYear'
                    }
                  />
                </div>
              ))}
  
              <div className="mb-3">
                <label htmlFor="starImage" className="form-label text-white">
                  Star Image:
                </label>
                <input
                  type="file"
                  id="starImage"
                  name="starImage"
                  className="form-control"
                  onChange={handleFileChange}
                  required
                />
              </div>
  
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  {params.id || starToEdit ? 'Update Star' : 'Add Star'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );  
};

export default StarForm;
