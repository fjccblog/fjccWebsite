import React from 'react';
import { Link } from 'react-router-dom';
// import OpenModalButton from '../../context/OpenModalButton';
// import NavModal from './NavModal';
import './navbar.css';

function Nav() {

  return (
    <div className="navContainer">
      <ul className='flx-center list-none gap20p'>
        <li className='dropdown-nav-item'>
          <div>
            <button className="navItem" onClick={(e)=>e.preventDefault()}>
              外展事工 <i className="fas fa-chevron-down"></i>
            </button>
            <div className='dropdown-content'>
              <Link to='/ministry/children'>
                <a href="#welcome">兒童事工</a>
              </Link>
              <Link to='/ministry/juniorHigh'>
                <a href="#meetOurTeam">初、高中生事工</a>
              </Link>
              <Link to='/ministry/campus'>
                <a href="#whoWeAre">大學事工</a>
              </Link>
              <Link to='/ministry/sport'>
                <a href="#whoWeAre">體育事工</a>
              </Link>
              {/* <Link to='seniorMinistry'>
                <a href="#whoWeAre">長者事工</a>
              </Link> */}
            </div>
          </div>
        </li>
        <li className='dropdown-nav-item'>
          <div>
            <button className="navItem" onClick={(e)=>e.preventDefault()}>
              關於教會 <i className="fas fa-chevron-down"></i>
            </button>
            <div className='dropdown-content'>
              <Link to='/faithStatement'>
                <a href="#welcome">信仰立場</a>
              </Link>
              <Link to='/purpose'>
                <a href="#meetOurTeam">宗旨 / 使命</a>
              </Link>
              <Link to='/churchHistory'>
                <a href="#whoWeAre">教會簡史</a>
              </Link>
            </div>
          </div>
        </li>
        <li className='dropdown-nav-item'>
          <div>
            <button className="navItem" onClick={(e)=>e.preventDefault()}>
              教會近況 <i className="fas fa-chevron-down"></i>
            </button>
            <div className='dropdown-content'>
              <Link to='/prayerLetter'>
                <a href="#welcome">代禱信</a>
              </Link>
              <Link to='/album'>
                <a href="#meetOurTeam">活動花絮</a>
              </Link>
            </div>
          </div>
        </li>
        <li className='dropdown-nav-item'>
          <div>
            <button className="navItem" onClick={(e)=>e.preventDefault()}>
              生命見證 <i className="fas fa-chevron-down"></i>
            </button>
            <div className='dropdown-content'>
              <Link to='/testimony'>
                <a href="#welcome">得救見證</a>
              </Link>
            </div>
          </div>
        </li>

        <li>
          <div>
            <Link to='offering'>
              <button className='navItem donation'>
                  奉獻 <i className="fas fa-envelope"></i>
              </button>
            </Link>
          </div>
        </li>
        {/* <li className='navItem'>item 5
          <NavDropDown />
        </li> */}
      </ul>
    </div>
  )
}

export default Nav
