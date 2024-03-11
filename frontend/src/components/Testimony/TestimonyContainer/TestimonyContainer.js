import React from 'react';
import './TestimonyContainer.css';

function TestimonyContainer({data}) {

  return (
    <div className='container-common'>
      {data.map(paragraph => {
        return (
          <div className='testimonyParagraph'>
            {paragraph}
          </div>
        )
      })}
    </div>
  )
}

export default TestimonyContainer
