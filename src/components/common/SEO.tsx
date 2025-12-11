import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article' | 'profile';
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    schema?: object | object[];
    noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
    title = 'MDS - Zoho Partner Solutions | Digital Transformation Egypt',
    description = 'Mashreq Digital Solutions (MDS) is a Zoho Certified Partner in Egypt offering custom CRM, ERP, and digital transformation solutions. Located in Smart Village, Giza.',
    keywords = 'Zoho Partner Egypt, Zoho CRM, Zoho ERP, Digital Transformation, Smart Village Giza, Business Automation, Zoho Implementation',
    image = 'https://mds-solutions.com/og-image.png',
    url = 'https://mds-solutions.com',
    type = 'website',
    author,
    publishedTime,
    modifiedTime,
    schema,
    noindex = false
}) => {
    const siteTitle = 'MDS - Mashreq Digital Solutions';
    const fullTitle = title.includes('MDS') ? title : `${title} | ${siteTitle}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            {noindex && <meta name="robots" content="noindex,nofollow" />}

            {/* Canonical URL */}
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:locale:alternate" content="ar_EG" />

            {/* Article specific */}
            {type === 'article' && author && (
                <meta property="article:author" content={author} />
            )}
            {type === 'article' && publishedTime && (
                <meta property="article:published_time" content={publishedTime} />
            )}
            {type === 'article' && modifiedTime && (
                <meta property="article:modified_time" content={modifiedTime} />
            )}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:creator" content="@mds_solutions" />

            {/* Additional SEO */}
            <meta name="author" content={author || 'Mashreq Digital Solutions'} />
            <meta name="publisher" content="Mashreq Digital Solutions" />
            <meta name="language" content="English" />
            <meta name="geo.region" content="EG-C" />
            <meta name="geo.placename" content="Giza, Egypt" />
            <meta name="geo.position" content="30.0715;31.0127" />
            <meta name="ICBM" content="30.0715, 31.0127" />

            {/* Structured Data */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(Array.isArray(schema) ? schema : [schema])}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
