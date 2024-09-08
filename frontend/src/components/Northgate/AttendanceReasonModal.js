import React, { useEffect } from 'react';
import { useState } from 'react';
import { useModal } from '../../context/Modal';
import './AttendanceReasonModal.css';

function AttendanceReasonModal({data}) {

  const { closeModal } = useModal();
  let [room, CHN_Name] = data;

  const submitReason = (room) => {

  }

  let [reason, setReason] = useState("");
  let [otherReason, setOtherReason] = useState("")
  let [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState(true)

  useEffect( ()=> {
    if ((reason === 'others' && otherReason === '') || (reason === '')) {
      setIsSubmitBtnDisabled(true)
    } else {
      setIsSubmitBtnDisabled(false)
    }
  }, [reason, otherReason])

  return (
    <div className='AttendanceReasonModalContainer'>
      <h3>不能參加聚會的原因？</h3>
      <select name="attendanceReason" className="reasonSelect"
        onChange={(e) => setReason(e.target.value)}>
        <option value="">-- 請選擇下面一個選項 --</option>
        <option value="sick">看醫生</option>
        <option value="oot">OOT</option>
        <option value="others">不能參加 (請註明原因)</option>
      </select>
      {reason === "others" && <input onChange={(e)=> setOtherReason(e.target.value)}
        placeholder='其他原因' className='attendanceReasonInput'/> }
      <button onClick={()=>submitReason(room)} disabled={isSubmitBtnDisabled}
        className='AttendanceModalSubmitBtn'>提交</button>
    </div>
  )
}

export default AttendanceReasonModal;
