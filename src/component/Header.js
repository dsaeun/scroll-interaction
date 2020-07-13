import React from 'react';
import '../App.css';

let Header=()=> {
  return (
    <div className="header">
        <nav className="menuContainer">
            <div className="menu">
                <a href="#" className="menu1">MENU1</a>
                <a href="#" className="menu2">MENU2</a>
                <a href="#" className="menu3">MENU3</a>
                <a href="#" className="menu4">MENU4</a>
            </div>
        </nav>
    </div>
  );
}

export default Header;