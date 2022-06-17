import logo from './logo.svg';

import { useReducer } from 'react';
import './App.css';
import './styles.css'


const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CLEAR:'clear',
  CHOOSE_OPRATION:'chose_opration',
  DELETE_DIGIT:'delete_digit',
  EVALUATE:'evalueate'


}
function reduser (state, {type,paylod}){
  switch (type){
    case ACTIONS.ADD_DIGIT:
      return null
  }
  

}
function App() {

  const   [{currentOprent, previouseOprent, opration},dispatch]= useReducer(reduser,{})
  // alert(currentOprent)
  dispatch({type:ACTIONS.ADD_DIGIT,paylod:{digit:1}})
  return (
    <div className="calculator-grid">

      <div className="output">

        <div className="previous-operand">{previouseOprent} {opration}</div>
        <div className="current-operand">{currentOprent}</div>
        
      </div>

<button  className="span-two">AC</button>
<button >DEL</button>
<button >/</button>

<button >1</button>
<button >2</button>
<button >3</button>
<button >*</button>
<button >4</button>
<button >5</button>
<button >6</button>
<button >+</button>
<button >7</button>
<button >8</button>
<button >9</button>

<button >-</button>
<button >.</button>
<button >0</button>

<button className="span-two">=</button>



    </div>
  );
}

export default App;
