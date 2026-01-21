import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Medresemize Destek Olun",
  description: "Medrese talebelerinin eğitimi için bağış yaparak destek olun.",
};

export default function MedresePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 space-y-10">

        <h1 className="text-4xl font-bold">Medresemize Destek Olun</h1>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            src="https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNlwG1i8I9cpQ9F4PjxLTW0fdDvlhMbaRq7utVk"
            alt="Medrese 1"
            width={800}
            height={400}
            className="rounded-xl object-cover"
          />
          <Image
            src="https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNltDB6Y4bkS9WNFG1KhvArmfz82tRVdqoxBige"
            alt="Medrese 2"
            width={600}
            height={400}
            className="rounded-xl object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">

          <p>
            Medresemiz, Mahmud Efendi Hazretlerinin yoluna uygun olarak talebe
            yetiştirmekte, Kur’ân-ı Kerîm ve Sünnet-i Seniyye üzere hizmet
            vermektedir. Bu hayırlı hizmetin devamı için maddî ve manevî
            desteklerinize ihtiyaç vardır.
          </p>

          <h2 className="text-2xl font-semibold text-black">İlmin Fazileti</h2>

          <p>Rasûlullah sallallahu aleyhi ve sellem buyurdu:</p>

          <blockquote className="border-l-4 pl-4 italic">
            “İlim talep etmek her Müslümana farzdır.” (İbn Mâce, Mukaddime, 17)
          </blockquote>

          <blockquote className="border-l-4 pl-4 italic">
            “Âlimin âbid üzerine üstünlüğü, benim sizin en aşağı derecede olanınıza
            üstünlüğüm gibidir.” (Tirmizî, İlim, 19)
          </blockquote>

          <blockquote className="border-l-4 pl-4 italic">
            “Kim ilim öğrenmek için bir yola girerse, Allah ona cennete giden yolu
            kolaylaştırır.” (Müslim, Zikr, 38)
          </blockquote>

          <h2 className="text-2xl font-semibold text-black">Neden Bağış?</h2>

          <p>
            Bu medreselerde yetişen her bir talebe, Kur’ân’a ve Sünnete hizmet
            edecek, ümmetin istikbali için bir ışık olacaktır. Sizlerin
            bağışlarıyla daha fazla gencimiz ilim yolunda yetişecektir.
          </p>

          <h2 className="text-2xl font-semibold text-black">
            Dualarınızla ve Desteklerinizle
          </h2>

          <p>
            Her bir bağışınız sadaka-i cariye hükmündedir. Sizlerden istirhamımız,
            bu hizmete gönülden katılmanızdır. Rabbimiz, yaptığınız yardımları
            mizânınızda ağır kılsın. Âmin.
          </p>

          <p>Medreselerde eğitim gören öğrencilerin ihtiyaçları:</p>

          <ul className="list-disc list-inside space-y-1">
            <li>Kitap ve kırtasiye malzemeleri</li>
            <li>Yurt ve beslenme desteği</li>
            <li>Hoca maaşları</li>
            <li>Bina bakım ve onarım</li>
          </ul>

          <p className="font-medium">
            İslami ilimlerin öğrenilmesi ve yaşatılması için bağış yapın.
          </p>
        </div>

        
     <Link href="/banka-hesaplari" className="block pt-4 border-t border-primary/10">
  <Button className="w-full h-14 rounded-[1.2rem] text-lg font-bold bg-primary shadow-xl shadow-primary/20">
    Bağış Yap
  </Button>
</Link>

      </div>
    </div>
  );
}
