import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, MessageCircle, ShieldAlert } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Banka Hesap Numaralarımız - İslami Merci",
    description:
      "Güvenli ve hızlı bağış yapabilmeniz için banka hesap bilgilerimiz.",
  };
}

export default function BankAccountsPage() {
  return (
    <div className="flex flex-col pb-20">
      {/* Header */}
      <section className="bg-primary/5 border-b border-primary/10 py-20">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Banka Hesaplarımız
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Bağışlarınızın güvenliği ve takibi için banka bilgilerimiz hakkında
            önemli bilgilendirme.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-20 flex justify-center">
        <Card className="max-w-3xl w-full rounded-[2.5rem] border-primary/10 shadow-2xl overflow-hidden glass-morphism">
          <CardHeader className="p-10 md:p-16 text-center space-y-6">
            <div className="w-20 h-20 bg-amber-500/10 rounded-3xl flex items-center justify-center mx-auto mb-4 animate-pulse">
              <ShieldAlert className="w-10 h-10 text-amber-500" />
            </div>
            <CardTitle className="text-3xl md:text-4xl font-extrabold">
              Önemli Bilgilendirme
            </CardTitle>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Derneğimizin kurumsal politikası ve güvenlik gereklilikleri
              sebebiyle
              <span className="text-foreground font-bold">
                {" "}
                IBAN bilgilerimiz web sitemiz üzerinden açıkça
                paylaşılmamaktadır.
              </span>
            </p>
          </CardHeader>
          <CardContent className="px-10 md:px-16 pb-16 space-y-10">
            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-primary" />
                Nasıl Bağış Yapabilirim?
              </h3>
              <p className="text-muted-foreground">
                Hangi projeye (Gazze, Medrese, Afrika vb.) bağış yapmak
                istediğinizi belirtmek ve güncel IBAN bilgilerini almak için
                lütfen bizimle Instagram üzerinden iletişime geçin.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://instagram.com/islamimerci"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-2xl px-10 h-16 text-lg font-bold bg-gradient-to-r from-primary to-accent shadow-xl shadow-primary/20 hover:scale-105 transition-all space-x-3"
                >
                  <Instagram className="w-6 h-6" />
                  <span>Instagram'dan Ulaş</span>
                </Button>
              </a>
              <Link href="/iletisim" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-2xl px-10 h-16 text-lg font-bold border-primary/20 hover:bg-primary/5 transition-all"
                >
                  Diğer İletişim Kanalları
                </Button>
              </Link>
            </div>

            <p className="text-center text-sm text-muted-foreground/60 italic">
              "Allah yolunda infak edin, kendi ellerinizle kendinizi tehlikeye
              atmayın. İyilik edin, kuşkusuz Allah iyilik edenleri sever."{" "}
              <br />
              (Bakara, 195)
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
