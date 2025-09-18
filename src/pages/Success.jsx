import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {PropagateLoader} from 'react-spinners'

const Success = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },3000)
  },[])
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      {
        loading ? <PropagateLoader /> : <>
        <h2>Your order placed successfully!</h2>
      <Link to="/">Go back</Link>
        </>
      }
      
    </div>
  )
}

export default Success