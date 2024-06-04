import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  function function1(){
    setCount((count)=>count+1);
    setCount((count)=>count+1);
  }
  return (
    <div>
      <button onClick={function1}> Count is {count} </button> 
    </div>
  )
}

export default App
