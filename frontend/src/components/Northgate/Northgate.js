import React, {useState, useRef} from 'react';
import Attendance from './Attendance';
import { NGPeople } from '../../data/Attendance/NGPeople';

function Northgate() {

  return (
    <div className='northgateContainer'>
      <Attendance peopleData = {NGPeople}/>
    </div>
  )
}

export default Northgate
