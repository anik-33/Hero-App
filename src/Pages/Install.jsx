import React, { useState } from 'react';
import { MdDownload } from "react-icons/md";
import swal from 'sweetalert';
import { loadToInstall, removeFromlistinstal, } from '../utils/localStorage';


const Install = () => {
    const [install, setInstall] = useState(() => loadToInstall())
    const [sortOrder, setSortOrder] = useState('none')

    // if (!install.length) return <p>No Data Available</p>
    // nooh this makes design bad

    const sortedItem = (() => {
        if (sortOrder === 'reviews-asc') {
            return [...install].sort((a, b) => a.reviews - b.reviews)
        } else if (sortOrder === 'reviews-desc') {
            return [...install].sort((a, b) => b.reviews - a.reviews)
        } else {
            return install
        }
    })()



    const handleRemove = id => {
        // remove from localstorage
        removeFromlistinstal(id)
        // for ui instant update
        setInstall(prev => prev.filter(p => p.id !== id))
       swal("Uninstalled!", "You uninstalled the app!", "success");

    }


    return (
        <div className=' max-w-screen-xl mx-auto  min-h-screen mt-10 mb-10'>
            
            <div className='text-center mb-5'>
                <h1 className='font-bold text-4xl mb-3'>Your Installed Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between py-5 items-center'>
                <h1 className='text-2xl font-semibold'>
                   ({sortedItem.length}) Apps Found.
                </h1>

                <label className='form-control w-full max-w-xs'>
                    <select
                        className='select select-bordered'
                        value={sortOrder}
                        onChange={e => setSortOrder(e.target.value)}
                    >
                        <option value='none'>Sort by reviews</option>
                        <option value='reviews-asc'>Low-&gt;High</option>
                        <option value='reviews-desc'>High-&gt;Low</option>
                    </select>
                </label>
            </div>
            <div className='space-y-3'>
                {sortedItem.map(p => (
                    <div className="flex items-center justify-between bg-white border border-gray-200 p-3 ">

                        <div className="flex items-center gap-3">
                            <img
                                className='w-40 h-28 object-cover'
                                src={p.image}
                                alt={p.name}
                            />



                            <div>
                                <h2 className="mb-2 font-medium text-gray-900">{p.title}</h2>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <span className="flex items-center gap-1 text-emerald-500">
                                        
                                        <MdDownload /> {p.downloads}
                                    </span>
                                    <span className="flex items-center gap-1 text-orange-400">
                                        ★ 5
                                    </span>
                                    <span>{p.size}</span>
                                </div>
                            </div>
                        </div>

                        {/* uninstall btn */}
                        <button onClick={() => handleRemove(p.id)} className="bg-emerald-400 hover:bg-emerald-500 text-white text-sm px-4 py-1.5 rounded-md font-medium">
                            Uninstall
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Install;