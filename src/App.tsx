
import { useTheme } from './main'

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
