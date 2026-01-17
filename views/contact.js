
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
    </style>
    
    <!-- Schema.org -->
    ${schemaOrg}
</head>
<body class="bg-white text-gray-900">

${navbar('contact')}

<section class="relative z-0 pt-28 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-blue-50 to-yellow-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">Kontak</h1>
        <p class="mt-3 text-sm md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Kami siap membantu mewujudkan website impian Anda. Hubungi kami sekarang!
        </p>
    </div>
</section>

<section class="relative z-0 py-10 md:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            <div class="w-full lg:w-3/5 space-y-6 md:space-y-10">
                
                <div class="bg-white">
                    <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Kirim Pesan</h2>
                    <form id="contactForm" class="space-y-4 md:space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <div class="space-y-1.5">
                                <label for="name" class="text-xs md:text-sm font-semibold text-gray-700">Nama Lengkap</label>
                                <input type="text" id="name" required class="w-full px-4 py-2.5 md:py-3 text-sm md:text-base rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" placeholder="Nama Anda">
                            </div>
                            <div class="space-y-1.5">
                                <label for="email" class="text-xs md:text-sm font-semibold text-gray-700">Email</label>
                                <input type="email" id="email" required class="w-full px-4 py-2.5 md:py-3 text-sm md:text-base rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" placeholder="alex@gmail.com">
                            </div>
                        </div>
                        <div class="space-y-1.5">
                            <label for="address" class="text-xs md:text-sm font-semibold text-gray-700">Alamat (Opsional)</label>
                            <input type="text" id="address" class="w-full px-4 py-2.5 md:py-3 text-sm md:text-base rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" placeholder="Kota atau Alamat">
                        </div>
                        <div class="space-y-1.5">
                            <label for="message" class="text-xs md:text-sm font-semibold text-gray-700">Pesan Anda</label>
                            <textarea id="message" rows="5" required class="w-full px-4 py-2.5 md:py-3 text-sm md:text-base rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none" placeholder="Ceritakan proyek website Anda..."></textarea>
                        </div>
                        <button type="submit" class="w-full bg-yellow-400 text-gray-900 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-yellow-500 transition shadow-lg active:scale-95">
                            Kirim Sekarang
                        </button>
                    </form>
                </div>

                <div class="bg-blue-600 rounded-2xl md:rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
                    <div class="relative z-10 text-center lg:text-left">
                        <h3 class="text-lg md:text-2xl font-bold mb-2">Butuh Respon Cepat?</h3>
                        <p class="text-blue-100 mb-4 md:mb-6 text-sm md:text-base">Konsultasi gratis via WhatsApp dengan tim kami!</p>
                        <a href="https://wa.me/6285150727624" target="_blank" class="inline-flex items-center justify-center bg-green-500 text-white px-6 py-3 md:px-8 md:py-3.5 rounded-full font-bold text-sm md:text-base hover:bg-green-600 transition shadow-lg w-full sm:w-auto">
                            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                            Hubungi via WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            <div class="w-full lg:w-2/5 space-y-6 md:space-y-8">
                <div class="bg-gray-50 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm space-y-6 md:space-y-8">
                    <div class="flex items-start">
                        <div class="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-xl md:rounded-2xl flex items-center justify-center mr-3 md:mr-4 shrink-0 text-green-600">
                            <svg class="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                        </div>
                        <div>
                            <p class="text-[10px] md:text-xs uppercase font-bold text-gray-400 tracking-wider">WhatsApp</p>
                            <p class="font-bold text-gray-900 text-base md:text-lg">+62 851-5072-7624</p>
                        </div>
                    </div>

                    <div class="flex items-start">
                        <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl md:rounded-2xl flex items-center justify-center mr-3 md:mr-4 shrink-0 text-blue-600">
                            <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        </div>
                        <div>
                            <p class="text-[10px] md:text-xs uppercase font-bold text-gray-400 tracking-wider">Email</p>
                            <p class="font-bold text-gray-900 text-base md:text-lg">giestar.id@gmail.com</p>
                        </div>
                    </div>

                    <div class="flex items-start">
                        <div class="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-xl md:rounded-2xl flex items-center justify-center mr-3 md:mr-4 shrink-0 text-yellow-600">
                            <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        </div>
                        <div>
                            <p class="text-[10px] md:text-xs uppercase font-bold text-gray-400 tracking-wider">Lokasi</p>
                            <p class="font-bold text-gray-900 text-base md:text-lg">Pemalang, Jawa Tengah</p>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                    <div class="bg-gray-50 px-4 py-3 md:px-6 md:py-4 flex justify-between items-center border-b border-gray-100">
                        <span class="font-bold text-xs md:text-sm text-gray-700 uppercase">Peta Lokasi</span>
                        <a href="https://maps.google.com/?cid=10750997065784754149&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ" target="_blank" class="text-blue-600 font-bold text-[10px] md:text-xs">RUTE JALAN →</a>
                    </div>
                    <div class="relative w-full aspect-square md:aspect-video lg:aspect-square">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15833.991469660215!2d109.2922222!3d-7.183888799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fee0378e7bd57%3A0x2055fcaf0827a88d!2sGunung%20Kembang!5e0!3m2!1sen!2sid!4v1767172444401!5m2!1sen!2sid" class="absolute top-0 left-0 w-full h-full border-0" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>

        </div> 
    </div>
</section>

${footer()}

<script src="script.js"></script>
<script>
    // 2. SCRIPT UNTUK FORM KONTAK
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const waMessage = \`Halo Giestar!%0ANama: \${name}%0AEmail: \${email}%0APesan: \${message}\`;
            window.open(\`https://wa.me/6285150727624?text=\${waMessage}\`, '_blank');
        });
    }
</script>
</body>
</html>
    `;
};
