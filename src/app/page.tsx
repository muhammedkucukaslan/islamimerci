import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeroCarousel } from "@/features/layout/components/hero-carousel";
import { ArrowRight, Globe, Heart, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "İslami Merci Derneği",
  description:
    "İslami Merci, dünyanın dört bir yanındaki ihtiyaç sahiplerine yardım ulaştıran bir hayır derneğidir.",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-20">
      {/* Hero Section with padding to avoid header overlap */}
      <section className="pt-24 md:pt-32">
        <HeroCarousel />
      </section>

      {/* About Section - Improved Design */}
      <section className="container mx-auto px-4">
        <div className="bg-white/40 backdrop-blur-xl p-10 md:p-20 rounded-[3.5rem] border border-primary/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-1000" />

          <div className="max-w-4xl space-y-10 relative z-10">
            <div className="inline-flex items-center space-x-3 text-primary bg-primary/10 px-6 py-2 rounded-2xl text-sm font-bold tracking-wide uppercase">
              <Heart className="w-5 h-5 fill-primary/20" />
              <span>Gönül Köprüsü</span>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-7xl font-black leading-[1.1] tracking-tighter text-foreground">
                İyiliği{" "}
                <span className="text-primary italic relative">
                  Yaymak{" "}
                  <span className="absolute bottom-2 left-0 w-full h-2 bg-primary/10 -z-10 rotate-1" />
                </span>{" "}
                İçin <br />
                Buradayız
              </h2>
              <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed font-medium max-w-2xl">
                İslami Merci Derneği, ilim ve yardımlaşma ruhuyla dünyanın her
                yerindeki mahzun gönüllere umut taşıyor.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 py-6">
              {[
                {
                  title: "Şeffaf Hizmet",
                  desc: "Tüm bağış ve faaliyetlerimizi şeffaflıkla paylaşıyoruz.",
                },
                {
                  title: "Hızlı Teslimat",
                  desc: "Emanetlerinizi en güvenli ve en hızlı şekilde ulaştırıyoruz.",
                },
              ].map((stat, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-1.5 h-12 bg-primary/20 rounded-full" />
                  <div className="space-y-1">
                    <div className="text-2xl font-black text-foreground">
                      {stat.title}
                    </div>
                    <div className="text-muted-foreground font-medium leading-snug">
                      {stat.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/hakkimizda" className="inline-block pt-6">
              <Button
                size="lg"
                className="rounded-2xl px-12 h-20 text-xl shadow-2xl shadow-primary/30 hover:scale-105 hover:rotate-1 active:scale-95 transition-all font-black bg-primary"
              >
                Tüm Hikayemizi Keşfet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Activities */}
      <section className="container mx-auto px-4 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Öne Çıkan Faaliyetlerimiz
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ümmetin selameti ve yardımlaşma ruhunu yaşatmak adına yürüttüğümüz
            temel projelerimiz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Medrese Eğitimi",
              desc: "Geleceğin alimlerini yetiştirmek için medrese faaliyetlerimize destek olun.",
              icon: Globe,
              color: "bg-blue-500",
            },
            {
              title: "Gazze Yardımları",
              desc: "Zulüm altındaki Gazze halkına su, yemek ve tıbbi malzeme ulaştırıyoruz.",
              icon: Heart,
              color: "bg-emerald-500",
            },
            {
              title: "İhtiyaç Sahipleri",
              desc: "Ülkemizdeki ve dünyadaki muhtaç ailelere düzenli gıda yardımı sağlıyoruz.",
              icon: Users,
              color: "bg-amber-500",
            },
          ].map((item, idx) => (
            <Card
              key={idx}
              className="group hover:shadow-2xl transition-all duration-500 border-primary/5 rounded-[2rem] overflow-hidden"
            >
              <CardHeader className="space-y-4">
                <div
                  className={`w-14 h-14 rounded-2xl ${item.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <item.icon
                    className={`w-7 h-7 ${item.color.replace("bg-", "text-")}`}
                  />
                </div>
                <CardTitle className="text-2xl font-bold">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
                <Link
                  href="/faaliyetlerimiz"
                  className="flex items-center text-primary font-bold group/link"
                >
                  <span>Detayları Gör</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
