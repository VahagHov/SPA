import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

export const ProductDetails  = () => {
    const {id} = useParams()
    const product = useSelector(state => 
        state.products.items.find(p => p.id === Number(id))
    );
    if (!product) {
        return <div>Product not found!</div>
    };

  return (
   
    <div>
         <div>
          <img src={product.image} alt='#' className='Img_details' />
          </div>
         <div className="product-detail">
            <h4>{product.category}</h4>
            <h2>{`Price: ${product.price} $`} </h2>
            <h3>{`Rate: ${product.rating.rate}`}</h3>
            <Link to="/">Go to Main Page</Link>
        </div>
    </div>
  )
}
