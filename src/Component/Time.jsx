import React from 'react'
import { data } from 'react-router-dom'

export default function Time() {
    let time=new Date();
  return (
    <div>
    <p className='fw-bolder'>
        This is the current time {time.toLocaleDateString()} -{" "} {time.toLocaleTimeString()};
    </p>
    </div>
  )
}
