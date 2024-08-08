import React from 'react';
import sections from './HomeSectionsData';
import HomeBanner from './HomeBanner';
import HomeSection from './HomeSection';
import HomeCompactSection from './HomeCompactSection';
import HomeMobileBottomMenu from './HomeMobileBottomMenu';
import "./HomePage.css"


function HomePageIndex() {



  return (
    <div className='homePageContaner'>
      {/* <div className='landingHeader'></div> */}
      <HomeBanner />
      <HomeCompactSection />
      {/* <HomeSection /> */}
      <HomeMobileBottomMenu />
    </div>
  )
}

export default HomePageIndex
