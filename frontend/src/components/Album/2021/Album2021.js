import React from 'react';
import {Album2021Data} from './Album2021Data.js';

function Album2021() {
  return (
    <div>
      {Album2021Data.map(element =>
      <img className="width300p height-max-100 obj-fit-cover bor-rad-15" src={element}></img>
      )}
    </div>
  )
}

export default Album2021
