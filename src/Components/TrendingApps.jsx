import React from 'react';
import useProducts from '../hooks/useProducts';
import AppCard from '../Pages/AppCard';
import { Link } from 'react-router'
import SkeletonLoader from './SkeletonLoader';

const TrendingApps = () => {

const { products, loading } = useProducts()
 const featuredProducts = products.slice(0, 8)



    return (
       <div className=''>
        {
          loading?(<SkeletonLoader count={15}></SkeletonLoader>):
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4
        max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12'>
            {
                featuredProducts.map(product=> ( <AppCard product={product}></AppCard>))
            }
        </div>
        }
        <div>
          <Link to={`/allapps`}>
           <button className='w-[150px] btn text-white max-w-screen-xl mx-auto my-5 flex justify-center
            items-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Show All</button>
          </Link>
          
        </div>
       </div>

    );
};

export default TrendingApps;