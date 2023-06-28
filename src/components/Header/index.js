import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link className="nav-item" to="/"><h1>Henry's Internet Corner</h1></Link>
      <ul id="nav-list">
        <li id="animate-one">
          <Link to="/" className="nav-item">About</Link>
        </li>
        <li id="animate-two">
          <Link to="/skills" className="nav-item">Skills</Link>
        </li>
        <li id="animate-three">
          <Link to="/portfolio" className="nav-item">Portfolio</Link>
        </li>
        <li id="animate-four">
          <Link to="/contact" className="nav-item">Contact Me</Link>
        </li>
        <li id="animate-five">
          <Link to="/resume" className="nav-item">Resume</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
