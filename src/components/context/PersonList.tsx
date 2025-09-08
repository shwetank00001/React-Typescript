import { useState, type BaseSyntheticEvent } from 'react'
import {personList} from './fakeData';
import { useNavigate } from 'react-router';

const PersonList = () => {

    const [userInput, setInput] = useState('')

    const [peopleData, setPeopleData] = useState(personList);
    const nav = useNavigate();

    const ele = peopleData.map(function(item:string){
        return (
            <div>
                <h3>{item}</h3>
            </div>
        )
    });

    function goToHome(e:BaseSyntheticEvent){
        e.preventDefault();
        nav('/')
    }

    function handleSubmit(e:BaseSyntheticEvent){
        e.preventDefault();
        setPeopleData(function(item:string){
            return [...item, userInput]
        })
    }
  return (
    <div>
        <button onClick={goToHome}>Home</button>
        <h1>Here is the list of every person</h1>
        <div>
            {ele}
        </div>
        <form onSubmit={handleSubmit}>
            <input  placeholder='add' value={userInput} onChange={(e)=> setInput(e.target.value)} />
            <button type='submit'>Add</button>
        </form>

    </div>
  )
}

export default PersonList