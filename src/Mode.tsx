import { useTheme } from "./contexts/ThemeContext";



export default function App() {

    const { theme, toggleTheme } = useTheme();
    return (
        <div>

            <button onClick={toggleTheme}>
                Current Theme is <strong>{theme}</strong>
            </button>
        </div>
    )
}
