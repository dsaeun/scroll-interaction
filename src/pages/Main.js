import React from 'react';
import mark from '../wmcMark.png';
import '../App.css';

let Main=()=> {
  return (
    <div className="container">
      <div className="markArea">
          <img src={mark} className="frontMark"/>
          <div className="markDiv">
            <a>
              <span></span>
            </a>
          </div>
      </div>
    </div>
  );
}

export default Main;