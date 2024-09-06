import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Links from "./components/Links"
import Navbar from "./components/navbar/Navbar"
import RoutesPage from "./components/routes/Routes"

function App() {
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-slate-100 dark:bg-sky-950 text-sky-950 dark:text-sky-50 flex flex-col min-h-screen">
        <Navbar setSearch={setSearch} setDarkMode={setDarkMode} darkMode={darkMode}/>
        <Links/>
        <main className="flex-grow">
          <RoutesPage search={search}/>
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default App
