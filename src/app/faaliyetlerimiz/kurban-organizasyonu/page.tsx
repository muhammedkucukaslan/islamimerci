import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function KurbanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        
        {/* ================= BAŞLIK ================= */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">
            Kurban İbadeti
          </h1>
        </div>

    {/* ================= GÖRSELLER ================= */}
<div className="grid md:grid-cols-2 gap-6 mb-16">

  <div className="aspect-video rounded-lg shadow-md overflow-hidden">
    <img
      src="https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNlLJJDrFFQHDstxWh3vG4CwcLAbfS2dnoMy7QZ"
      alt="Vekâleten kurban kesimi – 1"
      className="w-full h-full object-cover"
      loading="lazy"
    />
  </div>

  <div className="aspect-video rounded-lg shadow-md overflow-hidden">
    <img
      src="https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNlQVzYLKg5kPYAS3IoWhQ6tOUTfFpuCexvlV9K"
      alt="Vekâleten kurban kesimi – 2"
      className="w-full h-full object-cover"
      loading="lazy"
    />
  </div>

</div>


       {/* ================= KURBANIN FAZİLETİ ================= */}
<section className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
  <h2 className="text-3xl font-bold text-emerald-800 mb-8 text-center">
    Neden Kurban Keseriz?
  </h2>

  <div className="space-y-8">

    {/* KURAN */}
    <div>
      <h3 className="text-xl font-semibold text-emerald-700 mb-4">
        Kur’ân-ı Kerîm’den:
      </h3>

      <ul className="space-y-3 text-gray-700">
        <li className="flex gap-3">
          <span className="text-emerald-600 flex-shrink-0">◆</span>
          <span>
            “Biz her ümmet için, Allah’ın kendilerine rızık olarak verdiği kurbanlık
            hayvanlar üzerine O’nun ismini ansınlar diye kurban kesmeyi meşru kıldık.”
            <span className="text-sm text-gray-500"> (Hac, 34)</span>
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-emerald-600 flex-shrink-0">◆</span>
          <span>
            “Rabbin için namaz kıl ve kurban kes.”
            <span className="text-sm text-gray-500"> (Kevser, 2)</span>
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-emerald-600 flex-shrink-0">◆</span>
          <span>
            “Allah’a onların ne etleri ne de kanları ulaşır; O’na ulaşan ancak sizin
            takvânızdır.”
            <span className="text-sm text-gray-500"> (Hac, 37)</span>
          </span>
        </li>
      </ul>
    </div>

    {/* HADIS */}
    <div>
      <h3 className="text-xl font-semibold text-emerald-700 mb-4">
        Rasûlullah ﷺ buyuruyor:
      </h3>

      <ul className="space-y-3 text-gray-700">
        <li className="flex gap-3">
          <span className="text-emerald-600 flex-shrink-0">◆</span>
          <span>
            “Kurban Bayramı gününde, insanoğlunun Allah katında en sevimli ameli
            kurban kesmesidir.”
            <span className="text-sm text-gray-500"> (Tirmizî, Edâhî 1)</span>
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-emerald-600 flex-shrink-0">◆</span>
          <span>
            “Kim gücü yettiği hâlde kurban kesmezse, namazgâhımıza yaklaşmasın.”
            <span className="text-sm text-gray-500"> (İbn Mâce, Edâhî 2)</span>
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-emerald-600 flex-shrink-0">◆</span>
          <span>
            “Kurban sahibine, kurbanının her kılı için bir sevap vardır.”
            <span className="text-sm text-gray-500"> (Câmiu’s-Sağîr)</span>
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-emerald-600 flex-shrink-0">◆</span>
          <span>
            “Kurbanın kanı yere düşmeden önce Allah katında kabul olunur.”
            <span className="text-sm text-gray-500"> (Tirmizî)</span>
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-emerald-600 flex-shrink-0">◆</span>
          <span>
            “Kurban kesin; çünkü o, babanız İbrahim’in sünnetidir.”
            <span className="text-sm text-gray-500"> (İbn Mâce, Edâhî 3)</span>
          </span>
        </li>
      </ul>
    </div>

  </div>
</section>


   {/* ================= KURBAN FİYATLARI ================= */}
<section className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
  <h2 className="text-3xl font-bold text-emerald-800 mb-8 text-center">
    Kurban Fiyat Listesi
  </h2>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-emerald-700 text-white">
          <th className="px-6 py-4 text-left rounded-tl-lg">Hayvan Türü</th>
          <th className="px-6 py-4 text-right rounded-tr-lg">Fiyat (₺)</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        <tr className="hover:bg-emerald-50 transition-colors">
          <td className="px-6 py-4 font-medium text-gray-900">Küçükbaş</td>
          <td className="px-6 py-4 text-right font-semibold text-emerald-700">3.750</td>
        </tr>
        <tr className="hover:bg-emerald-50 transition-colors">
          <td className="px-6 py-4 font-medium text-gray-900">Büyükbaş (1 Hisse)</td>
          <td className="px-6 py-4 text-right font-semibold text-emerald-700">3.500</td>
        </tr>
        <tr className="hover:bg-emerald-50 transition-colors">
          <td className="px-6 py-4 font-medium text-gray-900">Büyükbaş (Tamamı)</td>
          <td className="px-6 py-4 text-right font-semibold text-emerald-700">24.500</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

  
        
        {/* ================= SADAKA-İ CARİYE ================= */}
        <section className="bg-gradient-to-r from-amber-50 to-emerald-50 rounded-xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-emerald-800 mb-6 text-center">
            Sadaka-i Câriye: Vekâleten Kurban
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Gücü yetmeyenlere, mazeret sahiplerine, özellikle Afrika'daki kardeşlerimize vekâleten kesilen kurbanlar, kesilen her bayramda yenilenen bir sadaka-i câriyedir.
            </p>
            <p>
              Kurbanınızın eti ihtiyaç sahibi ailelere ulaştığında, onların duaları sizin için bir hazine olur. Her lokmanın şükrü, sizin amel defterinize yazılır.
            </p>
            <p className="font-semibold text-emerald-800">
              

    “Mümin müminin aynasıdır, mümin müminin kardeşidir, (ihtiyaç duyduğunda) onun geçimini temin eder / zarardan-ziyandan korur ve arkasından da / gıyabında da elinden geldikçe onu savunur." (Ebu Davud, Edeb, 49).

            </p>
          </div>
        </section>

      {/* ================= NASIL VEKÂLET VERİLİR ================= */}
<section className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
  <h2 className="text-3xl font-bold text-emerald-800 mb-6 text-center">
    Vekâleten Kurban Nasıl Verilir?
  </h2>

  <div className="space-y-4 text-gray-700">

    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
        1
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">Kurban Sahibi Bilgileri</h3>
        <p>
          Kurban adına kesilecek kişinin <strong>adı ve soyadı</strong> tarafımıza iletilir.
        </p>
      </div>
    </div>

    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
        2
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">Kurban Türü Belirleme</h3>
        <p>
          Kurbanın <strong>Akika, Adak, Şükür, Şifâ veya Vâcip</strong> olduğu açıkça belirtilir.
        </p>
      </div>
    </div>

    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
        3
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">Bölge & Hayvan Seçimi</h3>
        <p>
          Kurbanın <strong>hangi bölgede</strong> ve <strong>hangi tür hayvanla</strong> kesileceği belirlenir.
        </p>
      </div>
    </div>

    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
        4
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">Vekâletin Alınması</h3>
        <p>
          Kurban sahibi adına <strong>usulüne uygun vekâlet</strong> alınır ve kayıt altına alınır.
        </p>
      </div>
    </div>

    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
        5
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">Ödeme & Dekont</h3>
        <p>
          Kurban bedeli gönderilir, <strong>ödeme dekontu Whatsapp üzerinden</strong> tarafımıza  iletilir.
        </p>
      </div>
    </div>

    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
        6
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">Kesim & İsimli Video</h3>
        <p>
          Kurbanınız kesilir ve <strong>kişiye özel, isimli video</strong> olarak tarafınıza gönderilir.
        </p>
      </div>
    </div>

  </div>
</section>


        {/* ================= ÇAĞRI ================= */}
        <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl shadow-xl p-8 md:p-12 text-center text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Kardeşlerimize Umut Olun
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Afrika'da açlıkla mücadele eden kardeşlerimiz sizin kurbanınızı bekliyor.
          </p>
          <Link href="https://wa.me/905325991843" target="_blank">
            <Button 
              size="lg" 
              className="bg-white text-emerald-700 hover:bg-gray-100 font-semibold px-8 py-6 text-lg shadow-lg"
            >
              Kurban Vermek İçin İletişime Geç
            </Button>
          </Link>
        </section>

        {/* ================= DUA ================= */}
        <div className="text-center bg-emerald-50 rounded-xl p-8 border-2 border-emerald-200">
          <p className="text-lg text-gray-700 italic">
            "Allah'ım! Kurbanlarımızı kabul eyle. Muhtaç kardeşlerimize ulaştır. Veren elleri bereketlendir, alan gönülleri şükürle doldur. Âmin."
          </p>
        </div>

      </div>
    </div>
  );
}