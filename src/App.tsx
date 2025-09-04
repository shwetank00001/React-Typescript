import  { useState } from 'react'

const App = () => {
  const name:string = "shwetank";

  const [count, setCount] = useState(0);

  function addCount(){
    setCount((item) => item+1)
  }

  return (
    <div>
      <p>{name}</p>
      <button onClick={addCount}>Add a count</button>
      <p >{count}</p>
    </div>
  )
}

export default App