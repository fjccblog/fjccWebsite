import React from 'react';
import sections from './HomeSectionsData';
import HomeBanner from './HomeBanner';
import HomeSection from './HomeSection';
import HomeCompactSection from './HomeCompactSection';
import "./HomePage.css"


function HomePageIndex() {



  return (
    <div>
      {/* <div className='landingHeader'></div> */}
      <HomeBanner />
      <HomeCompactSection />
      {/* <HomeSection /> */}
    </div>
  )
}

export default HomePageIndex
