import { ACTIONS } from "../Todo/todo";

import React from 'react';

const OprationButton = ({dispatch,opration}) => {
    
    return (
        <button onClick={()=> {
            console.log("dispatch function from oprationButton ",dispatch)

            
            dispatch({type:ACTIONS.CHOOSE_OPRATION,payload:{opration}})}}> {opration}
            </button>
    );
};

export default OprationButton;