import React from 'react'

import Delete from './Delete'

export default function Todoitem1({additem,handleondelete }) {
  return (
    <>
      <div className="container text-center">

        {additem.map(item => (
          <Delete name={item.name} date={item.duedate} key={item.name} index={item.index} handleondelete={handleondelete}
         />
        ))}
      </div>

    </>
  )
}
//