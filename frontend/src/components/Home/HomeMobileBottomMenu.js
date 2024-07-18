import React from "react";
import { Link } from 'react-router-dom';
import OpenModalButton from '../../context/OpenModalButton';
import NavModal from '../Navbar/NavModal';

function HomeMobileBottomMenu () {
  return (
    <div className=''>
      <OpenModalButton modalComponent={<NavModal />}
      buttonText={<i className="fas fa-bars"></i>}
      customizeStyle='menuBtn'
      modalContentCss='modalRight'
      modalBackgroundCss='modalBackgroundFadeIn'/>

    </div>
  )
}

export default HomeMobileBottomMenu;
