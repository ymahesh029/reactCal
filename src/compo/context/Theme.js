import React,{useState} from 'react'
import ClassContextCompo from './ClassContextCompo'
import FunctionContextCompo from './FunctionContextCompo'


export const ThemeContext = React.createContext()


function Theme() {
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme(){
    setDarkTheme(preDarkTheme => !preDarkTheme)

  }
  return (
    <>
    <ThemeContext.Provider value={darkTheme}>
    <button onClick={toggleTheme}>Toggle Theme</button>
    {/* <ClassContextCompo></ClassContextCompo> */}
    <FunctionContextCompo></FunctionContextCompo>

    </ThemeContext.Provider>

    </>
  )
}

export default Theme