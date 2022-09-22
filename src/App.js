import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from './screens/Login'
import Table from './screens/Table'

const App = () => {
  return (
   <Router>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/table" element={<Table />} />
      </Routes>
   </Router>
  )
}

export default App