interface CategoryTranslations {
  tr: string;
  en: string;
  ar: string;
}

interface Category {
  id: number;
  name: CategoryTranslations;
  slug: string;
}

interface ActivityPrice {
  amount: number;
  currency: string;
}

interface Activity {
  slug: string;
  title: string;
  content: string;
  images: string[];
  is_constant_price: boolean;
  price: ActivityPrice[];
}

const categories: Category[] = [
  {
    id: 1,
    name: {
      tr: "Medrese",
      en: "Madrasa",
      ar: "المدرسة",
    },
    slug: "medrese",
  },
  {
    id: 2,
    name: {
      tr: "Gazze Su",
      en: "Gaza Water",
      ar: "مياه غزة",
    },
    slug: "gazze-su",
  },
  {
    id: 3,
    name: {
      tr: "Gazze Yemek",
      en: "Gaza Food",
      ar: "طعام غزة",
    },
    slug: "gazze-yemek",
  },
  {
    id: 6,
    name: {
      tr: "Afrika'da İftar",
      en: "Iftar in Africa",
      ar: "إفطار في أفريقيا",
    },
    slug: "afrika-iftar",
  },
  {
    id: 9,
    name: {
      tr: "Sokak Hayvanlarına Yem Mama",
      en: "Food for Stray Animals",
      ar: "طعام للحيوانات الضالة",
    },
    slug: "sokak-hayvanlarina-yem-mama",
  },
];

