import React from 'react';
import OpenModalButton from '../../context/OpenModalButton';
import OfferingModal from './OfferingModal';
import './Offering.css'


function Offering() {
  return (
    <div className='OfferingPageContainer'>
      <h1 className='flx-center'>奉献</h1>
      <p className='line-height-170'>
        From the very beginning of our ministry, God has used His people . . . individuals just like you . . . to financially support Faith Jireh Christian Church. We can’t do it alone.<br />
        We are trusting God to sustain His work. We are confident that He has great things ahead for those who trust Him. Do you share that trust and confidence along with us?
      </p>

      <p className='line-height-170'>
        Your financial support, love and prayer in God's life changing ministry is very important. As Jesus says, “It is more blessed to give than to receive.”<br />
        With your support, Faith Jireh Christian Church will continue to be a source of trusted spiritual help and encouragement to our community.<br />

        Thank you for responding today . . . right here online, right now.
      </p>

      <p className='line-height-170'>
        Our service is supported entirely by donations.<br />
        You donation, love and prayer in God's life changing ministry is very important. May GOD richly bless you. “It is more blessed to give than to receive.”
      </p>

      <p className='line-height-170'>
        經費全數來自奉獻。<br />
        基督教會信心以勒堂從二零零三年至今, 盡心竭力服事加州屋崙市的基層華人。
        由於教會會友以青少年的新移民為主, 神特別感動以勒堂以外的信徒奉獻支持教會經濟需要。
        我們深信那在人心裏動了善工的, 也必成全這工〔腓一:6〕。神是供應者, 但神透過委身的基督徒看到以勒堂在新移民的青少年福音事工的必需和逼切性，感動人願意犧牲擺上，成全這工。主說：「這些事你們既作在我這弟兄中一個最小的身上，就是作在我身上了。」〔太二十五：40〕你亦願意以奉獻和禱告作在新移民青少年身上嗎？施比受更為有福，願神厚賜予你〔徒二十：35〕！
      </p>

      <div className='OfferingMethods'>
        <div className='flx-center'>
          <p>
            You may donate by sending <br />
            your check made payable to FJCC:<br />
            支票請寄:<br />
            <br />
            Faith Jireh Christian Church<br />
            212 9th Street, Suite 214<br />
            Oakland, CA 94607<br />
            <br />
            Make Check Payable to:<br />
            支票抬頭請寫:<br />
            <br />
            Faith Jireh Christian Church
          </p>
        </div>
        <div>
          <div className='flx-center mrg10p'>
            <img  className='OfferingQRCode' alt="qrcode"
              src='https://lh3.googleusercontent.com/pw/AP1GczOGgsCK1BrZKN84_lsyWHTwwP_8GmtNp_ChsqdhXKamGNq64ZlEPN4nWC9JhSRhiOBe9FwqN_LSNGBU5MhpwxHH7Wg6a8IXrPOxs_yKr3VeOQvDw4E=w1920-h1080' />
          </div>
          <div className='flx-center'>
            <OpenModalButton modalComponent={<OfferingModal />}
              // buttonText='Donate'
              customizeStyle='DonateBtn'
              buttonTag = 'img'
              imgSrc = 'https://www.paypal.com/en_US/i/btn/btn_donateCC_LG.gif'/>
          </div>
        </div>
      </div>
      <div className='flx-center'>
        <img className='OfferingImg' alt='thank you'
          src='https://lh3.googleusercontent.com/pw/AP1GczP4G0geertuTXzNTyK8zwZI6Q97HVFhfWo9EBOlQmIHFNZX2pQucXyava2h7cNOip1IKJZNvUjBbsdIO8V-_4kpSvnd0VODjxiODm58fGSKeMxVAgo=w1920-h1080' />
      </div>
    </div>
  )
}

export default Offering
