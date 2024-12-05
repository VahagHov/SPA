import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchProducts from '../redux/api';
import { deleteProduct, handleLike } from '../redux/productsSlice';
import { Link } from 'react-router-dom';
import { ProductDetails } from './ProductDetails ';

export const Products = () => {
  const dispatch = useDispatch()
    const product = useSelector(state  => state.products.items)

    useEffect(() => {
      dispatch(fetchProducts());
      }, [dispatch]);
  
  return (
    <div className='products-container'>
        {product.map((product) => {
           return(
            <div key={product.id} className='card'> 

                <div>
                  <Link to={`/products/${product.id}`}><img src={product.image} alt='#' /></Link>
                </div>

                <div className='card-description'>
                  <h4>{product.category}</h4>
                  <h2>{`Price: ${product.price} $`} </h2>
                  <h3>{`Rate: ${product.rating.rate}`}</h3>
                </div>

                <div className='card_like'>
                    <button onClick={() => {dispatch(handleLike(product.id)) }}>  {product.liked ? '❤️' : '❤'}</button>
                    <button onClick={(e) => {dispatch(deleteProduct(product.id))}}>🗑️</button>
                </div>
              </div>
           )
            
        })}
    </div>
  )
}
