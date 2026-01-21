"use client";

import Logo from "@/components/shared/logo";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { siteConfig } from "@/lib/siteconfig";
import Link from "next/link";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

export function Footer() {

  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100">
      <MaxWidthWrapper>
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">İslami Merci Derneği</h3>
            <p className="text-sm text-gray-400">
              Derneğimiz, insani yardım, eğitim ve sağlık alanlarında dünyanın dört
              bir yanında ihtiyaç sahiplerine destek olmaktadır.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="hover:text-white transition"
                >
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a
                  href="/hakkimizda"
                  className="hover:text-white transition"
                >
                  Hakkımızda
                </a>
              </li>
              <li>
                <a
                  href="/faaliyetler"
                  className="hover:text-white transition"
                >
                  Faaliyetler
                </a>
              </li>
              <li>
                <a
                  href="/bagislar"
                  className="hover:text-white transition"
                >
                  Bağış Yapın
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">İletişim Bilgileri</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <p>
                  Türkiye, İstanbul, Bahçelievler, Çelik Hançer cd. No:14b
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+905325991843"
                  className="hover:text-white transition"
                >
                  +90 532 599 18 43
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:bilgi@islamimerci.org"
                  className="hover:text-white transition"
                >
                  bilgi@islamimerci.org
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Bültenimize Abone Olun</h3>
            <p className="text-sm text-gray-400 mb-3">
              Projelerimiz ve kampanyalarımız hakkında güncel bilgileri almak için
              bültenimize abone olun.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex"
            >
              <Input
                type="email"
                placeholder="E-posta adresiniz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-r-none"
                required
              />
              <Button
                type="submit"
                className="rounded-l-none"
              >
                Abone Ol
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              İslami Merci Derneği. Tüm hakları saklıdır. {currentYear}
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                title="Instagram'da takip edin"
              >
                <Instagram className="h-5 w-5 hover:text-white transition" />
              </a>
              <a
                href="#"
                title="Facebook'ta takip edin"
              >
                <Facebook className="h-5 w-5 hover:text-white transition" />
              </a>
              <a
                href="#"
                title="YouTube'da takip edin"
              >
                <Youtube className="h-5 w-5 hover:text-white transition" />
              </a>
              <a
                href="#"
                title="Twitter'da takip edin"
              >
                <Twitter className="h-5 w-5 hover:text-white transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="py-6 border-t border-gray-800 flex flex-wrap gap-4 justify-center text-sm">
          <a
            href="/gizlilik-politikasi"
            className="hover:text-white transition"
          >
            Gizlilik Politikası
          </a>
          <span className="text-gray-700">•</span>
          <a
            href="/kullanim-sartlari"
            className="hover:text-white transition"
          >
            Kullanım Şartları
          </a>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
