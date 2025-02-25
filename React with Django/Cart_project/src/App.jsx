

import React from 'react'
import Homepage from './assets/pages/Homepage'
import Productspage from './assets/pages/Productspage'
import Cartpage from './assets/pages/Cartpage'
import { HashRouter, Routes, Route, BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <div>
      {/* BrowswerRouter er poriborte HashRouter use kora jai */}
      {/* same jinish just tkn akta extra # ase routing e */}
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Productspage />} />
          <Route path="/cart" element={<Cartpage />} />
         </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
