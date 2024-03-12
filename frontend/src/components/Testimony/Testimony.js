import React from 'react';
import { useState, useEffect } from 'react';
import { TestimonyBasicInfoData } from './TestimonyBasicInfoData/TestimonyBasicInfoData';
import TestimonyContainer from './TestimonyContainer/TestimonyContainer';

function Testimony() {

  function filterAlbumByYear(year, index) {
    setCurrYearAlbums(TestimonyBasicInfoData.filter((infoData)=>infoData.year === year))
    setIsContentActive(false);
    setSelectedYearIndex(index);
  }

  function updateContentData (albumData) {
    setCurrTestimonyData(albumData);
    setIsContentActive(true);
  }

  function isAlbumRecent (currTime, albumTime) {
    return (((currTime.getTime() - new Date(albumTime).getTime()) / 1000) < (60 * 60 * 24 * 31)) ? true : false
  }

  //-------------------------
  let years = [];
  let yearSet = new Set();
  let [selectedYearIndex, setSelectedYearIndex] = useState(0);
  let [currYearAlbums, setCurrYearAlbums] = useState([]);
  let [currTestimonyData, setCurrTestimonyData] = useState({});
  let [isContentActive, setIsContentActive] = useState(false);

  TestimonyBasicInfoData.forEach((infoData) => {
    if (!(yearSet.has(infoData.year))) {
      yearSet.add(infoData.year)
    }
  })
  years = [...yearSet].sort((a,b)=>b-a);

  useEffect(()=>{
    filterAlbumByYear(years[0]);
    setSelectedYearIndex(0);
  }, [])

  //------------------
  let currTime = new Date();

  return (
    <div className='albumPageContainer'>
      <div className='albumFilterYearContainer'>
        <span className=''>年份: </span>
        {years.map((year, index)=> {
          return (
            <span onClick={()=>filterAlbumByYear(year, index)}
              className={`albumFilterYear ${selectedYearIndex === index ? "letterFilterYearActive" : ""}`}>
              {year}
            </span>
          )
        })}
      </div>
      <div className='allAlbumInfoContainer'>
        {!isContentActive && currYearAlbums.map((testimonyInfo)=>{
          return (
            <div className='singleAlbumInfoContainer' onClick={() => updateContentData(testimonyInfo)}>
              <img src={testimonyInfo.coverImgUrl} alt='testimony' className='albumInfoImg'/>
              <div className='albumInfoDescription'>
                <strong className='albumInfoDescriptionName'>{testimonyInfo.title}</strong>
                <div className='albumInfoDescriptionUpdateAt'>
                  <div>
                    <div>
                      <span className='albumInfoUpdated'>Updated:</span> <span>{testimonyInfo.updatedAt} </span>
                      {isAlbumRecent(currTime, testimonyInfo.updatedAt) && <span className='albumNew'>New</span>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )})}
      </div>
      {currTestimonyData.length !== 0 && isContentActive && <TestimonyContainer data={currTestimonyData} />}
    </div>
  )
}

export default Testimony
