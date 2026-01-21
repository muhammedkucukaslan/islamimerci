import {
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-primary/10 text-muted-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-xl shadow-lg shadow-primary/10">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                İslami Merci Derneği
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Topluma hizmet etmek ve ihtiyaç sahiplerine destek olmak için
              kurulmuş, modern ve şeffaf bir yardımlaşma derneğiyiz.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="p-2.5 rounded-xl border border-primary/10 hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {[
            {
              title: "Hızlı Bağlantılar",
              links: [
                { name: "Hakkımızda", href: "/hakkimizda" },
                { name: "Faaliyetlerimiz", href: "/faaliyetlerimiz" },
                { name: "Banka Hesapları", href: "/banka-hesaplari" },
                { name: "İletişim", href: "/iletisim" },
              ],
              dotColor: "bg-primary",
            },
            {
              title: "Yasal",
              links: [
                { name: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
                { name: "Kullanım Koşulları", href: "/kullanim-kosullari" },
                { name: "Çerez Politikası", href: "/cerez-politikasi" },
              ],
              dotColor: "bg-accent",
            },
          ].map((section) =>
            section.title && section.links ? (
              <div key={section.title}>
                <h3 className="text-foreground font-bold text-lg mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="hover:text-primary transition-colors flex items-center group"
                      >
                        <span
                          className={`w-1.5 h-1.5 ${section.dotColor} rounded-full mr-3 group-hover:scale-150 transition-transform`}
                        ></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null,
          )}

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-bold text-lg mb-6">İletişim</h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="p-2 rounded-lg bg-primary/10 mr-4">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm">
                  Cumhuriyet Mahallesi, Çelik Hançer Caddesi, No: 14b
                  <br />
                  Bahçelievler, İstanbul, Türkiye
                </span>
              </li>
              <li className="flex items-center">
                <div className="p-2 rounded-lg bg-primary/10 mr-4">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <a
                  href="tel:+902121234567"
                  className="hover:text-primary transition-colors text-sm"
                >
                  +90 (532) 599 18 43
                </a>
              </li>
              <li className="flex items-center">
                <div className="p-2 rounded-lg bg-primary/10 mr-4">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a
                  href="mailto:info@islamimerci.org"
                  className="hover:text-primary transition-colors text-sm"
                >
                  info@islamimerci.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/10 mt-16 pt-8 text-center text-sm">
          <p>© {currentYear} Yardımlaşma Derneği. Gelecek nesillere umutla.</p>
        </div>
      </div>
    </footer>
  );
}
