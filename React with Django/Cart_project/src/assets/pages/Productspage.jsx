import React from 'react'
import Layout from '../utility/Layout'
import Product from '../components/ProductPageCom/Product'
import Products from '../components/ProductPageCom/Products'

const Productspage = () => {
    
  return (
    <div>
        <Layout>
            <h1>Products Page</h1>
            <Products />
        </Layout>
    </div>
  )
}

export default Productspage