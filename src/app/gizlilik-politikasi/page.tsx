import { siteConfig } from "@/lib/siteconfig";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilmeniz gerekenler",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 prose prose-lg max-w-none">
        <h1>KVKK KİŞİSEL VERİLERİN KORUNMASI VE GİZLİLİK POLİTİKASI</h1>
        <p><strong>Son Güncelleme Tarihi:</strong> 17.09.2025</p>
        <p>İslami Merci Derneği olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamındaki yükümlülüklerimizi yerine getirmek ve kişisel verilerinizin güvenliğini sağlamak için bu Gizlilik Politikası'nı hazırladık.</p>

        <h2>VERİ SORUMLUSU</h2>
        <p>
          <strong>İslami Merci Derneği</strong>
          <br />
          Web sitesi: islamimerci.org
          <br />
          Bu politika kapsamında "veri sorumlusu" sıfatıyla hareket etmekteyiz.
        </p>

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
        <p>
          <strong>E-posta:</strong> iletisim@islamimerci.org
        </p>
        <p>Başvurularınız 30 gün içinde değerlendirilerek sonuçlandırılır.</p>

        <h2>ÇEREZ KULLANIMI</h2>
        <p>Web sitemizde çerezler kullanılmaktadır. Detaylı bilgi için Çerez Politikamızı inceleyebilirsiniz.</p>

        <h2>POLİTİKA DEĞİŞİKLİKLERİ</h2>
        <p>Bu politika gerektiğinde güncellenebilir. Değişiklikler web sitemizde yayınlandığı tarihte yürürlüğe girer.</p>

        <h2>İLETİŞİM</h2>
        <p>Bu politika ile ilgili sorularınız için:</p>
        <p>
          <strong>E-posta:</strong> iletisim@islamimerci.org
          <br />
          <strong>Web sitesi:</strong> islamimerci.org
        </p>

        <hr />
        <p>
          <em>Bu politika 6698 sayılı Kişisel Verilerin Korunması Kanunu ve ilgili mevzuat çerçevesinde hazırlanmıştır.</em>
        </p>
      </div>
    </div>
  );
}
