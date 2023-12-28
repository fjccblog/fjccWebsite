import React from 'react';
import "./HomePage.css"


function HomePage() {
  let sections = ['代禱信','得救見證','活動花絮','靈糧寶庫','聚會時間表','相關網站','文章']



  return (
    <div>
      <div className='landingHeader'></div>
      <div className='flx flx-center flx-wrap gap10p'>
        {sections.map(element => {
          return (
          <div className='item-container'>
            <div className='img-container'>
              <img class="width100 height-max-100 obj-fit-cover bor-rad-15" src="https://lh3.googleusercontent.com/p/AF1QipNliLMj6OFAC-4mfbhtUBrshwN5HrsFlXKbDrYT=s1360-w1360-h1020" alt="App Academy" />
            </div>
            <div className='mrg-t-20p'>
              {element}
            </div>
          </div>)
        })}

      </div>
    </div>
  )
}

export default HomePage
