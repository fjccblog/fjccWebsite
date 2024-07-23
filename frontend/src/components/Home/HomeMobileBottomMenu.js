import React from "react";
import { Link } from 'react-router-dom';
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
        <div className="menuBtn">
          <div className="flx-center"><i className="fas fa-hand-holding-heart"></i></div>
          <div className="flx-center">其他</div>
        </div>
        <div className="menuBtn">
          <div className="flx-center"><i className="fas fa-hand-holding-heart"></i></div>
          <div className="flx-center">其他</div>
        </div>
        <div></div>

        <Link to='/offering'>
        <div className="menuBtn">
          <div className="flx-center"><i className="fas fa-hand-holding-heart"></i></div>
          <div className="flx-center">奉献</div>
        </div>
        </Link>

        <div className="menuBtn">
          <div className="flx-center"><i className="fas fa-hand-holding-heart"></i></div>
          <div className="flx-center">其他</div>
        </div>
      </div>

    </div>
  )
}

export default HomeMobileBottomMenu;
