import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          Buy Less. <span>Share More.</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
