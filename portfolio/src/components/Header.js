import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <header>
      <h1>Wedding Card Creator</h1>
      {/* Add any other header content here */
      
      <nav>
        <ul>
          <li><a href="#cardEditor">Card Editor</a></li>
          <li><a href="#cardPreview">Card Preview</a></li>
          <li><a href="#cardSettings">Card Settings</a></li>
        </ul>
      </nav>
      }
    </header>
  );
};

export default Header;
