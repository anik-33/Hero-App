import React from 'react';
import { MdDownload } from "react-icons/md";
import { Link } from 'react-router';

const AppCard = ({ product }) => {
    console.log(product)
    const {id,downloads,title,image,ratings}=product
    return (
        <div className='bg-white'>

            <Link to={`/AppDetails/${id}`}>
                <div className='flex justify-center items-center m-4  '>
                    <img className='p-3 w-[300px] h-[300px] ' src={image} alt="" />
                </div>
                <h1 className='p-3'>{title}</h1>

                <div className='flex justify-between p-3'>
                    <p className='flex items-center justify-center gap-1 bg-[#F1F5E8] w-16 text-green-300'><MdDownload /> {downloads}</p>

                    {ratings.find(r => r.name === "5 star") && (
                        <p className="text-[#FF8811] w-11 text-center bg-[#FFF0E1] text-lg">★ 5</p>
                    )}

                </div>
            </Link>
        </div>
    );
};

export default AppCard;