import React from 'react';
import { useState } from 'react';
import './AlbumPlayer.css';

function AlbumPlayer({data}) {

  let [albumIndex, setAlbumIndex] = useState(0);
  let [isListViewActive, setIsListViewActive] = useState(false);

  document.addEventListener("keypress", (e) => {
    // console.log(e.code, e.key)
    if (e.key === 'a') setIsListViewActive(true)
  })

  function setPrevImg() {
    let currIndex = albumIndex;
    if (currIndex === 0) currIndex = data.length - 1
    else currIndex = currIndex - 1
    setAlbumIndex(currIndex)
  }

  function setNextImg() {
    let currIndex = albumIndex;
    if (currIndex === data.length - 1) currIndex = 0
    else currIndex = currIndex + 1
    setAlbumIndex(currIndex)
  }

  function enterFullScreen() {
    let albumPlayerContainer = document.querySelector(".albumPlayerContainer")
    if (document.fullscreenElement === null) {
      albumPlayerContainer.requestFullscreen()
      albumPlayerContainer.classList.add("fullscreen")
    } else {
      document.exitFullscreen()
      albumPlayerContainer.classList.remove("fullscreen")
    }
  }


  return (
    <div>
      <div className='albumPlayerContainer'>
        <img src={data[albumIndex]} alt='' className='albumImg'/>
        {/* <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
          <object data={data[albumIndex]} type='image/jepg' aria-labelledby='pic' className='albumObj'
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
              <img
                src={data[albumIndex]} // Replace with your image URL
                alt="new year"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
          </object>
        </div> */}
        <button onClick={()=>setPrevImg()} className='albumBtn albumArrowBtn albumLeftBtn'>
        <i className="fas fa-chevron-left"></i>
        </button>
        <button onClick={()=>setNextImg()} className='albumBtn albumArrowBtn albumRightBtn'>
          <i className="fas fa-chevron-right"></i>
        </button>
        <div className='albumControlDiv'>
          <button onClick={()=>enterFullScreen()} className='albumBtn albumControlBtn enterFullscreen'>
            <i className="fas fa-expand"></i>
          </button>
          <button onClick={()=>enterFullScreen()} className='albumBtn albumControlBtn exitFullscreen'>
            <i className="fas fa-compress"></i>
          </button>
        </div>
      </div>
      { isListViewActive && <div className='listViewImgContainer'>
        {data.map((ele)=>{
          return <img src={ele} alt="" className='listViewImg' key={ele}/>
        })}
      </div>}
    </div>
  )
}

export default AlbumPlayer
