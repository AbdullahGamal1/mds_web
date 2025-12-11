import { Organization, LocalBusiness, WebSite, BreadcrumbList, Service, FAQPage, Article, WithContext } from 'schema-dts';

// MDS Business Information
export const MDS_INFO = {
    name: 'Mashreq Digital Solutions',
    alternateName: 'MDS',
    description: 'Zoho Certified Partner providing custom Zoho solutions, CRM implementation, ERP systems, and digital transformation services in Egypt and the Middle East.',
    url: 'https://mds-solutions.com',
    telephone: '+20-115 965 9977',
    email: 'info@mds-solutions.com',
    address: {
        streetAddress: 'B115 Smart Village',
        addressLocality: 'Giza',
        addressRegion: 'Giza',
        postalCode: '12577',
        addressCountry: 'EG'
    },
    geo: {
        latitude: '30.0715',
        longitude: '31.0127'
    },
    logo: 'https://mds-solutions.com/logo.png',
    image: 'https://mds-solutions.com/og-image.png'
};

/**
 * Organization Schema - Main company information
 */
export const getOrganizationSchema = (): WithContext<Organization> => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: MDS_INFO.name,
    alternateName: MDS_INFO.alternateName,
    url: MDS_INFO.url,
    logo: MDS_INFO.logo,
    description: MDS_INFO.description,
    telephone: MDS_INFO.telephone,
    email: MDS_INFO.email,
    address: {
        '@type': 'PostalAddress',
        streetAddress: MDS_INFO.address.streetAddress,
        addressLocality: MDS_INFO.address.addressLocality,
        addressRegion: MDS_INFO.address.addressRegion,
        postalCode: MDS_INFO.address.postalCode,
        addressCountry: MDS_INFO.address.addressCountry
    },
    sameAs: [
        'https://www.linkedin.com/company/mds-solutions',
        'https://twitter.com/mds_solutions',
        'https://www.facebook.com/mds.solutions'
    ],
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: MDS_INFO.telephone,
        contactType: 'customer service',
        areaServed: ['EG', 'SA', 'AE', 'KW', 'QA'],
        availableLanguage: ['en', 'ar']
    }
});

/**
 * LocalBusiness Schema - For local SEO
 */
export const getLocalBusinessSchema = (): WithContext<LocalBusiness> => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: MDS_INFO.name,
    image: MDS_INFO.image,
    '@id': MDS_INFO.url,
    url: MDS_INFO.url,
    telephone: MDS_INFO.telephone,
    priceRange: '$$',
    address: {
        '@type': 'PostalAddress',
        streetAddress: MDS_INFO.address.streetAddress,
        addressLocality: MDS_INFO.address.addressLocality,
        addressRegion: MDS_INFO.address.addressRegion,
        postalCode: MDS_INFO.address.postalCode,
        addressCountry: MDS_INFO.address.addressCountry
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: MDS_INFO.geo.latitude,
        longitude: MDS_INFO.geo.longitude
    },
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Sunday'],
        opens: '09:00',
        closes: '17:00'
    }
});

/**
 * WebSite Schema - For site search
 */
export const getWebSiteSchema = (): WithContext<WebSite> => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: MDS_INFO.name,
    url: MDS_INFO.url,
    potentialAction: {
        '@type': 'SearchAction',
        target: {
            '@type': 'EntryPoint',
            urlTemplate: `${MDS_INFO.url}/search?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
    }
});

/**
 * BreadcrumbList Schema - For navigation
 */
export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>): WithContext<BreadcrumbList> => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
    }))
});

/**
 * Service Schema - For Zoho services
 */
export const getServiceSchema = (service: {
    name: string;
    description: string;
    url: string;
}): WithContext<Service> => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
        '@type': 'Organization',
        name: MDS_INFO.name,
        url: MDS_INFO.url
    },
    areaServed: {
        '@type': 'Country',
        name: 'Egypt'
    },
    url: service.url
});

/**
 * FAQPage Schema - For FAQ sections
 */
export const getFAQSchema = (faqs: Array<{ question: string; answer: string }>): WithContext<FAQPage> => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
        }
    }))
});

/**
 * Article Schema - For blog posts and case studies
 */
export const getArticleSchema = (article: {
    title: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified?: string;
    author?: string;
}): WithContext<Article> => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
        '@type': 'Organization',
        name: article.author || MDS_INFO.name
    },
    publisher: {
        '@type': 'Organization',
        name: MDS_INFO.name,
        logo: {
            '@type': 'ImageObject',
            url: MDS_INFO.logo
        }
    }
});
