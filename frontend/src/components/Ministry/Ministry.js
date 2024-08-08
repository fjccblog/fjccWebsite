import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Ministry.css';

function Ministry() {
  const history = useHistory();

  const childMinistryImg = 'https://live.staticflickr.com/5233/5846997144_16d2cd0771_c.jpg';
  const juniorHighMinistryImg = 'https://lh3.googleusercontent.com/pw/AP1GczPCZmo8BsmVG61EDCTa8rJe1o-dp3vEzGfovTLJ2kwcU05rc__elYi4sowUiLaxYNa2e_DTkTgDkCzBpz8XwxVzNNJzru57NCpb13JjBrJx5z1EwIw=w1920-h1080'
  const campusMinistryImg = 'https://lh3.googleusercontent.com/pw/ABLVV84llKTkTRweF5u4KRWjP0pYPLulTUmYqskokDXf2Y5kAfLuRWDZB533U5vgfdWJ5bTCJnlcwUZWwIJUJ6RhlDggtN06qzN4TexAxpkXuNwg_k9oa8Y=w1920-h1080'
  const sportMinistryImg = 'https://live.staticflickr.com/4134/4754721179_14de6fa6fd_n.jpg'
  const seniorMinistryImg = 'https://lh3.googleusercontent.com/pw/AP1GczNyqC5UHa5JXhBq4O70tiNC4ieINGmsvSI92OaXLrTx-6cNz6xw1wPgzxKyWMk8EEGeoQ5TP3BbmFPKOuHkm5xSYlKHely_f2lo1UlBZzS6sVlT1y4=w1920-h1080'

  function redirectJuniorMinistry () { history.push("/ministry/juniorHigh") }
  function redirectSportMinistry () { history.push("/ministry/sport") }

  return (
    <div className='ministryPageContainer'>
      <div></div>
      <h1 className='txt-center fontFMSong'>外展事工</h1>

      <div className='ministryIntroDiv fontFMSong'>

        <Link to='ministry/children'>
        <div className='childMinistryDiv introDiv'>
          <div className='ministryIntroImgDiv'><img src={ childMinistryImg } alt='child ministry Img'/></div>
          <div className='introDivText'>
            <h3 className='txt-center'>兒童事工</h3>
            <div>讓小孩子到耶穌這裡來，不要禁止他們；因為在神國的，正是這樣的人</div>
          </div>
        </div>
        </Link>

        <div onClick={()=>redirectJuniorMinistry()} className='juniorHighMinistryDiv introDiv'>
          <div className='ministryIntroImgDiv'><img src={ juniorHighMinistryImg } alt='junior high ministry Img'/></div>
          <div className="introDivText">
            <h3 className='txt-center'>初高中生事工</h3>
            <div>幫助年輕人尋見耶穌； 增進信徒與基督的關係，並提供機會讓基督徒能彼此建立真誠、持久的友誼。</div>
          </div>
        </div>

        <Link to='/ministry/campus'>
        <div className='campusMinistryDiv introDiv'>
          <div className='ministryIntroImgDiv'><img src={ campusMinistryImg } alt='campus ministry Img'/></div>
          <div className="introDivText">
            <h3 className='txt-center'>校園事工</h3>
            <div>幫助靈性失喪的大學生尋見耶穌； 增進信徒與基督的關係，並提供機會讓基督徒能彼此建立真誠、持久的友誼</div>
          </div>
        </div>
        </Link>

        <div onClick={()=>redirectSportMinistry()} className='sportMinistryDiv introDiv'>
          <div className='ministryIntroImgDiv'><img src={ sportMinistryImg } alt='sport ministry Img'/></div>
          <div className="introDivText">
            <h3 className='txt-center'>體育事工</h3>
            <div>透過體育比賽分享福音，並提供傳福音及團契交流之渠道。</div>
          </div>
        </div>

        <Link to='/ministry/senior'>
        <div className='seniorMinistryDiv introDiv'>
          <div className='ministryIntroImgDiv'><img src={ seniorMinistryImg } alt='senior ministry Img'/></div>
          <div className="introDivText">
            <h3 className='txt-center'>长者事工</h3>
            <div>帶領年輕人一起服侍長者</div>
          </div>
        </div>
        </Link>

      </div>

    </div>
  )
}

export default Ministry
