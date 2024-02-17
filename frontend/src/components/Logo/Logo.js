import React from 'react';
import { Link } from 'react-router-dom';
import OpenModalButton from '../../context/OpenModalButton';
import NavModal from '../Navbar/NavModal';
import './Logo.css';

function Logo() {
  return (
    <Link to="/" className="logoLink">
      <div className='logoContainer'>
          <img className="logoImg" alt='logo' src="https://linkyet-april-2023.s3.us-west-2.amazonaws.com/ddb92e6cc9984231a9c0216a9880a5d7.png"/>
          <div className='logoName'>基督教会信心以勒堂</div>
          <div className='logoName'>Faith Jireh Christian Church</div>
          <OpenModalButton modalComponent={<NavModal />}
            buttonText={<i className="fas fa-bars"></i>}
            customizeStyle='menuBtn'/>
      </div>
    </Link>
  )
}

export default Logo
