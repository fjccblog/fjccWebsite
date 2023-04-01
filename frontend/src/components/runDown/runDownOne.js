import React from 'react';
import RunDownMenuItem from './runDownMenuItem';
import ChurchInfo from './churchInfo';
import CHNZheYangDeAi from '../../songs/CHNZheYangDeAi';

function RunDownOne() {
  return (
    <div className='flx-col-center mrg-auto width-max-1000p font15'>
      <div className='width100 flx-col-center mrg-b-15p'>
        <div>基督教會信心以勒堂 -- 瑪麗園長者之家</div>
        <div>崇拜程序表</div>
        <div>二零二三年三月二十六日</div>
      </div>
      <div className='width100 mrg15p'>
        <RunDownMenuItem item='一、宣召及禱告' passage='詩篇三十四篇3節' action='眾坐'
          content='你們和我當稱耶和華為大，一同高舉祂的名'/>
        <RunDownMenuItem item='二、唱詩' passage='耶穌奇妙的救恩' action='眾坐'/>
        <RunDownMenuItem item='三、講道' passage='神愛世人' action='蕭淦瑩牧師'
          content='約翰福音三章16節'/>
        <RunDownMenuItem item='四、回應詩歌' passage='這樣的愛' action='眾坐'/>
        <RunDownMenuItem item='五、歡迎和報告' action='眾坐'/>
        <RunDownMenuItem item='六、祝福' action='眾立'/>
        <div className='bg-white pad-l-r-15p'>七、默禱聚會結束、彼此問安</div>
      </div>
      <div className='width100'>
        <p>本月金句：</p>
        <p>約翰福音三章十六節：神愛世人，甚至將祂的獨生子賜給他們，叫一切信祂的，不至滅亡，反得永生。</p>
      </div>
      <ChurchInfo />

      <CHNZheYangDeAi />
    </div>
  )
}

export default RunDownOne
