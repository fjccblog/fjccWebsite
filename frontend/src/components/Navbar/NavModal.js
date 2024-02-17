import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useModal } from '../../context/Modal';
import './NavModal.css'

function NavModal() {

  const { closeModal } = useModal();

  let [isMinistryDivOpen, setIsMinistryDivOpen] = useState(false);
  let [isAboutDivOpen, setIsAboutDivOpen] = useState(false);
  let [isActivityDivOpen, setIsActivityDivOpen] = useState(false);
  let [isTestimonyDivOpen, setIsTestimonyDivOpen] = useState(false);


  useEffect(()=> {
    //align modal to the right
    let modalContent = document.querySelector('#modal-content');
    modalContent.style.right = '0px';
    modalContent.style.animation = 'ShowModal 1.5s ease';
  }, [])

  return (
    <div className='navModalContainer'>
      <button onClick={()=>closeModal()} className='modalCloseBtn'>
        <i className="fas fa-times modalCloseBtnIcon"></i>
        <span className='modalCloseBtnText'>關閉</span>
      </button>
      <div>
        <div className="navModalItem" onClick={()=>setIsMinistryDivOpen(!isMinistryDivOpen)}>
          外展事工 <i className="fas fa-chevron-down"></i>
        </div>
        {isMinistryDivOpen &&  <div className='navModalDropdown'>
          <Link to='/childMinistry'>
            <div onClick={()=>closeModal()}>兒童事工</div>
          </Link>
          <Link to='juniorHighMinistry'>
            <div onClick={()=>closeModal()}>初、高中生事工</div>
          </Link>
          <Link to='collegeMinistry'>
            <div onClick={()=>closeModal()}>大學事工</div>
          </Link>
          <Link to='sportMinistry'>
            <div onClick={()=>closeModal()}>體育事工</div>
          </Link>
          <Link to='seniorMinistry'>
            <div onClick={()=>closeModal()}>長者事工</div>
          </Link>
        </div>}
      </div>
      <div>
        <div className="navModalItem" onClick={()=>setIsAboutDivOpen(!isAboutDivOpen)}>
          關於教會 <i className="fas fa-chevron-down"></i>
        </div>
        {isAboutDivOpen && <div className='navModalDropdown'>
          <Link to='/faithStatement'>
            <div onClick={()=>closeModal()}>信仰立場</div>
          </Link>
          <Link to='purpose'>
            <div onClick={()=>closeModal()}>宗旨 / 使命</div>
          </Link>
          <Link to='churchHistory'>
            <div onClick={()=>closeModal()}>教會簡史</div>
          </Link>
        </div>}
      </div>
      <div>
        <div className="navModalItem" onClick={()=>setIsActivityDivOpen(!isActivityDivOpen)}>
          教會近況 <i className="fas fa-chevron-down"></i>
        </div>
        {isActivityDivOpen && <div className='navModalDropdown'>
          <Link to='/prayerLetter'>
            <div onClick={()=>closeModal()}>代禱信</div>
          </Link>
          <Link to='album'>
            <div onClick={()=>closeModal()}>活動花絮</div>
          </Link>
        </div>}
      </div>
      <div>
        <div className="navModalItem" onClick={()=>setIsTestimonyDivOpen(!isTestimonyDivOpen)}>
          生命見證 <i className="fas fa-chevron-down"></i>
        </div>
        {isTestimonyDivOpen && <div className='navModalDropdown'>
          <Link to='/baptism'>
            <div onClick={()=>closeModal()}>得救見證</div>
          </Link>
        </div>}
      </div>
    </div>
  )
}

export default NavModal;
