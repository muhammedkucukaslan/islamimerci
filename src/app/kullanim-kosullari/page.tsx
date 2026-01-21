import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description: "Web sitemizi kullanırken uymanız gereken kurallar ve koşullar",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 prose prose-lg max-w-none">
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
        <p>
          <strong>İslami Merci Derneği</strong>
          <br />
          <strong>Web sitesi:</strong> islamimerci.org
          <br />
          <strong>E-posta:</strong> iletisim@islamimerci.org
        </p>

        <h2>10. YÜRÜRLÜLÜK</h2>
        <p>Bu Kullanım Şartları 17.09.2025 tarihi itibariyle yürürlüğe girmiştir.</p>

        <hr />
        <p>
          <em>Bu şartlar Türkiye Cumhuriyeti mevzuatı ve internet hukuku çerçevesinde hazırlanmıştır.</em>
        </p>
      </div>
    </div>
  );
}
