import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function MushafPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 space-y-10">
        <h1 className="text-4xl font-bold">Mushaf-ı Şerif Dağıtımı</h1>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNlRKNVfDCzetsokSlvhmU4bdM0YHxECPXJVaTK"
            alt="Mushaf-ı Şerif 1"
            className="rounded-xl object-cover w-full h-64"
          />
          <img
            src="https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNlVrYcqblYCkuNXrHI6xQvd7lFL3RmPsy8opqB"
            alt="Mushaf-ı Şerif 2"
            className="rounded-xl object-cover w-full h-64"
          />
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            Kur'ân-ı Kerîm dağıtımı, en hayırlı ve en faziletli hizmetlerdendir. 
            Allah'ın kelâmını insanlara ulaştırmak, sadaka-i câriye olarak 
            kıyamete kadar devam edecek bir hayır ve sevaptır.
          </p>

          <h2 className="text-2xl font-semibold text-black">
            Mushaf Dağıtmanın Fazileti
          </h2>

          <p>Rasûlullah sallallahu aleyhi ve sellem buyurdu:</p>

          <blockquote className="border-l-4 pl-4 italic">
            "Kur'ân-ı Kerîm'i okuyun. Çünkü o, kıyamet gününde onu okuyan kimse 
            için şefaatçi olarak gelecektir." (Müslim, Müsâfirîn, 252)
          </blockquote>

          <blockquote className="border-l-4 pl-4 italic">
            "En ayırlınız Kur'ân'ı öğrenen ve öğretendir." (Buhârî, Fedâilü'l-Kur'ân, 21)
          </blockquote>

          <blockquote className="border-l-4 pl-4 italic">
            "Kim bir hayra vesile olursa, onu işleyenin sevabı gibi sevap kazanır." 
            (Müslim, İmâre, 155)
          </blockquote>

          <p>
            Bu hadîs-i şerîfler ışığında, Mushaf-ı Şerîf dağıtmak suretiyle 
            insanların Kur'ân okumasına vesile olmak, onların kazandığı sevaplardan 
            sizin de pay almanız demektir. Dağıttığınız her Mushaf'tan okunan 
            her harf için sevap defterinize yazılacaktır.
          </p>

          <h2 className="text-2xl font-semibold text-black">
            Sadaka-i Câriye
          </h2>

          <p>Rasûlullah sallallahu aleyhi ve sellem buyurdu:</p>

          <blockquote className="border-l-4 pl-4 italic">
            "İnsan öldüğü zaman üç şey dışında bütün amelleri kesilir: Sadaka-i 
            câriye, faydalanılan ilim ve kendisine dua eden sâlih evlat." 
            (Müslim, Vasiyye, 14)
          </blockquote>

          <p>
            Mushaf-ı Şerîf dağıtımı tam bir sadaka-i câriyeldir. Siz dünyadan 
            ayrıldıktan sonra bile, dağıttığınız Mushaflardan okunan her harf, 
            kabrinizdeki nurunuzu artıracak, mizânınızı ağırlaştıracaktır.
          </p>

          <h2 className="text-2xl font-semibold text-black">
            Nereye Dağıtılıyor?
          </h2>

          <p>
            Vakfımız vasıtasıyla toplanan Mushaf-ı Şerîfler şu yerlere 
            dağıtılmaktadır:
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>Medreseler ve Kur'ân kursları</li>
            <li>Camiler ve mescitler</li>
            <li>Yurt dışındaki Müslüman topluluklar</li>
          </ul>

          <h2 className="text-2xl font-semibold text-black">
            Katkınızla Neler Yapılıyor?
          </h2>

          <p>
            Bağışlarınızla satın alınan her Mushaf-ı Şerîf, özenle seçilmiş, 
            kaliteli baskı ve cilt ile temin edilmektedir. Her Mushafın içine, 
            bağış yapan hayırseverin adına veya dilerse vefat eden yakınları 
            adına dua notu konulmaktadır.
          </p>

          <p className="font-medium">
            Allah'ın kelâmını insanlara ulaştırmak için bu hayırlı hizmete 
            ortak olun. Rabbimiz, yaptığınız bu hayırları kabul eylesin ve 
            ahirette şefaatçiniz kılsın. Âmin.
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
            <p className="font-semibold text-green-900">
              "Kim Allah yolunda bir şey infak ederse, o kendisi için yedi yüz 
              kat artırılır." (Bakara, 261)
            </p>
          </div>
        </div>

        <Link href="/banka-hesaplari" className="block pt-4 border-t border-primary/10">
            <Button className="w-full h-14 rounded-[1.2rem] text-lg font-bold bg-primary shadow-xl shadow-primary/20">
                Mushaf-ı Şerif Bağışı Yap
            </Button>
        </Link>
      </div>
    </div>
  );
}