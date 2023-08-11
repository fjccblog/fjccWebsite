import React from 'react';
import NavDropDown from './navDropDown';

function Nav() {
  return (
    <div>
      <ul className='flx list-none'>
        <li>關於</li>
        <li>聯絡我們</li>
        <li>事工</li>
        <li>得救見證</li>
        <li>奉獻
          <NavDropDown />
        </li>
      </ul>
    </div>
  )
}

export default Nav
