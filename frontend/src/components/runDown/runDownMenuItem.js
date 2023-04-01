import React from 'react';

function RunDownMenuItem({item, passage, action, content}) {
  return (
    <div className='mrg-b-20p '>
        <div className='flx-center-space pos-rel '>
          <span className='pos-abs width80vw z-idx--3 width-max-1000p whitespace-n overflow-h'>-----------------------------------------------------------------------------------------------------------------------------------------------------</span>
          <div className='bg-white pad-l-r-15p'>{item}</div>
          <div className='bg-white pad-l-r-15p'>{passage}</div>
          <div className='bg-white pad-l-r-15p'>{action}</div>
        </div>
        <p className='txt-center'>{content}</p>
    </div>
  )
}

export default RunDownMenuItem
