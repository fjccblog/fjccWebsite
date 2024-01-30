import React from 'react';
import { useState } from 'react';
import './AlbumPlayer.css';

function AlbumPlayer({data}) {

  let [albumIndex, setAlbumIndex] = useState(0);

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


  return (
    <div>
      <div className='albumPlayerContainer'>
        <img src={data[albumIndex]} alt='' className='albumImg'/>
        <button onClick={()=>setPrevImg()} className='albumBtn albumLeftBtn'>
        <i className="fas fa-chevron-left"></i>
        </button>
        <button onClick={()=>setNextImg()} className='albumBtn albumRightBtn'>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      <div className='reference'>
        {data.map((ele)=>{
          return <img src={ele} alt="" className='width300p'/>
        })}

      </div>
    </div>
  )
}

export default AlbumPlayer
