import './cal.css'

import React, {useReducer} from 'react'
import DigitButton from './DigitButton'
import OprationButton from './OpretionButton'

const ACTIONS = {
  ADD_DIGIT:'add_digit',
  CHOOSE_OPRATION:"choose_oprstion",
  CLEAR:'clear',
  DLETE_DIGIT:'delete_digit',
  EVALUATE:'evaluate'


}


  function reducer(state,{type,payload}){
    console.log("reducer function")
    switch (type) {
      case ACTIONS.ADD_DIGIT:
        if(state.overwrite){
          return {
            ...state,
            currentOprent :payload.digit,
            overwrite:false
          }
        }

        if(payload.digit ==="0"&& state.currentOprent=== "0") return state
        if(payload.digit ==="."&& state.currentOprent.includes('0')) return state

        return {
          ...state,currentOprent:`${state.currentOprent ||''} ${payload.digit}`
        }
        
        break;
      case ACTIONS.CHOOSE_OPRATION:
        if(state.currentOprent ==null && state.previouseOprent ==null)
        return state
        if (state.currentOprent == null){
          return {
            ...state, opration : payload.opration
          }
        if(state.previouseOprent == null){
          return {
            ...state,
            opration:payload.opration,
            previouseOprent:state.currentOprent,
            currentOprent:null
          }
       
        }
        }
      case ACTIONS.CLEAR:
        return {}
      case ACTIONS.DLETE_DIGIT:
        if(state.overwrite){
          return {
            ...state,
            overwrite:false,
            currentOprent:null
          }
        }
        if(state.currentOprent == null )return state
        if(state.currentOprent.length === 1 ) return {
          ...state, currentOprent:null
        }
        return{
          ...state, 
          currentOprent:state.currentOprent.slice(0,-1)
        }

      case ACTIONS.EVALUATE:
        if(state.opration == null || state.currentOprent== null ||
          state.previouseOprent == null){
            return state
          }
          return {
            ...state, 
            previouseOprent:null,
            opration:null,
            currentOprent:evaluate(state)
          }

          
      default:
        return {
          ...state,
          overwrite:true,
          previouseOprent:evaluate(state),
          opration:payload.opration,  
          currentOprent:null
        }
    }

  }
  function evaluate({ currentOprent,previouseOprent,opration}){
    const pre = parseFloat(previouseOprent)
    const curent = parseFloat(currentOprent)

    if(isNaN(pre)|| isNaN(curent)) return ""
let computation = " "
switch(opration){
  case "+":
    computation = pre + curent
    break
  case "-":
      computation = pre - curent
      break
  case "/ ":
      computation = pre / curent
      break
 case "*":
    computation = pre * curent
    break
}

return computation.toString() 
  }


function Cal() {
  console.log("Cal main  function")

  const [{ currentOprent,previouseOprent,opration}, dispatch] = useReducer(reducer,{})
  
  console.log("state",previouseOprent,opration)

  // dispatch({type:ACTIONS.ADD_DIGIT,payload:{digit:1}})
  
  return (
    <div className="calculator-grid">


     

      <div className="output">

        <div className="previous-operand">{previouseOprent}{opration} </div>
        <div className="current-operand">{currentOprent}</div>
        
      </div>

<button  className="span-two" onClick={()=> dispatch({type:ACTIONS.CLEAR})}>AC</button>
<button   onClick={()=> dispatch({type:ACTIONS.DLETE_DIGIT})}>DEL</button>
<OprationButton opration='*' dispatch={dispatch} />
<DigitButton digit='1' dispatch={dispatch} />
<DigitButton digit='2' dispatch={dispatch} />
<DigitButton digit='3' dispatch={dispatch} />

<OprationButton opration='*' dispatch={dispatch} />

<DigitButton digit='4' dispatch={dispatch} />
<DigitButton digit='5' dispatch={dispatch} />
<DigitButton digit='6' dispatch={dispatch} />
<OprationButton opration='+' dispatch={dispatch} />
<DigitButton digit='7' dispatch={dispatch} />
<DigitButton digit='8' dispatch={dispatch} />
<DigitButton digit='9' dispatch={dispatch} />

<OprationButton opration='-' dispatch={dispatch} />
<OprationButton opration='.' dispatch={dispatch} />
<button >0</button>

<button  className="span-two" onClick={()=> dispatch({type:ACTIONS.EVALUATE})}>=</button>



    </div>
  );
}

export default Cal;
