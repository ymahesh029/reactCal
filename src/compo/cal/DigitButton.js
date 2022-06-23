import { ACTIONS } from "../Todo/todo";

import React from 'react';

const DigitButton = ({dispatch,digit}) => {
    
    return (
        <button onClick={()=> {
            console.log("dispatch function from digitButton ",dispatch)

            
            dispatch({type:ACTIONS.ADD_DIGIT,payload:{digit:1}})}}> {digit}
            </button>
    );
};

export default DigitButton;