import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TebligPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 space-y-10">
        <h1 className="text-4xl font-bold">Tebliğ Faaliyetlerimize Destek Olun</h1>

        {/* Photo Collage */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
  <img
    src="https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNlzON8AoqAC9IMDN0sT5wrVR8vqtj4X6PpHgEi"
    alt="Sohbet 1"
    className="rounded-lg object-cover w-full h-56"
  />

  <img
    src="https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNl2rdOmtcnVRp3UI7ECKL0ZlPc5r4DMBewmJk6"
    alt="Sohbet 2"
    className="rounded-lg object-cover w-full h-56"
  />

  <img
    src="https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNleF7vHjNtrnIQG8uYHP41za2CmU7JcMVwskov"
    alt="Sohbet 3"
    className="rounded-lg object-cover w-full h-56"
  />
</div>


        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            Mahmud Efendi Hazretlerinin yolunda, hocalarımız Türkiye'nin dört 
            bir yanını dolaşarak Kur'ân-ı Kerîm ve Sünnet-i Seniyye'yi tebliğ 
            etmektedir. İnsanları hidayete davet etmek, İslam'ın güzelliklerini 
            anlatmak ve kalpleri Allah'a bağlamak için durmaksızın çalışmaktayız.
          </p>

          <h2 className="text-2xl font-semibold text-black">
  Tebliğin Önemi ve Fazileti
</h2>

<p>
  <b>Allah Teâlâ Kur'ân-ı Kerîm'de </b> buyuruyor:
</p>

<blockquote className="border-l-4 border-green-600 pl-4 italic font-bold bg-green-50 rounded-md py-2">
  "Hayra çağıran, iyiliği emredip kötülükten sakındıran bir topluluk bulunsun.
  İşte kurtuluşa erenler onlardır." 
  (Âl-i İmrân, 104)
</blockquote>

<blockquote className="border-l-4 border-green-600 pl-4 italic font-bold bg-green-50 rounded-md py-2">
  "Siz, insanlar için ortaya çıkarılmış en hayırlı ümmetsiniz. İyiliği
  emredersiniz, kötülükten alıkoyarsınız ve Allah’a inanırsınız. Ehl-i kitap da
  inanmış olsalardı elbette onlar için hayırlı olurdu; içlerinden inananlar da
  var, fakat çoğu yoldan çıkmıştır."
  (Âl-i İmrân, 110)
</blockquote>

<p><b>Rasûlullah(sallallahu aleyhi ve sellem)</b>  buyurdu:</p>

<blockquote className="border-l-4 border-green-600 pl-4 italic font-bold bg-green-50 rounded-md py-2">
  "Benden bir âyet de olsa tebliğ edin." (Buhârî, Enbiyâ, 50)
</blockquote>

<blockquote className="border-l-4 border-green-600 pl-4 italic font-bold bg-green-50 rounded-md py-2">
  "Bir kimseye senin vasıtanla hidayet verilmesi, senin için kırmızı
  develerden daha hayırlıdır." (Buhârî, Cihad, 102)
</blockquote>

<blockquote className="border-l-4 border-green-600 pl-4 italic font-bold bg-green-50 rounded-md py-2">
  "Kim hayra çağırırsa, ona tâbi olanların sevabı kadar sevap kazanır
  ve bu, onların sevaplarından hiçbir şey eksiltmez."
  (Müslim, İlim, 16)
</blockquote>

<blockquote className="border-l-4 border-green-600 pl-4 italic font-bold bg-green-50 rounded-md py-2">
  "Bana hayat bahşeden Allah'a andolsun ki, siz ya iyiliği emreder
  kötülükten alıkoyarsınız ya da Allah kendi katından sizin üzerinize
  bir azap gönderir. O zaman dua edersiniz fakat duanız kabul edilmez."
  (Ebû Dâvûd, Melâhim, 16; Tirmizî, Fiten, 9; İbn Hanbel, V, 388)
</blockquote>


          <h2 className="text-2xl font-semibold text-black">
            Hocalarımızın Faaliyetleri
          </h2>

          <p>
            İlim ve irfan sahibi hocalarımız, şehir şehir, kasaba kasaba dolaşarak:
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>Camilerde sohbet ve vaazlar vermekte</li>
            <li>Kur'ân-ı Kerîm dersleri düzenlemekte</li>
            <li>Gençlere İslami terbiye vermekte</li>
            <li>Halkı doğru bilgilerle aydınlatmakta</li>
            <li>İslam'ın güzelliklerini anlatmakta</li>
            <li>Bid'at ve hurafe ile mücadele etmekte</li>
          </ul>

          <h2 className="text-2xl font-semibold text-black">
            Tebliğ Faaliyetlerinin Giderleri
          </h2>

          <p>
            Bu mübarek hizmetin sürdürülebilmesi için çeşitli masraflar 
            bulunmaktadır:
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>Hoca maaşları ve geçim yardımları</li>
            <li>Şehirlerarası yolculuk masrafları</li>
            <li>Araç yakıt ve bakım giderleri</li>
            <li>Konaklama ve iaşe masrafları</li>
            <li>Tebliğ materyalleri (kitap, broşür vb.)</li>
            <li>Ses ve görüntü kayıt ekipmanları</li>
          </ul>

          <h2 className="text-2xl font-semibold text-black">
            Bu Hizmete Nasıl Ortak Olabilirsiniz?
          </h2>

          <p>
            Hocalarımızın yolculuk ve yaşam masraflarını karşılayarak bu hayırlı 
            hizmete ortak olabilirsiniz. Onların verdiği her dersten, anlattığı 
            her hadisten, hidayete vesile olduğu her kalpten sizin de hisseniz 
            olacaktır.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <p className="font-semibold text-blue-900">
              "İnsan öldüğü zaman üç şey dışında bütün amelleri kesilir: Sadaka-i câriye, faydalanılan ilim ve kendisine dua eden sâlih evlat." (Müslim, Vasiyye, 14)
            </p>
          </div>

          <p className="font-medium">
            Tebliğ faaliyetlerimiz, sadaka-i câriye hükmündedir. Hocalarımızın 
            tebliğiyle hidayete eren her insan, dualarıyla sizi yâd edecek, 
            kazandığı sevaplardan sizin de payınız olacaktır. Bu mübarek hizmete 
            maddi destek sağlayarak, İslam'ın yayılmasına vesile olun.
          </p>

          <p className="italic text-gray-600">
            "Rabbimiz! Hocalarımızı mübarek yolculuklarında muhafaza eyle, 
            tebliğlerini mübarek kıl, destekçilerimizin bağışlarını kabul eyle. Âmin."
          </p>
        </div>

      <Link href="/banka-hesaplari" className="block pt-4 border-t border-primary/10">
            <Button className="w-full h-14 rounded-[1.2rem] text-lg font-bold bg-primary shadow-xl shadow-primary/20">
                Tebliğ Faaliyetlerine Destek Olun
            </Button>
        </Link>
      </div>
    </div>
  );
}