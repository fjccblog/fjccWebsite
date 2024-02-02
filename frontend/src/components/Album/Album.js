import React from 'react';
import { AlbumBasicInfoData } from './AlbumBasicInfo/AlbumBasicInfoData';
import Album2021 from './2021/Album2021';
import Album2022 from './2022/Album2022';
import Album2022Thanksgiving from './2022/Album2022Thanksgiving';
import Album2022Christmas from './2022/Album2022Christmas';
import Album2023CampusMinistry from './2023/Album2023CampusMinistry';
import Album2023ElderCareMinistry from './2023/Album2023ElderlyCareMinistry';
import Album2024LifeTogether from './2023/Album2023LifeTogether';
import Album2023Thanksgiving from './2023/Album2023Thanksgiving';
import Album2023Christmas from './2023/Album2023Christmas';
import Album2023LifeTogether from './2023/Album2023LifeTogether';
import './Album.css';

function Album() {
  return (
    <div>
      This is album page, need to set up router
      <div className='allAlbumInfoContainer'>
        {AlbumBasicInfoData.map((albumInfo)=>{
          return (
            <div className='singleAlbumInfoContainer'>
              <img src={albumInfo.coverImgUrl} className='albumInfoImg'/>
              <div className='albumInfoDescription'>
                <span className='albumInfoDescriptionName'>{albumInfo.albumName}</span>
                <span className='albumInfoDescriptionUpdateAt'>Last Updated: {albumInfo.updatedAt}</span>
              </div>
              {/* <caption></caption>
              <caption>{albumInfo.updatedAt}</caption> */}
            </div>
          )})}
      </div>
      {/* <h3>album 2023 Christmas</h3> */}
      {/* <Album2021 /> */}
      {/* <Album2022 /> */}
      <Album2022Thanksgiving />
      {/* <Album2022Christmas /> */}
      {/* <Album2023CampusMinistry /> */}
      {/* <Album2023ElderCareMinistry /> */}
      {/* <Album2023LifeTogether /> */}
      {/* <Album2023Thanksgiving /> */}
      {/* <Album2023Christmas /> */}
    </div>
  )
}

export default Album
