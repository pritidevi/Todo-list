
import React, { useState } from 'react'
import { MdAddToPhotos } from "react-icons/md";

export default function Todoadditem({ newitem }) {
    const [todo, settodo] = useState('')
    const [index,setindex]=useState(0)
    const onTodoChange = (event) => {
        settodo(   event.target.value)


    }
    const [date, setdate] = useState('')
    const onDateChange = (event) => {
            setdate(   event.target.value)
            setindex(index+1)
           
    }
    const handleonclick = () => {
        newitem(todo, date,index)
        settodo('')
        setdate('')
    }
    return (
        <>
            <div className="container text-center " >
                <div className="row  text-center">
                    <div className="col-2">
                        <input className='todo-item ' type="text" placeholder='Enter your todos'  value={todo} onChange={ onTodoChange} />
                    </div>
                    <div className="col-2  column">
                        <input type="date" value={date} onChange={ onDateChange} />
                    </div>
                    <div className="col-1">

                        <button type="button" className="btn btn-success kg-button " onClick={handleonclick}><MdAddToPhotos /></button>
                    </div>
                </div>

            </div>

        </>
    )
}
