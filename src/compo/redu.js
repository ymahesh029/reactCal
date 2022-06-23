import React,{ useReducer} from 'react';

const ACTIONS = {

    INCRENETS:'increments',
    DECRENETS:'dcrements',
}

function reducer(state , action){
    switch(action.type){
        case ACTIONS.INCRENETS: 
        return {count:state.count +1 }
        
        case ACTIONS.DECRENETS: 
        return {count:state.count  -1 }

        default:
            return state
    }

    return {count:state.count +1 }
}
const Redu = () => {
    const [state, dispatch]= useReducer(reducer,{count:0})

    function increments(){
        dispatch({type:ACTIONS.INCRENETS})
    }
    function dcrements(){
        dispatch({type:ACTIONS.DECRENETS})
    }
    return (
             <div>
        <button onClick={dcrements}>-</button>
        <h1>        {state.count}
</h1>
        <button onClick={increments}>+</button>
        </div>
    );
};

export default Redu;