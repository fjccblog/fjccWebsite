import React from 'react';
import { useEffect } from 'react';
import Northgate from '../components/Attendance/Northgate';

function NorthgatePage() {


  useEffect(()=>{
    let logo = document.querySelector('.logoContainer')
    logo.style.display = 'none'

    let nav = document.querySelector('.navContainer')
    nav.style.display = 'none'

    let footer = document.querySelector('.footerContainer')
    footer.style.display = 'none'
  }, [])

  return (
    <Northgate />
  )
}

export default NorthgatePage
