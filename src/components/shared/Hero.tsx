"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center space-x-2 bg-primary/5 border border-primary/10 px-4 py-2 rounded-full animate-float">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground sm:text-foreground">
              Yenilenen Vizyonumuzla Yanınızdayız
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight">
            Geleceği <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-emerald-500 to-accent animate-pulse">
              Birlikte İnşa Edelim
            </span>
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Toplumun her kesimine ulaşan, modern ve şeffaf yardımlaşma
            anlayışımızla ihtiyaç sahiplerinin yanındayız. Her bağış bir hayata
            dokunur.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/bagis-yap"
              className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20"
            >
              <span>Bağış Yap</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/faaliyetlerimiz"
              className="w-full sm:w-auto glass-morphism border-primary/20 text-foreground px-8 py-4 rounded-2xl font-bold hover:bg-primary/5 transition-all"
            >
              Faaliyetlerimizi İncele
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10">
            {[
              { label: "Başarılı Proje", value: "500+" },
              { label: "Mutlu Gönüllü", value: "2k+" },
              { label: "İhtiyaç Sahibi", value: "10k+" },
              { label: "Şehir", value: "81" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
