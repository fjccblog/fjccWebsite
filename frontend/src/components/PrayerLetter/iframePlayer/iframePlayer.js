import React from 'react';
import './iframePlayer.css'

function IframePlayer ({file}) {
  return (
    <div className='letterPlayerContainer'>
      <iframe src={`https://docs.google.com/viewer?srcid=${file}&pid=explorer&efh=false&a=v&chrome=false&embedded=true`}
        width="580px" height="780px" title={file}></iframe>
    </div>
  )

}

export default IframePlayer
