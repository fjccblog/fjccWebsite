import React from 'react';
import { Album2023ChristmasData } from './Album2023ChristmasData';
import AlbumPlayer from '../AlbumPlayer';

function Album2023Christmas() {
  return (
    <div>
      <AlbumPlayer data={Album2023ChristmasData}/>
      {Album2023ChristmasData.map(element =>
      <img key={element} className="width300p height-max-100 obj-fit-cover bor-rad-15" src={element}></img>
      )}
    </div>
  )
}

export default Album2023Christmas
