import React from 'react';
import {AlbumData2021} from './AlbumData2021';

function Album2021() {
  console.log(AlbumData2021)
  return (
    <div>
      {AlbumData2021.map(element =>
      <img className="width300p height-max-100 obj-fit-cover bor-rad-15" src={element}></img>
      )}
    </div>
  )
}

export default Album2021
