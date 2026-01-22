import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FaziletliAmellerPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 space-y-12">
        <h1 className="text-4xl font-bold">Faziletli Amel Paylaşımları</h1>

        {/* ================= TANITIM ================= */}
        <section className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            Muhammed Emre Karadayı Hocamız, <a href="https://instagram.com/islamimerci" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold">Resmî İslami Merci Instagram hesabımızdan</a> faziletli amel paylaşımları yapmaktadır. Bu paylaşımlarda; mübarek gün ve gecelerde yapılacak ibadetler, namazda sıkça yapılan hatalar ve bunların doğru şekilleri, faziletli zikirler, dualar, salavatlar ve günlük hayatta kolayca uygulanabilecek sünnetler vb. bilgiler düzenli olarak aktarılmaktadır.
          </p>

          <p>
            Hocamız çoğunlukla <strong>Cübbeli Ahmet Hocamızın </strong> (رحمه الله) risaleleri olmak üzere, klasik kaynaklardan ve özellikle <b>İmamzâde Rüknülislâm Sedîdüddîn Muhammed b. Ebî Bekr Hazretlerinin</b> (رحمه الله) enfes eseri Osmanlı Ulemâsının elinden düşürmediği <strong>Şir'atü'l-İslâm'dan</strong> istifade etmektedir.
          </p>
        </section>

        {/* ================= FOTOĞRAF KOLAJ ================= */}
      <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">Instagram Paylaşımlarından Örnekler</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="w-full aspect-[9/16] rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNlHFVc3WdXAsEVpGId86leBxk0w1cWoU5g4Tqi" 
                alt="Instagram Reels 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full aspect-[9/16] rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNljKMWNu3HpKZ0zU5W2ysk7DBQ86OdXIw1G3li" 
                alt="Instagram Reels 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full aspect-[9/16] rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNlCoj9ubyU0lMRKYOckWxmwejH8ufbLvrnXEos" 
                alt="Instagram Reels 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full aspect-[9/16] rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNlI40Wo6PmcXsaGLYp37nVoTxQH1JbiWFEkrj9" 
                alt="Instagram Reels 4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p/>
        <Link href="https://instagram.com/islamimerci" target="_blank">
            <Button className="w-full h-12 rounded-lg bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:shadow-lg hover:shadow-green-500/50 text-white font-bold transition-all duration-300">
            → Instagram Sayfamızı Ziyaret Edin
            </Button>
        </Link>
        </section>

        {/* ================= ZAYIF HADİSLE AMEL ================= */}
        <section className="space-y-8 text-gray-800 leading-relaxed text-lg">
          <h2 className="text-3xl font-bold text-black">Zayıf Hadisle Amel Etmenin Önemi</h2>

          <div className="space-y-4">
            <p>
              Hocamızın paylaşımlarının altına bazen bilmeyen kardeşlerimiz "Hocam sizin paylaştığınız bu hadis zayıf. Amel edilemez" minvalinde yorumlar yazıyorlar. O kardeşlerimizin şüphelerine binaen bu kısmı eklemenin faydalı olacağını düşündük. Ehl-i Sünnet Âlimleri <strong>faziletli ameller</strong>, <strong>nafile ibadetler</strong> ve <strong>ahlâk</strong> konularında zayıf hadisle amel edilebileceğini kabul etmiştir. 
            </p>
          
            {/* ================= KLASİK ÂLİMLER ================= */}
            <p>
              Hanefî fakihi, usul ve kelâm âlimi <strong> İmam İbn'ül-Hümâm  Hazretleri (رحمه الله) </strong>, muhteşem insan büyük Hanefi Fakihi <strong>İmam Burhâneddin el-Mergīnânî'nin (رحمه الله) </strong> el-Hidâye adlı eserine yazmış olduğu Fethu'l-Kadîr adlı şerhinde bu hususta Mukaddes Hanefî mezhebinin görüşünü şöyle beyan etmektedir:
            </p>
            
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4 text-gray-800">
              <p className="italic">
                "Müstehâb (hükmü) mevzû olmayan zayıf (haber) ile sabit olur."
              </p>
              <p className="text-sm text-gray-600">(İbnü'l-Hümâm, Fethü'l-Kadîr, II/133.)</p>
            </div>
            
            <p>
              <strong>İmam İbnü'l-Hümâm </strong>, eserinin başka bir yerinde ise şöyle söylemektedir:
            </p>
            
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4 text-gray-800">
              <p className="italic">
                "Mevzû olmayan zayıf hadis ile fezâil-i a'mâl konularında amel edilir."
              </p>
              <p className="text-sm text-gray-600">(İbnü'l-Hümâm, Fethü'l-Kadîr, I/349.)</p>
            </div>
            
            <p>
              Fakihlerin sonuncusu, fıkıh ilminde üstünlüğü anlatmakla bitmez <strong>İmam İbn Âbidîn Hazretleri</strong> de (رحمه الله) Reddu'l-Muhtar isimli meşhûr eserinde, amellerin faziletleri hususunda <strong>zayıf hadislerle amel edilebileceğini</strong> zikretmiştir:
            </p>

            {/* Delil Örneği */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4 text-gray-800">
              <p className="italic">
                Abdestten sonra Kadir Suresi okunması hakkında bazı hadisler vardır. Fakîh Ebu'l-Leys «Mukaddime»sinde bunları beyan etmişse de «el-Hilye» sahibi şöyle demektedir: Üstadımız Hâfız İbni Hacer Askalânî'ye sorulmuş ve hiçbirinin Peygamber (s.a.v.)'den kavlen veya fiilen sabit olmadığı belirtilmiştir. Ancak ulema zayıf hadisleri, amellerin faziletleri babında amel hususunda müsamaha gösterirler.
              </p>
              <p className="text-sm text-gray-600">(İbn Âbidîn, Reddu'l-Muhtar, I/212)</p>
            </div>

            <p>
              <strong>İmam İbnü's-Salâh eş-Şehrezûrî</strong>'nin Muḳaddime'sini özetleyen <strong>İmam Nevevî</strong>'nin et-Taḳrîb ve't-teysîr'ine <strong>İmam Süyûtî</strong>'nin (ö. 911/1505) yazdığı şerh olan <strong>Tedrîbü'r-Râvî</strong> adlı eserde Hadis ilminin İmamlarından (Allah onlardan razı olsun) şu görüş nakledilir:
            </p>
            
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4 text-gray-800">
              <p className="italic">
                "Ehl-i hadîs ve diğer âlimler nezdinde, mevzû (uydurma) olmamak şartıyla zayıf hadislerin; kıssalar, amellerin faziletleri, öğütler ve ahlâk gibi akâid ve ahkâm dışındaki konularda rivayet edilmesi ve onlarla amel edilmesi câizdir. Bu görüş Ahmed bin Hanbel, İbn Mehdî ve İbnü'l-Mübârek'ten nakledilmiştir. Onlar şöyle demiştir: 'Helâl–haram konularında rivayet ederken çok titiz davranırız. Faziletler konusunda ise müsamahakâr oluruz.'" 
              </p>
              
              <p>Ayrıca <strong>İbn Hacer el-Askalânî رحمه الله</strong> bu konuda üç temel şart zikretmiştir:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Zayıflık derecesi çok şiddetli olmamalıdır (yalancı raviler olmamalı).</li>
                <li>Amel edilen konu, dinin genel esaslarına aykırı olmamalıdır.</li>
                <li>Hadisin kesin sabit olduğuna inanılmamalı, ihtiyat niyetiyle amel edilmelidir.</li>
              </ul>
              <p className="text-sm text-gray-600">(İmam Süyûtî, Tedrîbü'r-Râvî, Yazma Eserler Kurumu, cilt 1, s. 646)</p>
            </div>
            
            <p>
              Yine <strong>İmam Nevevî Hazretleri (رحمه الله)</strong> el-Ezkâr eserinde şöyle der:
            </p>
            
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4 text-gray-800">
              <p className="italic">
                "Muhaddis, fakîh ve diğer bazı âlimler, fezâil, tergîb ve terhîb konularında mevzû olmamak şartıyla zayıf hadislerle amel etmeyi caiz ve müstehap görürler."
              </p>
              <p className="text-sm text-gray-600">(İmam Nevevî, el-Ezkâr, I/8)</p>
            </div>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-lg">
              <p className="font-medium text-emerald-900">
                Bu mesele hakkında daha tafsilatlı ve ilmî bir izah için Cübbeli Ahmet Hocamızın şu dersini özellikle tavsiye ederiz:
              </p>
              <a href="https://www.youtube.com/watch?v=mfGFjrFO1LM" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-emerald-700 font-semibold underline hover:text-emerald-900">
                ▶ Zayıf Hadîsle Amel Etmenin Önemi – Cübbeli Ahmet Hoca (YouTube)
              </a>
            </div>
          </div>
        </section>

        

        {/* ================= KAYNAKLAR ================= */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">Başlıca Kaynaklar</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Cübbeli Ahmet Hocamızın Kitapları, Dergileri ve Sohbetleri</li>
            <li>Şir'atü'l-İslâm</li>
            <li>Faziletleriyle Gün Ve Geceler - M. İsmail Kemaloğlu</li>
            <li>İhyâ-u Ulûmiddîn</li>
          </ul>
        </section>

        {/* ================= ÇAĞRI ================= */}
        <section className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 space-y-4">
          <p className="text-lg font-medium text-gray-800">Bu faziletli amelleri öğrenmekle kalmayın, yayılmasına da vesile olun.</p>
          <p className="text-gray-700">Bir kişiye öğretmeniz, onun yaptığı her amelden size de sevap kazandırır.</p>
          <Link href="https://instagram.com/islamimerci" className="block">
          <Button className="w-full h-14 rounded-[1.2rem] text-lg font-bold bg-primary shadow-xl shadow-primary/20">Faziletli Amelleri Paylaş</Button>
          </Link>
        </section>

        {/* ================= DUA ================= */}
        <section className="text-center italic text-gray-600">
          "Allah'ım! Bizi hayra delalet edenlerden, hayra vesile olanlardan ve hayırla amel edenlerden eyle. Âmin."
        </section>
      </div>
    </div>
  );
}