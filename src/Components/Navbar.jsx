import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/Contact">
            <li>Contact</li>
          </Link>
          <Link to="/Galeri">
            <li>Galeri</li>
          </Link>
        </ul>
      </div>
    );
  }
}
