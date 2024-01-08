import React from 'react';
import { Link } from 'react-router-dom';
import sections from './HomePageSections';
import "./HomePage.css"


function HomePage() {



  return (
    <div>
      <div className='landingHeader'></div>
      <div className='flx flx-center flx-wrap gap10p'>
        {sections.map(element => {
          return (
          <div className='item-container color-blk'>
            <Link to={element.English}>
              <div className='img-container '>
                <img class="width100 height-max-100 obj-fit-cover bor-rad-15" src="https://lh3.googleusercontent.com/p/AF1QipNliLMj6OFAC-4mfbhtUBrshwN5HrsFlXKbDrYT=s1360-w1360-h1020" alt="App Academy" />
              </div>
              <div className='pad15p font15' >
                {element.Chinese}
              </div>
            </Link>
            <Link to={element.English+element.lastUpdate}>
              <div className='font15p'>
                {element.lastUpdate === null ? null : '最近更新: '+element.lastUpdate}
              </div>
            </Link>
          </div>)
        })}

      </div>
    </div>
  )
}

export default HomePage
