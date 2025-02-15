import { createContext, StrictMode, FC, useState, ReactNode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}





createRoot(document.getElementById('root')!).render(
  <StrictMode>

    {/* key Topics
1 createContext -> creates a new Context
2. Provider -> Provides value to Components
3. Consumer -> Consumes context value
4 useContext -> hook to access Context value 
*/}
    <ThemeProvider>
      <App />
    </ThemeProvider>


  </StrictMode>,
)
