import './App.css'
import Navbar from './pages/navbar'
import Footer from './pages/fotor'
import RouterPage from './pages/Router'
import { createContext, useState } from 'react'
export const AuthContext = createContext();

function App() {
  const [loginc, setLoginc] = useState(false);

  
  return (
    <AuthContext.Provider value={{ setLoginc,loginc }}>
      <Navbar />
      <RouterPage />
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
