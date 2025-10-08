import React from 'react';
import Banner from '../Components/Banner';
import Banner2 from '../Components/Banner2';
import TrendingApps from '../Components/TrendingApps';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Banner2></Banner2> */}
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default Home;