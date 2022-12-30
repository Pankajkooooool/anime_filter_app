import React from 'react'
import "./track.scss"
const track = () => {
  return (
    <div className='trackmain'>
        <h2>Track Your order</h2> 
       <div className="mbod">Enter your order sent on your mail Id</div>
       <div className="cont">
       <div className="mail">
          <input type="text" placeholder="Search for your order " />
          <button className='button' >Submit</button>
        </div>
       </div>
        </div>
  )
}

export default track