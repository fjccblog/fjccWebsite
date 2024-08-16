import React from 'react';
import { useModal } from '../../context/Modal';
import './AttendanceReasonModal.css';

function AttendanceReasonModal({data}) {

  const { closeModal } = useModal();
  let [room, CHN_Name] = data;

  const submitReason = (room) => {

  }

  return (
    <div className='AttendanceReasonModalContainer'>
      {/* <div className='AttendanceExitBtnDiv'>
        <button onClick={()=>closeModal()} className='ExitAttendanceReasonModalBtn'>
          <i className="fas fa-times"></i>
        </button>
      </div> */}
      <h3>不能參加聚會的原因？</h3>
      <input placeholder='其他原因' />
      <button onClick={()=>submitReason(room)} className='AttendanceModalSubmitBtn'>提交</button>
    </div>
  )
}

export default AttendanceReasonModal;
