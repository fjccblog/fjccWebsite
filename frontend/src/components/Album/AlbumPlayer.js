import React from 'react';
import { useState } from 'react';
import './AlbumPlayer.css';

function AlbumPlayer({data}) {
  // needs to revise
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
    // <div className="pa-gallery-player-widget albumPlayer"
    //   data-title="2023 Christmas"
    //   data-description="71 new items · Album by FJCC FJCC">
    //     {data.map((ele)=>{
    //       return <object data={ele} />
    //     })}
    // </div>
    <div>
      <div className='width300p'>
        <img src={data[albumIndex]} alt='' className='width100'/>
        <button onClick={()=>setPrevImg()}>left</button>
        <button onClick={()=>setNextImg()}>right</button>
      </div>
      <div>
        {data.map((ele)=>{
          return <img src={ele} alt="" className='width300p'/>
        })}

      </div>
    </div>
  )
}

export default AlbumPlayer
