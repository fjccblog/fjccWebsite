const puppeteer = require('puppeteer');

//don't forget semicolon;

//Spring 2018
// let url = 'https://www.flickr.com/photos/132430613@N08/albums/72157688357615070';
// winter 2017
// let url = 'https://www.flickr.com/photos/132430613@N08/albums/72157668156510049';
// FJCC 14th Anniversary <<<<<
// let url = 'https://www.flickr.com/photos/132430613@N08/albums/72157687256052792/';
// What is Happening in FJCC 2017
// let url = 'https://www.flickr.com/photos/132430613@N08/albums/72157678808138323/';
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
