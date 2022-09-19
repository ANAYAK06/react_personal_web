import React from 'react'
import {products} from '../../data'
import Product from '../Product/Product'
import './ProductList.css'

function ProductList() {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className="pl-titile">Create & Inspair</h1>
        <p className="pl-desc">
        Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated.
        </p>
      </div>
      <div className="pl-list">
        {
          products.map((item) =>(
            <Product key={item.id} img={item.img} link ={item.link} />
          ))
        }
        
      </div>

    </div>
  )
}

export default ProductList