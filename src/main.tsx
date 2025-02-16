import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App';
// import ThemeProvider from './contexts/ThemeContext';
import Profile from './Profile';
import AuthProvider from './contexts/AuthContext';





createRoot(document.getElementById('root')!).render(
  <StrictMode>

    {/* key Topics
1 createContext -> creates a new Context
2. Provider -> Provides value to Components
3. Consumer -> Consumes context value
4 useContext -> hook to access Context value 
*/}
    {/* <ThemeProvider>
      <App />
    </ThemeProvider> */}

    <AuthProvider>
      <Profile />
    </AuthProvider>

  </StrictMode>,
)
