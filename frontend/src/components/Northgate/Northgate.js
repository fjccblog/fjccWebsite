import React, {useState, useRef} from 'react';

function Northgate() {
  const formRef = useRef(null)


const scriptUrl = process.env.REACT_APP_ATTENDANCE_SCRIPT_URL;

const handleSubmit = (e) =>{
    e.preventDefault()

    fetch(scriptUrl, {method: 'POST', body: new FormData(formRef.current)})
    .then(res => {
      if (res.okay)
        console.log("SUCCESSFULLY SUBMITTED")
    })
    .catch(err => console.log(err))
}

  return (
    <div className='northgateContainer'>
      <form method="post" ref={formRef} name="google-sheet" onSubmit ={handleSubmit}>
        <div className="form-style">
            <input type=""  name="name" placeholder='Your Name *' />
        </div>
        <div className="form-style">
            <input type="email" name="email" placeholder='Your Email *' />
        </div>
        <div className="form-style">
            <input type="number" name="phone" placeholder='Your Phone *' />
        </div>
        <div className="form-style">
            <input type="submit" name="submit" value="Login" />
        </div>
        </form>

    </div>
  )
}

export default Northgate
