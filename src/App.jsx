import { useState } from 'react'
import './App.css'


function App() {
  const [counter, setCounter] = useState(0)
  
  const handleClick1 = () =>{
    setCounter(counter + 1);
  }

  const handleClick2 = () =>{
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <div>
            <h1>Counter app</h1>
            <div>{counter}</div>
            <div>
            <button onClick={handleClick1}>Increament</button>
            <button onClick={handleClick2}>Decreament</button>
            </div>
      </div>
    </>
  )
}

export default App
