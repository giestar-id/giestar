
const siteUrl = 'https://giestar.yzz.me';
const siteName = 'Giestar';

const seoData = {
    home: {
        title: ' Giestar | Jasa Pembuatan Website Murah dan Berkualitas',
        description: 'Jasa pembuatan website murah dan berkualitas untuk UMKM & bisnis lokal. Website modern, cepat, dan SEO-friendly. Konsultasi gratis.',
        canonical: 'https://giestar.yzz.me/',
        og_type: 'website'
    },
    about: {
        title: 'Tentang Giestar | Jasa Pembuatan Website Murah untuk UMKM',
        description: 'Jasa membuat website murah dan profesional yang membantu UMKM dan bisnis lokal tampil kredibel dan berkembang secara online.',
        canonical: 'https://giestar.yzz.me/?page=about', // Can update to clean URL later if needed
        og_type: 'website'
    },
    product: {
        title: 'Layanan & Portofolio | Jasa Pembuatan Website Murah Giestar',
        description: 'Jelajahi layanan dan portofolio Giestar sebagai jasa pembuatan website murah dan berkualitas, mulai dari landing page, company profile, hingga website custom.',
        canonical: 'https://giestar.yzz.me/?page=product',
        og_type: 'website'
    },
    contact: {
        title: 'Kontak Giestar | Konsultasi Gratis Jasa Pembuatan Website',
        description: 'Hubungi Giestar untuk konsultasi gratis jasa pembuatan website murah dan berkualitas. Respon cepat via WhatsApp untuk kebutuhan bisnis Anda.',
        canonical: 'https://giestar.yzz.me/?page=contact',
        og_type: 'website'
    }
};

function getSeoMeta(page = 'home') {
    return seoData[page] || seoData['home'];
}

export function renderSeoHead(page = 'home') {
    const meta = getSeoMeta(page);
    const logoUrl = `${siteUrl}/images/logo.png`;

    return `
    <!-- SEO Meta -->
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${meta.canonical}">

    <!-- Open Graph -->
    <meta property="og:type" content="${meta.og_type}">
    <meta property="og:url" content="${meta.canonical}">
    <meta property="og:title" content="${meta.title}">
    <meta property="og:description" content="${meta.description}">
    <meta property="og:image" content="${logoUrl}">
    <meta property="og:site_name" content="${siteName}">
    <meta property="og:locale" content="id_ID">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${meta.title}">
    <meta name="twitter:description" content="${meta.description}">
    <meta name="twitter:image" content="${logoUrl}">
    `;
}

export function renderSchemaOrg() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#localbusiness`,
        'name': 'Giestar',
        'url': siteUrl,
        'logo': `${siteUrl}/images/logo.jpeg`,
        'description': 'Jasa pembuatan website profesional pemalang, responsif, dan SEO-friendly untuk UMKM di Indonesia.',
        'telephone': '6285150727624',
        'priceRange': 'Rp 150.000 - Rp 450.000',
        'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Pemalang',
            'addressRegion': 'Jawa Tengah',
            'addressCountry': 'ID'
        },
        'sameAs': [
            'https://wa.me/6285150727624',
            'https://www.instagram.com/giestar_id?igsh=MXNjNWN5dnFiMWlwdg==',
            'https://www.facebook.com/Giestar.id?mibextid=ZbWKwL'
        ]
    };

    return `<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>`;
}

