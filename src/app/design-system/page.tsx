"use client";

import Hero from "@/components/shared/Hero";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Shield, Star, Zap } from "lucide-react";

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />

      <section className="container mx-auto px-4 py-20 space-y-20">
        {/* Colors & Typography */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Renk Paleti ve Tipografi</h2>
            <p className="text-muted-foreground">
              Modern Emerald/Mint temalı renklerimiz.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            <div className="p-8 rounded-2xl bg-primary text-primary-foreground flex flex-col items-center justify-center space-y-2 shadow-xl shadow-primary/20">
              <span className="font-bold">Primary</span>
              <span className="text-xs opacity-70">Emerald</span>
            </div>
            <div className="p-8 rounded-2xl bg-accent text-accent-foreground flex flex-col items-center justify-center space-y-2">
              <span className="font-bold">Accent</span>
              <span className="text-xs opacity-70">Modern Mint</span>
            </div>
            <div className="p-8 rounded-2xl bg-secondary text-secondary-foreground flex flex-col items-center justify-center space-y-2">
              <span className="font-bold">Secondary</span>
              <span className="text-xs opacity-70">Soft Mint</span>
            </div>
            <div className="p-8 rounded-2xl bg-muted text-muted-foreground flex flex-col items-center justify-center space-y-2">
              <span className="font-bold">Muted</span>
              <span className="text-xs opacity-70">Base Neutral</span>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-primary/10 flex flex-col items-center justify-center space-y-2 shadow-sm">
              <span className="font-bold">Card</span>
              <span className="text-xs opacity-70">Bordered</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Butonlar</h2>
            <p className="text-muted-foreground">
              Etkileşimli ve modern buton stilleri.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              size="lg"
              className="rounded-2xl px-8 shadow-lg shadow-primary/20 hover:scale-105 transition-all"
            >
              Büyük Buton
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-2xl px-8 hover:bg-primary/5 border-primary/20"
            >
              Outline Buton
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="rounded-2xl px-8 hover:bg-primary/10"
            >
              Ghost Buton
            </Button>
            <Button
              size="lg"
              className="rounded-2xl px-8 space-x-2 bg-gradient-to-r from-primary to-accent hover:shadow-xl transition-all"
            >
              <Zap className="w-4 h-4" />
              <span>Gradient Buton</span>
            </Button>
          </div>
        </div>

        {/* Cards & Special Effects */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Kartlar ve Efektler</h2>
            <p className="text-muted-foreground">
              Glassmorphism ve modern kart tasarımları.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-3xl border-primary/10 hover:border-primary/30 transition-all group overflow-hidden shadow-sm">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-all">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Modern Kart</CardTitle>
                  <CardDescription>
                    Yumuşak köşeler ve temiz tipografi.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Bu kart tasarımı modern ve ferah bir kullanıcı deneyimi sunar.
                </p>
              </CardContent>
            </Card>

            <div className="glass-morphism rounded-3xl p-8 space-y-4 border-primary/20 relative group hover:shadow-2xl hover:shadow-primary/5 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center group-hover:rotate-12 transition-all">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Glassmorphism</h3>
              <p className="text-sm text-muted-foreground">
                Buzlu cam efekti ve ince borderlar ile premium görünüm.
              </p>
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Shield className="w-20 h-20 text-primary" />
              </div>
            </div>

            <Card className="rounded-3xl border-primary/10 bg-primary/5 relative overflow-hidden group">
              <CardHeader className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Accent Card</CardTitle>
                <CardDescription>Vurgulu kart tasarımı.</CardDescription>
              </CardHeader>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:scale-150 transition-all duration-500" />
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
