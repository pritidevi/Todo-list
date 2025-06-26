import React, { useState } from 'react'

import { MdDelete } from "react-icons/md";
export default function Delete({ name, date,handleondelete,index,}) {
  const[enabled,setenabled]=useState("Done")
  const[strikethrough,setstrikethrough]=useState(false)
const[disabled, setdisabled ]=useState(false)
  const onClickundo=()=>{
  
    if(enabled==="Done"){
      setenabled("Undo")
     
      setstrikethrough(true)
      setdisabled(true)
    }
    else{
      setenabled("Done")
     
      setstrikethrough(false)
      setdisabled(false)
    }
    
  }
  return (
    <>
    
      <div className="container text-center">
        <div className="row align-items-center box" style={{marginTop:"5px"}}>
          <div className={`col  ${strikethrough===true?'strikethrough':''}`}key={name}>
            {name}
          </div>
          <div className={`col ${disabled===true?'disable':''}`} key={index}>
            {date}
          </div>
          
          
          
          <div className="col mix-button">
          <button type='button' className='btn btn-success ' onClick={onClickundo}>{enabled}</button>
            <button type='button' className='btn btn-danger 'style={{marginLeft:"11px"}} onClick={()=>handleondelete(index)}><MdDelete /></button>
          </div>
        </div>
      </div>

    </>
  )
}
