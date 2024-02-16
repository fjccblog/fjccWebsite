import React from 'react';
import { useModal } from '../../context/Modal';

function NavModal() {

  const { closeModal } = useModal();

  return (
    <div>
      <h1>Log In</h1>
      <button onClick={()=>closeModal()}>close modal</button>
    </div>
  )
}

export default NavModal;
