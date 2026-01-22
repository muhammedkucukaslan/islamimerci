"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Heart, Menu } from "lucide-react";
import Link from "next/link";

const navigation = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Faaliyetlerimiz", href: "/faaliyetlerimiz" },
  {name : "Mahmud Efendi Hz.", href: "/mahmudefendi-hz"},
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "İletişim", href: "/iletisim" },
  { name: "Banka Hesapları", href: "/banka-hesaplari" },
];

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-xl sticky top-0 z-50 border-b border-primary/5 shadow-sm">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-[1.25rem] flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-inner">
              <Heart className="w-7 h-7 md:w-8 md:h-8 text-primary fill-primary/10" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-2xl md:text-3xl font-black text-foreground tracking-tighter uppercase leading-none">
                İslami <span className="text-primary italic">Merci</span>
              </span>
              <span className="text-[10px] md:text-xs font-extra-bold text-muted-foreground tracking-[0.2em] uppercase opacity-60">
                Hayır Kurumu
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent hover:bg-primary/5 hover:text-primary rounded-2xl px-6 h-12 transition-all text-base font-bold tracking-tight",
                        )}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="pl-6 h-10 border-l border-primary/10 ml-6 flex items-center">
              <Link href="/banka-hesaplari">
                <Button className="rounded-2xl px-10 h-14 bg-primary text-lg shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all font-black">
                  Bağış Yap
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-xl hover:bg-primary/5"
              >
                <Menu className="w-6 h-6 text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] border-l-primary/10 bg-background/95 backdrop-blur-lg"
            >
              <div className="flex flex-col gap-8 mt-12">
                <Link href="/" className="flex items-center space-x-3">
                  <Heart className="w-8 h-8 text-primary" />
                  <span className="text-2xl font-black">İslami Merci</span>
                </Link>
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center h-12 px-4 text-lg font-bold text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-2xl transition-all"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/banka-hesaplari"
                  className="pt-4 border-t border-primary/10"
                >
                  <Button className="w-full h-14 rounded-[1.2rem] text-lg font-bold bg-primary shadow-xl shadow-primary/20">
                    Bağış Yap
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
