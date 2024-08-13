import React, {useState, useEffect, useRef} from 'react';
import { NGPeople } from '../../data/Attendance/NGPeople';
import './Attendance.css'


function Attendance() {


  // ----------- step 1 -----------
  // store room number (5-digit, 4 digit for room number, 1 to identify person)
  // and hour, minute, second as a string of cookie
  // -> perhaps use alphbet to shorter length
  // set expire date in 3 months
  // ----------- step 2 -----------
  // for display, desture cookie into object
  // get order/time from cookie
  // perhaps useState for count ?
  // ----------- step 3 -----------
  // store in Google Excels (every check-in record? or submit at the end)
  // duplicate template into new record for the day
  // check the box that correspongding to room number
  // open modal to ask for reason that can't join

  // ------------ features in mind -------------
  // sort by room number and sort by time
  // drag and drop for admin override (?)
  // view old cookie

  // =============== variable define ===================
  let NGPeopleArr = Object.entries(NGPeople).sort((a,b)=>a[0] - b[0]) //[room,[CHN_name, ENG_name]]
  const scriptUrl = process.env.REACT_APP_ATTENDANCE_SCRIPT_URL;


  // ================ function definition ==============
  const getTimeNow = () => {
    // return time in this pattern ['8/9/2024', '10:28:19 AM']
    let timeNowInMS= new Date().getTime();
    let readableTime = new Date(timeNowInMS); //Fri Aug 09 2024 10:31:17 GMT-0700 (Pacific Daylight Time)
    let localTime = readableTime.toLocaleString('en-US', {timeZone:"America/Los_Angeles"}) //8/9/2024, 10:28:19 AM
    let localTimeArr = localTime.split(",");
    return localTimeArr
  }

  const getCookieExpireTime = () => {
    let now = new Date();
    let time = now.getTime();
    let expireTime = time + 1000*36000*7;
    now.setTime(expireTime);
    return ';expires='+now.toUTCString()+';path=/fjccWebsite'
  }

  const InitialCookieObj = () => {
    // return object in this pattern {"room": [order, "HH:MM:SSAM"]}
    let checkInObj = {}
    let attendanceCookie = document.cookie.split("; ").find(element => element.startsWith("NG"+getTimeNow()[0]));
    console.log("found", attendanceCookie)
    if (attendanceCookie !== undefined) {

      // take the value of cookie, and split into each person, which divided by '-'
      let checkedInArr = attendanceCookie.split("=")[1].split('-');
      for (let i = 0; i < checkedInArr.length - 1; i++) {
        let checkIn = checkedInArr[i];
        let [room, time, AMPM] = checkIn.split(" ")
        checkInObj[room] = [i + 1, time+AMPM]
      }
    }
    return checkInObj
  }

  const submitTime = (room) => {
    // let currTime = getTimeNow()
    // store time/order(2 digit) and room number in cookie
    // show time / order next to name
    // check box in excels
    if (cookieVal.indexOf(room) === -1) {
      let newCookie = cookieVal + room + getTimeNow()[1] + "-"
      setCookieVal(newCookie)
      document.cookie = `${"NG"+currDateTime[0]}=${newCookie}` + getCookieExpireTime();
    }
    // document.cookie = `${"NG"+getTimeNow()[0]}=${attendanceCookie.split("=")[1] + "02990 8:56:48 PM-02997 8:56:48 PM-"}`

  }

  const handleSubmit = (e) =>{
    // e.preventDefault()
    // fetch(scriptUrl, {method: 'POST', body: new FormData(formRef.current)})
    // .then(res => {
    //   if (res.okay)
    //     console.log("SUCCESSFULLY SUBMITTED")
    // })
    // .catch(err => console.log(err))
  }

  let [cookieVal, setCookieVal] = useState("");
  let [cookieObj, setCookieObj] = useState({}); // {"room": [order, time]}
  let [currDateTime, setCurrDateTime] = useState(getTimeNow());

  const formRef = useRef(null)

  // ============ useEffect ===================
  // on render
  useEffect(()=> {
    // from cookie stored in client side
    // set state variable [cookie value and cookie object]
    let currCookieDate = "NG"+currDateTime[0];
    let currAttendanceCookie = document.cookie.split("; ").find(element => element.startsWith("NG"+getTimeNow()[0]));

    if (currAttendanceCookie === undefined) {
      document.cookie = `${currCookieDate}=`+ getCookieExpireTime();
    } else {
      let currCookieValue = currAttendanceCookie.split("=")[1];
      setCookieVal(currCookieValue);
    }
    setCookieObj(InitialCookieObj());
  }, [])

  useEffect(()=> {

  }, [currDateTime])

  useEffect(()=> {
    // when state varibale (cookie value) change
    // decrypt cookie into object and set new cookie object
    let currCookieArr = cookieVal.split("-");
    // console.log("cookieArr", currCookieArr)
    let currObj = {}
    let count = 1
    for (let i = 0; i < currCookieArr.length - 1; i++) {
      let checkIn = currCookieArr[i];
      let [room, time, AMPM] = checkIn.split(" ")
      if (room < 99900) {
        currObj[room] = [count, time+AMPM]
        count++;
      } else {
        currObj[room] = ["已到", time+AMPM]
      }
    }
    setCookieObj(currObj)

  }, [cookieVal])


  return (
    <div className='AttendanceContainer'>

      <div className='AttendanceFormContainer'>
        <div className='AttendanceFormTitleContainer'>
          <div className='AttendanceFormTitle'>
            <div>名字</div>
            <div>签到按钮</div>
            <div>签到顺序</div>
            <div>签到时间</div>
          </div>
        </div>
        {NGPeopleArr.map(([room, {CHN_Name, ENG_Name}]) => {

          return (
            <div className='AttendanceSinglePerson'>
              <div className='checkInName'>
                {CHN_Name}
              </div>
              <button onClick={()=> submitTime(room)} className='checkInButton'>
                签到
              </button>
              <div className='checkInOrder'>
                {cookieObj[room] !== undefined ? cookieObj[room][0] : " "}
              </div>
              <div className='checkInTime'>
                {cookieObj[room] !== undefined ? cookieObj[room][1] : " "}
              </div>
            </div>
          )
        })}

      </div>

    </div>
  )
}

export default Attendance
