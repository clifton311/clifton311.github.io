import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li className="navButton"><Link to="">Home</Link></li>
          <li className="navButton"><Link to="/about">About Me</Link></li>
          <li className="navButton"><Link to="/tech"></Link></li>
        </ul>
      </header>
    )
  }
}

export default NavBar;