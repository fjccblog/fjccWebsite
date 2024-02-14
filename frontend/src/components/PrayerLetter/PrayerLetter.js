import React from 'react';
import { useState, useEffect } from 'react';
import { LetterBasicInfoData } from './LetterBasicInfo/LetterBasicInfoData';
import IframePlayer from './iframePlayer/iframePlayer';
import './PrayerLetter.css'

function PrayerLetter() {

  let allLetterInfoContainer = document.querySelector('.allLetterInfoContainer');
  let letterPlayerContainer = document.querySelector('.letterPlayerContainer');

  function filterLetterByYear(year) {
    setCurrYearLetters(LetterBasicInfoData.filter((infoData)=>infoData.year === year))
    setIsLetterPlayerActive(false);
  }

  function updateLetterData (albumData) {
    setCurrLetterData(albumData);
    setIsLetterPlayerActive(true);
  }

  function isLetterRecent (currTime, letterTime) {
    return (((currTime.getTime() - new Date(letterTime).getTime()) / 1000) < (60 * 60 * 24 * 31)) ? true : false
  }

  //-------------------------
  let years = [];
  let yearSet = new Set();
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
      <div className='albumFilterYearContainer'>
        <span className=''>年份: </span>
        {years.map((year)=> {
          return (
            <span onClick={()=>filterLetterByYear(year)} className='albumFilterYear'>{year} </span>
          )
        })}
      </div>
      <div className='allLetterInfoContainer'>
        {currYearLetters.map((letterInfo)=>{
          return (
            <div className='singleAlbumInfoContainer' onClick={() => updateLetterData(letterInfo.letterID)}>
              <div className='albumInfoDescription'>
                <strong className='albumInfoDescriptionName'>{letterInfo.letterName}</strong>
                {isLetterRecent(currTime, letterInfo.updatedAt) && <span className='albumNew'>New</span>}
                <div className='albumInfoDescriptionUpdateAt'>
                    <div>
                      <span className='albumInfoUpdated'>Updated:</span> <span>{letterInfo.updatedAt} </span>
                    </div>
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
