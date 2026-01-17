
const navbar = require('./components/navbar.js');
const footer = require('./components/footer.js');

module.exports = ({ seoHead, schemaOrg }) => {
    return `
<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
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
        .gradient-hero { background: linear-gradient(135deg, #eff6ff 0%, #fefce8 100%); }
        .card-hover { transition: all 0.3s ease; }
        .card-hover:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
    </style>
    
    <!-- Schema.org Structured Data -->
    ${schemaOrg}
    
    <!-- SEO Head -->
    ${seoHead}
</head>
<body class="bg-white text-gray-900">

${navbar('home')}

<!-- Hero Section -->
<section class="gradient-hero pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div class="text-center lg:text-left order-2 lg:order-1">
                <!-- Badge -->
                <span class="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 sm:mb-6">
                    🚀 Solusi Website #1 untuk Bisnis Anda
                </span>
                
                <!-- Headline - Responsive sizing -->
                <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                    Solusi Website Profesional<br>
                    <span class="text-blue-700">untuk UMKM <br>& Bisnis Lokal</span>
                </h1>
                
                <!-- Description -->
                <p class="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                    Tingkatkan Standar Bisnis Anda dengan Website Berkualitas yang Terjangkau.
                </p>
                <!-- CTA Buttons -->
                <div class="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                    <a href="https://wa.me/6285150727624" target="_blank" class="bg-yellow-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-yellow-500 transition shadow-lg hover:shadow-xl inline-flex items-center justify-center">
                        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                        Konsultasi Gratis
                    </a>
                    <a href="/product" class="bg-white border-2 border-gray-200 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-50 hover:border-gray-300 transition inline-flex items-center justify-center">
                        Lihat produk
                        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </a>
                </div>
            </div>
            
            <!-- Mobile & Desktop Illustration -->
            <div class="order-1 lg:order-2 relative">
                <!-- Mobile Version - Compact Card -->
                <div class="lg:hidden flex justify-center mb-4">
                    <div class="relative">
                        <div class="bg-white rounded-2xl shadow-xl p-4 border border-gray-100 w-64">
                            <div class="flex items-center space-x-2 mb-3">
                                <div class="w-2 h-2 rounded-full bg-red-400"></div>
                                <div class="w-2 h-2 rounded-full bg-yellow-400"></div>
                                <div class="w-2 h-2 rounded-full bg-green-400"></div>
                                <div class="flex-1 bg-gray-100 rounded h-4 ml-2"></div>
                            </div>
                            <div class="bg-gradient-to-br from-blue-100 to-yellow-100 rounded-lg h-32 flex items-center justify-center">
                                <div class="text-center">
                                    <div class="w-12 h-12 bg-blue-600 rounded-xl mx-auto mb-2 flex items-center justify-center">
                                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                    </div>
                                    <p class="text-gray-500 text-sm font-medium">Website Impian Anda</p>
                                </div>
                            </div>
                        </div>
                        <!-- Price Badge Mobile -->
                        <div class="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 px-3 py-1.5 rounded-xl font-bold text-sm shadow-lg animate-bounce">
                            Mulai 150k!
                        </div>
                    </div>
                </div>
                
                <!-- Desktop Version - Full Mockup -->
                <div class="hidden lg:block relative">
                    <div class="bg-white rounded-2xl shadow-2xl p-4 border border-gray-100">
                        <div class="flex items-center space-x-2 mb-4">
                            <div class="w-3 h-3 rounded-full bg-red-400"></div>
                            <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div class="w-3 h-3 rounded-full bg-green-400"></div>
                            <div class="flex-1 bg-gray-100 rounded-lg h-6 ml-4 flex items-center px-3">
                                <span class="text-xs text-gray-400">www.yourwebsite.com</span>
                            </div>
                        </div>
                        <div class="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-lg h-64 flex items-center justify-center">
                            <div class="text-center">
                                <div class="w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                </div>
                                <p class="text-gray-500 font-medium">Website Impian Anda</p>
                            </div>
                        </div>
                    </div>
                    <!-- Floating Elements -->
                    <div class="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-xl font-bold shadow-lg animate-bounce">
                        Mulai dari 150k!
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<main>
    <!-- Services Section -->
    <section id="layanan" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Layanan</h2>
                <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Solusi digital lengkap yang dirancang khusus untuk kebutuhan bisnis, mulai dari branding hingga penjualan.
                </p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Landing Page -->
                <div class="bg-white rounded-2xl p-8 border border-gray-100 card-hover shadow-sm">
                    <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                        <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Landing Page</h3>
                    <p class="text-gray-600 mb-6">
                        Ubah pengunjung menjadi pelanggan melalui landing page modern, menarik, dan dirancang khusus untuk meningkatkan penjualan.
                    </p>
                </div>
                
                <!-- Company Profile -->
                <div class="bg-white rounded-2xl p-8 border-2  card-hover shadow-lg relative">
                    <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                        <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Company Profile</h3>
                    <p class="text-gray-600 mb-6">
                        Bangun kepercayaan klien melalui profil perusahaan digital yang profesional, informatif, dan mampu menunjukkan keunggulan bisnis Anda.
                    </p>
                </div>
                
                <!-- E-Commerce -->
                <div class="bg-white rounded-2xl p-8 border border-gray-100 card-hover shadow-sm">
                    <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                        <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Simple E-Commerce</h3>
                    <p class="text-gray-600 mb-6">
                        Tingkatkan level bisnis Anda ke arah digital dengan sistem toko mandiri yang memudahkan Anda memantau stok dan pesanan secara real-time.
                    </p>
                </div>
            </div>
        </div>
    </section>


    <!-- Pricing Section -->
    <section id="harga" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
            
                <h2 class="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Pilih Paket Terbaik</h2>
                <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Harga terjangkau dengan kualitas premium.
                </p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div class="bg-white rounded-2xl p-8 border border-gray-200 card-hover">
                    <h3 class="text-lg font-semibold text-gray-500 mb-2">Small</h3>
                    <p class="text-sm text-gray-400 mb-4">Ideal untuk personal branding.</p>
                    <div class="mb-6">
                        <span class="text-4xl font-extrabold text-gray-900">Rp 150k</span>
                        <span class="text-gray-500">/proyek</span>
                    </div>
                    <ul class="space-y-4 mb-8">
                        <li class="flex items-center text-gray-600">
                            <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 HARGA 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                            1 halaman
                        </li>
                        <li class="flex items-center text-gray-600">
                            <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                            Mobile Responsive
                        </li>
                        <li class="flex items-center text-gray-600">
                            <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                            SEO Friendly
                        </li>
                        <li class="flex items-center text-gray-600">
                            <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                            Revisi 2x
                        </li>
                        <li class="flex items-center text-gray-400">
                            <svg class="w-5 h-5 text-red-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                            Tidak termasuk domain & hosting
                        </li>
                    </ul>
                    <a href="https://wa.me/6285150727624?text=Halo, saya tertarik dengan Paket Small" class="block w-full text-center bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
                        Pilih Paket
                    </a>
                </div>
                <!-- Medium -->
                <div class="bg-white rounded-2xl p-8 border border-gray-200 card-hover">
                    <h3 class="text-lg font-semibold text-gray-500 mb-2">Medium</h3>
                    <p class="text-sm text-gray-400 mb-4">Terbaik untuk UMKM & Bisnis.</p>
                    <div class="mb-6">
                        <span class="text-4xl font-extrabold text-gray-900">Rp 250k</span>
                        <span class="text-gray-500">/proyek</span>
                    </div>
                    <ul class="space-y-4 mb-8">
                        <li class="flex items-center text-gray-600">
                            <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                            4 halaman
                        </li>
                        <li class="flex items-center text-gray-600">
                            <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                            Mobile Responsive
                        </li>
                        <li class="flex items-center text-gray-600">
                            <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                            SEO Friendly
                        </li>
                        <li class="flex items-center text-gray-600">
                            <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                            Revisi 2x
                        </li>
                        <li class="flex items-center text-gray-400">
                            <svg class="w-5 h-5 text-red-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                            Tidak termasuk domain & hosting
                        </li>
                    </ul>
                    <a href="https://wa.me/6285150727624?text=Halo, saya tertarik dengan Paket Medium" class="block w-full text-center bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
                        Pilih Paket
                    </a>
                </div>
                
                <!-- Medium - Popular -->
                <div class="bg-blue-700 rounded-2xl p-8 card-hover relative shadow-2xl">
                    <!-- <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-xs font-bold px-4 py-1 rounded-full uppercase">Most Popular</span> -->
                    <h3 class="text-lg font-semibold text-blue-200 mb-2">Large</h3>
                    <p class="text-sm text-blue-300 mb-4">Ideal untuk UMKM & Bisnis yang dilengkapi dashboard admin.</p>
                    <span class="text-sm text-white">Mulai dari</span>
                    <div class="mb-6">
                        <span class="text-4xl font-extrabold text-white">Rp 450k</span>
                        <span class="text-blue-200">/proyek</span>
                    </div>
                    <ul class="space-y-4 mb-8">
                        <li class="flex items-center text-blue-100">
                            <svg class="w-5 h-5 text-yellow-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                            9 Halaman
                        </li>
                        <li class="flex items-center text-blue-100">
                            <svg class="w-5 h-5 text-yellow-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                            Bisa implementasi CRUD
                        </li>
                        <li class="flex items-center text-blue-100">
                            <svg class="w-5 h-5 text-yellow-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                            SEO Friendly
                        </li>
                        <li class="flex items-center text-blue-100">
                            <svg class="w-5 h-5 text-yellow-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                            Mobile Responsive
                        </li>
                        <li class="flex items-center text-blue-100">
                            <svg class="w-5 h-5 text-yellow-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                            Revisi 3x
                        </li>
                        <li class="flex items-center text-blue-300">
                            <svg class="w-5 h-5 text-red-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                            Tidak termasuk domain & hosting
                        </li>
                    </ul>
                    <a href="https://wa.me/6285150727624?text=Halo, saya tertarik dengan Paket Large" class="block w-full text-center bg-yellow-400 text-gray-900 py-3 rounded-xl font-bold hover:bg-yellow-500 transition shadow-lg">
                        Pilih Paket
                    </a>
                </div>

            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-blue-700">
        <div class="max-w-4xl mx-auto px-4 text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
                Siap Membawa Bisnis Anda ke Era Digital?
            </h2>
            <p class="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                Konsultasikan kebutuhan website Anda secara gratis.
            </p>
            <a href="https://wa.me/6285150727624" target="_blank" class="inline-flex items-center bg-yellow-400 text-gray-900 px-10 py-4 rounded-full font-bold text-md  lg:text-lg hover:bg-yellow-500 transition shadow-xl hover:shadow-2xl">
                <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                Chat via WhatsApp Sekarang
            </a>
        </div>
    </section>
</main>

${footer()}

<script src="/script.js"></script>
</body>
</html>
    `;
};

