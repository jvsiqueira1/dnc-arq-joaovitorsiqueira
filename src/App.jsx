import {  BrowserRouter as Router, Route, Routes, Link  } from 'react-router-dom'
import { useContext } from 'react'

// PAGES
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'

// UTILS
import ScollToTop from './utils/ScollTop'
import { AppContext } from './contexts/AppContext'

export default function App() {
  const appContext = useContext(AppContext)

  if(appContext.loading) {
    return <LoadingSpinner />
  }

  return (
    <Router>
      <ScollToTop />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
        </Routes>
    </Router>
  )
}