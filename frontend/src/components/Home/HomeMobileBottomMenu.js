import React from "react";
import OpenModalButton from '../../context/OpenModalButton';
import NavModal from '../Navbar/NavModal';
import './HomeMobileBottomMenu.css';

function HomeMobileBottomMenu () {
  return (
    <div className='homeMobileBottomMenuContainer'>
      <div className="menuModalBtnDiv">
        <OpenModalButton modalComponent={<NavModal />}
          buttonTag="div"
          buttonText={
            <div className="menuMainBtnDiv menuBtn">
              <div><i className="fas fa-bars"></i></div>
              <div>菜单</div>
            </div>}
          modalContentCss='modalRight'
          modalBackgroundCss='modalBackgroundFadeIn'/>
      </div>
      <div className="homeMenuContentDiv">
        <div className="menuBtn">Replace</div>
        <div className="menuBtn">Replace</div>
        <div></div>
        <div className="menuBtn">
          <div><i className="fas fa-hand-holding-heart"></i></div>
          <div>奉献</div>
        </div>
        <div className="menuBtn">Replace</div>
      </div>

    </div>
  )
}

export default HomeMobileBottomMenu;
