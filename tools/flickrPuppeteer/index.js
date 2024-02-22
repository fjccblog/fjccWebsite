const puppeteer = require('puppeteer');

//don't forget semicolon;

//Spring 2018
// let url = 'https://www.flickr.com/photos/132430613@N08/albums/72157688357615070';

// winter 2017
// let url = 'https://www.flickr.com/photos/132430613@N08/albums/72157668156510049';
// FJCC 14th Anniversary <<<<<
// let url = 'https://www.flickr.com/photos/132430613@N08/albums/72157687256052792/';
// What is Happening in FJCC 2017
let url = 'https://www.flickr.com/photos/132430613@N08/albums/72157678808138323/';

// Christmas 2016
// let url = 'https://www.flickr.com/photos/132430613@N08/albums/72157678515174766';
// 2016 Summer Mission in Taiwan II
// let url = 'https://www.flickr.com/photos/132430613@N08/albums/72157671214427210/';
// Hong Kong Baptist Theological Seminary Tour
// let url = 'https://www.flickr.com/photos/132430613@N08/albums/72157672278225615';
// 建道神學院 Alliance Bible Seminary Tour
// let url = 'https://www.flickr.com/photos/132430613@N08/albums/72157670678903480';
// 2016 Summer Mission in Taiwan
// let url = 'https://www.flickr.com/photos/132430613@N08/albums/72157671629135355';
// 2016 Summer Mission in Hong Kong
// let url = 'https://www.flickr.com/photos/132430613@N08/albums/72157668667560164';
// Togetherness 2016
// let url = 'https://www.flickr.com/photos/132430613@N08/albums/72157671380360465';
// 2016 Summer Mission
// let url = 'https://www.flickr.com/photos/132430613@N08/albums/72157670310149890';
// Bethlehem Ministry
// let url = 'https://www.flickr.com/photos/132430613@N08/albums/72157662351707370';

// Togetherness 2015
// let url = 'https://www.flickr.com/photos/132430613@N08/albums/72157660592535554';
// Thanksgiving 2015
// let url = 'https://www.flickr.com/photos/132430613@N08/albums/72157662760201382';
// Christmas 2015
// let url = 'https://www.flickr.com/photos/132430613@N08/albums/72157662760176272';
// A Revival Weekend with Pastor Anita Lau
// 2015 June 12
// let url = 'https://www.flickr.com/photos/132430613@N08/albums/72157652399709164';
// We are Happy Family
// let url = 'https://www.flickr.com/photos/132430613@N08/albums/72157653038936682';
// Northgate Senior Ministry
// let url = 'https://www.flickr.com/photos/98992990@N05/albums/72157651680717960';
// The Lord's Day 2015
// let url = 'https://www.flickr.com/photos/98992990@N05/albums/72157651816287905';
// In N Out Reach 2015
// let url = 'https://www.flickr.com/photos/98992990@N05/albums/72157651539690455';

// Christmas Party 2014
// let url = 'https://www.flickr.com/photos/98992990@N05/albums/72157649501719558';
// Life Together - Fall 2014
// let url = 'https://www.flickr.com/photos/98992990@N05/albums/72157646417206803';
// Summer Local Mission
// let url = 'https://www.flickr.com/photos/98992990@N05/albums/72157645718461121';
// Summer Together
// let url = 'https://www.flickr.com/photos/98992990@N05/albums/72157645730278835';
// Music Lessons
// let url = 'https://www.flickr.com/photos/98992990@N05/albums/72157645771034073';
// Independence Day Church Family BBQ, Basketball & Fireworks
// let url = 'https://www.flickr.com/photos/98992990@N05/albums/72157645720152862';
// 屋仔的故事
// let url = 'https://www.flickr.com/photos/98992990@N05/albums/72157645717169921';
// Basketball Ministry
// let url = 'https://www.flickr.com/photos/98992990@N05/albums/72157645728175412';
// Church Dedication
// let url = 'https://www.flickr.com/photos/98992990@N05/albums/72157644573172314';
// 10th Anniversary Baptism
// let url = 'https://www.flickr.com/photos/98992990@N05/albums/72157644572409995';
// FJCC 2014
// let url = 'https://www.flickr.com/photos/98992990@N05/albums/72157644158181279';

