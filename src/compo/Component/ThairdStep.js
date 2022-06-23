import React,{useContext}from 'react'
import  {Button,TextField} from '@material-ui/core'
import { MultiStepper } from '../StepContex'


function ThairdStep() {
  const {setStep, userData,setUserData,submitData}= useContext(MultiStepper)

  return (
    <div>
      <div>
        <TextField label="City" margin='normal' value={userData['city']} onChange={(e)=>setUserData({...userData, "city":e.target.value})}  variant='outlined' color='secondary'></TextField>
        </div>

         <div>
        <TextField label="Landmark" margin='normal'value={userData['landmark']} onChange={(e)=>setUserData({...userData, "landmark":e.target.value})}  variant='outlined' color='secondary'></TextField>
        </div>

        <div>
        <TextField label="Postal" margin='normal' value={userData['postal']} onChange={(e)=>setUserData({...userData, "postal":e.target.value})}  variant='outlined' color='secondary'></TextField>
      </div>
      <Button variant="contained" color='secondary' onClick={()=>setStep(2)}> Back</Button>

        <Button variant="contained" color='primary' onClick={submitData}> Submit</Button>
      </div>
  )
}

export default ThairdStep