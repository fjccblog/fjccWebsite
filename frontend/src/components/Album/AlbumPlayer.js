import React from 'react';
import './AlbumPlayer.css';

function AlbumPlayer({data}) {
  // needs to revise
  return (
    <div className="pa-gallery-player-widget albumPlayer"
      data-title="2023 Christmas"
      data-description="71 new items · Album by FJCC FJCC">
        {data.map((ele)=>{
          return <object data={ele} />
        })}
    </div>
  )
}

export default AlbumPlayer
