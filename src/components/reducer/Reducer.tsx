import { useReducer, useState } from 'react'

const Reducer = () => {
    function reducer(state:any, action: any){
        if(action.type === "ADD"){
            const newValue = [...state.protein, action.payload]
            return {
                protein : newValue
            }
        }
        if(action.type === "DEL"){
            const newValue = state.protein.filter(function(item:any){
                return item.id !== action.payload
            })
            return {
                protein: newValue
            }
        }
    }

    const defaultState = {
        protein: []
    }

    const [state, dispatch] = useReducer(reducer, defaultState);
    const [proteinInput, setInput] = useState('');

    const addProtein = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(proteinInput)
    }

    function plusProtein(){
        const newProteinData = {
            id: new Date().getTime(),
            proteinItem: proteinInput
        }
        dispatch({type: "ADD", payload: newProteinData})
    }

    const removeItem =(idParam:number) =>{
        dispatch({type:"DEL", payload: idParam})
    } 

    const ele = state?.protein.map((item:any) => {
        console.log(typeof item)
        return (
            <div key={item.id}>
                <h3>{item.proteinItem}</h3>
                <button onClick={() => {removeItem(item.id)}}>Delete</button>
            </div>
        )
    })

  return (
    <div>
        <form onSubmit={addProtein}>
            <textarea typeof="text" value={proteinInput} onChange={(e) => setInput(e.target.value)}/>
        </form>

        <button onClick={plusProtein}>+</button>
        <>
            {ele}
        </>
    </div>
  )
}

export default Reducer