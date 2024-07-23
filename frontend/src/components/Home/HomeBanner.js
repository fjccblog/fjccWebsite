import React from "react";
import './HomeBanner.css';

function HomeBanner () {
  return (
  <div className="bannerContainer bannerBgImg">
    <div className="textWorship fontFMKaiTi">
      <div>齊來崇拜</div>
      <div>主日崇拜 @ 11:00 AM</div>
    </div>
    <div className="BannerBibleVerse fontFMKaiTi">
      <div>「那用心靈按真理敬拜父的，才是真正敬拜的人；因為父在尋找這樣敬拜祂的人。」</div>
      <div className="lineBreak "></div>
      <div>約翰福音 4:23 新譯本</div>
      <div></div>
    </div>
  </div>
  )
}

export default HomeBanner;
