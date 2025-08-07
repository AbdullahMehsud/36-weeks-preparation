import {createContext, useState, type ReactNode } from "react";
import Box from "./components/Box";

type ThemeType = "light" | "dark"
interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}


export const ThemeContext = createContext<ThemeContextType>({theme: "light", toggleTheme: () => {}})

const ThemeProvider = ({children}:{children: ReactNode}) => {
  const [theme, setTheme] = useState<ThemeType>("light")

  const toggleTheme = () => {
    setTheme((prev) => prev === "light" ? 'dark' : "light")
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
function App() {
  return (
    <ThemeProvider>
      <div>HELLO</div>
      <Box/>
    </ThemeProvider>
  )
}

export default App