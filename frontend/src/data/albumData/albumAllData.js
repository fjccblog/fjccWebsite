import { albumData2006To2011 } from './albumData2006To2011';
import { albumData2012To2017 } from './albumData2012To2017';

import { AlbumData2018Spring } from "./2018/AlbumData2018Spring";
import { AlbumData2019 } from "./2019/AlbumData2019";
import { AlbumData2021 } from "./2021/AlbumData2021";
import { AlbumData2022 } from "./2022/AlbumData2022";
import { AlbumData2022Thanksgiving } from "./2022/AlbumData2022Thanksgiving";
import { AlbumData2022Christmas } from "./2022/AlbumData2022Christmas";
import { AlbumData2023CampusMinistry } from "./2023/AlbumData2023CampusMinistry";
import { AlbumData2023ElderlyCareMinistry } from "./2023/AlbumData2023ElderlyCareMinistry";
import { AlbumData2023LifeTogether } from "./2023/AlbumData2023LifeTogether";
import { AlbumData2023Thanksgiving } from "./2023/AlbumData2023Thanksgiving";
import { AlbumData2023Christmas } from "./2023/AlbumData2023Christmas";
import { AlbumData2024LunarNewYear } from "./2024/AlbumData2024LunarNewYear";
import { AlbumData2024LivingStrongLunarNewYear } from './2024/AlbumData2024LivingStrongLunarNewYear';
import { AlbumData2024EasterCelebration } from './2024/AlbumData2024EasterCelebration';
import { AlbumData2024Together } from "./2024/AlbumData2024Together";
import { AlbumData2024Tahoe } from './2024/AlbumData2024Tahoe';
import { AlbumData2024MothersDay } from './2024/AlbumData2024MothersDay'
import { AlbumData2024BBQ } from './2024/AlbumData2024BBQ';
import { AlbumData2024FatherDayTrip } from './2024/AlbumData2024FatherDayTrip';


