import React from 'react'
import { ACTIONS } from './todo'

export default function Doto({todo,dispatch}) {
  console.log("todo from doto",todo)
  return (
    <div>
        {/* <span style={{color:todo.complete ? '#AAA':'#000'}}> */}
        <span style={{color: todo.complate ? '#AAA': '#000'}}>
            {todo.name}
            
            </span>
            <button onClick={()=> dispatch({type:ACTIONS.TOGGLE_TODO, payload:{id:todo.id}})}>Toggle</button>
           <button onClick={()=> dispatch({type:ACTIONS.DELETE_TODO, payload:{id:todo.id}})}>Delete</button>

            

    </div>
  )
}
