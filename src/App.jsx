import { Routes, Route } from 'react-router-dom'
import './App.scss'
import './scss/index.scss'
import ScrollToTop from "./components/ScrollToTop"
import Landing from './page/Landing'
import Site1 from './page/Site1'
import OutsourceStaffingWebsite from './page/Site1'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/site1" element={<Site1 />} />
        </Routes>
    </>
  )
}

export default App
