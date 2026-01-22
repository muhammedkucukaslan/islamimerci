import { Button } from "@/components/ui/button";

export default function FaziletliAmellerPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 space-y-12">
        <h1 className="text-4xl font-bold">Faziletli Ameller </h1>

        {/* ================= TANITIM ================= */}
        <section className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            Muhammed Emre Karadayı Hocamız, <a href="https://instagram.com/islamimerci" target="_blank" rel="noopener noreferrer" className="text-blue-600 strong">Resmî İslami Merci Instagram hesabımızdan</a> faziletli amel paylaşımları yapmaktadır. Bu paylaşımlarda; mübarek gün ve gecelerde yapılacak ibadetler, namazda sıkça
yapılan hatalar ve bunların doğru şekilleri, faziletli zikirler, dualar,
salavatlar ve günlük hayatta kolayca uygulanabilecek sünnetler düzenli
olarak aktarılmaktadır.
          </p>

          <p>
            Hocamız çoğunlukla <strong>Cübbeli Ahmet Hocamızın(رحمه الله)</strong> risaleleri
            olmak üzere, klasik kaynaklardan ve özellikle <b>İmamzâde Rüknülislâm Sedîdüddîn Muhammed b. Ebî Bekr Hazretlerinin</b>  enfes eseri Osmanlı Ulemâsının elinden düşürmediği <strong>Şir’atü’l-İslâm'dan</strong> istifade etmektedir.
          </p>
        </section>

        {/* ================= FOTOĞRAF KOLAJ ================= */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">Instagram Paylaşımlarından Örnekler</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-full aspect-[9/16] bg-gray-200 rounded-xl flex items-center justify-center text-gray-500"
              >
                Reels Görseli {i}
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500 italic">
            (Buraya Instagram post / reels ekran görüntülerini ekleyebilirsiniz)
          </p>
        </section>

        {/* ================= ZAYIF HADİSLE AMEL ================= */}
        <section className="space-y-8 text-gray-800 leading-relaxed text-lg">
          <h2 className="text-3xl font-bold text-black">Zayıf Hadisle Amel Etmenin Önemi</h2>

          <div className="space-y-4">
            <p>
              İslam âlimlerinin büyük çoğunluğu, <strong>faziletli ameller</strong>,
              <strong>nafile ibadetler</strong> ve <strong>ahlâk</strong> konularında zayıf
              hadisle amel edilebileceğini kabul etmiştir.
            </p>

            <p>
              Bu konuda İmam Nevevî, İmam Ahmed bin Hanbel, İbn Hacer el-Askalânî,
              Süyûtî gibi büyük muhaddis ve fakihler şu üç şartla cevaz vermiştir:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Hadis çok şiddetli derecede zayıf olmayacak</li>
              <li>Aslı Kur’ân ve sahih sünnete aykırı olmayacak</li>
              <li>Farz veya haram hükmü koymak için değil, fazilete teşvik için olacak</li>
            </ul>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-lg">
              <p className="italic text-amber-900">
                “Faziletli ameller konusunda zayıf hadisle amel etmek caizdir ve
                selef-i salihîn bu şekilde amel etmiştir.”
              </p>
              <p className="mt-2 text-amber-800 text-sm">– İmam Nevevî رحمه الله</p>
            </div>

            <p>
              Bu sebeple bu sayfada yer alan birçok amel, sahih hadislerle birlikte
              fazilet babında gelen zayıf rivayetlerden de istifade edilerek
              derlenmiştir.
            </p>
          </div>
        </section>

        {/* ================= FAZİLETİN DEĞERİ ================= */}
        <section className="space-y-6 text-gray-700 text-lg">
          <h2 className="text-2xl font-semibold text-black">Küçük Amel, Büyük Kazanç</h2>

          <p>
            Nice küçük görünen amel vardır ki, Allah katında dağlar kadar sevap
            kazandırır. Bir tesbih, bir salavat, bir dua, bir yetimin başını okşamak,
            bir mümine tebessüm etmek…
          </p>

          <p>
            Bu ameller; kalbi diriltir, kabri nurlandırır, mizanda ağır gelir ve
            sahibini Allah’a yaklaştırır.
          </p>
        </section>

        {/* ================= KAYNAKLAR ================= */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">Başlıca Kaynaklar</h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Cübbeli Ahmet Hocamızın Risaleleri ve Dergileri</li>
            <li>Şir’atü’l-İslâm</li>
            <li>İhyâ-u Ulûmiddîn</li>
            <li>Riyâzü’s-Sâlihîn</li>
            <li>Tergîb ve Terhîb</li>
          </ul>
        </section>

        {/* ================= ÇAĞRI ================= */}
        <section className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 space-y-4">
          <p className="text-lg font-medium text-gray-800">
            Bu faziletli amelleri öğrenmekle kalmayın, yayılmasına da vesile olun.
          </p>

          <p className="text-gray-700">
            Bir kişiye öğretmeniz, onun yaptığı her amelden size de sevap
            kazandırır.
          </p>

          <Button className="w-full h-14 rounded-[1.2rem] text-lg font-bold bg-primary shadow-xl shadow-primary/20">
            Faziletli Amelleri Paylaş
          </Button>
        </section>

        {/* ================= DUA ================= */}
        <section className="text-center italic text-gray-600">
          “Allah’ım! Bizi hayra delalet edenlerden, hayra vesile olanlardan ve
          hayırla amel edenlerden eyle. Âmin.”
        </section>
      </div>
    </div>
  );
}
