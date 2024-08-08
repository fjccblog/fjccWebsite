import React from "react";
import { Link } from 'react-router-dom';
import './BackToMinistryPageBtn.css';

function BackToMinistryPageBtn () {
  return (
    <Link to='/ministry'>
      <button className="ministryBackBtn">
        <i className="far fa-arrow-alt-circle-left ministryBackBtnIcon"></i>
        返回
      </button>
    </Link>
  )
}

export default BackToMinistryPageBtn
