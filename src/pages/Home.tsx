import React from 'react';
import Hero from '../components/sections/Hero';
import Solutions from '../components/sections/Solutions';
import Process from '../components/sections/Process';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';
import SEO from '../components/common/SEO';
import { getOrganizationSchema, getLocalBusinessSchema, getWebSiteSchema } from '../utils/schemas';

const Home: React.FC = () => {
    const schemas = [
        getOrganizationSchema(),
        getLocalBusinessSchema(),
        getWebSiteSchema()
    ];

    return (
        <>
            <SEO
                title="MDS - Zoho Partner Solutions | Digital Transformation Egypt"
                description="Mashreq Digital Solutions is a Zoho Certified Partner in Smart Village, Giza, Egypt. We provide custom Zoho CRM, ERP implementation, and digital transformation solutions for businesses across the Middle East."
                keywords="Zoho Partner Egypt, Zoho CRM Egypt, Zoho ERP, Digital Transformation, Smart Village Giza, Business Automation, Zoho Implementation, CRM Solutions Egypt"
                url="https://mds-solutions.com"
                image="https://mds-solutions.com/og-home.png"
                schema={schemas}
            />
            <Hero />
            <Solutions />
            <Process />
            <Testimonials />
            <CTA />
        </>
    );
};

export default Home;
