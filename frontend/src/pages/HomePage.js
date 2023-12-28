import React from 'react';
import "./HomePage.css"


function HomePage() {
  return (
    <div>
      This is Home Page
      <div className='flx-center gap10p'>
        <div className='item-container'>
          <div className='img-container'>
            <img class="width100 height-max-100 obj-fit-cover bor-rad-15" src="https://lh3.googleusercontent.com/p/AF1QipNliLMj6OFAC-4mfbhtUBrshwN5HrsFlXKbDrYT=s1360-w1360-h1020" alt="App Academy" />
          </div>
          <div className='mrg-t-20p'>
            Prayer Letters
          </div>
        </div>
        <div className='item-container'>
          <div className='img-container'>
            <img class="width100 height-max-100 obj-fit-cover bor-rad-15" src="https://lh3.googleusercontent.com/p/AF1QipNliLMj6OFAC-4mfbhtUBrshwN5HrsFlXKbDrYT=s1360-w1360-h1020" alt="App Academy" />
          </div>
          <div className='mrg-t-20p'>
            Albums
          </div>
        </div>
        <div className='item-container'>
          <div className='img-container'>
            <img class="width100 height-max-100 obj-fit-cover bor-rad-15" src="https://lh3.googleusercontent.com/p/AF1QipNliLMj6OFAC-4mfbhtUBrshwN5HrsFlXKbDrYT=s1360-w1360-h1020" alt="App Academy" />
          </div>
          <div className='mrg-t-20p'>
            Testimony
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
