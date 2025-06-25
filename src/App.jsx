import { Routes, Route } from 'react-router-dom'
import './App.scss'
import './scss/index.scss'
import ScrollToTop from "./components/ScrollToTop"
import Landing from './page/Landing'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
    </>
  )
}

export default App
