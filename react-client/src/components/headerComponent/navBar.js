import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        <ul className="headerButtons">
          <li className="navButton"><Link to="" style={{color:"white"}}>Home</Link></li>
          <li className="navButton"><Link to="/about" style={{color:"white"}}>About</Link></li>
          <li className="navButton"><Link to="/Portfolio" style={{color:"white"}}>Portfolio</Link></li>
          <li className="navButton"><Link to="/Contact" style={{color:"white"}}>Contact</Link></li>
        </ul>
      </header>
    )
  }
}

export default NavBar;