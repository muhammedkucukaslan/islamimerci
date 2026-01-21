# Yardımlaşma Derneği Web Sitesi

Modern, responsive ve kullanıcı dostu bir dernek web sitesi. Next.js 14, React, TypeScript ve Tailwind CSS ile geliştirilmiştir.

## 🚀 Özellikler

- ✨ Modern ve şık tasarım
- 📱 Tamamen responsive (mobil uyumlu)
- ⚡ Hızlı ve performanslı
- 🎨 Gradient renkler ve animasyonlar
- 🔒 KVKK uyumlu gizlilik politikası
- 💳 Bağış sayfası ve banka hesapları
- 📧 İletişim formu
- 📄 Yasal sayfalar (Gizlilik, Kullanım Koşulları, Çerez Politikası)

## 📦 Kurulum

### Gereksinimler

- Node.js 18.x veya üzeri
- npm veya yarn

### Adımlar

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

3. Tarayıcınızda açın:
```
http://localhost:3000
```

## 🏗️ Production Build

Production için build almak için:

```bash
npm run build
npm start
```

## 📁 Proje Yapısı

```
src/
├── app/
│   ├── page.tsx              # Ana sayfa
│   ├── layout.tsx            # Ana layout
│   ├── globals.css           # Global CSS
│   ├── hakkimizda/           # Hakkımızda sayfası
│   ├── iletisim/             # İletişim sayfası
│   ├── faaliyetlerimiz/      # Faaliyetler sayfası
│   ├── banka-hesaplari/      # Banka hesapları sayfası
│   ├── bagis-yap/            # Bağış sayfası
│   ├── gizlilik-politikasi/  # Gizlilik politikası
│   ├── kullanim-kosullari/   # Kullanım koşulları
│   ├── cerez-politikasi/     # Çerez politikası
│   └── not-found.tsx         # 404 sayfası
└── components/
    ├── Header.tsx            # Header komponenti
    └── Footer.tsx            # Footer komponenti
```

## 🎨 Tasarım

- **Renkler**: Mavi, mor ve pembe gradient kombinasyonları
- **Font**: Inter (Google Fonts)
- **İkonlar**: Lucide React
- **CSS Framework**: Tailwind CSS

## 📱 Sayfalar

1. **Ana Sayfa** - Hero section, özellikler, istatistikler ve CTA
2. **Hakkımızda** - Dernek hikayesi, misyon, vizyon ve değerler
3. **Faaliyetlerimiz** - Tüm sosyal sorumluluk projeleri
4. **İletişim** - İletişim bilgileri ve mesaj formu
5. **Banka Hesapları** - Bağış için banka bilgileri
6. **Bağış Yap** - Bağış seçenekleri ve bilgilendirme
7. **Gizlilik Politikası** - KVKK uyumlu gizlilik metni
8. **Kullanım Koşulları** - Site kullanım kuralları
9. **Çerez Politikası** - Çerez kullanımı hakkında bilgi

## 🔧 Özelleştirme

### Renkleri Değiştirme

`tailwind.config.ts` dosyasından renk paletini özelleştirebilirsiniz.

### İçerik Güncelleme

Her sayfa kendi klasöründe `page.tsx` dosyasına sahiptir. İçeriği doğrudan bu dosyalardan güncelleyebilirsiniz.

### İletişim Bilgileri

Tüm iletişim bilgileri `src/components/Footer.tsx` ve ilgili sayfalarda bulunur.

## 🌐 Tarayıcı Desteği

- Chrome (son 2 versiyon)
- Firefox (son 2 versiyon)
- Safari (son 2 versiyon)
- Edge (son 2 versiyon)

## 📝 Lisans

Bu proje Yardımlaşma Derneği için geliştirilmiştir.

## 🤝 Katkıda Bulunma

Katkıda bulunmak için lütfen bir issue açın veya pull request gönderin.

## 📧 İletişim

- **E-posta**: info@yardimlasmadernegi.org
- **Telefon**: +90 (212) 123 45 67
- **Adres**: Merkez Mahallesi, Yardım Sokak No:123, Kadıköy, İstanbul

---

© 2026 Yardımlaşma Derneği. Tüm hakları saklıdır.
