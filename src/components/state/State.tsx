import { useState } from 'react'

const State = () => {

    const [data, setData] = useState(['Thing 1', 'Thing 2']);

    const ele = data.map(function(item){
      return (
        <div>
          {item}
        </div>
      )
    })

    function add(){
      setData(item => [...item , `Thing ${data.length +1}`])
    }
  return (
    <div>
        <p>All things here</p>
        {ele}
        <button onClick={add}>Add</button>
    </div>
  )
}

export default State