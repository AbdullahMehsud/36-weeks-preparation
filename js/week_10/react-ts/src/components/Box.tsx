import { useContext } from "react"
import { ThemeContext } from "../App"


function Box() {
    const {theme, toggleTheme} = useContext(ThemeContext)
    // alert(theme);
    
  return (
    <div className="boxContainer" style={{backgroundColor: theme === 'dark' ? "rgb(40,40,40)" : "white", color: theme === 'dark' ? "white" : "rgb(40,40,40)"}}>
        <h1>Box 1</h1>
        <button onClick={toggleTheme}>Change theme</button>
    </div>
  )
}

export default Box