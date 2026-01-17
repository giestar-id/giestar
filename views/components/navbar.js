
module.exports = function navbar(page = 'home') {
    const isActive = (p) => (page === p ? 'text-blue-700' : '');

    return `
    <!-- Navbar -->
    <nav class="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16 items-center">
                <!-- Logo -->
                <a href="/" class="flex items-center">
                    <img 
                        src="images/logo.png" 
                        alt="Giestar" 
                        class="h-10 md:h-12 lg:h-14 w-auto"
                    >
                </a>

                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="/" class="text-gray-700 hover:text-blue-700 font-medium transition ${isActive('home')}">Beranda</a>
                    <a href="/about" class="text-gray-700 hover:text-blue-700 font-medium transition ${isActive('about')}">Tentang Kami</a>
                    <a href="/product" class="text-gray-700 hover:text-blue-700 font-medium transition ${isActive('product')}">Produk</a>
                    <a href="/contact" class="text-gray-700 hover:text-blue-700 font-medium transition ${isActive('contact')}">Kontak</a>
                </div>
                
                <!-- CTA Button -->
                <div class="hidden md:block">
                    <a href="/contact" class="bg-yellow-400 text-gray-900 px-6 py-2.5 rounded-full font-semibold hover:bg-yellow-500 transition shadow-md hover:shadow-lg">
                        Mulai Sekarang
                    </a>
                </div>
                
                <!-- Mobile Menu Button -->
                <button id="mobile-menu-btn" class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>
            
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden md:hidden pb-4">
                <div class="flex flex-col space-y-3 pt-4 border-t border-gray-100">
                    <a href="/" class="text-gray-700 hover:text-blue-700 font-medium px-2 py-2 rounded-lg hover:bg-gray-50 transition">Beranda</a>
                    <a href="/about" class="text-gray-700 hover:text-blue-700 font-medium px-2 py-2 rounded-lg hover:bg-gray-50 transition">Tentang Kami</a>
                    <a href="/product" class="text-gray-700 hover:text-blue-700 font-medium px-2 py-2 rounded-lg hover:bg-gray-50 transition">Produk</a>
                    <a href="/contact" class="text-gray-700 hover:text-blue-700 font-medium px-2 py-2 rounded-lg hover:bg-gray-50 transition">Kontak</a>
                    <a href="/contact" class="bg-yellow-400 text-gray-900 px-6 py-2.5 rounded-full font-semibold text-center hover:bg-yellow-500 transition mt-2">
                        Mulai Sekarang
                    </a>
                </div>
            </div>
        </div>
    </nav>
    `;
}

