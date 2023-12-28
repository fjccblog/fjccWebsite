import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

function Logo() {
  return (
      <Link to="/" className="logoLink">
    <div className='logoContainer'>
        <img src=""/>
        <div className='logoName'>基督教会信心以勒堂</div>
        <div className='logoName'>Faith Jireh Christian Church</div>
    </div>
      </Link>
  )
}

export default Logo
