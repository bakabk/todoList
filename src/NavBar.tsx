import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar: React.FC = () => {
return <>
 <nav>
    <div className="nav-wrapper blue darken-4 nav-bar_offset">
      <a href="/" className="brand-logo">Hellow TS</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink activeClassName="active_link" exact to="/">Главная</NavLink></li>
        <li><NavLink activeClassName="active_link" to="/about">О чем-то</NavLink></li>
      </ul>
    </div>
  </nav>
</>
}

export default NavBar;