import { useState } from 'react'
import Page1 from './components/page1'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Page2 from './components/page2'
import Page3 from "./components/page3"
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Page1/>}/>
        <Route path='/page2' element={<Page2/>}/>
        <Route path="/page3" element={<Page3/>}/>
      </Routes>
    </Router>
  )
}

export default App
