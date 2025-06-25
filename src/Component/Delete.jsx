import React from 'react'


export default function Delete({ name, date,handleondelete,index}) {
  return (
    <>
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col"key={name}>
            {name}
          </div>
          <div className="col"key={index}>
            {date}
          </div>
          <div className="col">
            <button type='button' className='btn btn-danger my-2' onClick={()=>handleondelete(index)}>Delete</button>
          </div>
        </div>
      </div>

    </>
  )
}
