import { useReducer, useState } from 'react'

const Reducer = () => {

    function reducer(state, action){
    }

    const defaultState = {
        protein: 0
    }

    const [state, dispatch] = useReducer(Reducer, defaultState);
    const [proteinInput, setInput] = useState('');

    const addProtein = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(proteinInput)
    }

    function plusProtein(){
        dispatch({type: "ADD"})
    }

  return (
    <div>
        <form onSubmit={addProtein}>
            <textarea typeof="text" value={proteinInput} onChange={(e) => setInput(e.target.value)}/>
            <button type='submit'>Add Protein</button>
        </form>
        {state.protein}
        <button onClick={plusProtein}>+</button>
    </div>
  )
}

export default Reducer