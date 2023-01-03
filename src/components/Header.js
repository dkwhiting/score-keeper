import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="edit-button">
        <NavLink
          to="/" >
          <button>
            Edit players
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
