"use client";

import HeaderSection from "@/components/shared/header-section";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

export default function ContactContent() {
  return (
    <MaxWidthWrapper className="py-8">
      <HeaderSection
        title="İletişim"
        description="Bizimle iletişime geçin"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <Card>
            <CardHeader>
              <CardTitle>İletişim Bilgileri</CardTitle>
              <CardDescription>Bize ulaşın</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Adres</h3>
                  <p className="text-gray-600 text-sm">
                    Türkiye, İstanbul, Bahçelievler
                    <br />
                    Çelik Hançer Cd., No:14B
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Telefon</h3>
                  <p className="text-gray-600 text-sm">
                    <a href="tel:+905325991843" className="hover:text-green-600">
                      +90 532 599 18 43
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">E-posta</h3>
                  <p className="text-gray-600 text-sm">
                    <a
                      href="mailto:iletisim@islamimerci.org"
                      className="hover:text-green-600"
                    >
                      iletisim@islamimerci.org
                    </a>
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-medium mb-3">Sosyal Medya</h3>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/islamimerci"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-2 rounded-full hover:bg-primary/20 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-green-700" />
                  </a>
                  <a
                    href="https://facebook.com/muhammedemrekara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-2 rounded-full hover:bg-primary/20 transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-green-700" />
                  </a>
                  <a
                    href="https://twitter.com/islamimerci"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-2 rounded-full hover:bg-primary/20 transition-colors"
                  >
                    <Twitter className="h-5 w-5 text-green-700" />
                  </a>
                  <a
                    href="https://youtube.com/@islamimerci"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-2 rounded-full hover:bg-primary/20 transition-colors"
                  >
                    <Youtube className="h-5 w-5 text-green-700" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-8">
          <Card>
            <CardHeader>
              <CardTitle>Bizimle İletişime Geçin</CardTitle>
              <CardDescription>
                Herhangi bir sorunuz veya öneriniz mi var? Aşağıdaki formu
                doldurarak bizimle iletişime geçebilirsiniz.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Adınız
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      E-posta
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Konu
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div className="flex justify-end">
                  <Button className="px-6 py-3 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition-colors">
                    Gönder
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}