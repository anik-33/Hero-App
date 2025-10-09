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
           <div className=" flex flex-col sm:flex-row items-center sm:items-start p-4 sm:p-6  ">
  {/* Left app img section */}
  <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 flex justify-center w-full sm:w-auto">
    <div className="w-48 sm:w-[280px] flex items-center justify-center text-blue-700">
      <img src={image} alt={title} className="max-w-full h-auto object-contain" />
    </div>
  </div>

  {/* Right side section */}
  <div className="flex-1 text-center sm:text-left">
    <h2 className="text-lg sm:text-xl font-semibold text-gray-800">{title}</h2>
    <p className="text-sm text-gray-500 mb-3">
      Developed by{" "}
      <span className="text-indigo-600 ml-1 font-medium cursor-pointer hover:underline">
        {companyName}
      </span>
    </p>

    <div className="border-b border-dashed mb-4 sm:mb-5"></div>

    {/* Reviews & Download section */}
    <div className="flex flex-wrap justify-center sm:justify-start gap-6 mb-5">
      <div className="text-center">
        <div className="text-green-500 text-xl">⬇️</div>
        <p className="text-xs text-gray-500">Downloads</p>
        <p className="font-semibold text-base sm:text-lg text-gray-800">{downloads}</p>
      </div>

      <div className="text-center">
        <div className="text-orange-400 text-xl">⭐</div>
        <p className="text-xs text-gray-500">Average Ratings</p>
        <p className="font-semibold text-base sm:text-lg text-gray-800">{ratingAvg}</p>
      </div>

      <div className="text-center">
        <div className="text-purple-500 text-xl">👍</div>
        <p className="text-xs text-gray-500">Total Reviews</p>
        <p className="font-semibold text-base sm:text-lg text-gray-800">{reviews}</p>
      </div>
    </div>

    <button
      onClick={() => appInstall(product)}
      className="bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2 rounded-md shadow w-full sm:w-auto"
    >
      Install Now ({size})
    </button>

    <div className="border-b border-dashed mt-6"></div>
  </div>
</div>



            <Rechart product={product}></Rechart>

            <div className='mb-7'>
                <h1 className='font-bold text-2xl mb-2'>Description</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AppDetail;