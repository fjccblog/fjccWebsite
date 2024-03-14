import React from 'react';
import './TestimonyContainer.css';

function TestimonyContainer({data}) {
  // data is object with properties {title,year,updatedAt,content,coverImgUrl}
  // content is array with strings

  return (
    <div className='container-common'>
      <div className='flx-center'>
        {(data.coverImgUrl !== null) && <img src={data.coverImgUrl} alt='testimony' className='albumInfoImg'/>}
      </div>
      <h1 className='flx-center'> {data.title} </h1>
      {data.content.map(paragraph => {
        return (
          <p className='testimonyParagraph'>
            {paragraph}
          </p>
        )
      })}
    </div>
  )
}

export default TestimonyContainer
