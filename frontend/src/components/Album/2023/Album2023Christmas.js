import React from 'react';
import { AlbumData2023Christmas } from './AlbumData2023Christmas';
import AlbumPlayer from '../AlbumPlayer';

function Album2023Christmas() {
  return (
    <div>
      <AlbumPlayer data={AlbumData2023Christmas}/>
      {/* {AlbumData2023Christmas.map(element =>
      <img key={element} className="width300p height-max-100 obj-fit-cover bor-rad-15" src={element}></img>
      )} */}
    </div>
  )
}

export default Album2023Christmas
