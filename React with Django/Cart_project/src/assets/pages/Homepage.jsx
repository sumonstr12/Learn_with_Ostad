import React from 'react'
import Layout from '../utility/Layout'
import Products from '../components/ProductPageCom/Products'
const Homepage = () => {
  return (
    <div>
        <Layout>
            <h1>Home Page</h1>
            <Products />
        </Layout>
    </div>
  )
}

export default Homepage