export const siteConfig = {
  name: "Islamimerci",
  description: "İslamimerci bağış platformu",
  categories,
  links: {
    twitter: "https://twitter.com/islamimerci",
    instagram: "https://www.instagram.com/islamimerci/",
    facebook: "https://www.facebook.com/muhammedemrekaraday",
    youtube: "https://www.youtube.com/@islamimerci",
  },
  contact: {
    phone: "+90 532 599 1843",
    email: "info@islamimerci.org",
  },
  about: {
    image: "/images/logo/islamimerci-logo.png",
    pageDescription: [
      {
        language: "tr",
        content:
          "İslami Merci Derneği, Rasulullah sallallahu aleyhi ve sellem’in davasını yaşatma gayesiyle kurulmuş bir hayır kuruluşudur. Gayemiz; medrese eğitimi, Gazze su ve yemek projeleri, tebliğ faaliyetleri, muhtaç aileler ve hayvanlara yardım gibi alanlarda ümmetin hizmetinde olmaktır.",
      },
      {
        language: "en",
        content:
          "Islamic Marji Association is a charitable foundation established to carry on the mission of the Prophet Muhammad (peace be upon him). Our aim is to serve the Ummah through madrasa education, Gaza water and food projects, da'wah activities, and aid to needy families and animals.",
      },
      {
        language: "ar",
        content:
          "جمعية المرجع الإسلامي هي مؤسسة خيرية أُنشئت لإحياء رسالة النبي محمد صلى الله عليه وسلم. هدفنا هو خدمة الأمة من خلال التعليم في المدارس، ومشاريع الماء والطعام في غزة، وأنشطة الدعوة، ومساعدة الأسر المحتاجة والحيوانات.",
      },
    ],
    aboutContent: [
      {
        language: "tr",
        content: `
        Âlemlerin Rabbi, kâinatın kapladığı her bir zerreyi yoktan var eden, onların her halinden haberdar olan ve üzerinde mutlak kudret sahibi bulunan Allah Azze ve Celle’ye hamd-u senâlar olsun. Âlemlere rahmet olarak gönderilen Sevgili Peygamberimiz Muhammed Mustafa’ya (sallallahu aleyhi ve sellem), O’nun mübarek kardeşleri olan Hz. Âdem’den Hz. Îsâ’ya kadar gelen tüm peygamberlere, Allah yolunda cihad etmiş ve büyük mücadeleler vermiş Ashâb-ı Kirâm’a ve onların izinden giderek ilmi muhafaza edip insanlara öğreten Ehl-i Sünnet âlimlerine salât ve selâm olsun.

        Bu faziletleri saymakla bitmeyen, pek mübarek ve üstün zâtların kutlu davasını devam ettirmek niyetiyle İslami Merci Derneği, 04.07.2024 tarihinde Derneğimizin Başkanı Muhammed Emre Karadayı Hoca Efendi ve dava arkadaşları tarafından kurulmuştur.

        Başkanımız Muhammed Emre Karadayı Hoca Efendi, üç yılı aşkın bir süredir özellikle Instagram başta olmak üzere çeşitli sosyal medya platformlarında İslâm’a hizmet etmektedir. Rabbimizin lütuf ve bereketiyle bu hizmetler kısa sürede geniş bir kitleye ulaşmış ve bugün derneğimizin temelini teşkil etmiştir.

        Üstadımız ve Sultanımız Hacı Mahmud Ustaosmanoğlu Hazretleri’nin bizlere bıraktığı en büyük miras olan medreseleri ihyâ etmek, ümmetin kurtuluşu için zaruri olan emr-i bi’l ma’rûf ve nehy-i ani’l münker vazifesini omuzlarında taşıyacak tebliğ ehli hocalar yetiştirmek, derneğimizin en büyük gayesidir.

        Bunun yanında Allah’ın izni ve siz hayırsever kardeşlerimizin desteğiyle:

        İzzet diyarı Gazze’ye su ve yemek yardımları ulaştırılmakta,

        Afrika’da kurbanlar kesilmekte,

        İhtiyaç sahibi ailelere yardımlar yapılmakta,

        Sokak hayvanlarına mama dağıtılmakta,
        ve bunun gibi daha nice hayırlı hizmetler ifa edilmektedir.

        Rabbimiz, bu hizmetleri daim eylesin; sizlerin yapmış olduğu her yardımı sadaka-i câriye eylesin. Âmin.
      `,
      },
      {
        language: "en",
        content: `
       In the Name of Allah, the Most Merciful, the Most Compassionate

      All praise is due to Allah, the Lord of the scholars, the Creator of every particle in this universe, Who has full power over them and knows their every state. Peace and blessings be upon our beloved Prophet Muhammad al-Mustafa ﷺ, sent as a mercy to all worlds, upon his noble brothers from Adam to Jesus (peace be upon them all), upon the noble Companions who strove in the path of Allah, and upon the scholars of Ahl al-Sunnah who preserved and conveyed the sacred knowledge.

      Islamic Merci Association was established on 04/07/2024 by our President, Shaykh Muhammed Emre Karadayı, together with his companions, with the intention of continuing the blessed mission of these honorable predecessors.

      For over three years, our President, Shaykh Muhammed Emre Karadayı, has been serving Islam, particularly through Instagram and other social media platforms. By the grace and blessing of Allah, these efforts have reached a wide audience, forming the foundation of our association.

      Our greatest goal is to revive the madrasahs inherited from our master and sultan, Shaykh Mahmud Ustaosmanoğlu (may Allah have mercy on him), and to raise preachers and scholars who will carry the responsibility of enjoining good and forbidding evil, which is essential for the salvation of the Ummah.

      With the permission of Allah and through the generous support of our donors, our association is engaged in:

      Delivering water and food aid to the honorable land of Gaza,

      Slaughtering sacrificial animals in Africa,

      Supporting families in need,

      Distributing food for stray animals,

      And many other charitable endeavors.

      May Allah make these services continuous and accept every donation as ongoing charity (sadaqah jariyah). Āmīn.
      `,
      },
      {
        language: "ar",
        content: `
        بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ

        الحمد لله ربِّ العلماء، خالق كل ذرة في هذا الكون، المُطَّلع على أحوالها، والمتصرّف فيها بقدرةٍ مطلقة. والصلاة والسلام على سيِّدنا محمد المصطفى ﷺ، المبعوث رحمةً للعالمين، وعلى إخوانه من الأنبياء الكرام من آدم إلى عيسى عليهم السلام، وعلى الصحابة الكرام الذين جاهدوا في سبيل الله، وعلى علماء أهل السنة الذين حفظوا العلم وبلَّغوه للناس.

        تأسَّس جمعية المرجع الإسلامي بتاريخ 04/07/2024 على يد رئيس الجمعية الشيخ محمد أمـر كراداي حفظه الله ورفاقه، استمرارًا لمسيرة هؤلاء الرجال المباركين.

        لقد قام رئيس جمعيتنا الشيخ محمد أمـر كراداي بخدمة الإسلام عبر منصات التواصل الاجتماعي، وخاصةً إنستغرام، لأكثر من ثلاث سنوات، حتى اجتمع من خلالها جمعٌ مبارك شكَّل أساس جمعيتنا.

        وأعظم أهدافنا: إحياء المدارس الشرعية التي ورثناها عن أستاذنا وسلطاننا الشيخ محمود أوسطا عثمان أوغلو رحمه الله، وتخريج دعاةٍ وعلماء يحملون على عاتقهم فريضة الأمر بالمعروف والنهي عن المنكر، لما فيه صلاح الأمة ونجاتها.

        وبإذن الله ثم بدعم المحسنين منكم، تقوم جمعيتنا بما يلي:

        إيصال الماء والغذاء إلى أرض العز غزة،

        ذبح الأضاحي في إفريقيا،

        مساعدة الأسر المحتاجة،

        توزيع الطعام على الحيوانات الضالة،

        وغير ذلك من أعمال الخير.

        نسأل الله أن يتقبّل هذه الأعمال، ويجعلها صدقة جارية لكل من ساهم فيها. آمين`,
      },
    ],
  },
  mahmudefendi: {
    image:
      "https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNl5WeeHgzsRrtV1l9W2EFiKqvNXbCoHPLy7OJZ",
    mahmudefendiContent: [
      {
        language: "tr",
        content: `
         <h1>Mahmud Efendi Hazretleri'nin Hayatı</h1>
    
    <h2>DOĞUMU</h2>
    <p>Mahmud Efendi Hazretleri 1929'da Trabzon vilâyetinin Of kazasının Miço (Tavşanlı) köyünde doğdu. Babası Mustafa oğlu Ali Efendi, annesi Tufan kızı Fâtıma Hanımefendi verâ ve takva ile maruf muhterem kimseler idiler.</p>
    
    <p>Ali Efendi köyün camisinde imamlık yapar, aynı zamanda kendi tarlasında da ziraatla meşgul olurdu. Tarlası câmiye uzak olmasına rağmen vazifesini hiç aksatmaz, mutlaka câmiye gelir, ezan okur ve namazı kıldırırdı.</p>
    
    <p>Bazen köylüler ziraatla meşgul olduklarından câmiye gelemezler, Ali Efendi namazı tek başına kılmak zorunda kalacağını bildiği halde işini bırakır, yine de namazını câmide kılardı.</p>
    
    <p>Ali Efendi ibadetine düşkün, çokça Kur'ân okuyan kanaat ehli bir kimse idi. 1954 senesinde zorluklarla biriktirdiği parasıyla hacca gitti ve Mekke-i Mükerreme'de rahatsızlanarak vefat edip Cennetü'l-Me?lâ'da, daha önce orada vefat etmiş bulunan babası Mustafa Efendi'nin yakınına defnedildi.</p>
    
    <p>Annesi Fâtıma Hanım kul haklarına çok dikkat ederdi. İneklerini meraya götürürken kimsenin bahçesinden otlamasın diye ağızlarını bağlardı. Kazara bir ineği başkasının bahçesinden otlayacak olsa hemen sahibinden helallik ister ve o inekten sağdığı sütün tamamını bahçe sahibine verirdi.</p>
    
    <h2>İLME BAŞLAMASI, HOCALARI VE İCAZETİ</h2>
    <p>Mahmud Efendi Hazretleri altı yaşındayken hafızlığını babası ve annesinde yaptı. Ailesinin ve yetiştiği çevrenin dindarlığının da etkisiyle küçük yaşına rağmen namazları câmide kılıyor, nafile ibadetlere de ihtimam gösteriyordu.</p>
    
    <p>Hafızlığını bitirdikten sonra Ramazan ayında Kayseri'ye gidip o bölgenin muteber ulemâsından olan Tesbihcizade Ahmed Efendi'den sarf, nahiv ve Farsça okudu. Kayseri'de bir sene kaldıktan sonra memleketi Of'a dönerek zamanın en meşhur kıraat âlimi Mehmed Rüşdü Aşıkkutlu Hoca Efendi'den Kur'ân-ı Kerîm kıraat etti.</p>
    
    <p>Belağat, ilm-i kelam, tefsir, hadis, fıkıh ve usûl-ü fıkh gibi sâir ulûm-i şer?iyyeyi ise aklî ve naklî ilimlerde mütehassıs ulemâdan ve Süleymaniye Medresesi dersiâmlarından olan eniştesi Çalekli Hacı Dursun Fevzi Efendi'den ikmal ederek henüz on altı yaşında iken icazet aldı.</p>
    
    <p>Kendisi okurken okutmaya başladığı talebelerini yedi sene kadar okuttuktan sonra askere gitmeden icazet verdi (ki o tarihlerde bu, başarılması çok zor bir işti).</p>
    
    <h2>ŞEYHİ ALİ HAYDAR EFENDİ'YLE TANIŞMASI</h2>
    <p>Askerde bulunduğu sırada ise hayatının seyrini değiştirecek olan en büyük üstadı ve şeyhi Ali Haydar Efendi'yle tanıştı. Ali Haydar Efendi Hazretleri Osmanlı sultanlarından son dört padişahın huzur hocalarından olup, Meşîhat-ı İslâmiyye'de Hey'et-i Te'lîfiyye Reisi idi.</p>
    
    <p>Müteassıb bir Hanefî olan Ali Haydar Efendi "Mezâhib-i erbe?anın fıkıh kitapları kaybolsa hepsini ezberden yazdırabilirim" diyecek derecede dört mezhebin fıkhına da vâkıf biriydi ve aynı zamanda dört mezheb müftüsüydü. Mecelle'nin "Büyu? ve icâre" bölümünün hazırlanması Kendisine tevdî edilmiş, Seçtiği sekiz kişilik ilmî bir heyetle bu kısmı itmam etmişti.</p>
    
    <p>İşte Mahmud Efendi murad (Allâh-u Te?âlâ tarafından seçilmiş) kullardan olduğu için böyle büyük bir âlim ve şeyh olan Ali Haydar Efendi Kendisinin ayağına gönderildi, şöyle ki: Ali Haydar Efendi'nin kırk sene evvel vefat etmiş olup Bandırma'da medfun bulunan şeyhi Ali Rıza Bezzaz Hazretleri bir gece İstanbul'daki tekkede bulunan Ali Haydar Efendi Hazretleri'ne mânevî yolla zuhur edip, o günlerde orada askerde bulunan Mahmud Efendi'yi takdim ederek: "Bandırma'ya hemen gel ve buradaki emaneti al" diye emir buyurmuş.</p>
    
    <p>Bunun üzerine Ali Haydar Efendi derhal Bandırma'ya gidip Tekke Câmii'ne varmış ve yanında bulunan müridlerine: "Burada bir asker var, onu bulun ve bana getirin" buyurmuş.</p>
    
    <p>Bundan sonrasını Mahmud Efendi Hazretleri şöyle anlatır: "Küçük yaşlarımdan beri âlimlere ve şeyhlere karşı muhabbetim vardı. Nerede bir âlim, bir Allâh dostu olduğunu öğrensem onu ziyaret ederdim. Bandırma'da acemi birliğinde askerlik yapıyorken orada da ziyaret edip, duasını alabileceğim âlim bir zat, bir şeyh efendi var mı diye merak ediyordum...</p>
    
    <p>Bir gün Bandırma'da deniz kenarındaki Haydar Çavuş Câmii'nde cuma namazını eda ettim. Namazdan sonra câminin bir köşesinde beyaz sarıklı, beyaz cübbeli, gayet heybetli ve nûranî bir zat gördüm. Bana padişah gibi heybetli geldi. O zatın kim olduğunu sorduğumda bana: 'İşte O zat Senin görmek istediğin Ali Haydar Efendi Hazretleri'dir' dediler.</p>
    
    <p>Gece gittiğimde rahatsız olduğu için erken yatmıştı. Kendisiyle ancak ertesi gün görüşmek nasip oldu, huzuruna girdiğimde beni görür görmez: 'İşte kitaplarımı teslim edeceğim kişi budur' dedi. Böylece görüşüp tanıştık, Beni Kendisine mânen Şeyhi'nin teslim ettiğini bildirdi ve Kendisinden ayrılmamamı tenbih etti, bir daha da O'nu hiç bırakmadım."</p>
    
    <h2>İLME VERDİĞİ ÖNEM VE DÎNİ İLİMLERİ NEŞRİ</h2>
    <p>Şeyhi Ali Haydar Efendi'nin vefatıyla Mahmud Efendi Hazretleri'nin hayatında yeni bir merhale başlamış oldu. Bir taraftan imamlık yaparak cemaatle, bir taraftan talebe okutmakla, diğer bir taraftan da Ali Haydar Efendi Hazretleri'nin vasiyeti vechile tarikat ehli ihvanı irşâd ile meşgul oluyordu.</p>
    
    <p>İmamlık yaptığı İsmailağa Câmii'ni hem tekke hem medrese hem de emr-i bi'l-mâruf ve nehy-i ani'l-münker merkezi olarak kullanıyordu. Osmanlı medreselerinde takib edilen usul üzere daha askere gitmeden önce memleketinde birçok talebe okutmuş ve birçok kimselere icazet vermiş olan Mahmud Efendi Hazretleri'nden İstanbul'da da birçok imam, vâiz ve müftü ders aldı.</p>
    
    <p>Kendisi daima insanları ilme, amele ve ihlasa teşvik etti. O zamanlarda ilim okumak ve okutmak hele ki sünnet-i seniyyeden taviz vermeden bu işi yapmak hiç de kolay değildi.</p>
    
    <p>Kırk-elli senelik kısa bir zaman zarfında erkekli kadınlı binlerce hoca, on binlerce talebe yetiştirmesinin ve milyonlarla ifade edilen sakallı erkeklerin ve çarşaflı kadınların yetişmesine sebep olmasının her türlü takdirin fevkınde bir hizmet olduğu âşikardır.</p>
    
    <p>Kendisine "Bir emriniz, bir arzunuz var mı?" diye soranlara "Her mahalleye bir kız bir erkek medresesi yapın" diye cevap verirdi.</p>
    
    <h3>Kendisinin ilme teşvik babındaki bazı sözleri:</h3>
    <blockquote>
        <p>"Ey talebeler! Sizler, kurumuş toprakların yağmur yüklü bulutları, direksiz kubbenin direklerisiniz."</p>
        <p>"Ömrümden üç nefesim kalsa size okuyun, okuyun, okuyun derim."</p>
        <p>"Sizin yerinizde olsam bu sabah kahvaltı yapmadan ilme başlardım."</p>
    </blockquote>
    
    <h2>İLİM NEŞRİNDE TÂKİP ETTİĞİ USÛL</h2>
    <p>Mahmud Efendi Hazretleri'nin yaşadığı zamana ve Türkiye şartlarındaki insanların ahvâline göre ilmi artırmada kullandığı tedrîcî üslub hayret vericidir.</p>
    
    <p>Kur'ân-ı Kerîm okumayı dahi bilmeyen, geçim derdine düşmüş bir millete "On beş-yirmi sene ilim okumalısınız" demiş olsaydı acaba bu ilmi kim kabul ederdi.</p>
    
    <p>Bir zaman sonra ilmî seviyeyi yükseltip zikrolunan kitaplara İzhar ve İzzî gibi diğer kitapları eklemiş ve "İzhar okuyan hocadır" buyurarak insanları heveslendirmişti.</p>
    
    <p>Daha sonra bu kitaplara Kâfiye, Molla Câmî, Nûru'l-îzah, Mülteka, Telhis, Şerhu'l-Emalî, Şerhu'l-akaid gibi daha yüksek kitapları ekledi.</p>
    
    <h2>ULEMÂYA HURMET VE NUSRETİ</h2>
    <p>Ulemâya, talebelere çok hürmet eder, hallerine ihtimam gösterir ve onların müşkilleriyle bizzat ilgilenirdi. İlmiyle âmil olmayan âlimlere olsun, mücerred hâfızlara olsun son derece tâzim eder, huzuruna girdiklerinde ayağa kalkar, uğurlarken kapıya kadar refâkat eder, hatta arabada dahi ön koltukta oturan hâfız ise ayaklarını ona doğru uzatmaz, derli toplu otururdu.</p>
    
    <h2>İLİM VE TARÎKATI BİRLEŞTİRMESİ</h2>
    <p>Mahmud Efendi Hazretleri, şeyhi Ali Haydar Efendi Hazretleri gibi ilim ve tasavvufu cem eden zülcenâhayn bir zat idi.</p>
    
    <blockquote>
        <p>"Mürşid olarak bilinen bir şahısta şerîatı tatbik var ise, o şahısta tarîkat da vardır. Şerîat yok ise tarîkat da yoktur, o şahıs mürşid olamaz."</p>
        
        <p>"Kendinizi rüya veya zuhuratta çok güzel hallerde görebilirsiniz. Şerîata aykırı hal ve hareketleriniz olduğu halde böyle rüyalar görüyorsanız, biliniz ki bu rüyalar sizin için istidractır."</p>
    </blockquote>
    
    <h2>ŞERÎAT VE SÜNNETE İTTİBÂSI</h2>
    <p>Mahmud Efendi Hazretleri insanları sadece sözüyle değil, hâliyle de ilme ve ibadete teşvik etmiş, başladığı hiçbir ibadeti bırakmamış ve istikametiyle görenleri gayrete getirmiştir.</p>
    
    <p>Bir ara cemaatinin "Mahmudçular" ismiyle zikredildiğini duyduğunda çok üzülmüş ve cuma hutbesinde şunları söylemiştir:</p>
    <blockquote>
        <p>"Mahmudçular diyorlar. Allâh aşkına! Ben yeni bir din mi îcad ettim?! Rasûlüllâh (Sallâllâhu Aleyhi ve Sellem)in günlük hayatta tatbik edilen dört bin küsur sünneti vardır, dördünü terk ettiğimi gören arkamda namaz kılmasın."</p>
    </blockquote>
    
    <h2>ZİKİR VE TEBLİĞE VERDİĞİ ÖNEM</h2>
    <blockquote>
        <p>"Yatmadan evvel biraz ders (tarîkat virdi) ile meşgul olalım. Teheccüd namazından sonra devam edelim. İşrak vakti bitirelim. Ondan sonraki bütün vakitlerimizi ilme harcayacağız."</p>
        
        <p>"Zikrullah, Efendimiz (Sallâllâhu Aleyhi ve Sellem)e en büyük ittibâdır."</p>
        
        <p>"İstanbul'un bütün evleri medrese olsa emr-i bi'l-mâruf ve nehy-i ani'l-münker olmasa bir değer ifade etmez."</p>
        
        <p>"Allah aşkına acıyın bu insanlara. Sel gibi cehenneme akıyorlar."</p>
    </blockquote>
    
    <h2>ÂLİMLERİN KENDİSİ HAKKINDAKİ SÖZLERİ</h2>
    
    <h3>Ali Haydar Efendi Hazretleri:</h3>
    <blockquote>
        <p>"(İlahî koruma sayesinde) Henüz Mahmud'umun sol tarafına bir seyyie (günah) yazılmamıştır. Mahmud'umun eli Benim elimdir. Bende ne varsa Mahmud'uma verdim. O'nu sevmeyen âhirette Beni göremez."</p>
    </blockquote>
    
    <h3>Muhammed Mazhar el-Fârûkî Hazretleri:</h3>
    <blockquote>
        <p>"Ben âlemleri gezdim, bu asırda Mahmud Efendi gibi şerîat ve tarîkatı birlikte yaşayan bir zat görmedim."</p>
    </blockquote>
    
    <h3>Seyyid Muhammed Alevî el-Mâlikî:</h3>
    <blockquote>
        <p>"Dünyada birçok cemaatler gördüm. Kimisi ilme önem verip tasavvufu zâyi etmiş, kimi de tasavvufa ihtimam gösterip ilmi zâyi etmişlerdir, ama Mahmud Efendi ve cemaati ilimle ameli, şerîatla tarîkatı birlikte yaşayıp-yaşatan müstesna cemaatlerdendir."</p>
    </blockquote>
    
    <h3>Muhammed Avvâme:</h3>
    <blockquote>
        <p>"Allâh Mahmud Efendi'ye merhamet etsin. Gerçekten bu beldeleri ilim doldurmuş."</p>
    </blockquote>
    
    <p><em>Ve daha birçok büyük âlim Mahmud Efendi Hazretleri'nin yüce makamını tasdik etmiş, kendisine intisab etmiş ve hürmetlerini arz etmişlerdir.</em></p>
        `,
      },
      {
        language: "en",
        content: `
        <h2>Mahmud Efendi Hazretleri (k.s.)</h2>
        <p>Mahmud Efendi Hazretleri (k.s.) is an important figure in the Islamic world. He is known for his contributions to education, charity, and social services.</p>
        
        <h3>Life and Personality</h3>
        <p>Mahmud Efendi Hazretleri was a great scholar known for his deep knowledge in Islamic sciences and his service to society. Throughout his life, he guided people, enlightened hearts, and showed the way on their spiritual journeys.</p>
        
        <h3>Contributions to Education and Knowledge</h3>
        <ul>
          <li>Establishment and development of Islamic educational institutions</li>
          <li>Training many students and specialization in Islamic sciences</li>
          <li>Interpretations and explanations for proper understanding of religious texts</li>
          <li>Adaptation of the madrasah education system to modern needs</li>
        </ul>
        
        <h3>Social Services and Charity</h3>
        <p>Mahmud Efendi Hazretleri made important contributions not only in the field of knowledge but also in social life:</p>
        <ul>
          <li>Development of systematic approaches to help those in need</li>
          <li>Taking care of orphans and the destitute</li>
          <li>Strengthening social solidarity</li>
          <li>Establishment and support of charitable organizations</li>
        </ul>
        
        <h3>Spiritual Guidance</h3>
        <p>One of his greatest qualities was providing spiritual guidance to people. He gave valuable teachings on purifying hearts, disciplining the soul, and drawing closer to Allah.</p>
        
        <blockquote>
          <p>"The greatest worship is to be beneficial to Allah's servants. A person who can touch people's hearts and do good to them has truly earned Allah's love."</p>
        </blockquote>
        
        <h3>Legacy Reflected to Today</h3>
        <p>The spiritual legacy left by Mahmud Efendi Hazretleri continues to inspire ongoing charitable activities today. The work carried out in line with his teachings continues to bring hope to those in need worldwide.</p>
        `,
      },
      {
        language: "ar",
        content: `
        <h2>الشيخ محمود أفندي (قدس سره)</h2>
        <p>الشيخ محمود أفندي (قدس سره) هو شخصية مهمة في العالم الإسلامي. وهو معروف بمساهماته في التعليم والعمل الخيري والخدمات الاجتماعية.</p>
        
        <h3>حياته وشخصيته</h3>
        <p>كان الشيخ محمود أفندي عالماً كبيراً معروفاً بمعرفته العميقة في العلوم الإسلامية وخدمته للمجتمع. طوال حياته، أرشد الناس، وأنار القلوب، وأرشد في رحلاتهم الروحية.</p>
        
        <h3>مساهماته في التعليم والمعرفة</h3>
        <ul>
          <li>إنشاء وتطوير المؤسسات التعليمية الإسلامية</li>
          <li>تدريب العديد من الطلاب والتخصص في العلوم الإسلامية</li>
          <li>التفسيرات والتوضيحات للفهم الصحيح للنصوص الدينية</li>
          <li>تكييف نظام التعليم في المدرسة مع الاحتياجات الحديثة</li>
        </ul>
        
        <h3>الخدمات الاجتماعية والعمل الخيري</h3>
        <p>لم يقدم الشيخ محمود أفندي مساهمات مهمة في مجال المعرفة فحسب، بل في الحياة الاجتماعية أيضاً:</p>
        <ul>
          <li>تطوير مناهج منهجية لمساعدة المحتاجين</li>
          <li>رعاية الأيتام والمحرومين</li>
          <li>تعزيز التضامن الاجتماعي</li>
          <li>إنشاء ودعم المنظمات الخيرية</li>
        </ul>
        
        <h3>الإرشاد الروحي</h3>
        <p>كانت إحدى أعظم صفاته تقديم التوجيه الروحي للناس. أعطى تعاليم قيمة حول تطهير القلوب وتهذيب النفس والتقرب إلى الله.</p>
        
        <blockquote>
          <p>"أعظم عبادة هي أن تكون مفيداً لعباد الله. الشخص الذي يمكنه أن يلمس قلوب الناس ويفعل الخير لهم قد كسب حقاً محبة الله."</p>
        </blockquote>
        
        <h3>الإرث المنعكس إلى اليوم</h3>
        <p>يستمر الإرث الروحي الذي تركه الشيخ محمود أفندي في إلهام الأنشطة الخيرية المستمرة اليوم. يستمر العمل الذي يتم تنفيذه في ضوء تعاليمه في جلب الأمل للمحتاجين في جميع أنحاء العالم.</p>
        `,
      },
    ],
  },
  privacy: {
    privacyContent: [
      {
        language: "tr",
        content: `
       <!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KVKK Kişisel Verilerin Korunması ve Gizlilik Politikası - İslami Merci Derneği</title>
</head>
<body>
    <h1>KVKK KİŞİSEL VERİLERİN KORUNMASI VE GİZLİLİK POLİTİKASI</h1>
    <p><strong>Son Güncelleme Tarihi:</strong> 17.09.2025</p>
    <p>İslami Merci Derneği olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamındaki yükümlülüklerimizi yerine getirmek ve kişisel verilerinizin güvenliğini sağlamak için bu Gizlilik Politikası'nı hazırladık.</p>

    <h2>VERİ SORUMLUSU</h2>
    <p><strong>İslami Merci Derneği</strong><br>
    Web sitesi: islamimerci.org<br>
    Bu politika kapsamında "veri sorumlusu" sıfatıyla hareket etmekteyiz.</p>

    <h2>TOPLANAN KİŞİSEL VERİLER</h2>
    <p>Derneğimiz aşağıdaki kişisel verilerinizi toplamaktadır:</p>
    
    <h3>Kimlik Bilgileri:</h3>
    <ul>
        <li>Ad ve soyadınız</li>
        <li>E-posta adresiniz</li>
        <li>Telefon numaranız</li>
        <li>Web sitesi şifreniz (şifrelenmiş olarak)</li>
    </ul>

    <h3>Finansal Bilgiler:</h3>
    <ul>
        <li>Kredi kartı bilgileriniz (işlem sırasında geçici olarak işlenir, saklanmaz)</li>
        <li>Bağış miktarı, dövizi ve tarihi</li>
        <li>İsteğe bağlı gönderdiğiniz bağış mesajı</li>
    </ul>

    <h2>VERİ TOPLAMA YÖNTEMLERİ</h2>
    <p>Kişisel verileriniz aşağıdaki yöntemlerle toplanmaktadır:</p>
    <ul>
        <li>islamimerci.org web sitesi üzerinden kayıt formları</li>
        <li>Bağış işlemleri sırasında</li>
        <li>Sosyal medya hesapları aracılığıyla</li>
    </ul>

    <h2>VERİ İŞLEME AMAÇLARI VE HUKUKİ DAYANAKLARI</h2>
    <p>Kişisel verilerinizi aşağıdaki amaçlarla işliyoruz:</p>
    
    <h3>Bağış İşlemleri:</h3>
    <ul>
        <li><strong>Amaç:</strong> Bağış kabulü ve kayıt altına alınması</li>
        <li><strong>Hukuki Dayanak:</strong> Meşru menfaat (KVKK m.5/2-f)</li>
    </ul>

    <h3>Üyelik ve İletişim:</h3>
    <ul>
        <li><strong>Amaç:</strong> Dernek faaliyetleri hakkında bilgilendirme</li>
        <li><strong>Hukuki Dayanak:</strong> Rıza (KVKK m.5/2-a)</li>
    </ul>

    <h3>Hukuki Yükümlülük:</h3>
    <ul>
        <li><strong>Amaç:</strong> Muhasebe kayıtları ve yasal raporlama</li>
        <li><strong>Hukuki Dayanak:</strong> Hukuki yükümlülük (KVKK m.5/2-c)</li>
    </ul>

    <h2>VERİLERİN SAKLANMA SÜRESİ</h2>
    <ul>
        <li><strong>Üyelik bilgileri:</strong> Üyeliğiniz devam ettiği süre boyunca</li>
        <li><strong>Bağış kayıtları:</strong> Muhasebe mevzuatı gereği 10 yıl</li>
        <li><strong>İletişim kayıtları:</strong> İletişim amacının sona ermesinden itibaren 1 yıl</li>
        <li><strong>Web sitesi şifresi:</strong> Hesabınızı sildiğiniz tarihe kadar</li>
    </ul>

    <h2>VERİLERİN PAYLAŞILMASI</h2>
    <p>Kişisel verileriniz aşağıdaki durumlar dışında üçüncü kişilerle paylaşılmaz:</p>
    
    <h3>Yasal Zorunluluklar:</h3>
    <ul>
        <li>Mahkeme kararları, savcılık soruşturmaları</li>
        <li>Vergi müfettişliği denetimleri</li>
        <li>Diğer kamu otoritesi talepleri</li>
    </ul>

    <h3>Hizmet Sağlayıcıları:</h3>
    <ul>
        <li>Ödeme sistemi sağlayıcıları (sadece işlem sırasında)</li>
        <li>Web hosting hizmet sağlayıcısı</li>
        <li>E-posta gönderim servisleri</li>
    </ul>

    <h2>VERİ GÜVENLİĞİ</h2>
    <p>Kişisel verilerinizin güvenliği için aldığımız önlemler:</p>
    <ul>
        <li>SSL sertifikası ile şifrelenmiş veri iletimi</li>
        <li>Güvenli sunucularda veri saklama</li>
        <li>Yetkisiz erişimi önleyici sistem güvenliği</li>
        <li>Düzenli güvenlik güncellemeleri</li>
    </ul>

    <h2>KVKK KAPSAMINDAKI HAKLARINIZ</h2>
    <p>KVKK'nın 11. maddesi uyarınca aşağıdaki haklarınız bulunmaktadır:</p>
    <ol>
        <li><strong>Bilgi Talep Etme:</strong> Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
        <li><strong>Erişim Hakkı:</strong> İşlenen verileriniz hakkında bilgi talep etme</li>
        <li><strong>Düzeltme Hakkı:</strong> Yanlış veya eksik verilerin düzeltilmesini isteme</li>
        <li><strong>Silme Hakkı:</strong> Belirli şartlarda verilerinizin silinmesini isteme</li>
        <li><strong>İtiraz Hakkı:</strong> Veri işlemeye itiraz etme</li>
        <li><strong>Taşınabilirlik:</strong> Verilerinizin başka bir sorumluya aktarılmasını isteme</li>
    </ol>

    <h2>BAŞVURU YÖNTEMLERİ</h2>
    <p>KVKK haklarınızı kullanmak için:</p>
    <p><strong>E-posta:</strong> iletisim@islamimerci.org</p>
    <p>Başvurularınız 30 gün içinde değerlendirilerek sonuçlandırılır.</p>

    <h2>ÇEREZ KULLANIMI</h2>
    <p>Web sitemizde çerezler kullanılmaktadır. Detaylı bilgi için Çerez Politikamızı inceleyebilirsiniz.</p>

    <h2>POLİTİKA DEĞİŞİKLİKLERİ</h2>
    <p>Bu politika gerektiğinde güncellenebilir. Değişiklikler web sitemizde yayınlandığı tarihte yürürlüğe girer.</p>

    <h2>İLETİŞİM</h2>
    <p>Bu politika ile ilgili sorularınız için:</p>
    <p><strong>E-posta:</strong> iletisim@islamimerci.org<br>
    <strong>Web sitesi:</strong> islamimerci.org</p>

    <hr>
    <p><em>Bu politika 6698 sayılı Kişisel Verilerin Korunması Kanunu ve ilgili mevzuat çerçevesinde hazırlanmıştır.</em></p>
</body>
</html>
        `,
      },
      {
        language: "en",
        content: `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GDPR Personal Data Protection and Privacy Policy - Islamic Authority Association</title>
</head>
<body>
    <h1>GDPR PERSONAL DATA PROTECTION AND PRIVACY POLICY</h1>
    <p><strong>Last Updated:</strong> September 17, 2025</p>
    <p>As the Islamic Authority Association, we have prepared this Privacy Policy to fulfill our obligations under the Personal Data Protection Law No. 6698 ("GDPR") and to ensure the security of your personal data.</p>

    <h2>DATA CONTROLLER</h2>
    <p><strong>Islamic Authority Association</strong><br>
    Website: islamimerci.org<br>
    We act as the "data controller" under this policy.</p>

    <h2>PERSONAL DATA COLLECTED</h2>
    <p>Our association collects the following personal data:</p>
    
    <h3>Identity Information:</h3>
    <ul>
        <li>Your name and surname</li>
        <li>Your email address</li>
        <li>Your phone number</li>
        <li>Your website password (stored encrypted)</li>
    </ul>

    <h3>Financial Information:</h3>
    <ul>
        <li>Your credit card information (processed temporarily during transaction, not stored)</li>
        <li>Donation amount, currency and date</li>
        <li>Optional donation message you send</li>
    </ul>

    <h2>DATA COLLECTION METHODS</h2>
    <p>Your personal data is collected through the following methods:</p>
    <ul>
        <li>Registration forms on the islamimerci.org website</li>
        <li>During donation transactions</li>
        <li>Through social media accounts</li>
    </ul>

    <h2>DATA PROCESSING PURPOSES AND LEGAL BASIS</h2>
    <p>We process your personal data for the following purposes:</p>
    
    <h3>Donation Transactions:</h3>
    <ul>
        <li><strong>Purpose:</strong> Acceptance and recording of donations</li>
        <li><strong>Legal Basis:</strong> Legitimate interest (GDPR Art.5/2-f)</li>
    </ul>

    <h3>Membership and Communication:</h3>
    <ul>
        <li><strong>Purpose:</strong> Information about association activities</li>
        <li><strong>Legal Basis:</strong> Consent (GDPR Art.5/2-a)</li>
    </ul>

    <h3>Legal Obligation:</h3>
    <ul>
        <li><strong>Purpose:</strong> Accounting records and legal reporting</li>
        <li><strong>Legal Basis:</strong> Legal obligation (GDPR Art.5/2-c)</li>
    </ul>

    <h2>DATA RETENTION PERIOD</h2>
    <ul>
        <li><strong>Membership information:</strong> During your membership period</li>
        <li><strong>Donation records:</strong> 10 years as required by accounting legislation</li>
        <li><strong>Communication records:</strong> 1 year from the end of the communication purpose</li>
        <li><strong>Website password:</strong> Until you delete your account</li>
    </ul>

    <h2>DATA SHARING</h2>
    <p>Your personal data is not shared with third parties except in the following situations:</p>
    
    <h3>Legal Requirements:</h3>
    <ul>
        <li>Court decisions, prosecutor investigations</li>
        <li>Tax inspector audits</li>
        <li>Other public authority requests</li>
    </ul>

    <h3>Service Providers:</h3>
    <ul>
        <li>Payment system providers (only during transaction)</li>
        <li>Web hosting service provider</li>
        <li>Email delivery services</li>
    </ul>

    <h2>DATA SECURITY</h2>
    <p>Measures we take for the security of your personal data:</p>
    <ul>
        <li>Encrypted data transmission with SSL certificate</li>
        <li>Data storage on secure servers</li>
        <li>System security preventing unauthorized access</li>
        <li>Regular security updates</li>
    </ul>

    <h2>YOUR RIGHTS UNDER GDPR</h2>
    <p>You have the following rights under Article 11 of the GDPR:</p>
    <ol>
        <li><strong>Right to Information:</strong> Learning whether your personal data is processed</li>
        <li><strong>Right of Access:</strong> Requesting information about your processed data</li>
        <li><strong>Right to Rectification:</strong> Requesting correction of incorrect or incomplete data</li>
        <li><strong>Right to Erasure:</strong> Requesting deletion of your data under certain conditions</li>
        <li><strong>Right to Object:</strong> Objecting to data processing</li>
        <li><strong>Data Portability:</strong> Requesting transfer of your data to another controller</li>
    </ol>

    <h2>APPLICATION METHODS</h2>
    <p>To exercise your GDPR rights:</p>
    <p><strong>Email:</strong> iletisim@islamimerci.org</p>
    <p>Your applications will be evaluated and finalized within 30 days.</p>

    <h2>COOKIE USAGE</h2>
    <p>Cookies are used on our website. For detailed information, you can review our Cookie Policy.</p>

    <h2>POLICY CHANGES</h2>
    <p>This policy may be updated when necessary. Changes take effect on the date they are published on our website.</p>

    <h2>CONTACT</h2>
    <p>For questions about this policy:</p>
    <p><strong>Email:</strong> iletisim@islamimerci.org<br>
    <strong>Website:</strong> islamimerci.org</p>

    <hr>
    <p><em>This policy has been prepared within the framework of the Personal Data Protection Law No. 6698 and related legislation.</em></p>
</body>
</html>
        `,
      },
      {
        language: "ar",
        content: `
        <!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>سياسة حماية البيانات الشخصية والخصوصية - جمعية المرجع الإسلامي</title>
</head>
<body>
    <h1>سياسة حماية البيانات الشخصية والخصوصية</h1>
    <p><strong>تاريخ آخر تحديث:</strong> 17 سبتمبر 2025</p>
    <p>بصفتنا جمعية المرجع الإسلامي، قمنا بإعداد سياسة الخصوصية هذه للوفاء بالتزاماتنا في إطار قانون حماية البيانات الشخصية رقم 6698 ("KVKK") وضمان أمان بياناتكم الشخصية.</p>

    <h2>مسؤول البيانات</h2>
    <p><strong>جمعية المرجع الإسلامي</strong><br>
    الموقع الإلكتروني: islamimerci.org<br>
    نعمل بصفة "مسؤول البيانات" في إطار هذه السياسة.</p>

    <h2>البيانات الشخصية المجمعة</h2>
    <p>تجمع جمعيتنا البيانات الشخصية التالية:</p>
    
    <h3>معلومات الهوية:</h3>
    <ul>
        <li>اسمكم ولقبكم</li>
        <li>عنوان بريدكم الإلكتروني</li>
        <li>رقم هاتفكم</li>
        <li>كلمة مرور الموقع الإلكتروني (مخزنة مشفرة)</li>
    </ul>

    <h3>المعلومات المالية:</h3>
    <ul>
        <li>معلومات بطاقتكم الائتمانية (تتم معالجتها مؤقتاً أثناء المعاملة، لا يتم حفظها)</li>
        <li>مبلغ التبرع وعملته وتاريخه</li>
        <li>رسالة التبرع الاختيارية التي ترسلونها</li>
    </ul>

    <h2>طرق جمع البيانات</h2>
    <p>يتم جمع بياناتكم الشخصية بالطرق التالية:</p>
    <ul>
        <li>نماذج التسجيل على موقع islamimerci.org الإلكتروني</li>
        <li>أثناء معاملات التبرع</li>
        <li>من خلال حسابات وسائل التواصل الاجتماعي</li>
    </ul>

    <h2>أغراض معالجة البيانات والأسس القانونية</h2>
    <p>نعالج بياناتكم الشخصية للأغراض التالية:</p>
    
    <h3>معاملات التبرع:</h3>
    <ul>
        <li><strong>الغرض:</strong> قبول التبرعات وتسجيلها</li>
        <li><strong>الأساس القانوني:</strong> المصلحة المشروعة (KVKK المادة 5/2-و)</li>
    </ul>

    <h3>العضوية والتواصل:</h3>
    <ul>
        <li><strong>الغرض:</strong> إعلام حول أنشطة الجمعية</li>
        <li><strong>الأساس القانوني:</strong> الموافقة (KVKK المادة 5/2-أ)</li>
    </ul>

    <h3>الالتزام القانوني:</h3>
    <ul>
        <li><strong>الغرض:</strong> السجلات المحاسبية والتبليغ القانوني</li>
        <li><strong>الأساس القانوني:</strong> الالتزام القانوني (KVKK المادة 5/2-ج)</li>
    </ul>

    <h2>فترة الاحتفاظ بالبيانات</h2>
    <ul>
        <li><strong>معلومات العضوية:</strong> طوال فترة استمرار عضويتكم</li>
        <li><strong>سجلات التبرعات:</strong> 10 سنوات حسب التشريع المحاسبي</li>
        <li><strong>سجلات التواصل:</strong> سنة واحدة من انتهاء غرض التواصل</li>
        <li><strong>كلمة مرور الموقع:</strong> حتى تاريخ حذف حسابكم</li>
    </ul>

    <h2>مشاركة البيانات</h2>
    <p>لا تتم مشاركة بياناتكم الشخصية مع أطراف ثالثة عدا في الحالات التالية:</p>
    
    <h3>الضرورات القانونية:</h3>
    <ul>
        <li>قرارات المحكمة، تحقيقات النيابة العامة</li>
        <li>عمليات تفتيش مفتشي الضرائب</li>
        <li>طلبات السلطات العامة الأخرى</li>
    </ul>

    <h3>مقدمو الخدمات:</h3>
    <ul>
        <li>مقدمو خدمات أنظمة الدفع (فقط أثناء المعاملة)</li>
        <li>مقدم خدمة استضافة المواقع</li>
        <li>خدمات إرسال البريد الإلكتروني</li>
    </ul>

    <h2>أمان البيانات</h2>
    <p>الإجراءات التي نتخذها لأمان بياناتكم الشخصية:</p>
    <ul>
        <li>نقل البيانات مشفر بشهادة SSL</li>
        <li>تخزين البيانات على خوادم آمنة</li>
        <li>أمان النظام لمنع الوصول غير المصرح به</li>
        <li>التحديثات الأمنية المنتظمة</li>
    </ul>

    <h2>حقوقكم في إطار قانون حماية البيانات</h2>
    <p>لديكم الحقوق التالية وفقاً للمادة 11 من قانون حماية البيانات:</p>
    <ol>
        <li><strong>حق طلب المعلومات:</strong> معرفة ما إذا كانت بياناتكم الشخصية تتم معالجتها</li>
        <li><strong>حق الوصول:</strong> طلب معلومات حول بياناتكم المعالجة</li>
        <li><strong>حق التصحيح:</strong> طلب تصحيح البيانات الخاطئة أو الناقصة</li>
        <li><strong>حق المحو:</strong> طلب حذف بياناتكم في ظروف معينة</li>
        <li><strong>حق الاعتراض:</strong> الاعتراض على معالجة البيانات</li>
        <li><strong>قابلية النقل:</strong> طلب نقل بياناتكم إلى مسؤول آخر</li>
    </ol>

    <h2>طرق التقديم</h2>
    <p>لاستخدام حقوقكم في إطار قانون حماية البيانات:</p>
    <p><strong>البريد الإلكتروني:</strong> iletisim@islamimerci.org</p>
    <p>يتم تقييم طلباتكم والانتهاء منها في غضون 30 يوماً.</p>

    <h2>استخدام ملفات تعريف الارتباط</h2>
    <p>يتم استخدام ملفات تعريف الارتباط في موقعنا الإلكتروني. للحصول على معلومات مفصلة، يمكنكم مراجعة سياسة ملفات تعريف الارتباط الخاصة بنا.</p>

    <h2>تغييرات السياسة</h2>
    <p>يمكن تحديث هذه السياسة عند الضرورة. تدخل التغييرات حيز التنفيذ في تاريخ نشرها على موقعنا الإلكتروني.</p>

    <h2>التواصل</h2>
    <p>للأسئلة المتعلقة بهذه السياسة:</p>
    <p><strong>البريد الإلكتروني:</strong> iletisim@islamimerci.org<br>
    <strong>الموقع الإلكتروني:</strong> islamimerci.org</p>

    <hr>
    <p><em>تم إعداد هذه السياسة في إطار قانون حماية البيانات الشخصية رقم 6698 والتشريعات ذات الصلة.</em></p>
</body>
</html>
        `,
      },
    ],
  },
  terms: {
    termsContent: [
      {
        language: "tr",
        content: `
        <!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kullanım Şartları - İslami Merci Derneği</title>
</head>
<body>
    <h1>KULLANIM ŞARTLARI</h1>
    <p><strong>Son Güncelleme Tarihi:</strong> 17.09.2025</p>
    <p>Bu Kullanım Şartları, İslami Merci Derneği'ne ait islamimerci.org web sitesinin kullanımına ilişkin hüküm ve koşulları belirlemektedir.</p>

    <h2>1. GENEL HÜKÜMLER</h2>
    
    <h3>1.1 Tanımlar</h3>
    <ul>
        <li><strong>"Dernek":</strong> İslami Merci Derneği</li>
        <li><strong>"Site":</strong> islamimerci.org web sitesi</li>
        <li><strong>"Kullanıcı":</strong> Siteyi ziyaret eden veya kullanan herhangi bir kişi</li>
        <li><strong>"Üye":</strong> Siteye kayıt olmuş kullanıcılar</li>
        <li><strong>"İçerik":</strong> Sitede yer alan tüm metin, görsel, video ve diğer materyaller</li>
    </ul>

    <h3>1.2 Şartların Kabulü</h3>
    <ul>
        <li>Bu siteyi kullanarak bu şartları kabul etmiş sayılırsınız</li>
        <li>Şartları kabul etmiyorsanız siteyi kullanmayınız</li>
        <li>Bu şartlar tüm kullanıcılar için bağlayıcıdır</li>
    </ul>

    <h2>2. SİTE KULLANIMI</h2>
    
    <h3>2.1 İzin Verilen Kullanım</h3>
    <ul>
        <li>Kişisel ve ticari olmayan amaçlarla site kullanımı</li>
        <li>Dernek faaliyetleri hakkında bilgi edinme</li>
        <li>Bağış yapma ve iletişim kurma</li>
        <li>İçerikleri kişisel referans için kaydetme</li>
    </ul>

    <h3>2.2 Yasak Faaliyetler</h3>
    <p>Aşağıdaki faaliyetler kesinlikle yasaktır:</p>
    
    <h4>Teknik Yasak İşlemler:</h4>
    <ul>
        <li>Sitenin güvenlik sistemlerini devre dışı bırakmaya çalışmak</li>
        <li>Otomatik sistemler (botlar, crawler'lar) kullanmak</li>
        <li>Site altyapısına zarar verici faaliyetlerde bulunmak</li>
        <li>Başka kullanıcıların hesaplarına yetkisiz erişim</li>
    </ul>

    <h4>İçerik İle İlgili Yasaklar:</h4>
    <ul>
        <li>Telif hakkı ihlali yapan içerik paylaşmak</li>
        <li>Müstehcen, hakaret içeren veya yasadışı içerik göndermek</li>
        <li>Spam veya istenmeyen reklam göndermek</li>
        <li>Diğer kullanıcıları rahatsız edici mesajlar</li>
    </ul>

    <h4>Ticari Yasaklar:</h4>
    <ul>
        <li>Site üzerinden ticari satış yapmak</li>
        <li>Dernek adını kötüye kullanmak</li>
        <li>Başka siteler için reklam yapmak</li>
    </ul>

    <h2>3. ÜYELİK VE HESAP YÖNETİMİ</h2>
    
    <h3>3.1 Hesap Oluşturma</h3>
    <ul>
        <li>Doğru ve güncel bilgiler vermelisiniz</li>
        <li>Hesap bilgilerinizin gizliliğinden siz sorumlusunuz</li>
    </ul>

    <h3>3.2 Hesap Güvenliği</h3>
    <ul>
        <li>Şifrenizi kimseyle paylaşmayınız</li>
        <li>Hesabınızda şüpheli aktivite fark ettiğinizde derneği bilgilendiriniz</li>
        <li>Hesabınızdaki tüm faaliyetlerden sorumlusunuz</li>
    </ul>

    <h3>3.3 Hesap İptali</h3>
    <ul>
        <li>Hesabınızı istediğiniz zaman kapatabilirsiniz</li>
        <li>Dernek, bu şartları ihlal eden hesapları kapatma hakkını saklı tutar</li>
        <li>Hesap kapanması durumunda verileriniz gizlilik politikamız çerçevesinde işlenir</li>
    </ul>

    <h2>4. BAĞIŞ İŞLEMLERİ</h2>
    
    <h3>4.1 Bağış Kabul Koşulları</h3>
    <ul>
        <li>Bağışlar gönüllük esasına dayanır</li>
        <li>Minimum bağış değeri Türk Lirası için 100 TL, Amerikan Doları için 5 USD ve Euro için 5 EUR</li>
        <li>Bağışlar yasal mevzuat çerçevesinde kabul edilir</li>
    </ul>

    <h3>4.2 Ödeme Güvenliği</h3>
    <ul>
        <li>Kredi kartı bilgileriniz güvenli sistemlerle işlenir</li>
        <li>Kart bilgileriniz sistemimizde saklanmaz</li>
        <li>Ödeme işlemleri SSL sertifikası ile şifrelenir</li>
    </ul>

    <h3>4.3 Bağış İadesi</h3>
    <ul>
        <li>Bağışlar yapıldıktan sonra iade edilmez</li>
        <li>Teknik hatalar durumunda iade değerlendirilebilir</li>
        <li>İade talepleri yazılı olarak iletilmelidir</li>
    </ul>

    <h2>5. FİKRİ MÜLKİYET HAKLARI</h2>
    
    <h3>5.1 Dernek İçerikleri</h3>
    <ul>
        <li>Sitedeki tüm içerikler İslami Merci Derneği'ne aittir</li>
        <li>İçerikleri kişisel kullanım dışında kopyalayamazsınız</li>
    </ul>

    <h3>5.2 Kullanıcı İçerikleri</h3>
    <ul>
        <li>Siteye gönderdiğiniz içeriklerin sorumluluğu size aittir</li>
        <li>Gönderdiğiniz içerikler telif hakkı ihlali içermemelidir</li>
        <li>Dernek, kullanıcı içeriklerini denetleme hakkını saklı tutar</li>
    </ul>

    <h2>6. SORUMLULUK SINIRLAMALARI</h2>
    
    <h3>6.1 Hizmet Kesintileri</h3>
    <ul>
        <li>Site zaman zaman bakım nedeniyle erişilemeyebilir</li>
        <li>Sistem arızalarından dolayı sorumluluk kabul edilmez</li>
        <li>Hizmet kalitesi garantisi verilmez</li>
    </ul>

    <h3>6.2 Üçüncü Taraf Bağlantıları</h3>
    <ul>
        <li>Sitede üçüncü taraf sitelere bağlantılar bulunabilir</li>
        <li>Bu sitelerin içeriğinden sorumlu değiliz</li>
        <li>Bağlantılı sitelerin gizlilik politikaları farklı olabilir</li>
    </ul>

    <h3>6.3 Zarar Sorumluluğu</h3>
    <ul>
        <li>Dernek, dolaylı zararlardan sorumlu tutulamaz</li>
        <li>Sorumluluk, ödenen bağış tutarı ile sınırlıdır</li>
        <li>Mücbir sebep hallerinde sorumluluk kabul edilmez</li>
    </ul>

    <h2>7. UYUŞMAZLIK ÇÖZÜMÜ</h2>
    
    <h3>7.1 Uygulanacak Hukuk</h3>
    <ul>
        <li>Bu şartlar Türk Hukuku'na tabidir</li>
        <li>Türkiye Cumhuriyeti mahkemeleri yetkilidir</li>
        <li>İstanbul mahkemeleri özel yetkilidir</li>
    </ul>

    <h3>7.2 İhtilaf Çözümü</h3>
    <ul>
        <li>Öncelikle dostane çözüm aranır</li>
        <li>Anlaşmazlıklar tüketici hakemliğine götürülebilir</li>
        <li>Hukuki süreç son çare olarak başvurulur</li>
    </ul>

    <h2>8. ŞARTLARDA DEĞİŞİKLİK</h2>
    
    <h3>8.1 Güncelleme Hakkı</h3>
    <ul>
        <li>Bu şartlar önceden haber verilmeksizin güncellenebilir</li>
        <li>Değişiklikler sitede yayınlandığı tarihte yürürlüğe girer</li>
        <li>Siteyi kullanmaya devam etmeniz değişiklikleri kabul ettiğiniz anlamına gelir</li>
    </ul>

    <h3>8.2 Bildirim</h3>
    <ul>
        <li>Önemli değişiklikler e-posta ile bildirilebilir</li>
        <li>Siteyi düzenli olarak kontrol etmeniz önerilir</li>
    </ul>

    <h2>9. İLETİŞİM</h2>
    <p>Bu Kullanım Şartları ile ilgili sorularınız için:</p>
    <p><strong>İslami Merci Derneği</strong><br>
    <strong>Web sitesi:</strong> islamimerci.org<br>
    <strong>E-posta:</strong> iletisim@islamimerci.org</p>

    <h2>10. YÜRÜRLÜLÜK</h2>
    <p>Bu Kullanım Şartları 17.09.2025 tarihi itibariyle yürürlüğe girmiştir.</p>

    <hr>
    <p><em>Bu şartlar Türkiye Cumhuriyeti mevzuatı ve internet hukuku çerçevesinde hazırlanmıştır.</em></p>
</body>
</html>
        `,
      },
      {
        language: "en",
        content: `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terms of Use - Islamic Authority Association</title>
</head>
<body>
    <h1>TERMS OF USE</h1>
    <p><strong>Last Updated:</strong> September 17, 2025</p>
    <p>These Terms of Use establish the terms and conditions regarding the use of the islamimerci.org website owned by the Islamic Authority Association.</p>

    <h2>1. GENERAL PROVISIONS</h2>
    
    <h3>1.1 Definitions</h3>
    <ul>
        <li><strong>"Association":</strong> Islamic Authority Association</li>
        <li><strong>"Site":</strong> islamimerci.org website</li>
        <li><strong>"User":</strong> Any person visiting or using the site</li>
        <li><strong>"Member":</strong> Users who have registered on the site</li>
        <li><strong>"Content":</strong> All text, visual, video and other materials on the site</li>
    </ul>

    <h3>1.2 Acceptance of Terms</h3>
    <ul>
        <li>By using this site, you are deemed to have accepted these terms</li>
        <li>If you do not accept the terms, do not use the site</li>
        <li>These terms are binding for all users</li>
    </ul>

    <h2>2. SITE USAGE</h2>
    
    <h3>2.1 Permitted Use</h3>
    <ul>
        <li>Using the site for personal and non-commercial purposes</li>
        <li>Learning about association activities</li>
        <li>Making donations and communicating</li>
        <li>Saving content for personal reference</li>
    </ul>

    <h3>2.2 Prohibited Activities</h3>
    <p>The following activities are strictly prohibited:</p>
    
    <h4>Technical Prohibited Operations:</h4>
    <ul>
        <li>Attempting to disable the site's security systems</li>
        <li>Using automated systems (bots, crawlers)</li>
        <li>Engaging in activities that harm the site infrastructure</li>
        <li>Unauthorized access to other users' accounts</li>
    </ul>

    <h4>Content-Related Prohibitions:</h4>
    <ul>
        <li>Sharing content that infringes copyright</li>
        <li>Sending obscene, insulting or illegal content</li>
        <li>Sending spam or unwanted advertisements</li>
        <li>Messages that disturb other users</li>
    </ul>

    <h4>Commercial Prohibitions:</h4>
    <ul>
        <li>Making commercial sales through the site</li>
        <li>Misusing the association's name</li>
        <li>Advertising for other sites</li>
    </ul>

    <h2>3. MEMBERSHIP AND ACCOUNT MANAGEMENT</h2>
    
    <h3>3.1 Account Creation</h3>
    <ul>
        <li>You must provide accurate and current information</li>
        <li>You are responsible for the confidentiality of your account information</li>
    </ul>

    <h3>3.2 Account Security</h3>
    <ul>
        <li>Do not share your password with anyone</li>
        <li>Inform the association when you notice suspicious activity on your account</li>
        <li>You are responsible for all activities on your account</li>
    </ul>

    <h3>3.3 Account Termination</h3>
    <ul>
        <li>You can close your account at any time</li>
        <li>The association reserves the right to close accounts that violate these terms</li>
        <li>In case of account closure, your data will be processed within the framework of our privacy policy</li>
    </ul>

    <h2>4. DONATION TRANSACTIONS</h2>
    
    <h3>4.1 Donation Acceptance Conditions</h3>
    <ul>
        <li>Donations are based on voluntariness</li>
        <li>Minimum donation amount is 100 TL for Turkish Lira, 5 USD for US Dollar and 5 EUR for Euro</li>
        <li>Donations are accepted within the framework of legal legislation</li>
    </ul>

    <h3>4.2 Payment Security</h3>
    <ul>
        <li>Your credit card information is processed with secure systems</li>
        <li>Your card information is not stored in our system</li>
        <li>Payment transactions are encrypted with SSL certificate</li>
    </ul>

    <h3>4.3 Donation Refund</h3>
    <ul>
        <li>Donations are not refunded after they are made</li>
        <li>Refunds may be considered in case of technical errors</li>
        <li>Refund requests must be submitted in writing</li>
    </ul>

    <h2>5. INTELLECTUAL PROPERTY RIGHTS</h2>
    
    <h3>5.1 Association Content</h3>
    <ul>
        <li>All content on the site belongs to the Islamic Authority Association</li>
        <li>You cannot copy content other than personal use</li>
    </ul>

    <h3>5.2 User Content</h3>
    <ul>
        <li>You are responsible for the content you send to the site</li>
        <li>The content you send must not contain copyright infringement</li>
        <li>The association reserves the right to review user content</li>
    </ul>

    <h2>6. LIMITATION OF LIABILITY</h2>
    
    <h3>6.1 Service Interruptions</h3>
    <ul>
        <li>The site may be inaccessible from time to time due to maintenance</li>
        <li>No liability is accepted for system failures</li>
        <li>No service quality guarantee is given</li>
    </ul>

    <h3>6.2 Third Party Links</h3>
    <ul>
        <li>The site may contain links to third party sites</li>
        <li>We are not responsible for the content of these sites</li>
        <li>Privacy policies of linked sites may differ</li>
    </ul>

    <h3>6.3 Damage Liability</h3>
    <ul>
        <li>The association cannot be held responsible for indirect damages</li>
        <li>Liability is limited to the amount of donation paid</li>
        <li>No liability is accepted in cases of force majeure</li>
    </ul>

    <h2>7. DISPUTE RESOLUTION</h2>
    
    <h3>7.1 Applicable Law</h3>
    <ul>
        <li>These terms are subject to Turkish Law</li>
        <li>Turkish Republic courts are competent</li>
        <li>Istanbul courts have special jurisdiction</li>
    </ul>

    <h3>7.2 Dispute Resolution</h3>
    <ul>
        <li>Amicable solution is sought first</li>
        <li>Disputes can be taken to consumer arbitration</li>
        <li>Legal process is applied as a last resort</li>
    </ul>

    <h2>8. CHANGES TO TERMS</h2>
    
    <h3>8.1 Right to Update</h3>
    <ul>
        <li>These terms can be updated without prior notice</li>
        <li>Changes take effect on the date they are published on the site</li>
        <li>Continuing to use the site means you accept the changes</li>
    </ul>

    <h3>8.2 Notification</h3>
    <ul>
        <li>Important changes may be notified by e-mail</li>
        <li>It is recommended that you check the site regularly</li>
    </ul>

    <h2>9. CONTACT</h2>
    <p>For questions regarding these Terms of Use:</p>
    <p><strong>Islamic Authority Association</strong><br>
    <strong>Website:</strong> islamimerci.org<br>
    <strong>E-mail:</strong> iletisim@islamimerci.org</p>

    <h2>10. EFFECTIVE DATE</h2>
    <p>These Terms of Use have entered into force as of September 17, 2025.</p>

    <hr>
    <p><em>These terms have been prepared within the framework of the Republic of Turkey legislation and internet law.</em></p>
</body>
</html>
        `,
      },
      {
        language: "ar",
        content: `
      <!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>شروط الاستخدام - جمعية المرجع الإسلامي</title>
</head>
<body>
    <h1>شروط الاستخدام</h1>
    <p><strong>تاريخ آخر تحديث:</strong> 17 سبتمبر 2025</p>
    <p>تحدد شروط الاستخدام هذه الأحكام والشروط المتعلقة باستخدام موقع islamimerci.org المملوك لجمعية المرجع الإسلامي.</p>

    <h2>1. الأحكام العامة</h2>
    
    <h3>1.1 التعاريف</h3>
    <ul>
        <li><strong>"الجمعية":</strong> جمعية المرجع الإسلامي</li>
        <li><strong>"الموقع":</strong> موقع islamimerci.org الإلكتروني</li>
        <li><strong>"المستخدم":</strong> أي شخص يزور أو يستخدم الموقع</li>
        <li><strong>"العضو":</strong> المستخدمون المسجلون في الموقع</li>
        <li><strong>"المحتوى":</strong> جميع النصوص والمرئيات ومقاطع الفيديو والمواد الأخرى الموجودة في الموقع</li>
    </ul>

    <h3>1.2 قبول الشروط</h3>
    <ul>
        <li>باستخدام هذا الموقع، تعتبر قد وافقت على هذه الشروط</li>
        <li>إذا كنت لا توافق على الشروط، فلا تستخدم الموقع</li>
        <li>هذه الشروط ملزمة لجميع المستخدمين</li>
    </ul>

    <h2>2. استخدام الموقع</h2>
    
    <h3>2.1 الاستخدام المسموح</h3>
    <ul>
        <li>استخدام الموقع للأغراض الشخصية وغير التجارية</li>
        <li>التعرف على أنشطة الجمعية</li>
        <li>التبرع والتواصل</li>
        <li>حفظ المحتوى للمرجع الشخصي</li>
    </ul>

    <h3>2.2 الأنشطة المحظورة</h3>
    <p>الأنشطة التالية محظورة بشكل صارم:</p>
    
    <h4>العمليات التقنية المحظورة:</h4>
    <ul>
        <li>محاولة تعطيل أنظمة أمان الموقع</li>
        <li>استخدام الأنظمة الآلية (البوتات، الزاحفات)</li>
        <li>الانخراط في أنشطة تضر بالبنية التحتية للموقع</li>
        <li>الوصول غير المصرح به إلى حسابات المستخدمين الآخرين</li>
    </ul>

    <h4>المحظورات المتعلقة بالمحتوى:</h4>
    <ul>
        <li>مشاركة المحتوى الذي ينتهك حقوق الطبع والنشر</li>
        <li>إرسال محتوى فاحش أو مسيء أو غير قانوني</li>
        <li>إرسال رسائل غير مرغوب فيها أو إعلانات غير مرغوب فيها</li>
        <li>رسائل تزعج المستخدمين الآخرين</li>
    </ul>

    <h4>المحظورات التجارية:</h4>
    <ul>
        <li>القيام بمبيعات تجارية من خلال الموقع</li>
        <li>إساءة استخدام اسم الجمعية</li>
        <li>الإعلان لمواقع أخرى</li>
    </ul>

    <h2>3. العضوية وإدارة الحساب</h2>
    
    <h3>3.1 إنشاء الحساب</h3>
    <ul>
        <li>يجب تقديم معلومات دقيقة ومحدثة</li>
        <li>أنت مسؤول عن سرية معلومات حسابك</li>
    </ul>

    <h3>3.2 أمان الحساب</h3>
    <ul>
        <li>لا تشارك كلمة المرور الخاصة بك مع أي شخص</li>
        <li>أبلغ الجمعية عندما تلاحظ نشاطاً مشبوهاً في حسابك</li>
        <li>أنت مسؤول عن جميع الأنشطة في حسابك</li>
    </ul>

    <h3>3.3 إنهاء الحساب</h3>
    <ul>
        <li>يمكنك إغلاق حسابك في أي وقت</li>
        <li>تحتفظ الجمعية بالحق في إغلاق الحسابات التي تنتهك هذه الشروط</li>
        <li>في حالة إغلاق الحساب، ستتم معالجة بياناتك في إطار سياسة الخصوصية الخاصة بنا</li>
    </ul>

    <h2>4. معاملات التبرع</h2>
    
    <h3>4.1 شروط قبول التبرع</h3>
    <ul>
        <li>التبرعات تقوم على أساس التطوع</li>
        <li>الحد الأدنى لمبلغ التبرع هو 100 ليرة تركية للليرة التركية، و5 دولار أمريكي للدولار الأمريكي، و5 يورو لليورو</li>
        <li>يتم قبول التبرعات في إطار التشريع القانوني</li>
    </ul>

    <h3>4.2 أمان الدفع</h3>
    <ul>
        <li>يتم معالجة معلومات بطاقتك الائتمانية بأنظمة آمنة</li>
        <li>لا يتم تخزين معلومات بطاقتك في نظامنا</li>
        <li>معاملات الدفع مشفرة بشهادة SSL</li>
    </ul>

    <h3>4.3 استرداد التبرع</h3>
    <ul>
        <li>لا يتم استرداد التبرعات بعد تقديمها</li>
        <li>قد يُنظر في الاسترداد في حالة الأخطاء التقنية</li>
        <li>يجب تقديم طلبات الاسترداد كتابياً</li>
    </ul>

    <h2>5. حقوق الملكية الفكرية</h2>
    
    <h3>5.1 محتوى الجمعية</h3>
    <ul>
        <li>جميع المحتويات الموجودة في الموقع مملوكة لجمعية المرجع الإسلامي</li>
        <li>لا يمكنك نسخ المحتوى عدا للاستخدام الشخصي</li>
    </ul>

    <h3>5.2 محتوى المستخدم</h3>
    <ul>
        <li>أنت مسؤول عن المحتوى الذي ترسله إلى الموقع</li>
        <li>يجب ألا يحتوي المحتوى الذي ترسله على انتهاك لحقوق الطبع والنشر</li>
        <li>تحتفظ الجمعية بالحق في مراجعة محتوى المستخدم</li>
    </ul>

    <h2>6. قيود المسؤولية</h2>
    
    <h3>6.1 انقطاع الخدمة</h3>
    <ul>
        <li>قد يكون الموقع غير متاح من وقت لآخر بسبب الصيانة</li>
        <li>لا يتم قبول المسؤولية عن فشل النظام</li>
        <li>لا يتم إعطاء ضمان جودة الخدمة</li>
    </ul>

    <h3>6.2 روابط الطرف الثالث</h3>
    <ul>
        <li>قد يحتوي الموقع على روابط لمواقع طرف ثالث</li>
        <li>نحن لسنا مسؤولين عن محتوى هذه المواقع</li>
        <li>قد تختلف سياسات الخصوصية للمواقع المرتبطة</li>
    </ul>

    <h3>6.3 مسؤولية الضرر</h3>
    <ul>
        <li>لا يمكن تحميل الجمعية مسؤولية الأضرار غير المباشرة</li>
        <li>المسؤولية محدودة بمبلغ التبرع المدفوع</li>
        <li>لا يتم قبول المسؤولية في حالات القوة القاهرة</li>
    </ul>

    <h2>7. حل النزاعات</h2>
    
    <h3>7.1 القانون المطبق</h3>
    <ul>
        <li>هذه الشروط خاضعة للقانون التركي</li>
        <li>محاكم الجمهورية التركية مختصة</li>
        <li>محاكم اسطنبول لها اختصاص خاص</li>
    </ul>

    <h3>7.2 حل النزاعات</h3>
    <ul>
        <li>يُسعى إلى الحل الودي أولاً</li>
        <li>يمكن نقل النزاعات إلى التحكيم الاستهلاكي</li>
        <li>العملية القانونية تُطبق كملاذ أخير</li>
    </ul>

    <h2>8. التغييرات على الشروط</h2>
    
    <h3>8.1 حق التحديث</h3>
    <ul>
        <li>يمكن تحديث هذه الشروط دون إشعار مسبق</li>
        <li>التغييرات تدخل حيز التنفيذ في تاريخ نشرها على الموقع</li>
        <li>الاستمرار في استخدام الموقع يعني قبولك للتغييرات</li>
    </ul>

    <h3>8.2 الإشعار</h3>
    <ul>
        <li>قد يتم إخطار التغييرات المهمة عبر البريد الإلكتروني</li>
        <li>يُنصح بفحص الموقع بانتظام</li>
    </ul>

    <h2>9. التواصل</h2>
    <p>للأسئلة المتعلقة بشروط الاستخدام هذه:</p>
    <p><strong>جمعية المرجع الإسلامي</strong><br>
    <strong>الموقع الإلكتروني:</strong> islamimerci.org<br>
    <strong>البريد الإلكتروني:</strong> iletisim@islamimerci.org</p>

    <h2>10. تاريخ السريان</h2>
    <p>دخلت شروط الاستخدام هذه حيز التنفيذ اعتباراً من 17 سبتمبر 2025.</p>

    <hr>
    <p><em>تم إعداد هذه الشروط في إطار تشريع الجمهورية التركية وقانون الإنترنت.</em></p>
</body></html>
`,
      },
    ],
  },
  distanceSelling: {
    distanceSellingContent: [
      {
        language: "tr",
        content: `
      <h1>İSLAMİ MERCİ DERNEĞİ</h1>
<h2>Mesafeli Bağış Sözleşmesi</h2>

<h3>1. Taraflar</h3>
<p>İşbu Sözleşme aşağıdaki taraflar arasında aşağıda belirtilen hüküm ve şartlar çerçevesinde yapılmıştır.</p>

<h4>Bağışçı (ALICI)</h4>
<ul>
  <li>Adı-Soyadı / Kurum: ……………………………………</li>
  <li>Adres: ……………………………………</li>
  <li>Telefon: ……………………………………</li>
  <li>E-posta: ……………………………………</li>
</ul>

<h4>Dernek (SATICI)</h4>
<ul>
  <li>Ünvanı: İslami Merci Derneği</li>
  <li>Adres: Türkiye, İstanbul, Bahçelievler, Çelik Hançer Cd., No:14B</li>
  <li>E-posta: iletisim@islamimerci.org</li>
</ul>

<p>İşbu sözleşmeyi kabul etmekle Bağışçı, bağış miktarını ve varsa banka/ödeme altyapısı ücretlerini ödeme yükümlülüğü altına gireceğini ve bu konuda bilgilendirildiğini peşinen kabul eder.</p>

<h3>2. Tanımlar</h3>
<ul>
  <li><strong>KANUN:</strong> 6502 sayılı Tüketicinin Korunması Hakkında Kanun’u</li>
  <li><strong>YÖNETMELİK:</strong> Mesafeli Sözleşmeler Yönetmeliği</li>
  <li><strong>BAĞIŞ:</strong> Bağışçının herhangi bir mal veya hizmet karşılığı olmaksızın yaptığı gönüllü ödeme</li>
  <li><strong>SÖZLEŞME:</strong> İşbu Mesafeli Bağış Sözleşmesi</li>
  <li><strong>SITE:</strong> Derneğe ait internet sitesi</li>
</ul>

<h3>3. Konu</h3>
<p>İşbu sözleşmenin konusu, Bağışçı’nın derneğe internet sitesi veya banka kanalı üzerinden gerçekleştirdiği bağışın usul ve esaslarını düzenlemektir.</p>
<p>Bağışlar, mal veya hizmet karşılığı olmaksızın yapılmakta olup, dernek bağış karşılığı herhangi bir ürün teslimi yapmayacaktır.</p>

<h3>4. Dernek Bilgileri</h3>
<ul>
  <li>Ünvanı: İslami Merci Derneği</li>
  <li>Adres: Türkiye, İstanbul, Bahçelievler, Çelik Hançer Cd., No:14B</li>
  <li>E-posta: iletisim@islamimerci.org</li>
</ul>

<h3>5. Bağış Bilgileri</h3>
<ul>
  <li>Ödeme Yöntemi: Kredi kartı, IBAN havale/EFT</li>
  <li>Bağış Tutarı: Bağışçı tarafından belirlenen miktar</li>
  <li>Teslimat: Yoktur (bağış karşılığı mal/hizmet teslimi yapılmaz)</li>
</ul>

<h3>6. Cayma ve İade Koşulları</h3>
<ol>
  <li>Bir bağışın yardımı başarılı bir şekilde derneğin hesaplarına transfer olmuş ise <strong>geri dönüşü yapılmayacaktır</strong>.</li>
  <li>Teknik bir aksaklık veya ödeme kaynaklı sorunlar olması durumunda, Bağışçı iade talebi oluşturabilir ve dernek gerekli incelemeyi yaparak çözüm sağlayabilir.</li>
</ol>

<h3>7. Genel Hükümler</h3>
<ul>
  <li><strong>Bilgilendirme ve Kabul:</strong> Bağışçı, derneğin sitesinde veya banka kanallarında sağlanan bilgileri okuyup, bağışın geri alınamayacağını ve teknik aksaklık durumunda iade prosedürünü anladığını kabul eder.</li>
  <li><strong>Yetkili Mahkeme:</strong> İşbu sözleşmeden doğan uyuşmazlıklarda şikayetler, Türkiye Cumhuriyeti yasaları çerçevesinde, bağışçının yerleşim yeri veya derneğin merkezinin bulunduğu İstanbul mahkemelerinde çözülecektir.</li>
  <li><strong>Yürürlük:</strong> Bağışçı, site veya banka üzerinden yaptığı ödemeyi gerçekleştirdiğinde işbu sözleşmenin tüm şartlarını kabul etmiş sayılır.</li>
</ul>
      `,
      },
      {
        language: "en",
        content: `
      <h1>ISLAMI MERCI ASSOCIATION</h1>
<h2>Distance Donation Agreement</h2>

<h3>1. Parties</h3>
<p>This Agreement is concluded between the following parties under the terms and conditions stated below.</p>

<h4>Donor (RECIPIENT)</h4>
<ul>
  <li>Name / Organization: ……………………………………</li>
  <li>Address: ……………………………………</li>
  <li>Phone: ……………………………………</li>
  <li>Email: ……………………………………</li>
</ul>

<h4>Association (SELLER)</h4>
<ul>
  <li>Title: Islami Merci Association</li>
  <li>Address: Turkey, Istanbul, Bahçelievler, Çelik Hançer Cd., No:14B</li>
  <li>Email: iletisim@islamimerci.org</li>
</ul>

<h3>2. Definitions</h3>
<ul>
  <li><strong>LAW:</strong> Law No. 6502 on the Protection of the Consumer</li>
  <li><strong>REGULATION:</strong> Distance Contracts Regulation</li>
  <li><strong>DONATION:</strong> Voluntary payment made by the donor without receiving goods or services in return</li>
  <li><strong>AGREEMENT:</strong> This Distance Donation Agreement</li>
  <li><strong>SITE:</strong> The Association's website</li>
</ul>

<h3>3. Subject</h3>
<p>This Agreement regulates the principles and procedures of the donations made by the Donor via the Association's website or bank channels.</p>
<p>Donations are made without any goods or services in return. No product delivery will be made for donations.</p>

<h3>6. Withdrawal and Refund Policy</h3>
<ol>
  <li>If a donation is successfully transferred to the Association's accounts, <strong>it cannot be refunded</strong>.</li>
  <li>In case of technical issues or payment errors, the Donor can submit a refund request, and the Association will review and resolve it.</li>
</ol>

<h3>7. General Provisions</h3>
<ul>
  <li><strong>Information and Acceptance:</strong> The Donor confirms that they have read the information provided on the website or bank channels and understands that donations cannot be refunded except in technical issues.</li>
  <li><strong>Jurisdiction:</strong> Istanbul courts shall have jurisdiction.</li>
  <li><strong>Effective Date:</strong> The Agreement becomes effective once the Donor completes the payment via website or bank.</li>
</ul>
      `,
      },
      {
        language: "ar",
        content: `
      <h1>جمعية الإسلامي مرسي</h1>
<h2>اتفاقية التبرع عن بعد</h2>

<h3>1. الأطراف</h3>
<p>تم إبرام هذه الاتفاقية بين الأطراف التالية وفقًا للشروط والأحكام المبينة أدناه.</p>

<h4>المتبرع (المستفيد)</h4>
<ul>
  <li>الاسم / المؤسسة: ……………………………………</li>
  <li>العنوان: ……………………………………</li>
  <li>الهاتف: ……………………………………</li>
  <li>البريد الإلكتروني: ……………………………………</li>
</ul>

<h4>الجمعية (البائع)</h4>
<ul>
  <li>الاسم: جمعية الإسلامي مرسي</li>
  <li>العنوان: تركيا، إسطنبول، باهشيليفلر، شارع تشيليك هانشير، رقم 14B</li>
  <li>البريد الإلكتروني: iletisim@islamimerci.org</li>
</ul>

<h3>2. التعاريف</h3>
<ul>
  <li><strong>القانون:</strong> القانون رقم 6502 لحماية المستهلك</li>
  <li><strong>اللائحة:</strong> لائحة العقود عن بعد</li>
  <li><strong>التبرع:</strong> دفع تطوعي يقوم به المتبرع دون الحصول على سلع أو خدمات مقابل ذلك</li>
  <li><strong>الاتفاقية:</strong> اتفاقية التبرع عن بعد هذه</li>
  <li><strong>الموقع:</strong> موقع الجمعية على الإنترنت</li>
</ul>

<h3>3. الموضوع</h3>
<p>تهدف هذه الاتفاقية إلى تنظيم إجراءات التبرعات التي يقوم بها المتبرع عبر الموقع الإلكتروني للجمعية أو القنوات المصرفية.</p>
<p>تتم التبرعات دون أي سلع أو خدمات مقابلها. ولن يتم تسليم أي منتجات مقابل التبرع.</p>

<h3>6. سياسة الانسحاب واسترداد الأموال</h3>
<ol>
  <li>إذا تم تحويل التبرع بنجاح إلى حسابات الجمعية، <strong>لا يمكن استرداده</strong>.</li>
  <li>في حال حدوث مشكلات فنية أو خطأ في الدفع، يمكن للمتبرع تقديم طلب استرداد، وستقوم الجمعية بمراجعته وحله.</li>
</ol>

<h3>7. الأحكام العامة</h3>
<ul>
  <li><strong>المعلومات والموافقة:</strong> يؤكد المتبرع أنه قرأ المعلومات المقدمة على الموقع أو القنوات المصرفية ويفهم أن التبرعات لا يمكن استردادها إلا في حالة المشاكل التقنية.</li>
  <li><strong>الاختصاص القضائي:</strong> محاكم إسطنبول هي المختصة.</li>
  <li><strong>تاريخ النفاذ:</strong> تصبح الاتفاقية نافذة بمجرد أن يتم المتبرع من الدفع عبر الموقع أو البنك.</li>
</ul>
      `,
      },
    ],
  },
  cookies: {
    cookiesContent: [
      {
        language: "tr",
        content: `
        <h1>ÇEREZ POLİTİKASI</h1>

<p><strong>Son Güncelleme Tarihi:</strong> 19.07.2025</p>

<p>İslami Merci Derneği olarak islamimerci.org web sitemizde çerez (cookie) teknolojisini kullanmaktayız. Bu politika, çerezlerin nasıl kullanıldığını ve yönetileceğini açıklamaktadır.</p>

<h2>ÇEREZ NEDİR?</h2>
<p>Çerezler, web sitelerini ziyaret ettiğinizde tarayıcınız tarafından cihazınıza kaydedilen küçük metin dosyalarıdır. Bu dosyalar:</p>
<ul>
  <li>Size özelleştirilmiş deneyim sunar</li>
  <li>Site performansını artırır</li>
  <li>Güvenlik sağlar</li>
  <li>İstatistiksel analizler yapar</li>
</ul>

<h2>KULLANDIĞIMIZ ÇEREZ TÜRLERİ</h2>

<h3>1. Zorunlu Çerezler (Kesinlikle Gerekli)</h3>
<p>
Bu çerezler web sitemizin çalışması için zorunludur. Güvenli giriş, oturum yönetimi ve site güvenliği için kullanılmaktadır. Devre dışı bırakılamazlar.
</p>

<h3>2. Analitik Çerezler</h3>
<p>
Bu çerezler, web sitemizin kullanım istatistiklerini toplar ve performansını ölçmemize yardımcı olur. Kullanıcı davranışları anonim olarak analiz edilir. İsteğe bağlıdır, tercihlerinize göre devre dışı bırakabilirsiniz.
</p>

<h2>ÇEREZ YÖNETİMİ VE KONTROL</h2>

<h3>Tarayıcı Ayarları ile Çerez Kontrolü</h3>
<ul>
  <li><strong>Chrome:</strong> Ayarlar > Gizlilik ve Güvenlik > Çerezler</li>
  <li><strong>Firefox:</strong> Ayarlar > Gizlilik ve Güvenlik</li>
  <li><strong>Safari:</strong> Tercihler > Gizlilik</li>
  <li><strong>Edge:</strong> Ayarlar > Çerezler ve Site İzinleri</li>
</ul>

<h3>Çerez Tercihleri</h3>
<p>
Zorunlu çerezler devre dışı bırakılamaz. Analitik çerezler ise isteğe bağlıdır. Tarayıcınızın ayarlarından çerezleri silebilir veya engelleyebilirsiniz. Bu durumda sitenin bazı işlevleri kısıtlanabilir.
</p>

<h2>ÇEREZ VERİLERİNİN KORUNMASI</h2>

<h3>Güvenlik Önlemleri</h3>
<ul>
  <li>Çerezler SSL şifreleme ile korunur</li>
  <li>Hassas bilgiler çerezlerde saklanmaz</li>
  <li>Güvenli çerez protokolü kullanılır</li>
</ul>

<h3>Veri Paylaşımı</h3>
<p>
Çerez verileriniz üçüncü taraflarla ticari amaçla paylaşılmaz. Analitik veriler anonim olarak hizmet sağlayıcılar ile paylaşılabilir.
</p>

<h2>YASAL DAYANAK VE HAKLAR</h2>

<h3>KVKK Kapsamında Haklarınız</h3>
<ul>
  <li>Çerez verilerinizin işlendiğini öğrenme hakkı</li>
  <li>Çerez tercihlerinizi değiştirme hakkı</li>
  <li>Analitik çerezlere itiraz etme hakkı</li>
</ul>

<h3>Rıza Yönetimi</h3>
<p>
Zorunlu olmayan çerezler için rızanız alınır. Rızanızı istediğiniz zaman geri çekebilirsiniz.
</p>

<h2>POLİTİKA GÜNCELLEMELERİ</h2>

<h3>Değişiklik Bildirimi</h3>
<p>
Bu politika güncellendiğinde web sitemiz üzerinden duyuru yapılır. Gerekirse e-posta yoluyla bilgilendirme sağlanabilir.
</p>

<h3>Değişikliklerin Yürürlüğü</h3>
<p>
Güncellemeler sitede yayınlandığı tarihte geçerli olur. Siteyi kullanmaya devam etmeniz değişiklikleri kabul ettiğiniz anlamına gelir.
</p>

<h2>ÇEREZ UYUMLULUĞU</h2>
<p>
Bu çerez politikası 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK), Elektronik Ticaretin Düzenlenmesi Hakkında Kanun ve Avrupa Birliği GDPR direktifleri ile uyumludur.
</p>

<h2>ÇEREZ SORULARI VE DESTEKLENMEYEN DURUMLAR</h2>

<h3>Çerezler Devre Dışıysa:</h3>
<ul>
  <li>Giriş yapamayabilirsiniz</li>
  <li>Site tercihleri kaybolabilir</li>
  <li>Güvenlik özellikleri çalışmayabilir</li>
  <li>Bağış işlemleri etkilenebilir</li>
</ul>

<h3>Sorun Yaşarsanız:</h3>
<ul>
  <li>Tarayıcı ön belleğinizi temizleyin</li>
  <li>Çerez ayarlarınızı kontrol edin</li>
  <li>Bizimle iletişime geçin</li>
</ul>

<h2>İLETİŞİM</h2>
<p>
Çerez politikası ile ilgili sorularınız için:<br>
<strong>İslami Merci Derneği</strong><br>
Web sitesi: islamimerci.org<br>
E-posta: iletisim@islamimerci.org
</p>
`,
      },
      {
        language: "en",
        content: `
        <h1>COOKIE POLICY</h1>

<p><strong>Last Updated:</strong> 19.07.2025</p>

<p>As İslami Merci Association, we use cookie technology on our website islamimerci.org. This policy explains how cookies are used and managed.</p>

<h2>WHAT IS A COOKIE?</h2>
<p>Cookies are small text files stored on your device by your browser when you visit websites. They:</p>
<ul>
  <li>Provide a personalized experience</li>
  <li>Improve site performance</li>
  <li>Ensure security</li>
  <li>Enable statistical analysis</li>
</ul>

<h2>TYPES OF COOKIES WE USE</h2>

<h3>1. Essential Cookies</h3>
<p>
These cookies are necessary for the website to function. They are used for secure login, session management, and site security. They cannot be disabled.
</p>

<h3>2. Analytical Cookies</h3>
<p>
These cookies collect usage statistics and help us measure the performance of the website. User behavior is analyzed anonymously. These cookies are optional and can be disabled according to your preferences.
</p>

<h2>COOKIE MANAGEMENT AND CONTROL</h2>

<h3>Managing Cookies via Browser Settings</h3>
<ul>
  <li><strong>Chrome:</strong> Settings > Privacy and Security > Cookies</li>
  <li><strong>Firefox:</strong> Settings > Privacy and Security</li>
  <li><strong>Safari:</strong> Preferences > Privacy</li>
  <li><strong>Edge:</strong> Settings > Cookies and Site Permissions</li>
</ul>

<h3>Cookie Preferences</h3>
<p>
Essential cookies cannot be disabled. Analytical cookies are optional. You can delete or block cookies through your browser settings. However, some site functions may be restricted as a result.
</p>

<h2>PROTECTION OF COOKIE DATA</h2>

<h3>Security Measures</h3>
<ul>
  <li>Cookies are protected with SSL encryption</li>
  <li>Sensitive information is not stored in cookies</li>
  <li>Secure cookie protocols are used</li>
</ul>

<h3>Data Sharing</h3>
<p>
Your cookie data is not shared with third parties for commercial purposes. Analytical data may be shared anonymously with service providers.
</p>

<h2>LEGAL BASIS AND RIGHTS</h2>

<h3>Your Rights under Data Protection Laws</h3>
<ul>
  <li>The right to know if your cookie data is processed</li>
  <li>The right to change your cookie preferences</li>
  <li>The right to object to analytical cookies</li>
</ul>

<h3>Consent Management</h3>
<p>
Your consent is obtained for non-essential cookies. You may withdraw your consent at any time.
</p>

<h2>POLICY UPDATES</h2>

<h3>Notification of Changes</h3>
<p>
When this policy is updated, we will make an announcement on our website. If necessary, you may also be notified by email.
</p>

<h3>Effective Date of Changes</h3>
<p>
Updates take effect on the date they are published on the website. Continuing to use the site means you accept the changes.
</p>

<h2>COOKIE COMPLIANCE</h2>
<p>
This cookie policy complies with the Law on the Protection of Personal Data (KVKK), the Law on the Regulation of Electronic Commerce, and the EU GDPR Directive.
</p>

<h2>COOKIE ISSUES AND UNSUPPORTED CASES</h2>

<h3>If Cookies Are Disabled:</h3>
<ul>
  <li>You may not be able to log in</li>
  <li>Your site preferences may be lost</li>
  <li>Security features may not work</li>
  <li>Donation transactions may be affected</li>
</ul>

<h3>If You Encounter Issues:</h3>
<ul>
  <li>Clear your browser cache</li>
  <li>Check your cookie settings</li>
  <li>Contact us</li>
</ul>

<h2>CONTACT</h2>
<p>
For questions about the cookie policy:<br>
<strong>İslami Merci Association</strong><br>
Website: islamimerci.org<br>
Email: iletisim@islamimerci.org
</p>
`,
      },
      {
        language: "ar",
        content: `
        <h1>سياسة ملفات تعريف الارتباط (الكوكيز)</h1>

<p><strong>تاريخ آخر تحديث:</strong> 19.07.2025</p>

<p>نحن في جمعية المرجع الإسلامي نستخدم تقنية الكوكيز في موقعنا islamimerci.org. تشرح هذه السياسة كيفية استخدام الكوكيز وكيفية إدارتها.</p>

<h2>ما هي الكوكيز؟</h2>
<p>الكوكيز هي ملفات نصية صغيرة يتم تخزينها على جهازك بواسطة المتصفح عند زيارة المواقع. وهي:</p>
<ul>
  <li>توفر تجربة مخصصة</li>
  <li>تعزز أداء الموقع</li>
  <li>توفر الأمان</li>
  <li>تساعد في التحليل الإحصائي</li>
</ul>

<h2>أنواع الكوكيز التي نستخدمها</h2>

<h3>1. الكوكيز الضرورية</h3>
<p>
هذه الكوكيز ضرورية لعمل الموقع. تُستخدم لتسجيل الدخول الآمن، وإدارة الجلسات، وحماية الموقع. لا يمكن تعطيلها.
</p>

<h3>2. الكوكيز التحليلية</h3>
<p>
تجمع هذه الكوكيز إحصاءات الاستخدام وتساعدنا في قياس أداء الموقع. يتم تحليل سلوك المستخدم بشكل مجهول. هذه الكوكيز اختيارية ويمكن تعطيلها حسب تفضيلاتك.
</p>

<h2>إدارة الكوكيز والتحكم بها</h2>

<h3>إعدادات المتصفح</h3>
<ul>
  <li><strong>Chrome:</strong> الإعدادات > الخصوصية والأمان > الكوكيز</li>
  <li><strong>Firefox:</strong> الإعدادات > الخصوصية والأمان</li>
  <li><strong>Safari:</strong> التفضيلات > الخصوصية</li>
  <li><strong>Edge:</strong> الإعدادات > الكوكيز وأذونات الموقع</li>
</ul>

<h3>تفضيلات الكوكيز</h3>
<p>
لا يمكن تعطيل الكوكيز الضرورية. أما الكوكيز التحليلية فهي اختيارية. يمكنك حذف أو حظر الكوكيز من خلال إعدادات المتصفح، ولكن قد تتأثر بعض وظائف الموقع.
</p>

<h2>حماية بيانات الكوكيز</h2>

<h3>إجراءات الأمان</h3>
<ul>
  <li>يتم حماية الكوكيز بتشفير SSL</li>
  <li>لا يتم تخزين معلومات حساسة في الكوكيز</li>
  <li>يتم استخدام بروتوكولات كوكيز آمنة</li>
</ul>

<h3>مشاركة البيانات</h3>
<p>
لن تتم مشاركة بيانات الكوكيز الخاصة بك مع أطراف ثالثة لأغراض تجارية. قد تتم مشاركة البيانات التحليلية بشكل مجهول مع مزوّدي الخدمة.
</p>

<h2>الأساس القانوني والحقوق</h2>

<h3>حقوقك وفقاً لقوانين حماية البيانات</h3>
<ul>
  <li>الحق في معرفة ما إذا كانت بيانات الكوكيز تتم معالجتها</li>
  <li>الحق في تغيير تفضيلات الكوكيز</li>
  <li>الحق في الاعتراض على الكوكيز التحليلية</li>
</ul>

<h3>إدارة الموافقة</h3>
<p>
يتم الحصول على موافقتك لاستخدام الكوكيز غير الضرورية. يمكنك سحب موافقتك في أي وقت.
</p>

<h2>تحديثات السياسة</h2>

<h3>إشعار التغييرات</h3>
<p>
عند تحديث هذه السياسة، سيتم الإعلان عنها عبر موقعنا. إذا لزم الأمر، قد يتم إعلامك عبر البريد الإلكتروني.
</p>

<h3>تاريخ سريان التغييرات</h3>
<p>
تسري التحديثات اعتباراً من تاريخ نشرها على الموقع. استمرارك في استخدام الموقع يعني موافقتك على التغييرات.
</p>

<h2>الامتثال للكوكيز</h2>
<p>
تتوافق سياسة الكوكيز هذه مع قانون حماية البيانات الشخصية (KVKK) وقانون تنظيم التجارة الإلكترونية وتوجيهات GDPR الأوروبية.
</p>

<h2>المشاكل المتعلقة بالكوكيز</h2>

<h3>إذا تم تعطيل الكوكيز:</h3>
<ul>
  <li>قد لا تتمكن من تسجيل الدخول</li>
  <li>قد تفقد تفضيلات الموقع</li>
  <li>قد لا تعمل ميزات الأمان</li>
  <li>قد تتأثر عمليات التبرع</li>
</ul>

<h3>إذا واجهت مشاكل:</h3>
<ul>
  <li>امسح ذاكرة التخزين المؤقت للمتصفح</li>
  <li>تحقق من إعدادات الكوكيز</li>
  <li>تواصل معنا</li>
</ul>

<h2>التواصل</h2>
<p>
للاستفسارات المتعلقة بسياسة الكوكيز:<br>
<strong>جمعية المرجع الإسلامي</strong><br>
الموقع: islamimerci.org<br>
البريد الإلكتروني: iletisim@islamimerci.org
</p>
`,
      },
    ],
  },
  deliveryAndReturns: {
    deliveryAndReturnsContent: [
      {
        language: "tr",
        content: `
           <h1>TESLİMAT VE İADE ŞARTLARI</h1>

    <p><strong>Son Güncelleme Tarihi:</strong> 19.07.2025</p>

    <h2>1. GENEL HÜKÜMLER</h2>
    <p>İslami Merci Derneği ("Dernek") bağış kabul eden bir kuruluş olup, site üzerinden gerçekleştirilen işlemler bağış niteliğindedir. Dernek herhangi bir ürün satışı yapmamaktadır; bu nedenle fiziksel veya dijital teslimat yapılmamaktadır. İşbu "Teslimat ve İade Şartları" bağışlara ilişkin usul ve esasları düzenler.</p>
    
    <h2>2. DERNEK BİLGİLERİ</h2>
    <ul>
        <li><strong>Kurum Adı:</strong> İslami Merci Derneği</li>
        <li><strong>Adres:</strong> Türkiye, İstanbul, Bahçelievler, Çelik Hançer cd., No:14b</li>
        <li><strong>E-posta:</strong> iletisim@islamimerci.org</li>
        <li><strong>Not:</strong> Ürün satışı yoktur; vergi numarası talep edilmemektedir.</li>
    </ul>
    
    <h2>3. BAĞIŞ TÜRÜ VE ÖDEME YÖNTEMLERİ</h2>
    <p>Site üzerinden kabul edilen ödemeler bağış niteliğindedir. Bağışlar kredi kartı veya IBAN (banka transferi) yoluyla yapılabilmektedir. Yapılan bağışların amacı ve kullanımı Dernek tarafından sağlanan açıklamalara uygun şekilde gerçekleştirilir.</p>
    
    <h2>4. TESLİMAT</h2>
    <p>Dernekten herhangi bir fiziksel veya dijital ürün teslimatı yapılmamaktadır. Bağış işlemi tamamlandığında bağışçının talebi doğrultusunda makbuz veya bağış dekontu e-posta yoluyla iletilebilir.</p>
    
    <h2>5. İADE POLİTİKASI</h2>
    <p>Bağışların doğası gereği aşağıdaki kurallar uygulanır:</p>
    <ul>
        <li><strong>Kesinlik İlkesi:</strong> Bir bağışın Dernek hesaplarımıza başarıyla aktarımı tamamlandığı ve fonlar Dernek tarafından tahsil edildiği durumlarda bağış geri alınmaz, iade yapılmaz.</li>
        <li><strong>Teknik Aksaklıklar:</strong> Ödeme altyapısında veya bankacılık sistemlerinde yaşanan teknik bir hata nedeniyle aynı bağışın çift kayıt edilmesi, yanlış tutar alınması veya benzeri açıkça hatalı işlemler gerçekleşmesi halinde bağışçı iade talebinde bulunabilir. Bu tür talepler Dernek tarafından incelenecek ve uygun görülürse iade süreci başlatılacaktır.</li>
        <li><strong>İadenin Kapsamı:</strong> Uygun bulunan iade talepleri yalnızca hatalı alınan veya çift alınan tutarlar için değerlendirilir. Banka ücretleri veya işlem maliyetlerine ilişkin kesintilerin iade kapsamında olup olmadığı duruma göre değerlendirilir ve bilgi bağışçıya iletilir.</li>
        <li><strong>İade Yöntemi:</strong> İade, mümkün olduğunda ödemenin yapıldığı orijinal ödeme kanalına (kredi kartı veya banka hesabı/IBAN) yapılır. Ödeme kanalı bilgileri eksik veya yapılamıyorsa alternatif yöntemler Dernek ile bağışçı arasında karşılıklı mutabakatla belirlenir.</li>
    </ul>
    
    <h2>6. İADE TALEBİ OLUŞTURMA VE İNCELEME SÜRECİ</h2>
    <ul>
        <li>İade talebi için bağışçı, iletisim@islamimerci.org adresine aşağıdaki bilgileri içeren bir e-posta göndermelidir:
            <ul>
                <li>Bağış yapanın adı-soyadı,</li>
                <li>Bağış tarihi ve tutarı,</li>
                <li>Ödeme yöntemi (kredi kartı son dört hanesi veya IBAN bilgisi),</li>
                <li>İade talebinin gerekçesi ve varsa destekleyici belgeler (banka dekontu, ekran görüntüsü vb.).</li>
            </ul>
        </li>
        <li>Dernek gelen talebi inceleyip bağışçıya değerlendirme sonucunu e-posta yoluyla bildirecektir. İnceleme sonucunda iade uygun görülürse iade işlemi başlatılır.</li>
        <li>Değerlendirme sürecinde gerekli görüldüğünde Dernek bağışçıdan ek bilgi veya belge talep edebilir.</li>
    </ul>
    
    <h2>7. İADE EDİLMEYECEK DURUMLAR</h2>
    <ul>
        <li>Bağışın Dernek hesaplarına başarılı şekilde geçtiği durumlar (kural gereği bağışlar geri alınmaz).</li>
        <li>Bağışçının bağışın amacını sonradan değiştirmek istemesi veya bağış kararından vazgeçmesi.</li>
        <li>Bağışçının ödeme bilgilerini yanlış girmesi nedeniyle ortaya çıkan sonuçlar, ancak bu durum teknik bir aksaklık veya sistem hatasına bağlı değilse iade talepleri her zaman reddedilebilir.</li>
    </ul>
    
    <h2>8. GİZLİLİK VE VERİ İŞLEME</h2>
    <p>İade süreçlerinde paylaşılacak kişisel ve ödeme bilgileri yalnızca iade işleminin gerçekleştirilmesi ve talebin incelenmesi amacıyla kullanılacak, üçüncü taraflarla paylaşılmayacaktır. Detaylı bilgi için lütfen Gizlilik Politikamıza bakınız.</p>
    
    <h2>9. İLETİŞİM</h2>
    <p>İade talepleri, soru ve şikayetler için:<br>
    E-posta: <strong>iletisim@islamimerci.org</strong><br>
    Adres: Türkiye, İstanbul, Bahçelievler, Çelik Hançer cd., No:14b</p>
    
    <h2>10. YÜRÜRLÜK</h2>
    <p>Bu Teslimat ve İade Şartları yayımı tarihinden itibaren yürürlüğe girer. Dernek gerekli gördüğü takdirde şartları tek taraflı olarak değiştirme hakkını saklı tutar; yapılan değişiklikler sitede yayımlandığı anda geçerli olur.</p>
    `,
      },
      {
        language: "en",
        content: `
        <h1>DELIVERY AND REFUND TERMS</h1>

<p><strong>Last Updated:</strong> 19.07.2025</p>

<h2>1. GENERAL PROVISIONS</h2>
<p>The Islamic Marji Association ("Association") is a donation-accepting organization, and transactions made through the website are in the nature of donations. The Association does not sell any products; therefore, no physical or digital delivery is made. These "Delivery and Refund Terms" regulate the procedures and principles regarding donations.</p>

<h2>2. ASSOCIATION INFORMATION</h2>
<ul>
    <li><strong>Organization Name:</strong> Islamic Marji Association</li>
    <li><strong>Address:</strong> Turkey, Istanbul, Bahçelievler, Çelik Hançer St., No:14b</li>
    <li><strong>Email:</strong> iletisim@islamimerci.org</li>
    <li><strong>Note:</strong> No product sales; tax number is not required.</li>
</ul>

<h2>3. DONATION TYPES AND PAYMENT METHODS</h2>
<p>Payments accepted through the website are in the form of donations. Donations can be made via credit card or IBAN (bank transfer). The purpose and use of the donations are carried out in accordance with the explanations provided by the Association.</p>

<h2>4. DELIVERY</h2>
<p>No physical or digital product delivery is made by the Association. Once the donation process is completed, a receipt or donation confirmation can be sent to the donor via email upon request.</p>

<h2>5. REFUND POLICY</h2>
<p>Due to the nature of donations, the following rules apply:</p>
<ul>
    <li><strong>Finality Principle:</strong> Once a donation has been successfully transferred to the Association's accounts and the funds have been collected by the Association, the donation is non-refundable.</li>
    <li><strong>Technical Failures:</strong> In cases where a technical error in the payment infrastructure or banking systems causes duplicate charges, incorrect amounts, or similar obvious errors, the donor may request a refund. Such requests will be reviewed by the Association, and if deemed appropriate, the refund process will be initiated.</li>
    <li><strong>Scope of Refund:</strong> Refund requests are only considered for incorrect or duplicate charges. Whether bank fees or transaction costs are included in the refund will be evaluated on a case-by-case basis and communicated to the donor.</li>
    <li><strong>Refund Method:</strong> Refunds are made, whenever possible, to the original payment method (credit card or bank account/IBAN). If payment channel information is missing or not possible, alternative methods may be determined through mutual agreement between the Association and the donor.</li>
</ul>

<h2>6. REFUND REQUEST AND REVIEW PROCESS</h2>
<ul>
    <li>To request a refund, the donor must send an email to iletisim@islamimerci.org including the following information:
        <ul>
            <li>Donor's full name,</li>
            <li>Donation date and amount,</li>
            <li>Payment method (last four digits of credit card or IBAN information),</li>
            <li>Reason for refund request and any supporting documents (bank receipt, screenshot, etc.).</li>
        </ul>
    </li>
    <li>The Association will review the request and inform the donor of the outcome via email. If approved, the refund process will be initiated.</li>
    <li>During the review, the Association may request additional information or documents from the donor if necessary.</li>
</ul>

<h2>7. NON-REFUNDABLE CASES</h2>
<ul>
    <li>Donations that have been successfully transferred to the Association’s accounts (donations are non-refundable by rule).</li>
    <li>When the donor wishes to change the purpose of the donation afterward or withdraws from the donation decision.</li>
    <li>Consequences arising from the donor entering incorrect payment details, unless this results from a technical or system failure, refund requests may be rejected.</li>
</ul>

<h2>8. PRIVACY AND DATA PROCESSING</h2>
<p>Personal and payment information shared during refund processes will only be used for executing the refund and reviewing the request and will not be shared with third parties. For more details, please see our Privacy Policy.</p>

<h2>9. CONTACT</h2>
<p>For refund requests, questions, and complaints:<br>
Email: <strong>iletisim@islamimerci.org</strong><br>
Address: Turkey, Istanbul, Bahçelievler, Çelik Hançer St., No:14b</p>

<h2>10. ENFORCEMENT</h2>
<p>These Delivery and Refund Terms come into effect as of the date of publication. The Association reserves the right to unilaterally amend the terms whenever deemed necessary; changes become effective once published on the website.</p>
`,
      },
      {
        language: "ar",
        content: `
        <h1>شروط التسليم والاسترجاع</h1>

<p><strong>تاريخ آخر تحديث:</strong> 19.07.2025</p>

<h2>1. الأحكام العامة</h2>
<p>جمعية المرجع الإسلامي ("الجمعية") هي مؤسسة تقبل التبرعات، وجميع العمليات عبر الموقع تعتبر تبرعات. لا تقوم الجمعية ببيع أي منتجات، ولذلك لا يوجد أي تسليم مادي أو رقمي. هذه "شروط التسليم والاسترجاع" تنظم القواعد المتعلقة بالتبرعات.</p>

<h2>2. معلومات الجمعية</h2>
<ul>
    <li><strong>اسم المؤسسة:</strong> جمعية المرجع الإسلامي</li>
    <li><strong>العنوان:</strong> تركيا، إسطنبول، بهجه إلڤلر، شارع تشيليك خانجر، رقم:14ب</li>
    <li><strong>البريد الإلكتروني:</strong> iletisim@islamimerci.org</li>
    <li><strong>ملاحظة:</strong> لا يوجد بيع للمنتجات؛ لا يُطلب رقم ضريبي.</li>
</ul>

<h2>3. أنواع التبرعات وطرق الدفع</h2>
<p>المدفوعات عبر الموقع تعتبر تبرعات. يمكن القيام بالتبرعات بواسطة بطاقة الائتمان أو التحويل البنكي (IBAN). ويتم استخدام التبرعات وفقاً للبيانات المقدمة من الجمعية.</p>

<h2>4. التسليم</h2>
<p>لا تقوم الجمعية بأي تسليم مادي أو رقمي. عند إتمام عملية التبرع، يمكن إرسال إيصال أو تأكيد التبرع إلى المتبرع عبر البريد الإلكتروني عند الطلب.</p>

<h2>5. سياسة الاسترجاع</h2>
<p>نظراً لطبيعة التبرعات، تطبق القواعد التالية:</p>
<ul>
    <li><strong>مبدأ القطعية:</strong> إذا تم تحويل التبرع بنجاح إلى حسابات الجمعية واستلام الأموال من قبلها، لا يمكن استرجاع التبرع.</li>
    <li><strong>الأعطال التقنية:</strong> في حال حدوث خطأ تقني في نظام الدفع أو البنوك أدى إلى خصم مكرر أو مبلغ غير صحيح أو أخطاء مشابهة، يمكن للمتبرع طلب استرجاع. ستقوم الجمعية بمراجعة الطلب وإذا رأت ذلك مناسباً تبدأ عملية الاسترجاع.</li>
    <li><strong>نطاق الاسترجاع:</strong> يتم النظر فقط في المبالغ المكررة أو المخصومة خطأً. الرسوم البنكية أو تكاليف المعاملة قد تُعاد أو لا تُعاد حسب الحالة ويتم إبلاغ المتبرع بذلك.</li>
    <li><strong>طريقة الاسترجاع:</strong> يتم الاسترجاع قدر الإمكان عبر نفس قناة الدفع الأصلية (بطاقة الائتمان أو الحساب البنكي/IBAN). وإذا تعذر ذلك، يتم الاتفاق على طريقة بديلة بين الجمعية والمتبرع.</li>
</ul>

<h2>6. تقديم طلب الاسترجاع وآلية المراجعة</h2>
<ul>
    <li>لتقديم طلب الاسترجاع، يجب على المتبرع إرسال بريد إلكتروني إلى: iletisim@islamimerci.org متضمناً المعلومات التالية:
        <ul>
            <li>اسم المتبرع الكامل،</li>
            <li>تاريخ ومبلغ التبرع،</li>
            <li>طريقة الدفع (آخر أربعة أرقام من بطاقة الائتمان أو بيانات IBAN)،</li>
            <li>سبب طلب الاسترجاع وأي مستندات داعمة (إيصال بنكي، لقطة شاشة، إلخ).</li>
        </ul>
    </li>
    <li>تقوم الجمعية بمراجعة الطلب وإبلاغ المتبرع بالنتيجة عبر البريد الإلكتروني. وإذا تمت الموافقة، تبدأ عملية الاسترجاع.</li>
    <li>قد تطلب الجمعية معلومات أو مستندات إضافية من المتبرع إذا لزم الأمر أثناء المراجعة.</li>
</ul>

<h2>7. الحالات غير القابلة للاسترجاع</h2>
<ul>
    <li>التبرعات التي تم تحويلها بنجاح إلى حسابات الجمعية (لا تُسترد التبرعات بحكم القاعدة).</li>
    <li>في حال رغبة المتبرع في تغيير الغرض من التبرع أو التراجع عن قرار التبرع.</li>
    <li>الأخطاء الناتجة عن إدخال المتبرع لمعلومات دفع خاطئة، إلا إذا كانت بسبب خطأ تقني في النظام، فقد تُرفض طلبات الاسترجاع.</li>
</ul>

<h2>8. الخصوصية ومعالجة البيانات</h2>
<p>تُستخدم المعلومات الشخصية وبيانات الدفع المقدمة أثناء عملية الاسترجاع فقط لغرض تنفيذ العملية ومراجعة الطلب، ولا تتم مشاركتها مع أطراف ثالثة. لمزيد من التفاصيل يرجى مراجعة سياسة الخصوصية.</p>

<h2>9. الاتصال</h2>
<p>لطلبات الاسترجاع أو الأسئلة أو الشكاوى:<br>
البريد الإلكتروني: <strong>iletisim@islamimerci.org</strong><br>
العنوان: تركيا، إسطنبول، بهجه إلڤلر، شارع تشيليك خانجر، رقم:14ب</p>

<h2>10. النفاذ</h2>
<p>تسري هذه الشروط من تاريخ نشرها. وتحتفظ الجمعية بحق تعديلها من طرف واحد متى رأت ذلك ضرورياً، وتصبح التعديلات نافذة فور نشرها على الموقع.</p>
`,
      },
    ],
  },
};

