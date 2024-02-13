import React from 'react';
import { useState, useEffect } from 'react';
import { LetterBasicInfoData } from './LetterBasicInfo/LetterBasicInfoData';
import IframePlayer from './iframePlayer/iframePlayer';

function PrayerLetter() {

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
      <div className='allAlbumInfoContainer'>
        {currYearLetters.map((letterInfo)=>{
          return (
            <div className='singleAlbumInfoContainer' onClick={() => updateLetterData(letterInfo.albumData)}>
              <div className='albumInfoDescription'>
                <strong className='albumInfoDescriptionName'>{letterInfo.letterName}</strong>
                <div className='albumInfoDescriptionUpdateAt'>
                  <div>
                    <div>
                      <span className='albumInfoUpdated'>Updated:</span> <span>{letterInfo.updatedAt} </span>
                      {isLetterRecent(currTime, letterInfo.updatedAt) && <span className='albumNew'>New</span>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )})}
      </div>
      {currLetterData.letterID.length !== 0 && isLetterPlayerActive && <IframePlayer file={currLetterData} />}
    </div>
    // <div >
    //   {LetterBasicInfoData.map((letterInfo)=>{
    //     return <IframePlayer file={letterInfo} />
    //   })}
    // </div>
  )
}

export default PrayerLetter
