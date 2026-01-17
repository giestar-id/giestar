
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
        .card-hover { transition: all 0.3s ease; }
        .card-hover:hover { transform: translateY(-5px); }
    </style>
    
    <!-- Schema.org -->
    ${schemaOrg}
</head>
<body class="bg-white text-gray-900">

${navbar('about')}

<!-- Hero About -->
<section class="pt-28 pb-16 bg-gradient-to-br from-blue-50 to-yellow-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
            <h1 class="mt-3 text-4xl md:text-5xl font-bold text-gray-900">Tentang Kami</h1>
            <p class="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                Mengenal lebih dekat tim di balik Giestar Digital Agency
            </p>
        </div>
    </div>
</section>

<!-- About Giestar -->
<section class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <h2 class="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Tentang kami</h2>
                <p class="mt-6 text-gray-600 leading-relaxed">
                Giestar merupakan jasa pembuatan yang berlokasi di Pemalang, Jawa Tengah. Giestar berfokus membantu UMKM dan bisnis lokal agar tampil profesional di era digital. Kami percaya setiap bisnis, sekecil apa pun, berhak memiliki website yang representatif, fungsional, dan membantu bisnis Anda menjangkau pasar yang lebih luas.
                </p>
                <p class="mt-4 text-gray-600 leading-relaxed">
                Selain itu, Giestar menghadirkan website yang tidak hanya menarik secara visual tetapi juga cepat, responsif, dan dioptimalkan untuk SEO. Solusi kami dirancang untuk mendukung pertumbuhan bisnis Anda secara berkelanjutan.
                </p>
            </div>
            <div class="relative">
                <div class="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                    <div class="text-6xl font-bold mb-4">Giestar<span class="text-yellow-400">.</span></div>
                    <p class="text-blue-100 text-lg">Digital Agency</p>
                    <div class="mt-8 grid grid-cols-2 gap-4">
                        <div class="bg-white/10 rounded-xl p-4 text-center">
                            <div class="text-3xl font-bold">2025</div>
                            <div class="text-sm text-blue-200">Est.</div>
                        </div>
                        <div class="bg-white/10 rounded-xl p-4 text-center">
                            <div class="text-3xl font-bold">24 Jam</div>
                            <div class="text-sm text-blue-200">Konsultasi Gratis</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Features Grid -->
<section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Mengapa Memilih Giestar?</h2>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Tech Stack -->
            <div class="bg-white rounded-2xl p-6 text-center card-hover shadow-sm">
                <div class="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                </div>
                <h3 class="font-bold text-lg text-gray-900 mb-2">Teknologi Modern</h3>
                <p class="text-gray-600 text-sm">Giestar memanfaatkan teknologi modern dan terkini untuk memberikan hasil terbaik.</p>
            </div>
            
            <!-- User Usability -->
            <div class="bg-white rounded-2xl p-6 text-center card-hover shadow-sm">
                <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/></svg>
                </div>
                <h3 class="font-bold text-lg text-gray-900 mb-2">User-Friendly</h3>
                <p class="text-gray-600 text-sm">Giestar memastikan setiap produk user-friendly dan mudah diakses oleh semua pengguna.</p>
            </div>
            
            <!-- Support -->
            <div class="bg-white rounded-2xl p-6 text-center card-hover shadow-sm">
                <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                </div>
                <h3 class="font-bold text-lg text-gray-900 mb-2">Full Support</h3>
                <p class="text-gray-600 text-sm"> Giestar siap membantu Anda kapanpun dibutuhkan, sebelum dan sesudah proyek selesai.</p>
            </div>
        </div>
    </div>
</section>

<!-- Why Website Important -->
<section class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="order-2 lg:order-1">
                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-blue-600 text-white rounded-2xl p-6">
                        <div class="text-4xl font-bold">80%</div>
                        <p class="text-blue-100 mt-2 text-sm">Konsumen riset online sebelum membeli</p>
                    </div>
                    <div class="bg-yellow-400 text-gray-900 rounded-2xl p-6">
                        <div class="text-4xl font-bold">70%</div>
                        <p class="text-yellow-800 mt-2 text-sm">Trust bisnis dengan website profesional</p>
                    </div>
                    <div class="bg-gray-100 rounded-2xl p-6 col-span-2">
                        <div class="text-4xl font-bold text-gray-900">24 Jam</div>
                        <p class="text-gray-600 mt-2 text-sm">Website bekerja untuk bisnis Anda tanpa henti</p>
                    </div>
                </div>
            </div>
            <div class="order-1 lg:order-2">
                <span class="text-blue-600 font-semibold text-sm uppercase tracking-wider">Insight</span>
                <h2 class="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Mengapa Website Penting untuk Bisnis?</h2>
                <p class="mt-6 text-gray-600 leading-relaxed">
                    Di era digital saat ini, website bukan lagi sekadar pelengkap, melainkan kebutuhan utama setiap bisnis. Website adalah representasi digital dari brand Anda yang dapat diakses oleh siapapun, kapanpun, dan dari manapun.
                </p>
                <ul class="mt-6 space-y-4">
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                        <span class="text-gray-600">Meningkatkan kredibilitas dan kepercayaan pelanggan</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                        <span class="text-gray-600">Memperluas jangkauan pasar </span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                        <span class="text-gray-600">Menghemat biaya marketing jangka panjang</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                        <span class="text-gray-600">Memudahkan pelanggan menemukan informasi bisnis Anda</span>
                    </li>
                </ul>
                <a href="/contact" class="inline-flex items-center mt-8 bg-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition">
                    Mulai Buat Website
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </a>
            </div>
        </div>
    </div>
</section>

${footer()}

<script src="script.js"></script>
</body>
</html>
    `;
};
