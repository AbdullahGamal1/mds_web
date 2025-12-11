import React from 'react';
import Hero from '../components/sections/Hero';
import Solutions from '../components/sections/Solutions';
import Process from '../components/sections/Process';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Solutions />
            <Process />
            <Testimonials />
            <CTA />
        </>
    );
};

export default Home;
