
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Import utilities
const { renderSeoHead, renderSchemaOrg } = require('./utils/seo.js');

// Import Views
// Note: Since we are using CommonJS for server, but views might be ES modules if we generated them as such.
// I will implement views as exporting functions using module.exports to be safe with vanilla node without "type": "module" in package.json.
// Or I can use dynamic import(). let's stick to require() for simplicity if I write views as CommonJS.
// User didn't specify module system. I'll use CommonJS for views for easy compatibility.

const homeView = require('./views/home.js');
const aboutView = require('./views/about.js');
const productView = require('./views/product.js');
const contactView = require('./views/contact.js');

const PORT = 3000;

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

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    // Static File Serving
    if (pathname.startsWith('/images/') || pathname.startsWith('/css/') || pathname.endsWith('.js') && !pathname.startsWith('/views')) {
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
    let pageTitle = '';
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
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
