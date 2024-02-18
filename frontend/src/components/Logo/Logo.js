import React from 'react';
import { Link } from 'react-router-dom';
import OpenModalButton from '../../context/OpenModalButton';
import NavModal from '../Navbar/NavModal';
import './Logo.css';
import TestModal from '../Testing/TestingModal';

function Logo() {

  function ModalBackgroundAnimation() {
    setTimeout(()=> {
      let modalBackground = document.querySelector('#modal-background');
      modalBackground.style.animation = 'ShowModalBackground 3s ease';
    }, 10)
  }

  return (
    <div className='logoContainer'>
      <Link to="/" className="logoLink">
        <div className='logoAndName'>
            <img className="logoImg" alt='logo' src="https://linkyet-april-2023.s3.us-west-2.amazonaws.com/ddb92e6cc9984231a9c0216a9880a5d7.png"/>
            <div className='logoName'>基督教会信心以勒堂</div>
            <div className='logoName'>Faith Jireh Christian Church</div>
        </div>
      </Link>
      <OpenModalButton modalComponent={<NavModal />}
        buttonText={<i className="fas fa-bars"></i>}
        onButtonClick={()=>ModalBackgroundAnimation()}
        customizeStyle='menuBtn'
        modalContentCss='modalRight' />
    </div>
  )
}

export default Logo
