import React from 'react';
import { Link } from 'react-router-dom';
import sections from './HomePageSections';
import HomeBanner from './HomeBanner';
import "./HomePage.css"


function HomePage() {



  return (
    <div>
      {/* <div className='landingHeader'></div> */}
      <HomeBanner />
      <div className='flx flx-center flx-wrap gap10p'>
        {sections.map(element => {
          return (
          <div className='item-container color-blk' key={element.English}>
            <Link to={element.English}>
              <div className='img-container '>
                { element.imgurl !== null ?
                <img className="width100 height-max-100 obj-fit-cover bor-rad-15"
                  src={element.imgurl}
                  alt={element.English} />
                :
                <img className="width100 height-max-100 obj-fit-cover bor-rad-15"
                  src="https://lh3.googleusercontent.com/pw/ABLVV84t3azys4HaG3Fwwbj-FnQhjPbGLqYTiXUb10YG5-lBXjevXfZUE-6yk78FQ0ZPSZR0QY4zi_RSSFyKozzBBfYI5Xlw5ZzODoRjCDL4V9jYubnPzj8=w1920-h1080"
                  alt="walk in faith" />
                }
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
