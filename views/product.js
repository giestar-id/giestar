
const navbar = require('./components/navbar.js');
const footer = require('./components/footer.js');

module.exports = ({ seoHead, schemaOrg }) => {
    return `
<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO Meta Tags -->
    ${seoHead}
    
    
    <!-- Favicon -->
    <link rel="icon" href="images/favicon.ico">
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png">
    <link rel="apple-touch-icon" href="images/apple-touch-icon.png">
    <link rel="manifest" href="images/site.webmanifest">
    
    <!-- Stylesheets -->
    <link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <style>
        body { font-family: 'Inter', sans-serif; }
        .card-hover { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .card-hover:hover { transform: translateY(-12px) scale(1.02); }
        .portfolio-card { position: relative; overflow: hidden; border-radius: 1.5rem; }
        .portfolio-card img { transition: all 0.5s ease; }
        .portfolio-card:hover img { transform: scale(1.1); }
        .portfolio-card .overlay { 
            opacity: 0; 
            transition: all 0.4s ease;
            background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%);
        }
        .portfolio-card:hover .overlay { opacity: 1; }
        .portfolio-card .content { 
            transform: translateY(20px); 
            opacity: 0;
            transition: all 0.4s ease;
        }
        .portfolio-card:hover .content { 
            transform: translateY(0); 
            opacity: 1;
        }
        .gradient-text {
            background: linear-gradient(135deg, #1d4ed8 0%, #7c3aed 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    </style>
    
    <!-- Schema.org -->
    ${schemaOrg}
</head>
<body class="bg-gray-50 text-gray-900">

${navbar('product')}

<!-- Hero Product -->
<section class="pt-28 pb-16 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-72 h-72 bg-yellow-400 rounded-full filter blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center">
            <span class="inline-block bg-white/20 text-white px-6 py-4 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
               <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
                Produk <span class="text-yellow-400">Kami</span>
            </h1>
            </span>
            
            <p class="mt-6 text-blue-100 max-w-2xl mx-auto text-lg">
                Lihat hasil karya website yang telah kami buat. Setiap proyek dibuat dengan desain modern.
            </p>
        </div>
    </div>
</section>

<!-- Stats Bar -->
<section class="py-8 bg-white shadow-lg relative -mt-8 mx-4 lg:mx-auto max-w-4xl rounded-2xl z-10">
    <div class="grid grid-cols-3 divide-x divide-gray-100">
        <div class="text-center px-4">
            <div class="text-2xl md:text-3xl font-bold text-blue-700">4+</div>
            <div class="text-gray-500 text-sm">Proyek Selesai</div>
        </div>
        <div class="text-center px-4">
            <div class="text-2xl md:text-3xl font-bold text-blue-700">100%</div>
            <div class="text-gray-500 text-sm">Klien Puas</div>
        </div>
        <div class="text-center px-4">
            <div class="text-2xl md:text-3xl font-bold text-blue-700">24 Jam</div>
            <div class="text-gray-500 text-sm">Support</div>
        </div>
    </div>
</section>

<!-- Portfolio Grid -->
<section class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Portfolio Items - Modern Grid -->
        <div class="grid md:grid-cols-2 gap-8 lg:gap-10">
            
            <!-- Product 1 - Coffee Store -->
            <div class="portfolio-card card-hover bg-white shadow-xl group">
                <div class="relative h-72 md:h-80 overflow-hidden">
                    <img src="images/coffe_store.webp" alt="Coffee Store Website" class="w-full h-full object-cover object-top">
                    <div class="overlay absolute inset-0 flex items-end justify-center pb-8">
                        <div class="content text-center">
                            <a href="images/coffe_store.webp" target="_blank" class="inline-flex items-center bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition shadow-lg">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                                Lihat Detail
                            </a>
                        </div>
                    </div>
                    <!-- Badge -->
                    <div class="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                        Landing Page
                    </div>
                </div>
                <div class="p-6 bg-white">
                    <h3 class="font-bold text-xl text-gray-900 group-hover:text-blue-700 transition">Coffee Store</h3>
                    <p class="text-gray-500 text-sm mt-2">Website landing page untuk kedai kopi dengan desain modern, hangat, dan mengundang.</p>
                    <div class="flex items-center mt-4 pt-4 border-t border-gray-100">
                        <div class="flex -space-x-2">
                            <div class="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 text-xs font-bold">☕</div>
                        </div>
                        <span class="ml-3 text-sm text-gray-400">Responsif • Modern • SEO</span>
                    </div>
                </div>
            </div>
            
            <!-- Product 2 - Automarket -->
            <div class="portfolio-card card-hover bg-white shadow-xl group">
                <div class="relative h-72 md:h-80 overflow-hidden">
                    <img src="images/automarket.webp" alt="Automarket Website" class="w-full h-full object-cover object-top">
                    <div class="overlay absolute inset-0 flex items-end justify-center pb-8">
                        <div class="content text-center">
                            <a href="images/automarket.webp" target="_blank" class="inline-flex items-center bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition shadow-lg">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                                Lihat Detail
                            </a>
                        </div>
                    </div>
                    <!-- Badge -->
                    <div class="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                        E-Commerce
                    </div>
                </div>
                <div class="p-6 bg-white">
                    <h3 class="font-bold text-xl text-gray-900 group-hover:text-blue-700 transition">Automarket</h3>
                    <p class="text-gray-500 text-sm mt-2">Platform e-commerce untuk toko otomotif dengan fitur katalog produk lengkap dan modern.</p>
                    <div class="flex items-center mt-4 pt-4 border-t border-gray-100">
                        <div class="flex -space-x-2">
                            <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-bold">🚗</div>
                        </div>
                        <span class="ml-3 text-sm text-gray-400">Katalog • Keranjang • Admin</span>
                    </div>
                </div>
            </div>
            
            <!-- Product 3 - iPhone Store -->
            <div class="portfolio-card card-hover bg-white shadow-xl group">
                <div class="relative h-72 md:h-80 overflow-hidden">
                    <img src="images/iphone_store.webp" alt="iPhone Store Website" class="w-full h-full object-cover object-top">
                    <div class="overlay absolute inset-0 flex items-end justify-center pb-8">
                        <div class="content text-center">
                            <a href="images/iphone_store.webp" target="_blank" class="inline-flex items-center bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition shadow-lg">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                                Lihat Detail
                            </a>
                        </div>
                    </div>
                    <!-- Badge -->
                    <div class="absolute top-4 left-4 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                        E-Commerce
                    </div>
                </div>
                <div class="p-6 bg-white">
                    <h3 class="font-bold text-xl text-gray-900 group-hover:text-blue-700 transition">iPhone Store</h3>
                    <p class="text-gray-500 text-sm mt-2">Toko online Apple dengan tampilan elegan, minimalis, dan premium.</p>
                    <div class="flex items-center mt-4 pt-4 border-t border-gray-100">
                        <div class="flex -space-x-2">
                            <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 text-xs font-bold">📱</div>
                        </div>
                        <span class="ml-3 text-sm text-gray-400">Premium • Elegan • Minimalis</span>
                    </div>
                </div>
            </div>
            
            <!-- Product 4 - Pasol -->
            <div class="portfolio-card card-hover bg-white shadow-xl group">
                <div class="relative h-72 md:h-80 overflow-hidden">
                    <img src="images/pasol.webp" alt="Pasol Website" class="w-full h-full object-cover object-top">
                    <div class="overlay absolute inset-0 flex items-end justify-center pb-8">
                        <div class="content text-center">
                            <a href="images/pasol.webp" target="_blank" class="inline-flex items-center bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition shadow-lg">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                                Lihat Detail
                            </a>
                        </div>
                    </div>
                    <!-- Badge -->
                    <div class="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                        Company Profile
                    </div>
                </div>
                <div class="p-6 bg-white">
                    <h3 class="font-bold text-xl text-gray-900 group-hover:text-blue-700 transition">Pasol</h3>
                    <p class="text-gray-500 text-sm mt-2">Website company profile profesional dengan desain modern dan informatif.</p>
                    <div class="flex items-center mt-4 pt-4 border-t border-gray-100">
                        <div class="flex -space-x-2">
                            <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-bold">🏢</div>
                        </div>
                        <span class="ml-3 text-sm text-gray-400">Profesional • Informatif • Modern</span>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>

<!-- CTA -->
<section class="py-20 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 relative overflow-hidden">
    <!-- Background Decoration -->
    <div class="absolute inset-0 opacity-20">
        <div class="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div class="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-full"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white rounded-full"></div>
    </div>
    
    <div class="max-w-4xl mx-auto px-4 text-center relative">
        <span class="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
            🚀 Wujudkan Website Impian Anda
        </span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Ingin Hasil Seperti Ini?
        </h2>
        <p class="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Hubungi kami sekarang dan dapatkan konsultasi gratis. Tim Giestar siap membantu mewujudkan website impian Anda.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/6285150727624" target="_blank" class="inline-flex items-center bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition shadow-xl hover:shadow-2xl">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                Chat WhatsApp
            </a>
            <a href="/contact" class="inline-flex items-center bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-700 transition">
                Hubungi Kami
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
        </div>
    </div>
</section>

${footer()}

<script src="script.js"></script>
</body>
</html>
    `;
};