export const activities = [
  {
    slug: "gazze-su",
    title: [
      {
        language: "tr",
        content: "Gazze Su Projesi",
      },
      {
        language: "en",
        content: "Gaza Water Project",
      },
      {
        language: "ar",
        content: "مشروع مياه غزة",
      },
    ],
    contents: [
      {
        language: "tr",
        content: `
      <h2>Gazze İçin Su Yardımı</h2>
      <p>Gazze’de yaşayan kardeşlerimiz, en temel ihtiyaç olan temiz suya ulaşmakta büyük zorluk çekmektedirler. 
      Bizler ümmet olarak onların yanında olmalı ve hayati ihtiyaçlarını karşılamak için destek olmalıyız.</p>

      <h2>Suya Erişimin Önemi</h2>
      <p>Rasûlullah sallallahu aleyhi ve sellem buyurdu:</p>
      <p>“İnsanların en hayırlısı, insanlara en faydalı olandır.” (Dârakutnî, Hasen)</p>

      <p>“Sadakanın en faziletlisi, su vermektir.” (İbn Mâce, Mukaddime, 3)</p>

      <h2>Neden Su Bağışı?</h2>
      <p>Gazze’deki kardeşlerimiz için bir damla su, hayat demektir. 
      Sizin bağışınızla açılan bir su kuyusu, yüzlerce ailenin duasına vesile olacaktır.</p>

      <h2>Dualarınızla ve Desteklerinizle</h2>
      <p>Su bağışınız sadaka-i cariye hükmündedir. Sizlerden istirhamımız, bu hayra katılmanızdır. 
      Rabbimiz, yardımlarınızı mizânınızda ağır kılsın. Âmin.</p>
      <p>Su bağışlarınız kullanılacaktır:</p>
      <ul>
        <li>Su kuyusu açılması</li>
        <li>Depolama ve dağıtım sistemleri</li>
        <li>Ailelere temiz içme suyu ulaştırılması</li>
      </ul>
      <p>Gazze’de hayatlara umut olmak için su bağışında bulunun.</p>
    `,
      },
      {
        language: "en",
        content: `
      <h2>Water Aid for Gaza</h2>
      <p>Our brothers and sisters in Gaza are struggling to access clean water, the most basic necessity of life. 
      As an Ummah, we must stand by them and help meet their vital needs.</p>

      <h2>The Importance of Water</h2>
      <p>The Messenger of Allah (peace and blessings be upon him) said:</p>
      <p>“The best of people are those most beneficial to others.” (Daraqutni, Hasan)</p>

      <p>“The best charity is giving water to drink.” (Ibn Majah, Introduction, 3)</p>

      <h2>Why Donate Water?</h2>
      <p>For our brothers and sisters in Gaza, a drop of water means life. 
      Your donation can open a water well and become a source of prayer for hundreds of families.</p>

      <h2>With Your Prayers and Support</h2>
      <p>Your water donation is considered ongoing charity (sadaqah jariyah). We kindly ask you to take part in this noble cause. 
      May Allah place your contributions heavy on your scale of good deeds. Ameen.</p>
      <p>Your donations will be used for:</p>
      <ul>
        <li>Drilling water wells</li>
        <li>Storage and distribution systems</li>
        <li>Providing families with clean drinking water</li>
      </ul>
      <p>Bring hope to lives in Gaza by donating water.</p>
    `,
      },
      {
        language: "ar",
        content: `
      <h2>مساعدة المياه لغزة</h2>
      <p>إخواننا في غزة يواجهون صعوبات كبيرة في الحصول على الماء النظيف، وهو من أبسط ضروريات الحياة. 
      وعلينا كأمة أن نقف بجانبهم ونساعدهم في تلبية احتياجاتهم الأساسية.</p>

      <h2>أهمية الماء</h2>
      <p>قال رسول الله ﷺ:</p>
      <p>«خير الناس أنفعهم للناس.» (الدارقطني، حسن)</p>

      <p>«أفضل الصدقة سقي الماء.» (ابن ماجه، المقدمة، 3)</p>

      <h2>لماذا التبرع بالماء؟</h2>
      <p>لإخواننا في غزة، قطرة ماء تعني الحياة. 
      تبرعك قد يفتح بئراً للماء ويكون سبباً في دعاء مئات العائلات.</p>

      <h2>بدعائكم ودعمكم</h2>
      <p>تبرعك بالماء هو صدقة جارية. نرجو منكم المشاركة في هذا الخير العظيم. 
      نسأل الله أن يجعل أعمالكم في ميزان حسناتكم. آمين.</p>
      <p>ستُستخدم تبرعاتكم في:</p>
      <ul>
        <li>حفر آبار المياه</li>
        <li>أنظمة التخزين والتوزيع</li>
        <li>إيصال مياه الشرب النظيفة للعائلات</li>
      </ul>
      <p>كونوا سبباً في الأمل للحياة في غزة من خلال التبرع بالماء.</p>
    `,
      },
    ],
    images: [
      "https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNlVTmZGbalYCkuNXrHI6xQvd7lFL3RmPsy8opq",
      "https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNlDJ8pfj10j6oazXRHblAvLpfOehYG3ri1N4gm",
    ],
    is_constant_price: true,
    price: [
      { amount: 500, currency: "TRY" },
      { amount: 8, currency: "EUR" },
      { amount: 9, currency: "USD" },
    ],
  },
  {
    slug: "gazze-yemek",
    title: [
      {
        language: "tr",
        content: "Gazze Yemek Yardımı",
      },
      {
        language: "en",
        content: "Gaza Food Aid",
      },
      {
        language: "ar",
        content: "مساعدة طعام غزة",
      },
    ],
    contents: [
      {
        language: "tr",
        content: `
      <h2>Gazze İçin Yemek Yardımı</h2>
      <p>Gazze’deki kardeşlerimiz, günlük gıda ve yemek ihtiyaçlarını karşılamakta büyük sıkıntılar yaşamaktadır. 
      Onların yanında olmak ve açlıklarını gidermek biz ümmetin sorumluluğudur.</p>

      <h2>Yemeğin Fazileti</h2>
      <p>Rasûlullah sallallahu aleyhi ve sellem buyurdu:</p>
      <p>“Komşusu açken tok yatan bizden değildir.” (Hâkim, el-Müstedrek, 2/15)</p>

      <p>“Kimin fazla yemeği varsa, onu olmayanla paylaşsın.” (Müslim, Lukata, 1728)</p>

      <h2>Neden Yemek Bağışı?</h2>
      <p>Gazze’de açlık çeken ailelere ulaştıracağınız bir yemek paketi, onların hayatını kurtaracak ve dualarına vesile olacaktır. 
      Sizin ikramınız onların umudu olur.</p>

      <h2>Dualarınızla ve Desteklerinizle</h2>
      <p>Her yemek bağışı sadaka-i cariye hükmündedir. 
      Rabbimiz, ikramlarınızı kabul buyursun ve mükâfatınızı kat kat versin. Âmin.</p>
      <p>Yemek bağışlarınız kullanılacaktır:</p>
      <ul>
        <li>İhtiyaç sahibi ailelere sıcak yemek dağıtımı</li>
        <li>Yetim ve çocuklara gıda desteği</li>
        <li>Acil yardım gıda paketleri</li>
      </ul>
      <p>Gazze’de aç kardeşlerimize destek olun, sofralarına bereket taşıyın.</p>
    `,
      },
      {
        language: "en",
        content: `
      <h2>Food Aid for Gaza</h2>
      <p>Our brothers and sisters in Gaza are facing severe difficulties in meeting their daily food needs. 
      It is our duty as an Ummah to stand by them and relieve their hunger.</p>

      <h2>The Virtue of Feeding</h2>
      <p>The Messenger of Allah (peace and blessings be upon him) said:</p>
      <p>“He is not a believer whose stomach is filled while the neighbor to his side goes hungry.” (Hakim, Al-Mustadrak, 2/15)</p>

      <p>“Whoever has extra food should share it with the one who has none.” (Muslim, Lukata, 1728)</p>

      <h2>Why Donate Food?</h2>
      <p>A single food package delivered to a hungry family in Gaza can save lives and become a source of their heartfelt prayers. 
      Your generosity will bring hope to their tables.</p>

      <h2>With Your Prayers and Support</h2>
      <p>Every food donation is considered ongoing charity (sadaqah jariyah). 
      May Allah accept your giving and multiply your rewards. Ameen.</p>
      <p>Your donations will be used for:</p>
      <ul>
        <li>Distribution of hot meals to needy families</li>
        <li>Food support for orphans and children</li>
        <li>Emergency food relief packages</li>
      </ul>
      <p>Support our hungry brothers and sisters in Gaza and bring blessings to their tables.</p>
    `,
      },
      {
        language: "ar",
        content: `
      <h2>مساعدة الطعام لغزة</h2>
      <p>إخواننا في غزة يعانون من صعوبات شديدة في الحصول على طعامهم اليومي. 
      ومن واجبنا كأمة أن نقف بجانبهم ونخفف عنهم جوعهم.</p>

      <h2>فضل إطعام الطعام</h2>
      <p>قال رسول الله ﷺ:</p>
      <p>«ما آمن بي من بات شبعان وجاره جائع إلى جنبه.» (الحاكم، المستدرك، 2/15)</p>

      <p>«من كان عنده فضل طعام فليعد به على من لا طعام له.» (مسلم، اللقطة، 1728)</p>

      <h2>لماذا التبرع بالطعام؟</h2>
      <p>وجبة واحدة تصل إلى أسرة جائعة في غزة قد تنقذ حياتهم وتكون سبباً في دعائهم لكم. 
      كرمكم هو أملهم.</p>

      <h2>بدعائكم ودعمكم</h2>
      <p>كل تبرع بالطعام هو صدقة جارية. 
      نسأل الله أن يتقبل عطاياكم ويضاعف أجوركم. آمين.</p>
      <p>ستُستخدم تبرعاتكم في:</p>
      <ul>
        <li>توزيع وجبات ساخنة على الأسر المحتاجة</li>
        <li>دعم الأيتام والأطفال بالطعام</li>
        <li>حزم غذائية طارئة</li>
      </ul>
      <p>ادعموا إخوانكم الجائعين في غزة وكونوا سبباً في إدخال البركة على موائدهم.</p>
    `,
      },
    ],

    images: [
      "https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNlgE6Xw4J89iDG0OpbzcY7MhmVkW6lHufaEgRq",
      "https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNlDJ8pfj10j6oazXRHblAvLpfOehYG3ri1N4gm",
    ],
    is_constant_price: false,
    price: [
      { amount: 100, currency: "TRY" },
      { amount: 3, currency: "EUR" },
      { amount: 4, currency: "USD" },
    ],
  },
  {
    slug: "medrese",
    title: [
      {
        language: "tr",
        content: "Medresemize Destek Olun",
      },
      {
        language: "en",
        content: "Support Our Madrasa",
      },
      {
        language: "ar",
        content: "ادعموا مدرستنا",
      },
    ],
    contents: [
      {
        language: "tr",
        content: `
      <h2>Medresemize Destek Olun</h2>
      <p>Medresemiz, Mahmud Efendi hazretlerinin yoluna uygun olarak talebe yetiştirmekte, Kur’ân-ı Kerîm ve Sünnet-i Seniyye üzere hizmet vermektedir. 
      Bu hayırlı hizmetin devamı için maddî ve manevî desteklerinize ihtiyaç vardır.</p>

      <h2>İlmin Fazileti</h2>
      <p>Rasûlullah sallallahu aleyhi ve sellem buyurdu:</p>
      <p>“İlim talep etmek her Müslümana farzdır.” (İbn Mâce, Mukaddime, 17)</p>

      <p>“Âlimin âbid (çok ibadet eden) üzerine üstünlüğü, benim sizin en aşağı derecede olanınıza üstünlüğüm gibidir.” 
      (Tirmizî, İlim, 19)</p>

      <p>“Kim ilim öğrenmek için bir yola girerse, Allah ona cennete giden yolu kolaylaştırır.” (Müslim, Zikr, 38)</p>

      <h2>Neden Bağış?</h2>
      <p>Bu medreselerde yetişen her bir talebe, Kur’ân’a ve Sünnete hizmet edecek, ümmetin istikbali için bir ışık olacaktır. 
      Sizlerin bağışlarıyla daha fazla gencimiz ilim yolunda yetişecektir.</p>

      <h2>Dualarınızla ve Desteklerinizle</h2>
      <p>Her bir bağışınız sadaka-i cariye hükmündedir. Sizlerden istirhamımız, bu hizmete gönülden katılmanızdır. 
      Rabbimiz, yaptığınız yardımları mizânınızda ağır kılsın. Âmin.</p>
      <p>Medreselerde eğitim gören öğrencilerin ihtiyaçlarının karşılanması için:</p>
      <ul>
        <li>Kitap ve kırtasiye malzemeleri</li>
        <li>Yurt ve beslenme desteği</li>
        <li>Hoca maaşları</li>
        <li>Bina bakım ve onarım</li>
      </ul>
      <p>İslami ilimlerinin öğrenilmesi ve yaşatılması için bağış yapın.</p>
    `,
      },
      {
        language: "en",
        content: `
      <h2>Support Our Madrasa</h2>
      <p>Our madrasa, in accordance with the path of Mahmud Efendi, is raising students upon the Qur'an and the Sunnah. 
      To continue this blessed service, we need your material and spiritual support.</p>

      <h2>The Virtue of Knowledge</h2>
      <p>The Messenger of Allah (peace and blessings be upon him) said:</p>
      <p>“Seeking knowledge is an obligation upon every Muslim.” (Ibn Majah, Introduction, 17)</p>

      <p>“The superiority of the scholar over the devout worshiper is like my superiority over the least of you.” 
      (Tirmidhi, Knowledge, 19)</p>

      <p>“Whoever follows a path to seek knowledge, Allah will make easy for him a path to Paradise.” (Muslim, Dhikr, 38)</p>

      <h2>Why Donate?</h2>
      <p>Every student raised in these madrasas will serve the Qur'an and the Sunnah, becoming a light for the future of the Ummah. 
      With your donations, more youth will be nurtured on the path of knowledge.</p>

      <h2>With Your Prayers and Support</h2>
      <p>Every donation is considered ongoing charity (sadaqah jariyah). We kindly request your heartfelt participation. 
      May Allah place your contributions heavy on your scale of good deeds. Ameen.</p>
      <p>To cover the needs of students studying in the madrasas:</p>
      <ul>
        <li>Books and stationery supplies</li>
        <li>Accommodation and food support</li>
        <li>Teachers’ salaries</li>
        <li>Building maintenance and repair</li>
      </ul>
      <p>Donate to preserve and spread Islamic knowledge.</p>
    `,
      },
      {
        language: "ar",
        content: `
      <h2>ادعموا مدرستنا</h2>
      <p>مدرستنا، على نهج الشيخ محمود أفندي رحمه الله، تربي الطلبة على القرآن الكريم والسنة النبوية. 
      وللاستمرار في هذه الخدمة المباركة نحن بحاجة إلى دعمكم المادي والمعنوي.</p>

      <h2>فضل العلم</h2>
      <p>قال رسول الله ﷺ:</p>
      <p>«طلب العلم فريضة على كل مسلم.» (ابن ماجه، المقدمة، 17)</p>

      <p>«فضل العالم على العابد كفضلي على أدناكم.» 
      (الترمذي، العلم، 19)</p>

      <p>«من سلك طريقاً يلتمس فيه علماً سهّل الله له به طريقاً إلى الجنة.» (مسلم، الذكر، 38)</p>

      <h2>لماذا التبرع؟</h2>
      <p>كل طالب يتخرج من هذه المدارس سيخدم القرآن والسنة، ويكون نوراً لمستقبل الأمة. 
      وبفضل تبرعاتكم سيتربى المزيد من الشباب على طريق العلم.</p>

      <h2>بدعائكم ودعمكم</h2>
      <p>كل تبرع هو صدقة جارية لكم. نرجو منكم المشاركة الصادقة في هذا العمل. 
      نسأل الله أن يجعل أعمالكم في ميزان حسناتكم. آمين.</p>
      <p>لتغطية احتياجات الطلبة في المدارس:</p>
      <ul>
        <li>الكتب والقرطاسية</li>
        <li>دعم السكن والطعام</li>
        <li>رواتب المدرسين</li>
        <li>صيانة المباني وإصلاحها</li>
      </ul>
      <p>تبرعوا لحفظ العلوم الإسلامية ونشرها.</p>
    `,
      },
    ],
    images: [
      "https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNlwG1i8I9cpQ9F4PjxLTW0fdDvlhMbaRq7utVk",
    ],
    is_constant_price: false,
    price: [
      { amount: 200, currency: "TRY" },
      { amount: 10, currency: "EUR" },
      { amount: 10, currency: "USD" },
    ],
  },
  {
    slug: "afrika-iftar",
    title: [
      {
        language: "tr",
        content: "Afrika'da İftar",
      },
      {
        language: "en",
        content: "Iftar in Africa",
      },
      {
        language: "ar",
        content: "إفطار في أفريقيا",
      },
    ],
    contents: [
      {
        language: "tr",
        content: `
          <h2>Afrika'da Ramazan Yardımları</h2>
          <p>Afrika'nın çeşitli ülkelerinde yaşayan Müslüman ailelere Ramazan ayında:</p>
          <ul>
            <li>Günlük iftar yemekleri</li>
            <li>Sahur paketleri</li>
            <li>Gıda kolileri</li>
            <li>Cami ve mescidlerde toplu iftarlar</li>
          </ul>
          <p>Ramazan'ın bereketini Afrika'daki kardeşlerimizle paylaşalım.</p>
        `,
      },
      {
        language: "en",
        content: `
          <h2>Ramadan Aid in Africa</h2>
          <p>During Ramadan, Muslim families in various African countries receive:</p>
          <ul>
            <li>Daily iftar meals</li>
            <li>Suhur packages</li>
            <li>Food parcels</li>
            <li>Community iftars at mosques and masjids</li>
          </ul>
          <p>Let's share the blessings of Ramadan with our brothers and sisters in Africa.</p>
        `,
      },
      {
        language: "ar",
        content: `
          <h2>مساعدات رمضان في أفريقيا</h2>
          <p>خلال شهر رمضان، تحصل العائلات المسلمة في مختلف الدول الأفريقية على:</p>
          <ul>
            <li>وجبات إفطار يومية</li>
            <li>حزم السحور</li>
            <li>طرود غذائية</li>
            <li>إفطارات جماعية في المساجد والمصليات</li>
          </ul>
          <p>لنشارك بركة رمضان مع إخوتنا في أفريقيا.</p>
        `,
      },
    ],

    images: [
      "/images/activities/afrika-iftar-1.jpg",
      "/images/activities/afrika-iftar-2.jpg",
    ],
    is_constant_price: false,
    price: [
      { amount: 150, currency: "TRY" },
      { amount: 5, currency: "EUR" },
      { amount: 6, currency: "USD" },
    ],
  },
  {
    slug: "sokak-hayvanlarina-yem-mama",
    title: [
      {
        language: "tr",
        content: "Sokak Hayvanları Yem Desteği",
      },
      {
        language: "en",
        content: "Street Animals Food Support",
      },
      {
        language: "ar",
        content: "دعم طعام الحيوانات الضالة",
      },
    ],
    contents: [
      {
        language: "tr",
        content: `
      <h2>Sokak Hayvanlarına Şefkat Eli</h2>
      <p>Sokaklarda yaşayan kediler ve köpeklerin beslenme ihtiyaçları için:</p>
      <ul>
        <li>Günlük mama dağıtımı</li>
        <li>Beslenme noktaları kurulumu</li>
        <li>Veteriner kontrolü</li>
        <li>Barınak desteği</li>
      </ul>
      <p>Tüm canlılar Allah'ın emaneti. Onlara da şefkatimizi gösterelim.</p>
    `,
      },
      {
        language: "en",
        content: `
      <h2>A Helping Hand for Street Animals</h2>
      <p>For the nutritional needs of cats and dogs living on the streets:</p>
      <ul>
        <li>Daily food distribution</li>
        <li>Establishment of feeding points</li>
        <li>Veterinary check-ups</li>
        <li>Shelter support</li>
      </ul>
      <p>All creatures are entrusted to us by Allah. Let's show them our compassion as well.</p>
    `,
      },
      {
        language: "ar",
        content: `
      <h2>يد العون للحيوانات الضالة</h2>
      <p>من أجل تلبية احتياجات القطط والكلاب التي تعيش في الشوارع:</p>
      <ul>
        <li>توزيع الطعام اليومي</li>
        <li>إنشاء نقاط تغذية</li>
        <li>فحوصات بيطرية</li>
        <li>دعم الملاجئ</li>
      </ul>
      <p>جميع الكائنات أمانة عند الله. دعونا نظهر لهم رحمتنا أيضاً.</p>
    `,
      },
    ],

    images: [
      "/images/activities/sokak-hayvanlari-1.jpg",
      "/images/activities/sokak-hayvanlari-2.jpg",
    ],
    is_constant_price: false,
    price: [
      { amount: 100, currency: "TRY" },
      { amount: 2, currency: "EUR" },
      { amount: 2, currency: "USD" },
    ],
  },
];

