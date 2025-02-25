

import React from 'react'
import Mylogo from '../icon/react.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">

                <Link class="navbar-brand" href="#">
                    <img src= {Mylogo} alt="" width="30" height="24" />
                </Link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to="/" >Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/products" >Products</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/cart" >Carts</Link>
                    </li>
                    
                </ul>
                </div>
            </div>
            </nav>
    </div>
  )
}

export default Navbar