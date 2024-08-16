import React, {useState, useEffect, useRef} from 'react';
import OpenModalButton from '../../context/OpenModalButton';
import AttendanceReasonModal from './AttendanceReasonModal';

import { NGPeople } from '../../data/Attendance/NGPeople';
import './Attendance.css'


function Attendance() {


  // ----------- step 1 -----------
  // store room number (5-digit, 4 digit for room number, 1 to identify person)
  // and hour, minute, second as a string of cookie
  // -> perhaps use alphbet to shorter length
  // set expire date in 3 months
  // ----------- step 2 -----------
  // for display, destructure cookie into object
  // get order/time from cookie
  // ----------- step 3 -----------
  // store in Google Excels (every check-in record? or submit at the end)
  // duplicate "template" sheet into new record for the day
  // check the box that correspongding to room number
  // open modal to ask for reason that can't join

  //------------ need to implement -------------
  // options for reason can't join
  // double click to restore to default sort by room
  // excel part

  // ------------ features in mind -------------
  // sort by room number (default) and sort by time (done)
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
    let expireTime = time + 1000*60*60*24*7*4;
    now.setTime(expireTime);
    return ';expires='+now.toUTCString()+';path=/fjccWebsite'
  }

  const InitialCookieObj = () => {
    // return object in this pattern {"room": [order, "HH:MM:SSAM"]}
    let checkInObj = {}
    let attendanceCookie = document.cookie.split("; ").find(element => element.startsWith("NG"+getTimeNow()[0]));
    // console.log("found", attendanceCookie)
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

  const clearAttendance = () => {
    let currCookieDate = "NG"+currDateTime[0];
    let currAttendanceCookie = document.cookie.split("; ").find(element => element.startsWith("NG"+getTimeNow()[0]));
    if (currAttendanceCookie !== undefined) {
      document.cookie = `${currCookieDate}=`+ getCookieExpireTime();
    }
    setCookieVal("")
    setCookieObj({})
  }

  // ============ useState variable ===================

  let [cookieVal, setCookieVal] = useState("");
  let [cookieObj, setCookieObj] = useState({}); // {"room": [order, time]}
  let [currDateTime, setCurrDateTime] = useState(getTimeNow());

  let [adminTap, setAdminTap] = useState(0);
  let [isAdminMenuActive, setIsAdminMenuActive]  = useState(false);

  let [sortedArr, setSortedArr] = useState(NGPeopleArr); //[[room, {CHN_name, ENG_name}]]
  let [isArrSorted, setIsArrSorted] = useState(false);

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
        currObj[room] = [99999, time+AMPM]
      }
    }
    setCookieObj(currObj)

  }, [cookieVal])

  useEffect(()=> {
    if (adminTap >= 3) setIsAdminMenuActive(true)
    // in case of misclick, only can turn on admin menu with 3 quick taps
    setTimeout(()=>{setAdminTap(0)}, 3000)
  }, [adminTap])

  useEffect(()=> {
    if (isArrSorted) {
      let newArr = [];

      let currCheckedPeople = Object.keys(cookieObj).sort((a,b)=>Number(cookieObj[a][0])-Number(cookieObj[b][0]));

      // put checked in people at the beginning of array
      for (let i = 0 ; i < currCheckedPeople.length; i++) {
        let room = currCheckedPeople[i];
        let currPerson = NGPeople[room]
        if(room < 99900) newArr.push([room, currPerson])
      }
      // put the rest of people
      for (let i = 0 ; i < NGPeopleArr.length; i++) {
        let room = NGPeopleArr[i][0];
        if (cookieObj[room] === undefined || room >= 99900) newArr.push(NGPeopleArr[i])
      }

      setSortedArr(newArr)
    }
    else setSortedArr(NGPeopleArr)
  }, [isArrSorted])


  return (
    <div className='AttendanceContainer'>

      <div className='AttendanceFormContainer'>
        <div className='AttendanceFormTitleContainer'>
          <div className='AttendanceFormTitle'>
            <div>名字</div>
            <div>签到按钮</div>
            <div onClick={()=>setIsArrSorted(!isArrSorted)} className='AttendanceSortOrderBtn'>
              签到顺序
              <div className='AttendanceSortOrderBtnArrow'>
                {isArrSorted ? <i className="fas fa-caret-down"></i> : <i className="fas fa-caret-up"></i>}
              </div>
            </div>
            <div>签到时间</div>
          </div>
        </div>

        {sortedArr.map(([room, {CHN_Name, ENG_Name}]) => {
          return (
            <div className='AttendanceSinglePerson'>
              <div className='checkInName'>
                {CHN_Name}
              </div>
              <div>
                <button onClick={()=> submitTime(room)} className='checkInButton'>
                  签到
                </button>
                {isAdminMenuActive && <OpenModalButton
                  modalComponent={<AttendanceReasonModal data = {[room, CHN_Name]}/>}
                  buttonText={<i className ="fas fa-user-slash"></i>}
                  customizeStyle = "adminCantAttendReasonBtn"/>}
              </div>
              <div className='checkInOrder'>
                {cookieObj[room] !== undefined
                  ? cookieObj[room][0] >= 99900 ? "已到" : cookieObj[room][0]
                  : " "}
              </div>
              <div className='checkInTime'>
                {cookieObj[room] !== undefined ? cookieObj[room][1] : " "}
              </div>
            </div>
          )
        })}

      </div>

      <div className='adminMenu' onClick={()=> {if (!isAdminMenuActive) setAdminTap(adminTap+1)}}>
        {isAdminMenuActive && <div className=''>
          <button className='AttendanceClearButton' onClick={()=>clearAttendance()}>
            清除签到
          </button>
          <button className='HideAdminMenuButton' onClick={()=>{setIsAdminMenuActive(false);setAdminTap(0)}}>
            隐蔽admin菜单
          </button>
        </div>}
      </div>

    </div>
  )
}

export default Attendance
