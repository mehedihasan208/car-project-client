import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mt-12 mb-4'>
            <Banner></Banner>
            <About></About>
            <Services></Services>    
        </div>
    );
};

export default Home;