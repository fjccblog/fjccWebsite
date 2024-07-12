import React from 'react';
import { useModal } from '../../../context/Modal';
import './AlbumListViewModal.css';

function AlbumListViewModal({setIsListViewActive}) {

  const { closeModal } = useModal();

  function confirmMessage() {
    setIsListViewActive(true);
    closeModal();
  }

  return (
    <div className='AlbumListViewModalContainer'>
      <p className='AlbumListViewModalConfirmQues flx-center'>
        確定要打開圖片列表嗎？
      </p>
      <p className='AlbumListViewModalTip flx-center'>
        請盡量在連接Wi-Fi時查看圖片
      </p>
      <div className='AlbumListViewModalBtns'>
        <button className='AlbumListViewModalConfirmBtn'
          onClick={()=> confirmMessage()}>
          確定
        </button>
        <button className='AlbumListViewModalCancelBtn'
          onClick={()=> closeModal()}>
          取消
        </button>
      </div>
    </div>
  )
}

export default AlbumListViewModal;
