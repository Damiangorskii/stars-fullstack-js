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
    <header>
      <h1>Stars Dictionary App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        {user && <p>Zalogowany jako: {user.email}</p>}
        {user && <button onClick={handleLogout}>Wyloguj</button>}
      </nav>
    </header>
  );
};

export default Header;
