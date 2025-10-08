import React from 'react';

const Banner2 = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white py-16 px-6">
        <div className=" text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            Trusted By Millions, Built For You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Total Downloads */}
            <div>
              <p className="text-sm mb-2 opacity-80">Total Downloads</p>
              <h3 className="text-5xl font-bold mb-1">29.6M</h3>
              <p className="text-xs opacity-70">21% More Than Last Month</p>
            </div>

            {/* Total Reviews */}
            <div>
              <p className="text-sm mb-2 opacity-80">Total Reviews</p>
              <h3 className="text-5xl font-bold mb-1">906K</h3>
              <p className="text-xs opacity-70">46% More Than Last Month</p>
            </div>

            {/* Active Apps */}
            <div>
              <p className="text-sm mb-2 opacity-80">Active Apps</p>
              <h3 className="text-5xl font-bold mb-1">132+</h3>
              <p className="text-xs opacity-70">31 More Will Launch</p>
            </div>
          </div>
        </div>
      </section>


      <div className='mt-12 my-5 text-center'>
        <h1 className='font-bold text-5xl my-3'>Trending Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
    </div>
  );
};

export default Banner2;