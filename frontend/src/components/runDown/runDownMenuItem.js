import React from 'react';

function RunDownMenuItem({item, passage, action, content}) {
  return (
    <div className='mrg-b-20p'>
        <div className='flx-center-space'>
          <div>{item}</div>
          <div>{passage}</div>
          <div>{action}</div>
        </div>
        <p className='txt-center'>{content}</p>
    </div>
  )
}

export default RunDownMenuItem
