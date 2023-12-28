import React from 'react';
import { Link } from 'react-router-dom';
import NavDropDown from './NavDropDown';
import './navbar.css';

function Nav() {

  return (
    <div className="navContainer">
      <ul className='flx list-none gap15p'>
        <li className='dropdown-nav-item'>
          <div>
            <button className="navItem" onClick={(e)=>e.preventDefault()}>
              外展事工 <i className="fas fa-chevron-down"></i>
            </button>
            <div className='dropdown-content'>
              <Link to='/childMinistry'>
                <a href="#welcome">兒童事工</a>
              </Link>
              <Link to='juniorHighMinistry'>
                <a href="#meetOurTeam">初、高中生事工</a>
              </Link>
              <Link to='collegeMinistry'>
                <a href="#whoWeAre">大學事工</a>
              </Link>
              <Link to='sportMinistry'>
                <a href="#whoWeAre">體育事工</a>
              </Link>
              <Link to='seniorMinistry'>
                <a href="#whoWeAre">長者事工</a>
              </Link>
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
              <Link to='mission'>
                <a href="#meetOurTeam">宗旨和使命</a>
              </Link>
              <Link to='churchHistory'>
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
              <Link to='lifeTogether'>
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
              <Link to='/baptismTestimony'>
                <a href="#welcome">得救見證</a>
              </Link>
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
