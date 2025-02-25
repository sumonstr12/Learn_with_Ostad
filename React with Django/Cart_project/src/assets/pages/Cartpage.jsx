import React from 'react'
import Layout from '../utility/Layout'
import CartProducts from '../components/CartProductPage/CartProducts'

const Cartpage = () => {
  return (
    <div>
        <Layout>
            <h1>CartPage</h1>
            <CartProducts />
        </Layout>
    </div>
  )
}

export default Cartpage