import React from 'react';
import ProductCard from './ProductCard';
import { useAppContext } from '../context/AppContext';

const BestSeller = () => {
    const { products } = useAppContext();

  return (
    <>
        <div className='mt-16'>
            <p className='text-2xl md:text-3xl font-medium'>Best Sellers</p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-6 gap-3 md:gap-6'>
              {
                products.filter( (product)=> product.inStock).slice(0,5).map( (product, index)=> (
                  <ProductCard product={product} key={index} />
                ))
              }
            </div>
        </div>
    </>
  )
}

export default BestSeller;