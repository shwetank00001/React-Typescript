import { useContext } from 'react'
import { themeContext } from './themeContext'

const ThemeButton = () => {
    const {color, setColor} = useContext(themeContext);

    function changeColor(colorParam:string){
        setColor(colorParam);
        console.log(color);
    };


  return (
    <div>
        <button onClick={() => changeColor("purple")} >🟣</button>
        <button onClick={() => changeColor("brown")}>🟤</button>
        <button onClick={() => changeColor("yellow")}>🟡</button>
        <button onClick={() => changeColor("red")}>🔴</button>
        <button onClick={() => changeColor("green")}>🟢</button>
    </div>
  )
}

export default ThemeButton