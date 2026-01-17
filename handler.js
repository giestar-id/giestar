
const fs = require('fs');
const path = require('path');
const url = require('url');

// Import utilities
const { renderSeoHead, renderSchemaOrg } = require('./utils/seo.js');

// Import Views
const homeView = require('./views/home.js');
const aboutView = require('./views/about.js');
const productView = require('./views/product.js');
const contactView = require('./views/contact.js');

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.ico': 'image/x-icon',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.json': 'application/json'
};

module.exports = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    // Static File Serving (For local node server mainly, Vercel handles this via CDN usually)
    // We keep this here so 'node server.js' still works fully.
    if (pathname.startsWith('/images/') || pathname.startsWith('/css/') || (pathname.endsWith('.js') && !pathname.startsWith('/views'))) {
        let filePath = path.join(__dirname, 'public', pathname);
        // Special case for root-level script.js if it was requested as /script.js
        if (pathname === '/script.js') {
            filePath = path.join(__dirname, 'public', 'script.js');
        }

        const ext = path.extname(filePath);
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('Not found');
                return;
            }
            res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'text/plain' });
            res.end(data);
        });
        return;
    }

    // Routing
    let pageContent = '';
    let seoHead = '';
    let schemaOrg = renderSchemaOrg();

    try {
        if (pathname === '/' || pathname === '/home') {
            seoHead = renderSeoHead('home');
            pageContent = homeView({ seoHead, schemaOrg });
        } else if (pathname === '/about') {
            seoHead = renderSeoHead('about');
            pageContent = aboutView({ seoHead, schemaOrg });
        } else if (pathname === '/product') {
            seoHead = renderSeoHead('product');
            pageContent = productView({ seoHead, schemaOrg });
        } else if (pathname === '/contact') {
            seoHead = renderSeoHead('contact');
            pageContent = contactView({ seoHead, schemaOrg });
        } else {
            // 404
            seoHead = renderSeoHead('home'); // Default
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found</h1><p><a href="/">Go Home</a></p>');
            return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(pageContent);

    } catch (e) {
        console.error(e);
        res.writeHead(500);
        res.end('Internal Server Error');
    }
};
