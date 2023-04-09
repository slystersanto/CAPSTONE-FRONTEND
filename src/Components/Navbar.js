import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">.</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/featured-color">Featured Color</Link>
        </li>
        <li>
          <Link to="/color-palettes">Color Palettes</Link>
        </li>
        <li>
          <Link to="/color-psychology">Color Psychology</Link>
        </li>
        <li className="dropdown">
          <button className="dropbtn">Seasonal Colors</button>
          <div className="dropdown-content">
            <Link to="/seasonal-colors/summer">Summer</Link>
            <Link to="/seasonal-colors/spring">Spring</Link>
            <Link to="/seasonal-colors/autumn">Autumn</Link>
            <Link to="/seasonal-colors/winter">Winter</Link>
          </div>
        </li>
        <li className="dropdown">
          <button className="dropbtn">OutFits</button>
          <div className="dropdown-content">
            <Link to="/outfits/wedding">Wedding</Link>
            <Link to="/outfits/birthday">BirthDay</Link>
            <Link to="/outfits/party">Party</Link>
            <Link to="/outfits/date">Date</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;