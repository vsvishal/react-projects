import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  const addValue = () => {
    // counter += 1;
    // setCounter(counter + 1);
    setCounter((prevCounter) => prevCounter + 1);    
    console.log(`counter: ${counter} `);
  }


  const removeValue = () => {
    // setCounter (counter - 1);
    setCounter(prevCounter => prevCounter - 1)
  }


  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value </button>
    </>
  )
  }

export default App
