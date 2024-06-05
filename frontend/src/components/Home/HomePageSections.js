import {AlbumBasicInfoData} from "../Album/AlbumBasicInfo/AlbumBasicInfoData";
import {LetterBasicInfoData} from '../PrayerLetter/LetterBasicInfo/LetterBasicInfoData';
import {TestimonyBasicInfoData} from "../Testimony/TestimonyBasicInfoData/TestimonyBasicInfoData";

let sections = [
  {English: 'prayerLetter', Chinese: '代禱信',
    lastUpdate:LetterBasicInfoData[0].letterName,
    imgurl:null
  },
  {English: 'testimony', Chinese: '得救見證',
    lastUpdate: TestimonyBasicInfoData[0].title,
    imgurl:TestimonyBasicInfoData[0].coverImgUrl
  },
  {English: 'album', Chinese: '活動花絮',
    lastUpdate: AlbumBasicInfoData[0].updatedAt,
    imgurl: AlbumBasicInfoData[0].coverImgUrl},
  {English: 'spiritalFood', Chinese: '靈糧寶庫',
    lastUpdate:null,
    imgurl:null
  },
  {English: 'meetingTime', Chinese: '聚會時間表',
    lastUpdate:null,
    imgurl: 'https://lh3.googleusercontent.com/pw/AP1GczPt261YcmKWMSuYKhsILah1EOe_8b0ywvz5obY5Yxf896maglKYJRCgtYnoMErxCLEx8DD4WMFh6-ToAWrrWxI7qvZlNhp7g67I-Cd3I30P_zI9a4E=w1920-h1080'
  },
  {English: 'relatedWebsite', Chinese: '相關網站',
    lastUpdate:null,
    imgurl:null
  },
  {English: 'articles', Chinese: '文章',
    lastUpdate:null,
    imgurl:null
  }
]

export default sections
