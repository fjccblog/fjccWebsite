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
  }, [])

  return (
    <div className='navModalContainer'>
      <button onClick={()=>closeModal()}>close modal</button>
      <div>
        <div className="navItem" onClick={()=>setIsMinistryDivOpen(!isMinistryDivOpen)}>
          外展事工 <i className="fas fa-chevron-down"></i>
        </div>
        {isMinistryDivOpen &&  <div className=''>
          <Link to='/childMinistry'>
            <div >兒童事工</div>
          </Link>
          <Link to='juniorHighMinistry'>
            <div >初、高中生事工</div>
          </Link>
          <Link to='collegeMinistry'>
            <div >大學事工</div>
          </Link>
          <Link to='sportMinistry'>
            <div >體育事工</div>
          </Link>
          <Link to='seniorMinistry'>
            <div >長者事工</div>
          </Link>
        </div>}
      </div>
      <div>
        <div className="navItem" onClick={()=>setIsAboutDivOpen(!isAboutDivOpen)}>
          關於教會 <i className="fas fa-chevron-down"></i>
        </div>
        {isAboutDivOpen && <div className=''>
          <Link to='/faithStatement'>
            <div>信仰立場</div>
          </Link>
          <Link to='purpose'>
            <div>宗旨 / 使命</div>
          </Link>
          <Link to='churchHistory'>
            <div>教會簡史</div>
          </Link>
        </div>}
      </div>
      <div>
        <div className="navItem" onClick={()=>setIsActivityDivOpen(!isActivityDivOpen)}>
          教會近況 <i className="fas fa-chevron-down"></i>
        </div>
        {isActivityDivOpen && <div className=''>
          <Link to='/prayerLetter'>
            <div href="#welcome">代禱信</div>
          </Link>
          <Link to='album'>
            <div href="#meetOurTeam">活動花絮</div>
          </Link>
        </div>}
      </div>
      <div>
        <div className="navItem" onClick={()=>setIsTestimonyDivOpen(!isTestimonyDivOpen)}>
          生命見證 <i className="fas fa-chevron-down"></i>
        </div>
        {isTestimonyDivOpen && <div className=''>
          <Link to='/baptism'>
            <div href="#welcome">得救見證</div>
          </Link>
        </div>}
      </div>
    </div>
  )
}

export default NavModal;
