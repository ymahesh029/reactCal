import React,{useState} from 'react'
import Apps from './Component/Apps'

export const MultiStepper = React.createContext()

 const StepContext=()=> {


    const [currentStep, setStep] = useState(1)
    const [userData, setUserData] = useState([])
    const [finaldata, setFinalData] = useState([])

  function submitData(){
    setFinalData(finaldata =>[...finaldata,userData])
    setUserData('')
    setStep(1)

  }


  return (
    <MultiStepper.Provider value={{currentStep,setStep,userData,setUserData,finaldata,setFinalData,submitData}}>
<Apps></Apps>
    </MultiStepper.Provider>
  )
}

export default StepContext