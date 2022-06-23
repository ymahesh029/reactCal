import React,{useContext} from 'react'
import  {Button,TextField} from '@material-ui/core'
  import { MultiStepper } from '../StepContex'




function SecondStep() {
  const {setStep, userData,setUserData}= useContext(MultiStepper)

  return (
    <div>
      <div>
        <TextField label="Email" margin='normal' value={userData['email']}onChange={(e)=>setUserData({...userData, "email":e.target.value})} variant='outlined' color='secondary'></TextField>
        </div>

         <div>
        <TextField label=" Country" margin='normal' value={userData['country']} onChange={(e)=>setUserData({...userData, "country":e.target.value})}  variant='outlined' color='secondary'></TextField>
        </div>

        <div>
        <TextField label="District" margin='normal' value={userData['district']} onChange={(e)=>setUserData({...userData, "district":e.target.value})}  variant='outlined' color='secondary'></TextField>
      </div>
        <Button variant="contained" color='secondary' onClick={()=>setStep(1)}> Back</Button>
        <Button variant="contained" color='primary' onClick={()=>setStep(3)}> Next</Button>

      </div>
  )
}

export default SecondStep