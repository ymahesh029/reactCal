import React,{useReducer, useState} from 'react';
import Doto from './doTO';
import './todo.css'

const initialState="";

 export const ACTIONS = {
    ADD_TODO:'add-todo',
    TOGGLE_TODO:'toggle-todo',
    DELETE_TODO:'delete-todo'
}

function reducer(todos, action){
    switch (action.type){
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name  )]

        case ACTIONS.TOGGLE_TODO:
            return todos.map((todo)=>{
                if(todo.id === action.payload.id){
                    return {...todo,complate:!todo.complate}
                }
                return todo

            })
        case ACTIONS.DELETE_TODO:
                return todos.filter(todo => todo.id !== action.payload.id)
        default :
        return todos
    }
    function newTodo(name){
        return {id:Date.now(), name:name, complate:false}
    }

}
const Todo = () => {
     const [name, setName] = useState(initialState);
     const [todos, dispatch] = useReducer(reducer,[])
     console.log("todos from todo ",todos)


     function handleSubmit(e){
        e.preventDefault();
        dispatch({type:ACTIONS.ADD_TODO, payload:{name:name}})
        setName('')

     }
    return (
        <>
            <div className="calculator">
            <form onSubmit={handleSubmit}>
                <input type="text" className='input' value={name} onChange={e => setName(e.target.value)}/>
            </form>
            <br></br>
            <div className='doto'>
            {todos.map(todo =>{
                     return <Doto key={todo.id} todo={todo} dispatch={dispatch} />
                })}
            </div>
           
            </div>
            
            
           </>
            );
};

export default Todo;