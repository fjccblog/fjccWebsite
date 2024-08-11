import React, {useState, useEffect, useRef} from 'react';
import { NGPeople } from '../../data/Attendance/NGPeople';

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

  const InitialCookieObj = () => {
    // return object in this pattern {"room": [order, "HH:MM:SSAM"]}
    let emptyObj = {}
    let attendanceCookie = document.cookie.split("; ").find(element => element.startsWith("NG"+getTimeNow()[0]));
    console.log("found", attendanceCookie)
    if (attendanceCookie !== undefined) {

      // take the value of cookie, and split into each person, which divided by '-'
      let checkedInArr = attendanceCookie.split("=")[1].split('-');
      let checkInObj = {};
      for (let i = 0; i < checkedInArr.length - 1; i++) {
        let checkIn = checkedInArr[i];
        console.log("single checkin", checkIn)
        let [room, time, AMPM] = checkIn.split(" ")
        // if (checkInObj[room] !== undefined) {
          checkInObj[room] = [i + 1, time+AMPM]
        // } else {
          // checkInObj[room] = [-1, ""]
        // }
      }
      console.log("obj", checkInObj)
      // setCookieObj(checkInObj)
    }
    return emptyObj
  }

  const submitTime = (room) => {
    // let currTime = getTimeNow()
    // store time/order(2 digit) and room number in cookie
    // show time / order next to name
    // check box in excels
    if (cookieVal.indexOf(room) === -1) {
      let newCookie = cookieVal + room + getTimeNow()[1] + "-"
      setCookieVal(newCookie)
      document.cookie = `${"NG"+currDateTime[0]}=${newCookie}`;
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
  let [cookieObj, setCookieObj] = useState(InitialCookieObj()); // {"room": [order, time]}
  let [currDateTime, setCurrDateTime] = useState(getTimeNow());

  const formRef = useRef(null)

  // ============ useEffect ===================
  // on render
  useEffect(()=> {
    // setCurrDateTime(getTimeNow())

    let currCookieDate = "NG"+currDateTime[0];
    if (document.cookie.split("; ").find(element => element.startsWith("NG"+getTimeNow()[0])) === undefined) {
      document.cookie = `${currCookieDate}=`
    } else {
      // console.log(document.cookie)
      // let checkInArr = currCookieDate.split("-");
      // let checkInObj = cookieObj;
      // for (let i = 0; i < checkInArr.length - 1; i++) {
      //   let checkIn = checkInArr[i];
      //   console.log("single checkin", checkIn)
      //   let room = checkIn.split(" ")[0]
      //   let time = checkIn.split(" ")[1]
      //   if (checkInObj[room] !== undefined) {
      //     checkInObj[room] = [i, time]
      //   } else {
      //     checkInObj[room] = [-1, ""]
      //   }
      // }
      // console.log("obj", checkInObj)
      // setCookieObj(checkInObj)
    }
  }, [])

  useEffect(()=> {
    // check if cookie exists
    // if it doesn't, save empty string for cookie
    // else construct object from cookie
    // let currCookieDate = "NG"+currDateTime[0];
    // if (document.cookie.indexOf(currCookieDate) === -1) {
    //   document.cookie = `${currCookieDate}=""`
    // } else {
    //   let checkInArr = currCookieDate.split("-");
    //   let checkInObj = cookieObj;
    //   for (let i = 0; i < checkInArr.length - 1; i++) {
    //     let checkIn = checkInArr[i];
    //     let room = checkIn.split(" ")[0]
    //     let time = checkIn.split(" ")[1]
    //     if (checkInObj[room] !== undefined) {
    //       checkInObj[room] = [i, time]
    //     }
    //   }
    //   setCookieObj(checkInObj)
    // }
  }, [currDateTime])

  // decrypt cookie into object and set new cookie
  useEffect(()=> {
    // let todayDate = "NG" + getTimeNow()[0]
    // document.cookie = `${todayDate}=${cookieVal}`
    let cookieArr = cookieVal.split("-");
    console.log(cookieArr)
  }, [cookieVal])


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
              {cookieObj[person[0]] !== undefined ? cookieObj[person[0]][0] : "not working "}
              <button onClick={()=> submitTime(person[0])}> 签到</button>
            </div>
          )
        })}

      </div>

    </div>
  )
}

export default Attendance
