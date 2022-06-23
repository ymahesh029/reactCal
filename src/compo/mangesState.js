import React,{useState} from 'react';

const MangesState = () => {
    const [count,setCount]=useState(0)

    function increments(){
        setCount(prevCount => prevCount +1)

    }
    function dcrements(){
        setCount(prevCount => prevCount  - 1)

    }


    return (
        <>
        <button onClick={dcrements}>-</button>
        {count}
        <button onClick={increments}>+</button>

            
        </>
    );
};

export default MangesState;