import React from 'react';
import { AlbumData2008HighSchoolSummer } from '../../data/albumData/2008/AlbumData2008HighSchoolSummer';
import AlbumPlayer  from '../Album/AlbumPlayer/AlbumPlayer'


function JuniorHighSummerMinistry() {
  return (
    <div className='container-common'>
      <h1 className='txt-center fontFMSong'>初高中生事工</h1>
      <div className='listViewImgContainer'>
        {AlbumData2008HighSchoolSummer.map((ele)=>{
          return <img src={ele} alt="" className='listViewImg' key={ele}/>
        })}
      </div>
    </div>
  )
}

export default JuniorHighSummerMinistry
