"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone } from "lucide-react";

export default function BankAccountsHelpSection() {
  return (
    <div className="space-y-8">
      {/* FAQ Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Sıkça Sorulan Sorular
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="faq1">
            <AccordionTrigger>
              Hangi para birimlerinde bağış yapabilirim?
            </AccordionTrigger>
            <AccordionContent>
              Türk Lirası (TRY), Amerikan Doları (USD) ve Euro (EUR) para birimlerinde bağış yapabilirsiniz.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq2">
            <AccordionTrigger>
              Bağış yaptığımı nasıl anlayacaksınız?
            </AccordionTrigger>
            <AccordionContent>
              Bağış yaparken açıklama kısmına adınızı ve iletişim bilgilerinizi yazmanız yeterlidir. Ayrıca dekont fotoğrafını WhatsApp üzerinden gönderebilirsiniz.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq3">
            <AccordionTrigger>
              Yurt dışından bağış yapabilir miyim?
            </AccordionTrigger>
            <AccordionContent>
              Evet, USD ve EUR hesaplarımız uluslararası transferler için aktiftir. SWIFT kodlarını kullanarak transfer yapabilirsiniz.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq4">
            <AccordionTrigger>
              Minimum bağış tutarı var mı?
            </AccordionTrigger>
            <AccordionContent>
              Minimum bağış tutarı bulunmamaktadır. Her türlü bağış değerlidir ve kabul edilir.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Help Section */}
      <Card className="border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="text-green-900">
            Yardıma mı ihtiyacınız var?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-green-800 mb-6">
            Banka hesapları veya bağış işlemleri hakkında sorularınız varsa bizimle iletişime geçin.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-green-700" />
              <div>
                <p className="text-sm font-semibold text-green-900">Telefon</p>
                <a href="tel:+905325991843" className="text-green-700 hover:underline">
                  +90 532 599 18 43
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-green-700" />
              <div>
                <p className="text-sm font-semibold text-green-900">E-posta</p>
                <a href="mailto:bilgi@islamimerci.org" className="text-green-700 hover:underline">
                  bilgi@islamimerci.org
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
