import React from 'react';
import { useState, useEffect } from 'react';
import { albumAllData } from '../../data/albumData/albumAllData';
import AlbumPlayer from './AlbumPlayer/AlbumPlayer';
import './Album.css';

function Album() {
  let allAlbumInfoContainer = document.querySelector('.allAlbumInfoContainer');
  let albumPlayerContainer = document.querySelector('.albumPlayerContainer');

  function filterAlbumByYear(year, index) {
    setCurrYearAlbums(albumAllData.filter((infoData)=>infoData.year === year))
    setIsAlbumPlayerActive(false);
    setSelectedYearIndex(index);
  }

  function updateAlbumData (albumData) {
    setCurrAlbumData(albumData);
    setIsAlbumPlayerActive(true);
  }

  function isAlbumRecent (currTime, albumTime) {
    return (((currTime.getTime() - new Date(albumTime).getTime()) / 1000) < (60 * 60 * 24 * 31)) ? true : false
  }

  //-------------------------
  let years = [];
  let yearSet = new Set();
  let [selectedYearIndex, setSelectedYearIndex] = useState(0);
  let [currYearAlbums, setCurrYearAlbums] = useState([]);
  let [currAlbumData, setCurrAlbumData] = useState([]);
  let [isAlbumPlayerActive, setIsAlbumPlayerActive] = useState(false);

  albumAllData.forEach((infoData) => {
    if (!(yearSet.has(infoData.year))) {
      yearSet.add(infoData.year)
    }
  })
  years = [...yearSet].sort((a,b)=>b-a);

  useEffect(()=>{
    filterAlbumByYear(years[0]);
    setSelectedYearIndex(0);
  }, [])

  useEffect(()=> {
    if (isAlbumPlayerActive) {
      if (allAlbumInfoContainer) allAlbumInfoContainer.style.display = "none";
      if (albumPlayerContainer) albumPlayerContainer.style.display = "block";
    } else {
      if (allAlbumInfoContainer) allAlbumInfoContainer.style.display = "flex";
      if (albumPlayerContainer) albumPlayerContainer.style.display = "none";
    }
  }, [isAlbumPlayerActive])

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
        {currYearAlbums.map((albumInfo)=>{
          return (
            <div className='singleAlbumInfoContainer' onClick={() => updateAlbumData(albumInfo.albumData)}>
              <img src={albumInfo.coverImgUrl} className='albumInfoImg'/>
              <div className='albumInfoDescription'>
                <strong className='albumInfoDescriptionName'>{albumInfo.albumName}</strong>
                <div className='albumInfoDescriptionUpdateAt'>
                  <div>
                    <div>
                      <span className='albumInfoUpdated'>Updated:</span> <span>{albumInfo.updatedAt} </span>
                      {isAlbumRecent(currTime, albumInfo.updatedAt) && <span className='albumNew'>New</span>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )})}
      </div>
      {currAlbumData.length !== 0 && isAlbumPlayerActive && <AlbumPlayer data={currAlbumData} />}
    </div>
  )
}

export default Album
