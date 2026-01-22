"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, MessageCircle, Copy, Check, Building2, Info } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function BankAccountContent() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const bankInfo = {
    bankName: "Vakıf Katılım Bankası",
    accountName: "İSLAMİ MERCİ DERNEĞİ",
    iban: "TR97 0021 0000 0011 7365 7000 34", // Buraya gerçek IBAN'ı koyacaksın
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        
        {/* Simple Header */}
        <div className="text-center mb-12 space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Banka Hesaplarımız
          </h1>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Hayır işlerinize ortak olmak için hesap bilgilerimiz
          </p>
        </div>

        <div className="space-y-6">
          
          {/* Bank Info Card */}
          <Card className="overflow-hidden border-2">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 px-6 py-4 border-b flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-600/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Banka</p>
                <p className="font-bold text-lg">{bankInfo.bankName}</p>
              </div>
            </div>

            <CardContent className="p-6 space-y-5">
              {/* Account Name */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  Hesap Adı
                </label>
                <div className="flex items-center gap-2 p-4 bg-muted/40 rounded-xl border hover:bg-muted/60 transition-colors group">
                  <span className="flex-1 font-semibold">{bankInfo.accountName}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(bankInfo.accountName, "accountName")}
                    className="h-8 w-8 p-0 hover:bg-background"
                  >
                    {copiedField === "accountName" ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              {/* IBAN */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  IBAN
                </label>
                <div className="flex items-center gap-2 p-4 bg-primary/5 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-colors group">
                  <span className="flex-1 font-mono font-semibold text-sm tracking-wide">{bankInfo.iban}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(bankInfo.iban, "iban")}
                    className="h-8 w-8 p-0 hover:bg-primary/10"
                  >
                    {copiedField === "iban" ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                    )}
                  </Button>
                </div>
                {copiedField === "iban" && (
                  <p className="text-xs text-green-600 font-medium flex items-center gap-1.5 pl-1">
                    <Check className="w-3.5 h-3.5" />
                    Kopyalandı
                  </p>
                )}
              </div>

              {/* Copy All Button */}
              <Button
                onClick={() => {
                  const fullInfo = `${bankInfo.accountName}\n${bankInfo.iban}`;
                  copyToClipboard(fullInfo, "both");
                }}
                variant={copiedField === "both" ? "secondary" : "default"}
                className="w-full h-12 rounded-xl font-semibold"
              >
                {copiedField === "both" ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Kopyalandı
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Tümünü Kopyala
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Info Alert */}
          <div className="bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-200 dark:border-blue-800 p-5 flex gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold text-blue-900 dark:text-blue-100">
                Hangi projeye bağış yapmak istersiniz?
              </p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                Bağışınızın Gazze, Medrese, Afrika veya diğer projelerimizden hangisine aktarılmasını istediğinizi 
                <span className="font-semibold"> açıklama kısmına yazın</span> veya bağış sonrası bizimle iletişime geçin.
              </p>
            </div>
          </div>

            {/* Ayah */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 border-2 border-primary/30 dark:border-primary/40 rounded-xl p-8 shadow-sm">
            <div className="text-center space-y-4">
              <p className="text-base md:text-lg text-foreground italic leading-relaxed font-medium">
              "Allah yolunda infak edin, kendi ellerinizle kendinizi tehlikeye atmayın. 
              İyilik edin, kuşkusuz Allah iyilik edenleri sever."
              </p>
              <span className="block text-primary font-bold not-italic text-sm">
              (Bakara, 195)
              </span>
            </div>
            </div>

          {/* Contact Section */}
          <Card className="border-2">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Sorularınız mı var?</h3>
                <p className="text-muted-foreground text-sm">
                  Bağış sürecinizle ilgili destek için sosyal medya hesaplarımızdan ulaşabilirsiniz
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://instagram.com/islamimerci"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button size="lg" className="w-full rounded-xl font-semibold h-12">
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                </a>
                <Link href="/iletisim" className="flex-1">
                  <Button variant="outline" size="lg" className="w-full rounded-xl font-semibold h-12 border-2">
                    Diğer İletişim
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

         

        </div>
      </div>
    </div>
  );
}
