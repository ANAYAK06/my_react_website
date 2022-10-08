import React from 'react'
import Browser from './Browser'
import { products } from './data'
import './Products.css'

function Products() {
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
            <Browser key={item.id} img={item.img} link ={item.link} />
          ))
        }
        
      </div>



    </div>
  )
}

export default Products