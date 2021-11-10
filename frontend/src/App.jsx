import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Category from './pages/Category'
import HomePage from './pages/HomePage'
import ReviewDetails from './pages/ReviewDetails'

const App = () => {
  return (
     <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<ReviewDetails />} />
          <Route path="/category/:id" element={<Category />} />
        </Routes>
      </div>
     </Router>
  )
}

export default App
