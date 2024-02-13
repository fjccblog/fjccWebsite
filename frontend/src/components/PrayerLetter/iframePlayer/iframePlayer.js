import React from 'react';

function IframePlayer ({file}) {
  return (
    <div>
      <div>{file.letterName}</div>
      <iframe src={`https://docs.google.com/viewer?srcid=${file.letterID}&pid=explorer&efh=false&a=v&chrome=false&embedded=true`}
        width="580px" height="780px" title={file.letterName}></iframe>
    </div>
  )

}

export default IframePlayer