export const getCategoryName = (
  category: Category,
  locale: string = "tr",
): string => {
  const supportedLocales = ["tr", "en", "ar"] as const;
  const validLocale = supportedLocales.includes(locale as any)
    ? (locale as keyof CategoryTranslations)
    : "tr";
  return category.name[validLocale] || category.name.tr;
};

export const getCategoriesByLocale = (locale: string = "tr") => {
  return categories.map((category) => ({
    ...category,
    localizedName: getCategoryName(category, locale),
  }));
};

export const getActivityTitle = (
  activity: any,
  locale: string = "tr",
): string => {
  if (Array.isArray(activity.title)) {
    const titleObj = activity.title.find((t: any) => t.language === locale);
    return (
      titleObj?.content ||
      activity.title.find((t: any) => t.language === "tr")?.content ||
      "Unknown Activity"
    );
  }
  return activity.title || "Unknown Activity";
};

export const getActivityContent = (
  activity: any,
  locale: string = "tr",
): string => {
  if (Array.isArray(activity.contents)) {
    const contentObj = activity.contents.find(
      (c: any) => c.language === locale,
    );
    return (
      contentObj?.content ||
      activity.contents.find((c: any) => c.language === "tr")?.content ||
      activity.content ||
      ""
    );
  }
  return activity.content || "";
};

export type { Activity, ActivityPrice, Category, CategoryTranslations };
