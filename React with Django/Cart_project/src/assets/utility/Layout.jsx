import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

// (props) just amn nile tkn {props.children} use kora lagto
const Layout = ({children}) => { // children is a special prop that gets passed to components automatically
  return (  // Layout is a wrapper component that will be used to wrap around all the pages
    <>
        <Navbar />

        {/* AMN SITUATION E AMN VABE LAYOUT BANALE EASILY KAJ KOMAI NEOUA JAI */}
        {/* ...Contents... */}
        {children}

        <Footer />
    </>
  )
}

export default Layout