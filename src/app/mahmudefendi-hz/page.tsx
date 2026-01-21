import HeaderSection from "@/components/shared/header-section";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mahmud Efendi Hazretleri (kuddise sirruhû)",
  description: "Mahmud Efendi Hazretleri'nin hayatı, eserleri ve öğretileri",
};

const mahmudEfendiImage = "https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNl9wJQymdM6tVXQErSn8ipIAZRTDkHLP2mB1jC";

export default function MahmudEfendiPage() {
  return (
    <MaxWidthWrapper>
      <HeaderSection
        title="Mahmud Efendi Hazretleri (kuddise sirruhû)"
        description="Şeyhimiz Mahmud Efendi Hazretlerinin (kuddise sirruhû) hayatı, öğretileri ve İslam dünyasına katkıları hakkında bilgi edinin."
        imageUrl={mahmudEfendiImage}
      />

      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-md h-[600px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={mahmudEfendiImage}
              alt="Mahmud Efendi Hazretleri (kuddise sirruhû  )"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Mahmud Efendi Hazretleri'nin Hayatı</h1>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">DOĞUMU</h2>
            <div className="space-y-4 text-base">
              <p>
                Mahmud Efendi Hazretleri 1929'da Trabzon vilâyetinin Of kazasının Miço (Tavşanlı) köyünde doğdu. Babası Mustafa oğlu Ali Efendi, annesi Tufan kızı Fâtıma Hanımefendi verâ ve takva ile maruf muhterem kimseler idiler.
              </p>

              <p>
                Ali Efendi köyün camisinde imamlık yapar, aynı zamanda kendi tarlasında da ziraatla meşgul olurdu. Tarlası câmiye uzak olmasına rağmen vazifesini hiç aksatmaz, mutlaka câmiye gelir, ezan okur ve namazı kıldırırdı.
              </p>

              <p>
                Bazen köylüler ziraatla meşgul olduklarından câmiye gelemezler, Ali Efendi namazı tek başına kılmak zorunda kalacağını bildiği halde işini bırakır, yine de namazını câmide kılardı.
              </p>

              <p>
                Ali Efendi ibadetine düşkün, çokça Kur'ân okuyan kanaat ehli bir kimse idi. 1954 senesinde zorluklarla biriktirdiği parasıyla hacca gitti ve Mekke-i Mükerreme'de rahatsızlanarak vefat edip Cennetü'l-Me'lâ'da, daha önce orada vefat etmiş bulunan babası Mustafa Efendi'nin yakınına defnedildi.
              </p>

              <p>
                Annesi Fâtıma Hanım kul haklarına çok dikkat ederdi. İneklerini meraya götürürken kimsenin bahçesinden otlamasın diye ağızlarını bağlardı. Kazara bir ineği başkasının bahçesinden otlayacak olsa hemen sahibinden helallik ister ve o inekten sağdığı sütün tamamını bahçe sahibine verirdi.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">İLME BAŞLAMASI, HOCALARI VE İCAZETİ</h2>
            <div className="space-y-4 text-base">
              <p>
                Mahmud Efendi Hazretleri altı yaşındayken hafızlığını babası ve annesinde yaptı. Ailesinin ve yetiştiği çevrenin dindarlığının da etkisiyle küçük yaşına rağmen namazları câmide kılıyor, nafile ibadetlere de ihtimam gösteriyordu.
              </p>

              <p>
                Hafızlığını bitirdikten sonra Ramazan ayında Kayseri'ye gidip o bölgenin muteber ulemâsından olan Tesbihcizade Ahmed Efendi'den sarf, nahiv ve Farsça okudu. Kayseri'de bir sene kaldıktan sonra memleketi Of'a dönerek zamanın en meşhur kıraat âlimi Mehmed Rüşdü Aşıkkutlu Hoca Efendi'den Kur'ân-ı Kerîm kıraat etti.
              </p>

              <p>
                Belağat, ilm-i kelam, tefsir, hadis, fıkıh ve usûl-ü fıkh gibi sâir ulûm-i şer'iyyeyi ise aklî ve naklî ilimlerde mütehassıs ulemâdan ve Süleymaniye Medresesi dersiâmlarından olan eniştesi Çalekli Hacı Dursun Fevzi Efendi'den ikmal ederek henüz on altı yaşında iken icazet aldı.
              </p>

              <p>
                Kendisi okurken okutmaya başladığı talebelerini yedi sene kadar okuttuktan sonra askere gitmeden icazet verdi (ki o tarihlerde bu, başarılması çok zor bir işti).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">ŞEYHİ ALİ HAYDAR EFENDİ'YLE TANIŞMASI</h2>
            <div className="space-y-4 text-base">
              <p>
                Askerde bulunduğu sırada ise hayatının seyrini değiştirecek olan en büyük üstadı ve şeyhi Ali Haydar Efendi'yle tanıştı. Ali Haydar Efendi Hazretleri Osmanlı sultanlarından son dört padişahın huzur hocalarından olup, Meşîhat-ı İslâmiyye'de Hey'et-i Te'lîfiyye Reisi idi.
              </p>

              <p>
                Müteassıb bir Hanefî olan Ali Haydar Efendi "Mezâhib-i erbe'anın fıkıh kitapları kaybolsa hepsini ezberden yazdırabilirim" diyecek derecede dört mezhebin fıkhına da vâkıf biriydi ve aynı zamanda dört mezheb müftüsüydü. Mecelle'nin "Büyü' ve icâre" bölümünün hazırlanması Kendisine tevdî edilmiş, Seçtiği sekiz kişilik ilmî bir heyetle bu kısmı itmam etmişti.
              </p>

              <p>
                İşte Mahmud Efendi murad (Allâh-u Te'âlâ tarafından seçilmiş) kullardan olduğu için böyle büyük bir âlim ve şeyh olan Ali Haydar Efendi Kendisinin ayağına gönderildi, şöyle ki: Ali Haydar Efendi'nin kırk sene evvel vefat etmiş olup Bandırma'da medfun bulunan şeyhi Ali Rıza Bezzaz Hazretleri bir gece İstanbul'daki tekkede bulunan Ali Haydar Efendi Hazretleri'ne mânevî yolla zuhur edip, o günlerde orada askerde bulunan Mahmud Efendi'yi takdim ederek: "Bandırma'ya hemen gel ve buradaki emaneti al" diye emir buyurmuş.
              </p>

              <p>
                Bunun üzerine Ali Haydar Efendi derhal Bandırma'ya gidip Tekke Câmii'ne varmış ve yanında bulunan müridlerine: "Burada bir asker var, onu bulun ve bana getirin" buyurmuş.
              </p>

              <p>
                Bundan sonrasını Mahmud Efendi Hazretleri şöyle anlatır: "Küçük yaşlarımdan beri âlimlere ve şeyhlere karşı muhabbetim vardı. Nerede bir âlim, bir Allâh dostu olduğunu öğrensem onu ziyaret ederdim. Bandırma'da acemi birliğinde askerlik yapıyorken orada da ziyaret edip, duasını alabileceğim âlim bir zat, bir şeyh efendi var mı diye merak ediyordum...
              </p>

              <p>
                Bir gün Bandırma'da deniz kenarındaki Haydar Çavuş Câmii'nde cuma namazını eda ettim. Namazdan sonra câminin bir köşesinde beyaz sarıklı, beyaz cübbeli, gayet heybetli ve nûranî bir zat gördüm. Bana padişah gibi heybetli geldi. O zatın kim olduğunu sorduğumda bana: 'İşte O zat Senin görmek istediğin Ali Haydar Efendi Hazretleri'dir' dediler.
              </p>

              <p>
                Gece gittiğimde rahatsız olduğu için erken yatmıştı. Kendisiyle ancak ertesi gün görüşmek nasip oldu, huzuruna girdiğimde beni görür görmez: 'İşte kitaplarımı teslim edeceğim kişi budur' dedi. Böylece görüşüp tanıştık, Beni Kendisine mânen Şeyhi'nin teslim ettiğini bildirdi ve Kendisinden ayrılmamamı tenbih etti, bir daha da O'nu hiç bırakmadım."
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">İLME VERDİĞİ ÖNEM VE DÎNİ İLİMLERİ NEŞRİ</h2>
            <div className="space-y-4 text-base">
              <p>
                Şeyhi Ali Haydar Efendi'nin vefatıyla Mahmud Efendi Hazretleri'nin hayatında yeni bir merhale başlamış oldu. Bir taraftan imamlık yaparak cemaatle, bir taraftan talebe okutmakla, diğer bir taraftan da Ali Haydar Efendi Hazretleri'nin vasiyeti vechile tarikat ehli ihvanı irşâd ile meşgul oluyordu.
              </p>

              <p>
                İmamlık yaptığı İsmailağa Câmii'ni hem tekke hem medrese hem de emr-i bi'l-mâruf ve nehy-i ani'l-münker merkezi olarak kullanıyordu. Osmanlı medreselerinde takib edilen usul üzere daha askere gitmeden önce memleketinde birçok talebe okutmuş ve birçok kimselere icazet vermiş olan Mahmud Efendi Hazretleri'nden İstanbul'da da birçok imam, vâiz ve müftü ders aldı.
              </p>

              <p>
                Kendisi daima insanları ilme, amele ve ihlasa teşvik etti. O zamanlarda ilim okumak ve okutmak hele ki sünnet-i seniyyeden taviz vermeden bu işi yapmak hiç de kolay değildi.
              </p>

              <p>
                Kırk-elli senelik kısa bir zaman zarfında erkekli kadınlı binlerce hoca, on binlerce talebe yetiştirmesinin ve milyonlarla ifade edilen sakallı erkeklerin ve çarşaflı kadınların yetişmesine sebep olmasının her türlü takdirin fevkınde bir hizmet olduğu âşikardır.
              </p>

              <p>
                Kendisine "Bir emriniz, bir arzunuz var mı?" diye soranlara "Her mahalleye bir kız bir erkek medresesi yapın" diye cevap verirdi.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Kendisinin ilme teşvik babındaki bazı sözleri:</h3>
              <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600 space-y-2">
                <p>"Ey talebeler! Sizler, kurumuş toprakların yağmur yüklü bulutları, direksiz kubbenin direklerisiniz."</p>
                <p>"Ömrümden üç nefesim kalsa size okuyun, okuyun, okuyun derim."</p>
                <p>"Sizin yerinizde olsam bu sabah kahvaltı yapmadan ilme başlardım."</p>
              </blockquote>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">İLİM NEŞRİNDE TÂKİP ETTİĞİ USÛL</h2>
            <div className="space-y-4 text-base">
              <p>
                Mahmud Efendi Hazretleri'nin yaşadığı zamana ve Türkiye şartlarındaki insanların ahvâline göre ilmi artırmada kullandığı tedrîcî üslub hayret vericidir.
              </p>

              <p>
                Kur'ân-ı Kerîm okumayı dahi bilmeyen, geçim derdine düşmüş bir millete "On beş-yirmi sene ilim okumalısınız" demiş olsaydı acaba bu ilmi kim kabul ederdi.
              </p>

              <p>
                Bir zaman sonra ilmî seviyeyi yükseltip zikrolunan kitaplara İzhar ve İzzî gibi diğer kitapları eklemiş ve "İzhar okuyan hocadır" buyurarak insanları heveslendirmişti.
              </p>

              <p>
                Daha sonra bu kitaplara Kâfiye, Molla Câmî, Nûru'l-îzah, Mülteka, Telhis, Şerhu'l-Emalî, Şerhu'l-akaid gibi daha yüksek kitapları ekledi.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">ULEMÂYA HURMET VE NUSRETİ</h2>
            <div className="space-y-4 text-base">
              <p>
                Ulemâya, talebelere çok hürmet eder, hallerine ihtimam gösterir ve onların müşkilleriyle bizzat ilgilenirdi. İlmiyle âmil olmayan âlimlere olsun, mücerred hâfızlara olsun son derece tâzim eder, huzuruna girdiklerinde ayağa kalkar, uğurlarken kapıya kadar refâkat eder, hatta arabada dahi ön koltukta oturan hâfız ise ayaklarını ona doğru uzatmaz, derli toplu otururdu.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">İLİM VE TARÎKATI BİRLEŞTİRMESİ</h2>
            <div className="space-y-4 text-base">
              <p>
                Mahmud Efendi Hazretleri, şeyhi Ali Haydar Efendi Hazretleri gibi ilim ve tasavvufu cem eden zülcenâhayn bir zat idi.
              </p>

              <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600 space-y-2">
                <p>"Mürşid olarak bilinen bir şahısta şerîatı tatbik var ise, o şahısta tarîkat da vardır. Şerîat yok ise tarîkat da yoktur, o şahıs mürşid olamaz."</p>

                <p>"Kendinizi rüya veya zuhuratta çok güzel hallerde görebilirsiniz. Şerîata aykırı hal ve hareketleriniz olduğu halde böyle rüyalar görüyorsanız, biliniz ki bu rüyalar sizin için istidractır."</p>
              </blockquote>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">ŞERÎAT VE SÜNNETE İTTİBÂSI</h2>
            <div className="space-y-4 text-base">
              <p>
                Mahmud Efendi Hazretleri insanları sadece sözüyle değil, hâliyle de ilme ve ibadete teşvik etmiş, başladığı hiçbir ibadeti bırakmamış ve istikametiyle görenleri gayrete getirmiştir.
              </p>

              <p>
                Bir ara cemaatinin "Mahmudçular" ismiyle zikredildiğini duyduğunda çok üzülmüş ve cuma hutbesinde şunları söylemiştir:
              </p>
              <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600">
                <p>"Mahmudçular diyorlar. Allâh aşkına! Ben yeni bir din mi îcad ettim?! Rasûlüllâh (Sallâllâhu Aleyhi ve Sellem)in günlük hayatta tatbik edilen dört bin küsur sünneti vardır, dördünü terk ettiğimi gören arkamda namaz kılmasın."</p>
              </blockquote>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">ZİKİR VE TEBLİĞE VERDİĞİ ÖNEM</h2>
            <div className="space-y-4 text-base">
              <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600 space-y-2">
                <p>"Yatmadan evvel biraz ders (tarîkat virdi) ile meşgul olalım. Teheccüd namazından sonra devam edelim. İşrak vakti bitirelim. Ondan sonraki bütün vakitlerimizi ilme harcayacağız."</p>

                <p>"Zikrullah, Efendimiz (Sallâllâhu Aleyhi ve Sellem)e en büyük ittibâdır."</p>

                <p>"İstanbul'un bütün evleri medrese olsa emr-i bi'l-mâruf ve nehy-i ani'l-münker olmasa bir değer ifade etmez."</p>

                <p>"Allah aşkına acıyın bu insanlara. Sel gibi cehenneme akıyorlar."</p>
              </blockquote>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">ÂLİMLERİN KENDİSİ HAKKINDAKİ SÖZLERİ</h2>
            
            <div className="space-y-6 text-base">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Ali Haydar Efendi Hazretleri:</h3>
                <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600">
                  <p>"(İlahî koruma sayesinde) Henüz Mahmud'umun sol tarafına bir seyyie (günah) yazılmamıştır. Mahmud'umun eli Benim elimdir. Bende ne varsa Mahmud'uma verdim. O'nu sevmeyen âhirette Beni göremez."</p>
                </blockquote>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Muhammed Mazhar el-Fârûkî Hazretleri:</h3>
                <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600">
                  <p>"Ben âlemleri gezdim, bu asırda Mahmud Efendi gibi şerîat ve tarîkatı birlikte yaşayan bir zat görmedim."</p>
                </blockquote>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Seyyid Muhammed Alevî el-Mâlikî:</h3>
                <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600">
                  <p>"Dünyada birçok cemaatler gördüm. Kimisi ilme önem verip tasavvufu zâyi etmiş, kimi de tasavvufa ihtimam gösterip ilmi zâyi etmişlerdir, ama Mahmud Efendi ve cemaati ilimle ameli, şerîatla tarîkatı birlikte yaşayıp-yaşatan müstesna cemaatlerdendir."</p>
                </blockquote>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Muhammed Avvâme:</h3>
                <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600">
                  <p>"Allâh Mahmud Efendi'ye merhamet etsin. Gerçekten bu beldeleri ilim doldurmuş."</p>
                </blockquote>
              </div>

              <p className="italic text-gray-600 mt-6">
                Ve daha birçok büyük âlim Mahmud Efendi Hazretleri'nin yüce makamını tasdik etmiş, kendisine intisab etmiş ve hürmetlerini arz etmişlerdir.
              </p>
            </div>
          </section>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}