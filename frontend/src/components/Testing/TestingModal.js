import React from 'react';
import { useModal } from '../../context/Modal';

function TestModal() {

  const { closeModal } = useModal();


  return (
    <div className=''>
      <h1>Test</h1>
      <button onClick={()=>closeModal()}>close</button>
    </div>
  )
}

export default TestModal;
