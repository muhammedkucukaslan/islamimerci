import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GazzePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 space-y-10">
        <h1 className="text-4xl font-bold">Gazze'ye Yardım Eli Uzatın</h1>

        {/* Photo Collage */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <img
            src="https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNlgE6Xw4J89iDG0OpbzcY7MhmVkW6lHufaEgRq"
            alt="Gazze 1"
            className="rounded-lg object-cover w-full h-48"
          />
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            Gazze'de yaşanan insanlık dramı karşısında sessiz kalamayız. 
            Mazlumların yanında olmak, İslam'ın emridir. Çocuklar, kadınlar, 
            yaşlılar... Hepsi acil yardıma muhtaç durumdalar.
          </p>

          <h2 className="text-2xl font-semibold text-black">
            Mazluma Yardım Etmenin Fazileti
          </h2>

          <p>Rasûlullah sallallahu aleyhi ve sellem buyurdu:</p>

          <blockquote className="border-l-4 pl-4 italic">
            "Müslüman, Müslüman'ın kardeşidir. Ona zulmetmez ve onu yalnız 
            bırakmaz. Kim kardeşinin ihtiyacını giderirse, Allah da onun 
            ihtiyacını giderir." (Buhârî, Mezâlim, 3)
          </blockquote>

          <blockquote className="border-l-4 pl-4 italic">
            "İnsanların en hayırlısı insanlara faydalı olandır." 
            (Dârimî, Mukaddime, 36)
          </blockquote>

          <blockquote className="border-l-4 pl-4 italic">
            "Kim bir mü'minin dünya sıkıntılarından birini giderirse, Allah da 
            onun kıyamet günü sıkıntılarından birini giderir." 
            (Müslim, Zikr, 38)
          </blockquote>

          <h2 className="text-2xl font-semibold text-black">
            Gazze'de Neler Oluyor?
          </h2>

          <p>
            Gazze'de yaşayan kardeşlerimiz en temel ihtiyaçlardan bile mahrum 
            durumda. Bombardımanlar sonucu evlerini kaybeden aileler, açlık ve 
            susuzlukla mücadele ediyor. Hastaneler yetersiz, ilaçlar tükeniyor, 
            çocuklar tedavi olamıyor.
          </p>

          <h2 className="text-2xl font-semibold text-black">
            Acil İhtiyaçlar
          </h2>

          <ul className="list-disc list-inside space-y-1">
            <li>Gıda kolisi ve temiz su</li>
            <li>İlaç ve tıbbi malzeme</li>
            <li>Çadır ve barınma malzemeleri</li>
            <li>Battaniye ve giyecek</li>
            <li>Bebek maması ve hijyen ürünleri</li>
            <li>Yaralılar için acil tıbbi yardım</li>
          </ul>

          <h2 className="text-2xl font-semibold text-black">
            Yardımlarınız Nasıl Ulaştırılıyor?
          </h2>

          <p>
            Bağışlarınız, güvenilir yardım kuruluşları aracılığıyla Gazze'ye 
            ulaştırılmaktadır. Her kuruş, ihtiyaç sahiplerine dönüşmekte, 
            açların karnını doyurmakta, yaralıların yaralarını sarmaktadır.
          </p>
          <p>
                Açları doyurmamak, onlarla ilgilenmemek, Kur’ânî ifâdeyle; “sarp yokuşu aşamamak”tır. Cenâb-ı Hak şöyle buyurur:
          </p>



          <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
            <p className="font-semibold text-black-900">
              “Fakat o, sarp yokuşu aşamadı. O sarp yokuş nedir bilir misin? Köle âzâd etmek veya açlık gününde yakını olan bir yetimi, yahut aç-açık bir yoksulu doyurmaktır.” (el-Beled, 11-16)
            </p>
          </div>

          <p className="font-medium">
            Gazze'deki kardeşlerimizin feryadı göklere yükseliyor. Bu zulme 
            karşı yapabileceğimiz en önemli şeylerden biri, elimizi taşın 
            altına koymak ve onlara maddi destek sağlamaktır. Her bağışınız, 
            bir canın hayata tutunmasına vesile olabilir.
          </p>

          <p className="italic text-gray-600">
            "Rabbimiz! Mazlum kardeşlerimizi koru, zalimlerin zulmünü def eyle. 
            Yardım ellerimizi onlara ulaştır, dualarımızı kabul eyle. Âmin."
          </p>
        </div>

        <Link href="/banka-hesaplari" className="block pt-4 border-t border-primary/10">
            <Button className="w-full h-14 rounded-[1.2rem] text-lg font-bold bg-primary shadow-xl shadow-primary/20">
                Gazze'ye Yardım Bağışı Yapın
            </Button>
        </Link>
      </div>
    </div>
  );
}