import React from 'react';
import { useState } from 'react';
import { GreatSoulsAtPrayerAll } from '../../data/spirtualBookData/GreatSoulsAtPrayer';

function GreatSoulsAtPrayer() {

  let [month, setMonth] = useState(1)
  let [day, setDay] = useState(1)
  let [prayerContent, setPrayerContent] = useState([])

  function getPrayerContent(month, day) {
    let output = []
    let isDateValid = true;

    // check if date is valid
    if ((month === '2'||month === '4'||month === '6'||month === '9'||month === '11') && (day === '31')) isDateValid = false

    let prayerInfo = GreatSoulsAtPrayerAll[month][day];
    let total = prayerInfo.total
    for (let i = 1; i <= total; i++) {
      output.push(prayerInfo[i])
    }
    setPrayerContent(output)
  }
  // perhaps make iphone time picker to scroll
  // https://codepen.io/dsomel21/pen/eRdLao
  // https://github.com/ricale/ios-style-picker

  return (
    <div className=''>
      <div className='bookIntro'>
        <h1 className='txt-center fontFMSong'>偉大心靈的禱告</h1>
      </div>
      <div className='selectMonthDay'>
        <p>請選擇日期</p>
        <select name="month" value={month} onChange={(e)=> setMonth(e.target.value)}>
          <option value="1">一月</option>
          <option value="2">二月</option>
          <option value="3">三月</option>
          <option value="4">四月</option>
          <option value="5">五月</option>
          <option value="6">六月</option>
          <option value="7">七月</option>
          <option value="8">八月</option>
          <option value="9">九月</option>
          <option value="10">十月</option>
          <option value="11">十一月</option>
          <option value="12">十二月</option>
        </select>
        <select name="day" value={day} onChange={(e)=> setDay(e.target.value)}>
            <option value="1">一日</option>
            <option value="2">二日</option>
            <option value="3">三日</option>
            <option value="4">四日</option>
            <option value="5">五日</option>
            <option value="6">六日</option>
            <option value="7">七日</option>
            <option value="8">八日</option>
            <option value="9">九日</option>
            <option value="10">十日</option>
            <option value="11">十一日</option>
            <option value="12">十二日</option>
            <option value="13">十三日</option>
            <option value="14">十四日</option>
            <option value="15">十五日</option>
            <option value="16">十六日</option>
            <option value="17">十七日</option>
            <option value="18">十八日</option>
            <option value="19">十九日</option>
            <option value="20">二十日</option>
            <option value="21">二十一日</option>
            <option value="22">二十二日</option>
            <option value="23">二十三日</option>
            <option value="24">二十四日</option>
            <option value="25">二十五日</option>
            <option value="26">二十六日</option>
            <option value="27">二十七日</option>
            <option value="28">二十八日</option>
            <option value="29">二十九日</option>
            <option value="30">三十日</option>
            <option value="31">三十一日</option>
        </select>
        <button onClick={() => getPrayerContent(month, day)}>确定</button>
      </div>
      <div className='prayerContent'>
          {prayerContent.length !== 0 && prayerContent.map(element => {
            return (<div>
              {element.prayer.split("\n").map((e)=> {
                return (<p>{e}</p>)
              })}
              <p>-- {element.author}</p>
            </div>)}
          )}
      </div>
    </div>
  )
}

export default GreatSoulsAtPrayer
