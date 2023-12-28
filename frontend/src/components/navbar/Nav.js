import React from 'react';
import { Link } from 'react-router-dom';
import NavDropDown from './NavDropDown';
import './navbar.css';

function Nav() {

  // maybe map?
  return (
    <div className="navContainer">
      <ul className='flx list-none gap10p'>
      <li className='dropdown-nav-item'>
          <div>
            <button className="navItem" onClick={(e)=>e.preventDefault()}>
              外展事工 <i className="fas fa-chevron-down"></i>
            </button>
            <div className='dropdown-content'>
              <Link to='/childMinistry'>
                <a href="#welcome">兒童事工</a>
              </Link>
              <a href="#meetOurTeam">初、高中生事工</a>
              <a href="#whoWeAre">大學事工</a>
              <a href="#whoWeAre">體育事工</a>
              <a href="#whoWeAre">長者事工</a>
            </div>
          </div>
        </li>
        <li className='dropdown-nav-item'>
          <div>
            <button className="navItem" onClick={(e)=>e.preventDefault()}>
              關於教會 <i className="fas fa-chevron-down"></i>
            </button>
            <div className='dropdown-content'>
              <Link to='/about'>
                <a href="#welcome">信仰立場</a>
              </Link>
              <a href="#meetOurTeam">宗旨 / 使命</a>
              <a href="#whoWeAre">教會簡史</a>
            </div>
          </div>
        </li>
        <li className='dropdown-nav-item'>
          <div>
            <button className="navItem" onClick={(e)=>e.preventDefault()}>
              生命見證 <i className="fas fa-chevron-down"></i>
            </button>
            <div className='dropdown-content'>
              <Link to='/about'>
                <a href="#welcome">得救見證</a>
              </Link>
              <a href="#meetOurTeam">活動花絮</a>
            </div>
          </div>
        </li>

        <li>
          <div>
            <button className='navItem'>
              奉獻
            </button>
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
