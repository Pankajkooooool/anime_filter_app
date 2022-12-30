import React from 'react'
import "./Success.scss"
import { Link } from 'react-router-dom'
const Success = () => {
  return (
    <div className='success'>
        Your Order has successfully been placed
        <div className="info">
            Please check your email to Track your order
            Continue Shopping <Link to="/trackorder">Here.</Link> 
        </div>
        
    </div>
  )
}

export default Success