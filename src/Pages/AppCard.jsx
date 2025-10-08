import React from 'react';
import { MdDownload } from "react-icons/md";

const AppCard = ({ product }) => {
    console.log(product)
    return (
        <div className='bg-white'>
            <div className='flex justify-center items-center m-4 rounded-md bg-gray-300'>
                <img className='p-3 w-[300px] h-[300px] ' src={product.image} alt="" />
            </div>
            <h1 className='p-3'>{product.title}</h1>

            <div className='flex justify-between p-3'>
                <p className='flex items-center justify-center gap-1 bg-[#F1F5E8] w-16 text-green-300'><MdDownload /> {product.downloads}</p>

                {product.ratings.find(r => r.name === "5 star") && (
                    <p className="text-[#FF8811] w-11 text-center bg-[#FFF0E1] text-lg">★ 5</p>
                )}

            </div>
        </div>
    );
};

export default AppCard;