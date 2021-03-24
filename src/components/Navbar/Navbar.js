import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ProfileDropdown from './ProfileDropdown';

export default function Navbar({isLogin}) {
  const [showDropdown, setDropdown] = useState(false)

  const handleDropdown = React.useCallback(() => {
    setDropdown(showDropdown => !showDropdown);
  }, []);

  return (
    <nav className="navbar">
      <div className="display-center">
        <div className="navbar row-space-out">
          <ul className="nav-left row-space-out">
            <li>
              <Link to="/meme" className="navbar-item">MemeGenerator</Link>
            </li>
            <li>
              <Link to="/products" className="navbar-item">Products</Link>
            </li>
            <li>
              <Link to="/starwars" className="navbar-item">StarWars</Link>
            </li>
          </ul>
          <ul className="nav-right row-space-out">
            <li>
              <Link to="/todo" className="navbar-item">Todo</Link>
            </li>
            <li>
              <button onClick={handleDropdown}>My Profile</button>
              <ProfileDropdown isLogin={isLogin} show={showDropdown}/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}