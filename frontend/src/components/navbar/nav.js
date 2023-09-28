import React from 'react';
import { Link } from 'react-router-dom';
import NavDropDown from './navDropDown';
import './navbar.css';

function Nav() {

  // maybe map?
  return (
    <div className="navContainer">
      <ul className='flx list-none gap10p'>
        <li className='dropdown-nav-item'>
          <div>
            <button onClick={(e)=>e.preventDefault()}>About</button>
            <div className='dropdown-content'>
              <Link to='/about'>
                <a href="#welcome">Welcome</a>
              </Link>
              <a href="#whoWeAre">Who We are</a>
              <a href="#meetOurTeam">Meet Our Team</a>
            </div>
          </div>
        </li>
        <li className='dropdown-nav-item'>
          <div>
            <button onClick={(e)=>e.preventDefault()}>Connect</button>
            <div className='dropdown-content'>
              <a href="#contact">Contact Us</a>
              <a href="#groups">Groups & Programs</a>
              <a href="#baptism">Baptism</a>
            </div>
          </div>
        </li>

        <li>Ministries</li>
        <li>Resources</li>
        <li>Give</li>
        {/* <li className='navItem'>item 5
          <NavDropDown />
        </li> */}
      </ul>
    </div>
  )
}

export default Nav
