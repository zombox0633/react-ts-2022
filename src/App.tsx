import React, { useState,useCallback, useRef } from 'react'
import reactLogo from './assets/react.svg'
import PersonProvider from './context/PersonProvider'
import Header from './components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)
  // const [first, setfirst] = useState<Person[]>([
  //   {
  //     name:'a',
  //     age:30
  //   },
  //   {
  //     name:'b',
  //     age:20
  //   }
  // ])

  const [height, setHeight] = useState<number>(0)
  const [weight, setWeight] = useState<number>(0)

  const handleSetWeight = (e:React.ChangeEvent<HTMLInputElement>) => {
    setWeight(+e.target.value)
  }
  const handleSetHeight = (e:React.ChangeEvent<HTMLInputElement>) => {
    setHeight(+e.target.value)
  }

  const handleCalculateBMI = () =>{
    const result = weight/((height/100)*2)
    console.log(result);
    
  }

  const handleCalculateBMIWithUseCallBack = useCallback(() => {
    const result = weight/((height/100)^2)
    console.log('useCallback',result);
    },
    [height,weight],
  )
  

  return (
    <PersonProvider>
      <div>
      <Header message={"Hello"}/>
      <div>
        {count}
        <button onClick={()=>setCount((p)=>p+1)}>
          add
        </button>
      </div>
      <div>
        <pre>
          <code>
            {/* {JSON.stringify(first,null,2)} */}
          </code>
        </pre>
      </div>
        <form 
          onSubmit={(e)=>{
          e.preventDefault()
          handleCalculateBMI()
          handleCalculateBMIWithUseCallBack()
        }}>
          <input 
          type="text" 
          value={weight}
          onChange={handleSetWeight}
          />
          <input 
          type="text" 
          value={height}
          onChange={handleSetHeight}
          />
          <button type='submit'>add</button>
        </form>
      </div>
    </PersonProvider>
  )
}

export default App
