import Link from 'next/link'
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Yardımlaşma Derneği</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Topluma hizmet etmek ve ihtiyaç sahiplerine destek olmak için kurulmuş bir yardımlaşma derneğiyiz.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/hakkimizda" className="hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/faaliyetlerimiz" className="hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Faaliyetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/banka-hesaplari" className="hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Banka Hesapları
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Yasal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/gizlilik-politikasi" className="hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/kullanim-kosullari" className="hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                  Kullanım Koşulları
                </Link>
              </li>
              <li>
                <Link href="/cerez-politikasi" className="hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                  Çerez Politikası
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Merkez Mahallesi, Yardım Sokak No:123<br />
                  İstanbul, Türkiye
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                <a href="tel:+902121234567" className="hover:text-white transition-colors text-sm">
                  +90 (212) 123 45 67
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                <a href="mailto:info@yardimlasmadernegi.org" className="hover:text-white transition-colors text-sm">
                  info@yardimlasmadernegi.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>
            © {currentYear} Yardımlaşma Derneği. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}
