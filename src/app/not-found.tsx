import Link from 'next/link'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
          <div className="flex justify-center">
            <Search className="w-24 h-24 text-gray-400" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Sayfa Bulunamadı
        </h2>
        
        <p className="text-lg text-gray-600 mb-8">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          <br />
          Ana sayfaya dönebilir veya menüden istediğiniz sayfaya ulaşabilirsiniz.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            <Home className="w-5 h-5 mr-2" />
            Ana Sayfaya Dön
          </Link>
          
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center bg-white text-gray-800 px-8 py-4 rounded-full font-semibold border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all"
          >
            Bize Ulaşın
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-300">
          <h3 className="font-semibold text-gray-800 mb-4">Popüler Sayfalar</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/hakkimizda" className="text-blue-600 hover:underline">
              Hakkımızda
            </Link>
            <Link href="/faaliyetlerimiz" className="text-blue-600 hover:underline">
              Faaliyetlerimiz
            </Link>
            <Link href="/banka-hesaplari" className="text-blue-600 hover:underline">
              Banka Hesapları
            </Link>
            <Link href="/bagis-yap" className="text-blue-600 hover:underline">
              Bağış Yap
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
