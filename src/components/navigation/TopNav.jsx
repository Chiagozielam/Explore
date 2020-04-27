import React from 'react';
import './TopNav.css';

const TopNav = () => {
  return (
    <div>
      <nav>
        <p className="logo">Explore</p>
        <ul>
          <li>favourites</li>
          <li>about</li>
          <li>creator</li>
        </ul>
      </nav>
    </div>
  )
}

export default TopNav
