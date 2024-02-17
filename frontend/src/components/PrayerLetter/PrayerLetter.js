import React from 'react';
import { useState, useEffect } from 'react';
import { LetterBasicInfoData } from './LetterBasicInfo/LetterBasicInfoData';
import IframePlayer from './iframePlayer/iframePlayer';
import './PrayerLetter.css'

function PrayerLetter() {

  let allLetterInfoContainer = document.querySelector('.allLetterInfoContainer');
  let letterPlayerContainer = document.querySelector('.letterPlayerContainer');

  function filterLetterByYear(year, index) {
    setCurrYearLetters(LetterBasicInfoData.filter((infoData)=>infoData.year === year))
    setIsLetterPlayerActive(false);
    setSelectedYearIndex(index);
  }

  function updateLetterData (letterID) {
    setCurrLetterData(letterID);
    setIsLetterPlayerActive(true);
  }

  function isLetterRecent (currTime, letterTime) {
    return (((currTime.getTime() - new Date(letterTime).getTime()) / 1000) < (60 * 60 * 24 * 31)) ? true : false
  }

  //-------------------------
  let years = [];
  let yearSet = new Set();
  let [selectedYearIndex, setSelectedYearIndex] = useState(0);
  let [currYearLetters, setCurrYearLetters] = useState([]);
  let [currLetterData, setCurrLetterData] = useState('');
  let [isLetterPlayerActive, setIsLetterPlayerActive] = useState(false);

  LetterBasicInfoData.forEach((infoData) => {
    if (!(yearSet.has(infoData.year))) {
      yearSet.add(infoData.year)
    }
  })
  years = [...yearSet].sort((a,b)=>b-a);

  useEffect(()=>{
    filterLetterByYear(years[0]);
    setSelectedYearIndex(0);
  }, [])

  useEffect(()=> {
    if (isLetterPlayerActive) {
      if (allLetterInfoContainer) allLetterInfoContainer.style.display = "none";
      if (letterPlayerContainer) letterPlayerContainer.style.display = "block";
    } else {
      if (allLetterInfoContainer) allLetterInfoContainer.style.display = "flex";
      if (letterPlayerContainer) letterPlayerContainer.style.display = "none";
    }
  }, [isLetterPlayerActive])

  //------------------
  let currTime = new Date();

  return (
    <div className='albumPageContainer'>
      <div className='letterFilterYearContainer'>
        <span className=''>年份: </span>
        {years.map((year, index)=> {
          return (
            <span onClick={()=>filterLetterByYear(year, index)}
              className={`letterFilterYear ${selectedYearIndex === index ? "letterFilterYearActive" : ""}`}>
              {year}
            </span>
          )
        })}
      </div>
      <div className='allLetterInfoContainer'>
        {currYearLetters.map((letterInfo)=>{
          return (
            <div className='singleLetterInfoContainer' onClick={() => updateLetterData(letterInfo.letterID)}>
              <div className='letterInfo'>
                <div>
                  <div className='letterName'>{letterInfo.letterName}</div>
                  {isLetterRecent(currTime, letterInfo.updatedAt) && <span className='letterNew'>New</span>}
                </div>
                <div className=''>
                  {/* <span className=''>Updated:</span>  */}
                  <span>{letterInfo.updatedAt} </span>
                </div>
              </div>
            </div>
          )})}
      </div>
      {currLetterData.letterID !== '' && isLetterPlayerActive && <IframePlayer file={currLetterData} />}
    </div>
  )
}

export default PrayerLetter
