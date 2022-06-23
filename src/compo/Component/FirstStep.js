import React,{useContext}from 'react'
import  {Button,TextField} from '@material-ui/core'
import { MultiStepper } from '../StepContex'

function FirstStep() {
  const {setStep, userData,setUserData}= useContext(MultiStepper)
  

  return (
    <div>
      <div>
        <TextField label="First name" margin='normal' variant='outlined' value={userData['firstname']} onChange={(e)=>setUserData({...userData, "firstname":e.target.value})}  color='secondary'></TextField>
        </div>

         <div>
        <TextField label="Last  name" margin='normal' variant='outlined' value={userData['lastname']} onChange={(e)=>setUserData({...userData, "lastname":e.target.value})} color='secondary'></TextField>
        </div>

        <div>
        <TextField label="Contact Number" margin='normal' variant='outlined' value={userData['mobilenumber']} onChange={(e)=>setUserData({...userData, "mobilenumber":e.target.value})}  color='secondary'></TextField>
      </div>
        <Button variant="contained" color='primary' onClick={()=>setStep(2)}> Next</Button>
      </div>
  )
}

export default FirstStep