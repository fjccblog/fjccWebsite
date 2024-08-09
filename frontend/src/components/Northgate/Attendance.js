import React, {useState, useRef} from 'react';
import { NGPeople } from '../../data/Attendance/NGPeople';

function Attendance() {

  // step 1
  // store room number (5-digit, 4 digit for room number, 1 to identify person)
  // and hour, minute, second as a string of cookie
  // step 2
  // store in Google Excels (every check-in record? or submit at the end)
  // duplicate template into new record for the day
  // check the box that correspongding to room number
  // open modal to ask for reason that can't join

  // =========== features in mind
  // sort by room number and sort by time
  // drag and drop for admin override (?)

  const formRef = useRef(null)

  const scriptUrl = process.env.REACT_APP_ATTENDANCE_SCRIPT_URL;

  let timeNow= new Date().getTime();
  let readableTime = new Date(timeNow)
  let time2 = timeNow.toLocaleString();
  console.log(readableTime)
  console.log(time2);
  console.log(msToTime(timeNow))

  const handleSubmit = (e) =>{


    e.preventDefault()
    fetch(scriptUrl, {method: 'POST', body: new FormData(formRef.current)})
    .then(res => {
      if (res.okay)
        console.log("SUCCESSFULLY SUBMITTED")
    })
    .catch(err => console.log(err))
  }

  function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;

    // hour needs to minus 7 because we are in GMT-0700 time zone
    // needs to add 24 if it is less than 7
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }


  return (
    <div className='northgateContainer'>
      <div className="template_example">
        <form method="post" ref={formRef} name="google-sheet" onSubmit ={handleSubmit}>
          <div className="form-style">
              <input type=""  name="name" placeholder='Your Name *' />
          </div>
          <div className="form-style">
              <input type="email" name="email" placeholder='Your Email *' />
          </div>
          <div className="form-style">
              <input type="number" name="phone" placeholder='Your Phone *' />
          </div>
          <div className="form-style">
              <input type="submit" name="submit" value="Login" />
          </div>
        </form>
      </div>
      <div>
        <form method="post" ref={formRef} name="google-sheet" onSubmit ={handleSubmit}>
          <div className="form-style">
              <input type=""  name="roomNumber" placeholder='房间号码' />
          </div>
          <div className="form-style">
              <input type="email" name="名字" placeholder='你的名字' />
          </div>
          <div className="form-style">
              <input type="number" name="phone" placeholder='Your Phone *' />
          </div>
          <div className="form-style">
              <input type="submit" name="submit" value="签到" />
          </div>
        </form>
      </div>

    </div>
  )
}

export default Attendance
