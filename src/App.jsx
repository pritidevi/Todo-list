import './App.css'
import Todoheading from './Component/Todoheading'
import Todoadditem from './Component/Todoadditem'
import Todoitem1 from './Component/Todoitem1'

import { useState } from 'react'
import Welcomemsg from './Component/Welcomemsg'


function App() {
  const [item, setitem] = useState([])
  const newitem = (todoname, date,index) => {
   const newitemlsit = [...item, { name: todoname, duedate: date,index:index }]
    setitem(newitemlsit)
  }
 
  const handleondelete=(itemname)=>{
const updatelist=item.filter(items =>items.index!==itemname)
setitem(updatelist)
  }
  return (
    <>
      <Todoheading />
      <Todoadditem newitem={newitem}/>
      <Welcomemsg item={item}/>
      <Todoitem1 additem={item} handleondelete={handleondelete}/>

      

    </>
  )
}

export default App
