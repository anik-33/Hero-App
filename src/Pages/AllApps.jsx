import React, { useEffect, useState } from 'react';
import useProducts from '../hooks/useProducts';
import AppCard from './AppCard';
import SkeletonLoader from '../Components/SkeletonLoader';
import AppError from './AppError';

const AllApps = () => {
  const { products, loading } = useProducts()
  const [search, setSearch] = useState('')
   const [searchLoading, setSearchLoading] = useState(false);

  const term = search.trim().toLocaleLowerCase()

  const searchedProducts = term
    ? products.filter(product =>
      product.title.toLocaleLowerCase().includes(term)
    )
    : products

      useEffect(() => {
    if (search) {
      setSearchLoading(true);
      const timeout = setTimeout(() => {
        setSearchLoading(false);
      }, 500); 
      return () => clearTimeout(timeout);
    } else {
      setSearchLoading(false);
    }
  }, [search]);
  return (
    <div className=' max-w-screen-xl mx-auto flex flex-col min-h-screen mb-7'>
      <div className='flex-1'>
        <div className='flex flex-col justify-center items-center text-center mt-10 '>
          <h1 className='font-bold text-4xl'>Our All Applications</h1>
          <p className='mt-7'>Explore All Apps on the Market developed by us. We code for Millions</p>
        </div>
        <div className='flex justify-between mt-8 my-3'>
          <h1 className='font-bold'>({searchedProducts.length})Apps found</h1>
          <label className='input'>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              type='search'
              placeholder='Search Products'
            />
          </label>
        </div>

        {
          loading || searchLoading ? (<SkeletonLoader count={15}></SkeletonLoader>) 
           : searchedProducts.length === 0 ? (<AppError></AppError>):
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
            gap-4'>
              {

                searchedProducts.map(product => (<AppCard product={product}></AppCard>))
              }
            </div>
          
        }





      </div>
    </div>
  );
};

export default AllApps;