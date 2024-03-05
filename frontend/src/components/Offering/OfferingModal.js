import React from 'react';
import { useModal } from '../../context/Modal';
import './OfferingModal.css'

function OfferingModal() {

  const { closeModal } = useModal();

  function confirmMessage() {
    closeModal();
  }

  return (
    <div className='OfferingModalContainer'>
      <p>
        We are a non-profit organization, donations are tax deductible.
        Please enter shipping address for getting the tax-deductible receipt.
      </p>
      <p>
        基督教會信心以勒堂是在美國註冊 501(C)3 的非營利機構.<br/>
        (Federal IRS No. 20-0758812) 捐獻者將獲發抵稅收據
      </p>
      <div className='flx-center'>
        <button className='OfferingModalConfirmBtn'
          onClick={()=> confirmMessage}>
          確定
        </button>
      </div>
    </div>
  )
}

export default OfferingModal;
