import React from 'react';
import { AlbumData2008HighSchoolSummer } from '../../data/albumData/2008/AlbumData2008HighSchoolSummer';
import AlbumPlayer  from '../Album/AlbumPlayer/AlbumPlayer'


function JuniorHighSummerMinistry() {
  return (
    <div className='container-common'>
      <div className='listViewImgContainer'>
        {AlbumData2008HighSchoolSummer.map((ele)=>{
          return <img src={ele} alt="" className='listViewImg' key={ele}/>
        })}
      </div>
    </div>
  )
}

export default JuniorHighSummerMinistry
