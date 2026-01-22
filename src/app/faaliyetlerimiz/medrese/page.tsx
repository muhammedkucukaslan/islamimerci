import { Button } from "@/components/ui/button";

export default function MedresePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 space-y-12">
        <h1 className="text-4xl font-bold">Medresemize Destek Olun</h1>

        {/* ================= GÖRSELLER ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNlwG1i8I9cpQ9F4PjxLTW0fdDvlhMbaRq7utVk"
            alt="Medrese 1"
            className="rounded-xl object-cover w-full h-80"
          />
          <img
            src="https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNltDB6Y4bkS9WNFG1KhvArmfz82tRVdqoxBige"
            alt="Medrese 2"
            className="rounded-xl object-cover w-full h-80"
          />
        </div>


        {/* ================= İLMİN FAZİLETİ ================= */}
        <section className="space-y-8 text-gray-800 leading-relaxed text-lg">
          <h2 className="text-3xl font-bold text-black">
            İlmin Fazileti – Kur’ân ve Sünnetten Deliller
          </h2>

          <div className="space-y-4">
            <p className="font-semibold">Kur’ân-ı Kerîm’den:</p>

            <blockquote className="border-l-4 bg-green-50 pl-4 italic">
              "Allah, sizden iman edenlerin ve kendilerine ilim verilenlerin derecelerini yükseltir." (Mücâdele, 11)
            </blockquote>

            <blockquote className="border-l-4 pl-4 bg-green-50 italic">
              “De ki: Hiç bilenlerle bilmeyenler bir olur mu?” (Zümer, 9)
            </blockquote>

            <blockquote className="border-l-4 pl-4  bg-green-50 italic">
              “Allah’tan kulları içinde ancak âlimler hakkıyla korkar.” (Fâtır, 28)
            </blockquote>

            <blockquote className="border-l-4 pl-4 bg-green-50 italic">
              “Rabbim, ilmimi artır.” (Tâhâ, 114)
            </blockquote>
          </div>

          <div className="space-y-4">
            <p className="font-semibold">Rasûlullah ﷺ buyuruyor:</p>

            <blockquote className="border-l-4 pl-4 bg-green-50 italic">
              “İlim talep etmek her Müslümana farzdır.” (İbn Mâce, Mukaddime 17)
            </blockquote>

            <blockquote className="border-l-4 pl-4 bg-green-50 italic">
              “Kim ilim öğrenmek için bir yola girerse Allah ona cennete giden yolu kolaylaştırır.” (Müslim, Zikir 38)
            </blockquote>

            <blockquote className="border-l-4 pl-4 bg-green-50 italic">
              “Âlimin âbid üzerine üstünlüğü, benim sizin en aşağı derecede olanınıza üstünlüğüm gibidir.” (Tirmizî, İlim 19)
            </blockquote>

            <blockquote className="border-l-4 pl-4 bg-green-50 italic">
              “Melekler, ilim talebesinden razı olarak ona kanatlarını gerer.” (Ebû Dâvûd, İlim 1)
            </blockquote>

            <blockquote className="border-l-4 pl-4 bg-green-50 italic">
              “Göklerde ve yerde olanlar, hatta denizdeki balıklar bile âlim için istiğfar eder.” (Tirmizî, İlim 19)
            </blockquote>
          </div>
        </section>

        {/* ================= MAHMUD EFENDİ ================= */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-black">
            Mahmud Efendi Hazretleri’nin Medrese Hakkındaki Sözleri
          </h2>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-lg space-y-4">
            <p className="italic text-amber-800">
              “Medrese gerisi vesvesedir.”
            </p>
            <p className="italic text-amber-800">
              "Şu medrese öyle bir nimettir ki başınızı seccadeden kaldırmasanız yine şükrünü ödeyemezsiniz."
            </p>

            <p className="italic text-amber-800">
              “Medreseler kapanırsa din çöker. Medrese ayakta kalırsa ümmet ayakta kalır.”
            </p>

            <p className="italic text-amber-800">
              “Talebe yetiştirmek, bir memleket fethetmekten daha hayırlıdır.”
            </p>

            <p className="italic text-amber-800">
              “Bir talebenin sırtını sıvazlayan, kıyamete kadar onun amel defterine ortak olur.”
            </p>
          </div>
        </section>

        {/* ================= SADAKA-İ CARİYE ================= */}
        <section className="space-y-6 text-lg leading-relaxed">
          <h2 className="text-3xl font-bold text-black">Sadaka-i Câriye: Bitmeyen Ticaret</h2>

          <blockquote className="border-l-4 pl-4 italic">
            “İnsan ölünce amel defteri kapanır. Ancak üç şey müstesna:
            Sadaka-i câriye, faydalanılan ilim, kendisine dua eden hayırlı evlat.”
            <br />(Müslim, Vasiyye 14)
          </blockquote>

          <p>
            Medreseye yapılan her yardım, <b>sadaka-i câriyedir</b>.
            Talebenin okuduğu her âyet, ezberlediği her hadis, öğrettiği her ilim
            bağış sahibinin amel defterine yazılmaya devam eder.
          </p>

          <p>
            Bir talebe yetişir, bir âlim olur. O bir kişiye öğretir, o on kişiye…
            Bu silsile kıyamete kadar devam eder.
            İşte medreseye yapılan yardım, böylesine büyük ve tükenmeyen bir kazançtır.
          </p>
        </section>

        {/* ================= GÖRSELLER ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNlwG1i8I9cpQ9F4PjxLTW0fdDvlhMbaRq7utVk"
            alt="Medrese 1"
            className="rounded-xl object-cover w-full h-80"
          />
          <img
            src="https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNltDB6Y4bkS9WNFG1KhvArmfz82tRVdqoxBige"
            alt="Medrese 2"
            className="rounded-xl object-cover w-full h-80"
          />
        </div>

        {/* ================= MEDRESE TANITIM ================= */}
        <section className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            Medresemiz, Ehl-i Sünnet vel Cemaat üzere, Kur’ân ve Sünnet yolunda,
            Mahmud Efendi Hazretlerinin usûlüne uygun olarak talebe yetiştirmektedir.
          </p>

          <p>
            Burada dünya için değil, ahiret için yaşayan gençler yetişmektedir.
            Gece gündüz kitap başında, ilim yolunda çile çeken bu talebeler ümmetin geleceğidir.
          </p>
        </section>

        {/* ================= İHTİYAÇLAR ================= */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-black">
            Medrese Talebelerinin İhtiyaçları
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Tefsir, hadis, fıkıh, akaid kitapları</li>
            <li>Arapça sarf–nahiv eserleri</li>
            <li>Kırtasiye malzemeleri</li>
            <li>Yurt ve barınma giderleri</li>
            <li>Günlük yemek masrafları</li>
            <li>Hoca maaşları</li>
            <li>Elektrik, su, doğalgaz</li>
            <li>Bina bakım ve onarım</li>
            <li>Kütüphane giderleri</li>
          </ul>
        </section>

        {/* ================= ÇAĞRI ================= */}
        <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-4">
          <p className="text-lg text-gray-800 font-medium">
            Bir talebenin duasında yer almak ister misiniz?
            Bir âlimin yetişmesine ortak olmak ister misiniz?
          </p>

          <p className="text-gray-700">
            Medresemize yardımcı olmak için Instagram DM üzerinden bizimle iletişime geçebilirsiniz.
          </p>

          <Button className="w-full h-14 rounded-[1.2rem] text-lg font-bold bg-primary shadow-xl shadow-primary/20">
            İletişime Geç
          </Button>
        </section>

        {/* ================= DUA ================= */}
        <section className="text-center italic text-gray-600">
          “Allah’ım! Medreselerimizi ayakta tut.
          Talebelerimizi muhafaza eyle.
          Destek veren kardeşlerimizi iki cihanda aziz eyle. Âmin.”
        </section>
      </div>
    </div>
  );
}
