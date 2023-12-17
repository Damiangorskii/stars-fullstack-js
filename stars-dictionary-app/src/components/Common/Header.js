import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-dark text-white py-3">
      <nav className="navbar navbar-expand navbar-dark">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <Link className="navbar-brand me-3" to="/">
              Stars Dictionary
            </Link>
            {user && (
              <Link
                to="/add-star"
                className="btn btn-outline-light btn-sm me-2"
              >
                Add new star
              </Link>
            )}
          </div>
          <div className="ms-auto">
            {user ? (
              <>
                <span className="navbar-text me-2">
                  Logged as: {user.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="btn btn-outline-light btn-sm"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-light btn-sm me-2">
                  Log in
                </Link>
                <Link to="/register" className="btn btn-outline-light btn-sm">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
