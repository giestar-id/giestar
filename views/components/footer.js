
module.exports = function footer() {
    return `
    <!-- Footer -->
    <footer class="bg-gray-900 text-white pt-16 pb-8" role="contentinfo">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
    
          <!-- About Giestar -->
          <div>
            <a href="/" class="inline-flex items-center">
              <img
                src="images/logo.png"
                alt="Giestar Digital Agency"
                class="h-12 md:h-14 lg:h-16 w-auto"
              >
            </a>
    
            <p class="mt-4 text-gray-300 text-sm leading-relaxed">
              Giestar adalah agensi digital yang menyediakan jasa pembuatan website profesional,
              modern, dan SEO-friendly dengan harga terjangkau.
            </p>
    
            <!-- Social Media -->
            <div class="flex space-x-4 mt-6">
    
            <!-- Facebook -->
            <a href="https://www.facebook.com/Giestar.id?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Giestar Digital Agency"
                class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center
                        hover:bg-blue-700 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition">
    
                <span class="sr-only">Facebook Giestar Digital Agency</span>
                <i class="fab fa-facebook-f text-white text-lg" aria-hidden="true"></i>
            </a>
    
            <!-- Instagram -->
            <a href="https://www.instagram.com/giestar_id?igsh=MXNjNWN5dnFiMWlwdg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Giestar Digital Agency"
                class="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center
                        hover:bg-pink-600 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition">
    
                <span class="sr-only">Instagram Giestar Digital Agency</span>
                <i class="fab fa-instagram text-white text-lg" aria-hidden="true"></i>
            </a>
    
            <!-- WhatsApp -->
            <a href="https://wa.me/6285150727624"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Giestar Digital Agency"
                class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center
                        hover:bg-green-600 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition">
    
                <span class="sr-only">WhatsApp Giestar Digital Agency</span>
                <i class="fab fa-whatsapp text-white text-lg" aria-hidden="true"></i>
            </a>
    
            </div>
    
          </div>
    
          <!-- Layanan -->
          <nav aria-label="Layanan">
            <h4 class="text-lg font-semibold mb-5">Layanan</h4>
            <ul class="space-y-3 text-gray-300">
              <li><a href="/#layanan" class="hover:text-yellow-400 transition">Jasa Pembuatan Website</a></li>
              <li><a href="/#layanan" class="hover:text-yellow-400 transition">Landing Page</a></li>
              <li><a href="/#layanan" class="hover:text-yellow-400 transition">Company Profile</a></li>
              <li><a href="/#layanan" class="hover:text-yellow-400 transition">Toko Online</a></li>
            </ul>
          </nav>
    
          <!-- Navigasi -->
          <nav aria-label="Navigasi">
            <h4 class="text-lg font-semibold mb-5">Navigasi</h4>
            <ul class="space-y-3 text-gray-300">
              <li><a href="/about" class="hover:text-yellow-400 transition">Tentang Kami</a></li>
              <li><a href="/product" class="hover:text-yellow-400 transition">Produk</a></li>
              <li><a href="/#harga" class="hover:text-yellow-400 transition">Harga</a></li>
              <li><a href="/contact" class="hover:text-yellow-400 transition">Kontak</a></li>
            </ul>
          </nav>
    
          <!-- Kontak -->
          <div>
            <h4 class="text-lg font-semibold mb-5">Hubungi Kami</h4>
            <ul class="space-y-4 text-gray-300">
              <li>Pemalang, Jawa Tengah</li>
              <li>+62 851 5072 7624</li>
              <li>giestar.id@gmail.com</li>
            </ul>
          </div>
        </div>
    
        <!-- Bottom -->
        <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-300 text-sm">
            © 2025 Giestar Digital Agency. All rights reserved.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-300">
            <a href="#" class="hover:text-yellow-400 transition">Privacy Policy</a>
            <a href="#" class="hover:text-yellow-400 transition">Terms of Service</a>
          </div>
        </div>
    
      </div>
    </footer>
    `;
}

