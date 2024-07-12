import React from "react";
import './MeetingTime.css';

function MeetingTime () {
  return (
  <div className="meetingTimeContainer">
    <h1 className="txt-center">教會聚會時間</h1>
    <img scr='https://lh3.googleusercontent.com/pw/AP1GczPt261YcmKWMSuYKhsILah1EOe_8b0ywvz5obY5Yxf896maglKYJRCgtYnoMErxCLEx8DD4WMFh6-ToAWrrWxI7qvZlNhp7g67I-Cd3I30P_zI9a4E=w1920-h1080'
      alt ="worship the lord" className="meetingTimeImg"></img>
    <div>
      <h3 className="txt-underline">主日崇拜 Corporate Worship Service:</h3>
      <div className='scheduleDiv'><div>以勒堂</div> <div>星期日 11:00 AM - 12:15 PM</div></div>
      <div className='scheduleDiv mrg-b-10p'><div>Faith Jireh Worship Service</div> <div>Sunday 11:00 AM - 12:15 PM</div></div>
      <div className='scheduleDiv'><div>北門長者之家</div> <div>星期二 4:00 PM - 5:00 PM</div></div>
      <div className='scheduleDiv mrg-b-10p'><div>Northgate Worship Service</div> <div>Tuesday 4:00 PM - 5:00 PM</div></div>
      <div className='scheduleDiv'><div>瑪莉園&伊甸長者之家</div> <div>星期日 8:30 AM - 9:30 AM</div></div>
      <div className='scheduleDiv'><div>St. Mary's Gardens & Beth Eden Worship Service</div> <div>Sunday 8:30 AM - 9:30 AM</div></div>
    </div>

    <div>
      <h3 className="txt-underline">禱告會 Praying Meeting:</h3>
      <div className='scheduleDiv'><div>教會禱告會</div> <div>星期三 8:00 PM</div></div>
      <div className='scheduleDiv mrg-b-10p'><div>Church Prayer Meeting</div> <div>Wednesday 8:00 PM</div></div>
      <div className='scheduleDiv'><div>教會禱告會</div> <div>星期日 12:15 PM</div></div>
      <div className='scheduleDiv'><div>Church Prayer Meeting</div> <div>Sunday 12:15 PM</div></div>
    </div>

    <div>
      <h3 className="txt-underline">基督教教育課程 Christian Education:</h3>
      <div>今季課程 Church School Schedule</div>
      <div className='scheduleDiv'><div>課程</div> <div>教師</div></div>
      <div className='scheduleDiv'><div>基要真理、浸禮班</div> <div>李艷芝傳道</div></div>
    </div>

    <div>
      <h3 className="txt-underline">信徒團契 Fellowship:</h3>
      <div className='scheduleDiv'><div>青年查經團契</div> <div>星期五 8:00 PM - 10:00 PM</div></div>
      <div className='scheduleDiv mrg-b-10p'><div>TGIF Bible Study Fellowship</div> <div>Friday 8:00 PM - 10:00 PM</div></div>
      <div className='scheduleDiv'><div>教會愛筵及團契</div> <div>星期日 12:30 PM</div></div>
      <div className='scheduleDiv mrg-b-10p'><div>Love Feast & Fellowship</div> <div>Sunday 12:30 PM</div></div>
      <div className='scheduleDiv'><div>樂力校園團契</div> <div>星期三 12:00 PM - 1:00 PM</div></div>
      <div className='scheduleDiv'><div>Living Strong Campus Fellowship</div> <div>Wednesday 12:00 PM - 1:00 PM</div></div>
    </div>

    <div>
      <h3 className="txt-underline">外展事工 Outreach Ministry:</h3>
      <div>學生事工 Student Ministry</div>
      <div>生命麵包事工 Bethlehem Ministry</div>
    </div>

  </div>
  )
}

export default MeetingTime;
