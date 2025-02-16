import { createContext, FC, ReactNode, useContext, useState } from "react";

// 1.  Theme Context Type
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

// 2.  Context with default value (null on starting..)
const ThemeContext = createContext<ThemeContextType | null>(null);

// 3.  Provider Component
const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 4. Custom Hook for accessing Theme Context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};


export default ThemeProvider;
