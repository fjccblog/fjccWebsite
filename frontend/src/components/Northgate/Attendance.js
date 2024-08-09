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
  let NGPeopleArr = Object.entries(NGPeople).sort((a,b)=>a[0] - b[0])

  const getTimeNow = () => {
    // return time in this pattern 10:28:19 AM
    let timeNowInMS= new Date().getTime();
    let readableTime = new Date(timeNowInMS); //Fri Aug 09 2024 10:31:17 GMT-0700 (Pacific Daylight Time)
    let localTime = readableTime.toLocaleString('en-US', {timeZone:"America/Los_Angeles"}) //8/9/2024, 10:28:19 AM
    let localTimeHourMinSec = localTime.split(",")[1];
    return localTimeHourMinSec
  }

  const submitTime = (room) => {
    let currTime = getTimeNow()
    // store time/order(2 digit) and room number in cookie
    // show time / order next to name
    // check box in excels
  }


  const formRef = useRef(null)

  const scriptUrl = process.env.REACT_APP_ATTENDANCE_SCRIPT_URL;

  const handleSubmit = (e) =>{
    e.preventDefault()
    fetch(scriptUrl, {method: 'POST', body: new FormData(formRef.current)})
    .then(res => {
      if (res.okay)
        console.log("SUCCESSFULLY SUBMITTED")
    })
    .catch(err => console.log(err))
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

      <div className='testing'>
        {NGPeopleArr.map((person) => {
          return (
            <div >
              {person[1].CHN_Name}
              <button onClick={()=> submitTime(person[0])}> 签到</button>
            </div>
          )
        })}

      </div>

    </div>
  )
}

export default Attendance
