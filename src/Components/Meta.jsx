// components/Meta.js
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { WEBSITE_DESC, WEBSITE_KEYWORDS, WEBSITE_TITLE } from '../Utils/Utils';

const Meta = ({ title, description, keywords }) => {
    const location = useLocation();
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    const canonicalUrl = `${baseUrl}${location.pathname}`;
    const image = `${baseUrl}/logo512.png`;

    var webTitle = title ? title : WEBSITE_TITLE;
    var webDesc = description ? description : WEBSITE_DESC;
    var webKeyword = keywords ? keywords : WEBSITE_KEYWORDS;

    const structuredData = {
        "@context": "http://schema.org",
        "@type": "WebPage",
        "name": { webTitle },
        "description": { webDesc },
        "url": { canonicalUrl },
        "image": { image }
    };

    return (
        <Helmet>
            {console.log(webTitle)}
            <title>{webTitle}</title>
            <meta name="description" content={webDesc} />
            <meta name="keywords" content={webKeyword} />

            <meta property="og:title" content={webTitle} />
            <meta property="og:description" content={webDesc} />
            <meta property="og:image" content={image} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={webTitle} />
            <meta name="twitter:description" content={webDesc} />
            <meta name="twitter:image" content={image} />

            <link rel="canonical" href={canonicalUrl} />

            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
};

// Meta.defaultProps = {
//     title: 'Default Page Title',
//     description: 'Default description for the page.',
//     keywords: 'default, keywords',
// };

export default Meta;
