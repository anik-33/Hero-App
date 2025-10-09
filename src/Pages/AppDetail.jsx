import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../hooks/useProducts';
import Rechart from '../Components/Rechart';
import { appInstall } from '../utils/localStorage';
import SkeletonLoader from '../Components/SkeletonLoader';


const AppDetail = () => {

    const { id } = useParams()
    const { products, loading } = useProducts()

    const product = products.find(p => p.id === Number(id))

    if (loading) return <SkeletonLoader></SkeletonLoader>

    const { image, title, companyName, size, description, 
        reviews, ratingAvg, downloads, ratings } = product || {}



    return (
        <div className='max-w-screen-xl mx-auto '>
            <div className="   border border-dashed border-gray-300  flex items-center p-6 w-full">
            {/* Left app img section */}
            <div className="flex-shrink-0 mr-6">
                <div className="w-32 h-32 flex items-center justify-center text-blue-700">
                    <img src={image} alt="" />
                </div>
            </div>

            {/* Right side section */}
            <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800">
                    {title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                    Developed by
                    <span className="text-indigo-600 font-medium cursor-pointer">
                        {companyName}
                    </span>
                </p>
                <div className='border-b border-dashed mt-5 mb-5'>

                </div>
                {/* reviews and download section */}
                <div className="flex items-center gap-8 mb-5">
                    <div className="text-center">
                        <div className="text-green-500 text-xl">⬇️</div>
                        <p className="text-xs text-gray-500">Downloads</p>
                        <p className="font-semibold text-lg text-gray-800">{downloads}</p>
                    </div>

                    <div className="text-center">
                        <div className="text-orange-400 text-xl">⭐</div>
                        <p className="text-xs text-gray-500">Average Ratings</p>
                        <p className="font-semibold text-lg text-gray-800">{ratingAvg}</p>
                    </div>

                    <div className="text-center">
                        <div className="text-purple-500 text-xl">👍</div>
                        <p className="text-xs text-gray-500">Total Reviews</p>
                        <p className="font-semibold text-lg text-gray-800">{reviews}</p>
                    </div>
                </div>

                
                <button  onClick={() => appInstall(product)} className="bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2 rounded-md shadow">
                    Install Now ({size})
                </button>
                <div className='border-b border-dashed mt-7'></div>
            </div>
           
        </div>


            <Rechart product={product}></Rechart>

            <div>
                <h1 className='font-bold text-2xl'>Description</h1>
                <p>{ description}</p>
            </div>
        </div>
    );
};

export default AppDetail;