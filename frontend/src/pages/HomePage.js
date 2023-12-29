import React from 'react';
import sections from './HomePageSections';
import "./HomePage.css"


function HomePage() {



  return (
    <div>
      <div className='landingHeader'></div>
      <div className='flx flx-center flx-wrap gap10p'>
        {sections.map(element => {
          return (
          <div className='item-container'>
            <div className='img-container'>
              <img class="width100 height-max-100 obj-fit-cover bor-rad-15" src="https://lh3.googleusercontent.com/p/AF1QipNliLMj6OFAC-4mfbhtUBrshwN5HrsFlXKbDrYT=s1360-w1360-h1020" alt="App Academy" />
            </div>
            <div className='mrg-t-20p font15' >
              {element.Chinese}
            </div>
            <div className='mrg-t-20p font15p'>
              {element.lastUpdate === null ? null : '最近更新: '+element.lastUpdate}
            </div>
          </div>)
        })}

      </div>
    </div>
  )
}

export default HomePage
