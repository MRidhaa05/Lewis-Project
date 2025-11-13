import React from 'react'
import { HeroBanner, Footer, Product } from '../components/common';

const Home = () => {
  return (
    <>
        <HeroBanner/> 

      <div className="products-heading">
        <h2>Best Product</h2>
        <p>Check out our best products!</p>
      </div>

        <div className="products-container">
            {['product 1', 'product 2'].map((product, index) => (
            <Product key={index} name={product} />
            ))}
        </div>

        <Footer/>
    </>
  )
}

export default Home;