export const albumAllData = [
  {
    'albumName':'Together 2024',
    'year': 2024,
    'updatedAt': '2024-07-19',
    'albumData' : AlbumData2024Together,
    'coverImgUrl':AlbumData2024Together[AlbumData2024Together.length - 1]
  },{
    'albumName':"Father's Day Trip",
    'year': 2024,
    'updatedAt': '2024-06-19',
    'albumData' : AlbumData2024FatherDayTrip,
    'coverImgUrl':AlbumData2024FatherDayTrip[84]
  },,{
    'albumName':"Happy Serving",
    'year': 2024,
    'updatedAt': '2024-05-27',
    'albumData' : AlbumData2024BBQ,
    'coverImgUrl':AlbumData2024BBQ[0]
  },{
    'albumName':"Mother's Day",
    'year': 2024,
    'updatedAt': '2024-04-01',
    'albumData' : AlbumData2024MothersDay,
    'coverImgUrl':AlbumData2024MothersDay[0]
  },{
    'albumName':'Easter Celebration',
    'year': 2024,
    'updatedAt': '2024-04-01',
    'albumData' : AlbumData2024EasterCelebration,
    'coverImgUrl':'https://lh3.googleusercontent.com/pw/AP1GczNyqC5UHa5JXhBq4O70tiNC4ieINGmsvSI92OaXLrTx-6cNz6xw1wPgzxKyWMk8EEGeoQ5TP3BbmFPKOuHkm5xSYlKHely_f2lo1UlBZzS6sVlT1y4=w1920-h1080'
  },{
    'albumName':'Lake Tahoe',
    'year': 2024,
    'updatedAt': '2024-03-20',
    'albumData' : AlbumData2024Tahoe,
    'coverImgUrl':AlbumData2024Tahoe[0]
  },{
    'albumName':'Living Strong Campus Fellowship celebrating Lunar New Year',
    'year': 2024,
    'updatedAt': '2024-02-23',
    'albumData' : AlbumData2024LivingStrongLunarNewYear,
    'coverImgUrl':'https://lh3.googleusercontent.com/pw/ABLVV84llKTkTRweF5u4KRWjP0pYPLulTUmYqskokDXf2Y5kAfLuRWDZB533U5vgfdWJ5bTCJnlcwUZWwIJUJ6RhlDggtN06qzN4TexAxpkXuNwg_k9oa8Y=w1920-h1080'
  },{
    'albumName':'2024 Lunar New Year',
    'year': 2024,
    'updatedAt': '2024-02-14',
    'albumData' : AlbumData2024LunarNewYear,
    'coverImgUrl':'https://lh3.googleusercontent.com/pw/ABLVV86UmG6guTn1HHw0vqsGj_Y4gS43QTt4Yz7q8z8m-7B0koxHdAIBHDMk8_hgTzOWpsOVP_865cPdmOpg0ta8VjxdSdSVrP849bQDkf9HCBkKGiJbDRE=w1920-h1080'
  },
  {
    'albumName':'2023 Christmas',
    'year': 2023,
    'updatedAt': '2024-01-30',
    'albumData' : AlbumData2023Christmas,
    'coverImgUrl':'https://lh3.googleusercontent.com/pw/ABLVV87L00pYV2haptNnmfObGZKolqiyzTOgCLm9GyWRr_Hdfuaz9Z1H7SkJil2gVxXFyv6TOEHI_Eu64bCJlED9k7eblpE5AmwUEWPwX7SLd_dSsJLE36s=w1920-h1080'
  },
  {
    'albumName':'2023 Thanksgiving',
    'year': 2023,
    'updatedAt': '2023-12-30',
    'albumData' : AlbumData2023Thanksgiving,
    'coverImgUrl':'https://lh3.googleusercontent.com/pw/ABLVV844XjH7lN3XFxyDgWk5iJ0_zkdzOORhmqFnkEupJFWAvx8L5HDBgRT_XjmSrMm9ZJL2ysDXosOwtJmUesuMeLfX8-CtAJN4VoTHCRoLwJpXHkJlTiI=w1920-h1080'
  },
  {
    'albumName':'2023 Life Together',
    'year': 2023,
    'updatedAt': '2023-12-30',
    'albumData' : AlbumData2023LifeTogether,
    'coverImgUrl':'https://lh3.googleusercontent.com/pw/ABLVV84t3azys4HaG3Fwwbj-FnQhjPbGLqYTiXUb10YG5-lBXjevXfZUE-6yk78FQ0ZPSZR0QY4zi_RSSFyKozzBBfYI5Xlw5ZzODoRjCDL4V9jYubnPzj8=w1920-h1080'
  },
  {
    'albumName':'2023 Elderly Care Ministry',
    'year': 2023,
    'updatedAt': '2023-12-30',
    'albumData' : AlbumData2023ElderlyCareMinistry,
    'coverImgUrl':'https://lh3.googleusercontent.com/pw/ABLVV85w4uv0z_PR4SS4x3Dpu0mhTroM2t6WTJFFfaZhW3UeAp6EV3VDRGANyMLhAL-VVLS3ITbMOHThpRZ4jr9_g44dNaL3YtQQwQ6OUOmjj0noJU9YvVo=w1920-h1080'
  },
  {
    'albumName':'2023 Campus Ministry',
    'year': 2023,
    'updatedAt': '2023-12-30',
    'albumData' : AlbumData2023CampusMinistry,
    'coverImgUrl':'https://lh3.googleusercontent.com/pw/ABLVV87m2X6NuLsRfhukKJN-6t61oLCa8s2D5ZPHDuKcB2VkcZq7vdXeDkjLNPAgGFdBCkrIRQXX6mThp6Z2LnZ_1OOVfA1Gvx08joRBSelf_GGnnIyrtZQ=w1920-h1080'
  },
  {
    'albumName':'2022 Christmas',
    'year': 2022,
    'updatedAt': '2022-12-30',
    'albumData' : AlbumData2022Christmas,
    'coverImgUrl':'https://lh3.googleusercontent.com/pw/ABLVV87On3NZhwQTbcLBs6l4l0YGMm0u9syd41b9-FU3YZP3l35cNU2CCaJSLzseVTI5E9Kg6cC9vwZkFEIyUH2kw_XfDTPJWk9Z3DqAhG9t7tj_Wd-TE6M=w1920-h1080'
  },
  {
    'albumName':'2022 Thanksgiving',
    'year': 2022,
    'updatedAt': '2022-12-30',
    'albumData' : AlbumData2022Thanksgiving,
    'coverImgUrl':'https://lh3.googleusercontent.com/pw/ABLVV859kTGqiCK7ZOw6BUIlb0CoitnomVfRgyGpEJAJy5XMRXX6lsU0Zu9xddunAsp39Kv-4bej3gqfPnBKXB47LmKJDyi5jJnSvEieTvxnMJxSx_jC01I=w1920-h1080'
  },
  {
    'albumName':'2022 @FJCC',
    'year': 2022,
    'updatedAt': '2022-12-30',
    'albumData' : AlbumData2022,
    'coverImgUrl':'https://lh3.googleusercontent.com/pw/ABLVV86BJEy_Bt7GQQckVrIMXFIxTRrBa-iJIOQIEIoDpmwvUlROf2lIIbNWaxiJoZXd6hFBPO782v3QD4GnVaJvq_UcJFnZwyYFp9V3zGZyhL7dTzqY3so=w1920-h1080'
  },
  {
    'albumName':'2021 @FJCC',
    'year': 2021,
    'updatedAt': '2021-12-30',
    'albumData' : AlbumData2021,
    'coverImgUrl':'https://lh3.googleusercontent.com/pw/ABLVV862lilSthi53e8IpvPk6zaBcSsbVxT22sZ3qFZk8ilWLfURM5cZuMqYOLNIzUkO4kBvoWe-if3jC9SB2xUNzGAyWf9YZDgJiTQzCLLYQSh4pM-IV7g=w1920-h1080'
  },
  {
    'albumName':'2019 @FJCC',
    'year': 2019,
    'updatedAt': '2019-12-30',
    'albumData' : AlbumData2019,
    'coverImgUrl':'https://lh3.googleusercontent.com/qBY32bEdR3O99K125QNVhgzr48maBRwKDfyFh0tUKJYp_dJIcIU1JHjIVlI5bMRBQWuT4Fem1MYNf-BePepGZfP6pKyMjJKgV7Gzk0GNGJXXhoNzUMM3IDxmRVZwJzyCkoUOJZab9w=w1920-h1080'
  },
  {
    'albumName':'Spring 2018',
    'year': 2018,
    'updatedAt': '2018-12-30',
    'albumData' : AlbumData2018Spring,
    'coverImgUrl':'https://live.staticflickr.com/4791/25692559207_427ef8c315_z.jpg'
  },
  ...albumData2012To2017,
  ...albumData2006To2011


]
