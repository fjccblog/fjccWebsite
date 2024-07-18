import React from "react";
import OpenModalButton from '../../context/OpenModalButton';
import NavModal from '../Navbar/NavModal';
import './HomeMobileBottomMenu.css';

function HomeMobileBottomMenu () {
  return (
    <div className='homeMobileBottomMenuContainer'>
      <div className="homeMenuContentDiv">
        <div className="">
          <OpenModalButton modalComponent={<NavModal />}
            buttonText={<i className="fas fa-bars"></i>}
            customizeStyle='menuBtn'
            modalContentCss='modalRight'
            modalBackgroundCss='modalBackgroundFadeIn'/>

        </div>
      </div>

    </div>
  )
}

export default HomeMobileBottomMenu;
