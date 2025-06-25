
import React from 'react'

export default function Welcomemsg({item}) {
  return (
    <>
       {item.length===0 &&
  <h1 className='welcomemsg'>Enjoy your day</h1>}
    </>
  )
}
