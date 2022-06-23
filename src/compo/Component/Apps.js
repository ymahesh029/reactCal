import React,{useContext  }from 'react'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThairdStep from './ThairdStep'
import {Stepper, StepLabel,Step} from '@material-ui/core'
import {MultiStepper} from '../StepContex'
import StepContext from '../StepContex'
import DisplayData from './DisplayData'

function Apps() {
  const {currentStep,finalData} = useContext(MultiStepper)

  function showStep(step){
    switch(step){
    case 1:
    return <FirstStep/>
    case 2:
    return <SecondStep/>
    case 3:
    return <ThairdStep/>
 
    }
  }
  return (
    <div>
<h3 style={{color:'red',textDecorection:'underline'}}>Rect js MultiStepper Form Application</h3>
<div className='center-stepper'>
<Stepper style={{width:'18%'}} activeStep={currentStep -1 }orientetion="horizontal">
<Step>
<StepLabel></StepLabel>
</Step>
<Step>
<StepLabel></StepLabel>
</Step>
<Step>
<StepLabel></StepLabel>
</Step>
</Stepper>
</div>
{showStep(currentStep)}

{/* {finalData.length > 0 ? <DisplayData/> : ''
} */}


{/* <FirstStep></FirstStep>
<SecondStep></SecondStep>
<ThairdStep></ThairdStep> */}


    </div>
  )
}

export default Apps