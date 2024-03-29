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
    imgurl:null
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
