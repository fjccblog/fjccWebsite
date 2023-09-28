import React from 'react';
import "./navbar.css";

function NavDropDown() {
  let dropDownContent = ['a', 'b', 'c']

  return (
    <div className="navDropdown">
      {dropDownContent.map(element => {
        return <a href="#">{element}</a>
      })}
    </div>
  )
}

export default NavDropDown
