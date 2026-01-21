import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teslimat ve İade Koşulları",
  description: "Teslimat ve iade koşullarımız hakkında bilmeniz gerekenler",
};

export default function DeliveryAndReturnsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 prose prose-lg max-w-none">
        <h1>TESLİMAT VE İADE ŞARTLARI</h1>

        <p><strong>Son Güncelleme Tarihi:</strong> 19.07.2025</p>

        <h2>1. GENEL HÜKÜMLER</h2>
        <p>
          İslami Merci Derneği ("Dernek") bağış kabul eden bir kuruluş olup, site üzerinden gerçekleştirilen işlemler bağış niteliğindedir. Dernek herhangi bir ürün satışı yapmamaktadır; bu nedenle fiziksel veya dijital teslimat yapılmamaktadır. İşbu "Teslimat ve İade Şartları" bağışlara ilişkin usul ve esasları düzenler.
        </p>

        <h2>2. DERNEK BİLGİLERİ</h2>
        <ul>
          <li><strong>Kurum Adı:</strong> İslami Merci Derneği</li>
          <li><strong>Adres:</strong> Türkiye, İstanbul, Bahçelievler, Çelik Hançer cd., No:14b</li>
          <li><strong>E-posta:</strong> iletisim@islamimerci.org</li>
          <li><strong>Not:</strong> Ürün satışı yoktur; vergi numarası talep edilmemektedir.</li>
        </ul>

        <h2>3. BAĞIŞ TÜRÜ VE ÖDEME YÖNTEMLERİ</h2>
        <p>
          Site üzerinden kabul edilen ödemeler bağış niteliğindedir. Bağışlar kredi kartı veya IBAN (banka transferi) yoluyla yapılabilmektedir. Yapılan bağışların amacı ve kullanımı Dernek tarafından sağlanan açıklamalara uygun şekilde gerçekleştirilir.
        </p>

        <h2>4. TESLİMAT</h2>
        <p>
          Dernekten herhangi bir fiziksel veya dijital ürün teslimatı yapılmamaktadır. Bağış işlemi tamamlandığında bağışçının talebi doğrultusunda makbuz veya bağış dekontu e-posta yoluyla iletilebilir.
        </p>

        <h2>5. İADE POLİTİKASI</h2>
        <p>Bağışların doğası gereği aşağıdaki kurallar uygulanır:</p>
        <ul>
          <li>
            <strong>Kesinlik İlkesi:</strong> Bir bağışın Dernek hesaplarımıza başarıyla aktarımı tamamlandığı ve fonlar Dernek tarafından tahsil edildiği durumlarda bağış geri alınmaz, iade yapılmaz.
          </li>
          <li>
            <strong>Teknik Aksaklıklar:</strong> Ödeme altyapısında veya bankacılık sistemlerinde yaşanan teknik bir hata nedeniyle aynı bağışın çift kayıt edilmesi, yanlış tutar alınması veya benzeri açıkça hatalı işlemler gerçekleşmesi halinde bağışçı iade talebinde bulunabilir. Bu tür talepler Dernek tarafından incelenecek ve uygun görülürse iade süreci başlatılacaktır.
          </li>
          <li>
            <strong>İadenin Kapsamı:</strong> Uygun bulunan iade talepleri yalnızca hatalı alınan veya çift alınan tutarlar için değerlendirilir. Banka ücretleri veya işlem maliyetlerine ilişkin kesintilerin iade kapsamında olup olmadığı duruma göre değerlendirilir ve bilgi bağışçıya iletilir.
          </li>
          <li>
            <strong>İade Yöntemi:</strong> İade, mümkün olduğunda ödemenin yapıldığı orijinal ödeme kanalına (kredi kartı veya banka hesabı/IBAN) yapılır. Ödeme kanalı bilgileri eksik veya yapılamıyorsa alternatif yöntemler Dernek ile bağışçı arasında karşılıklı mutabakatla belirlenir.
          </li>
        </ul>

        <h2>6. İADE TALEBİ OLUŞTURMA VE İNCELEME SÜRECİ</h2>
        <ul>
          <li>
            İade talebi için bağışçı, iletisim@islamimerci.org adresine aşağıdaki bilgileri içeren bir e-posta göndermelidir:
            <ul>
              <li>Bağış yapanın adı-soyadı,</li>
              <li>Bağış tarihi ve tutarı,</li>
              <li>Ödeme yöntemi (kredi kartı son dört hanesi veya IBAN bilgisi),</li>
              <li>İade talebinin gerekçesi ve varsa destekleyici belgeler (banka dekontu, ekran görüntüsü vb.).</li>
            </ul>
          </li>
          <li>
            Dernek gelen talebi inceleyip bağışçıya değerlendirme sonucunu e-posta yoluyla bildirecektir. İnceleme sonucunda iade uygun görülürse iade işlemi başlatılır.
          </li>
          <li>
            Değerlendirme sürecinde gerekli görüldüğünde Dernek bağışçıdan ek bilgi veya belge talep edebilir.
          </li>
        </ul>

        <h2>7. İADE EDİLMEYECEK DURUMLAR</h2>
        <ul>
          <li>Bağışın Dernek hesaplarına başarılı şekilde geçtiği durumlar (kural gereği bağışlar geri alınmaz).</li>
          <li>Bağışçının bağışın amacını sonradan değiştirmek istemesi veya bağış kararından vazgeçmesi.</li>
          <li>
            Bağışçının ödeme bilgilerini yanlış girmesi nedeniyle ortaya çıkan sonuçlar, ancak bu durum teknik bir aksaklık veya sistem hatasına bağlı değilse iade talepleri her zaman reddedilebilir.
          </li>
        </ul>

        <h2>8. GİZLİLİK VE VERİ İŞLEME</h2>
        <p>
          İade süreçlerinde paylaşılacak kişisel ve ödeme bilgileri yalnızca iade işleminin gerçekleştirilmesi ve talebin incelenmesi amacıyla kullanılacak, üçüncü taraflarla paylaşılmayacaktır. Detaylı bilgi için lütfen Gizlilik Politikamıza bakınız.
        </p>

        <h2>9. İLETİŞİM</h2>
        <p>
          İade talepleri, soru ve şikayetler için:
          <br />
          E-posta: <strong>iletisim@islamimerci.org</strong>
          <br />
          Adres: Türkiye, İstanbul, Bahçelievler, Çelik Hançer cd., No:14b
        </p>

        <h2>10. YÜRÜRLÜK</h2>
        <p>
          Bu Teslimat ve İade Şartları yayımı tarihinden itibaren yürürlüğe girer. Dernek gerekli gördüğü takdirde şartları tek taraflı olarak değiştirme hakkını saklı tutar; yapılan değişiklikler sitede yayımlandığı anda geçerli olur.
        </p>
      </div>
    </div>
  );
}