// 2013 Christmas
// let url = 'https://www.flickr.com/photos/98992990@N05/albums/72157639109274154';
// Welcome Back, Rev. Siu
// let url = 'https://www.flickr.com/photos/98992990@N05/albums/72157639121653534';
// 10th Anniversary Thanksgiving Celebration
// let url = 'https://www.flickr.com/photos/98992990@N05/albums/72157636313158496';
// SHARP醒好友營
// let url = 'https://www.flickr.com/photos/98992990@N05/albums/72157634986725358';
// Leadership & Evangelism Training
// let url = 'https://www.flickr.com/photos/98992990@N05/albums/72157634986679104';
// Neighborhood Block Party 2013
// let url = 'https://www.flickr.com/photos/98992990@N05/albums/72157634986617730';
// 以勒堂第九屆浸禮
// let url = 'https://www.flickr.com/photos/98992990@N05/albums/72157634704331032';
// Summer 2013
// let url = 'https://www.flickr.com/photos/98992990@N05/albums/72157634681881076';
// Spring 2013
// let url = 'https://www.flickr.com/photos/98992990@N05/albums/72157634684555310';
// Fellowship 2013
// let url = 'https://www.flickr.com/photos/91949468@N06/albums/72157632446585883';

// Helen and Zike
// let url = 'https://www.flickr.com/photos/92484020@N02/albums/72157632585137733';
// Helen and Zike
// let url = 'https://www.flickr.com/photos/91949468@N06/albums/72157632506661488';
// Christmas Party
// let url = 'https://www.flickr.com/photos/91949468@N06/albums/72157632446583275';
// FJCC Preparing For Christmas
// let url = 'https://www.flickr.com/photos/91831759@N07/albums/72157632448907010';
// 以勒堂九週年佈道和培靈雙週
// let url = 'https://www.flickr.com/photos/88191622@N07/albums/72157631712108850';
// Church Painting Day
// let url = 'https://www.flickr.com/photos/86349340@N03/albums/72157631356193784';
// 2nd Annual Neighborhood Block Party
// let url = 'https://www.flickr.com/photos/83907351@N04/albums/72157631022804586';
// Summer 2012
// let url = 'https://www.flickr.com/photos/83907351@N04/albums/72157630833688622';
// Fellowship 2012
// let url = 'https://www.flickr.com/photos/83328473@N08/albums/72157630796057548';
// 勁友營2012
// let url = 'https://www.flickr.com/photos/81081856@N07/albums/72157630599514560';
// 2012 Retreat
// let url = 'https://www.flickr.com/photos/82724956@N03/albums/72157630599111826';
// 2012 Retreat and Summer Outdoor Activities
// let url = 'https://www.flickr.com/photos/82087577@N04/albums/72157630460661812';
// 2012 Summer Retreat
// let url = 'https://www.flickr.com/photos/82072333@N08/albums/72157630452386502';
// Bible Seminar, Revival Meeting, Graduation
// let url = 'https://www.flickr.com/photos/75440895@N03/albums/72157630110207704';
// 聖經研究的樂趣研討會 2012
// let url = '';
// Pastor Appreciation Night
// let url = '';
// The Fun Continues
// let url = 'https://www.flickr.com/photos/75440895@N03/albums/72157629525035932';
// The Beginning of a New Year
// let url = 'https://www.flickr.com/photos/75440895@N03/albums/72157629177764993';

//label:2011
//
// let url = '';
//
// let url = '';
//
// let url = '';
//
// let url = '';
//
// let url = '';
//
// let url = '';
//
// let url = '';
//
// let url = '';
//
// let url = '';
//
// let url = '';



(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url);
  const styles = await page.$$eval('div.photo-list-photo-view', el => el.map(x => x.getAttribute('style')));
  // only taking inside url("//...")
  // also add "https:" to the very start
  const urlArr = styles.map(el => "https:" + el.split('url("')[1].split('")')[0]);
  console.log(urlArr)
  await browser.close();
})();
