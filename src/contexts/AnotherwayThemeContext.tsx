import { createContext, useContext, useState } from "react";


const ThemeContext = createContext<{ theme: "light" | "dark"; toggleTheme: () => void } | null>(null);


export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within ThemeContext Provider");
    }
    return context;
};