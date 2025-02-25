
import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const HFlayout = ({children}) => {
  return (
    <div>
        <Navbar />
            {children}
        <Footer />
    </div>
  )
}

export default HFlayout