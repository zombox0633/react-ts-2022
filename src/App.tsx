import { useState } from 'react'
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
      </div>
    </PersonProvider>
  )
}

export default App
