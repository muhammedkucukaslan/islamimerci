"use client";

import LanguageSwitcher from "@/components/shared/language-switcher";
import Logo from "@/components/shared/logo";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/hooks/use-cart";
import { getCategoryName, siteConfig } from "@/lib/siteconfig";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  Globe,
  Heart,
  Menu,
  Phone,
  ShoppingCart,
  Target,
  User,
} from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

type NavItemType = {
  key: string;
  href: string;
  dropdown?: { key: string; href: string }[];
  isCategories?: boolean;
};

const navItems: NavItemType[] = [
  {
    key: "home",
    href: "/" as const,
  },
  {
    key: "corporate",
    href: "/hakkimizda" as const,
    dropdown: [
      { key: "about", href: "/hakkimizda" as const },
      { key: "mahmudefendi", href: "/mahmudefendi-hz" as const },
      { key: "privacy", href: "/gizlilik-politikasi" as const },
      { key: "terms", href: "/kullanim-kosullari" as const },
      { key: "distanceSelling", href: "/mesafeli-satis-sozlesmesi" as const },
      { key: "cookies", href: "/cerez-politikasi" as const },
      {
        key: "deliveryAndReturns",
        href: "/teslimat-ve-iade-sartlari" as const,
      },
    ],
  },
  {
    key: "donationCategories",
    href: "/faaliyetler" as const,
    isCategories: true,
  },
  {
    key: "contact",
    href: "/iletisim" as const,
  },
];

const TopBar = ({ isVisible }: { isVisible: boolean }) => {
  const t = useTranslations("common");
  const { data: session } = useSession();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <div
      className={cn(
        "transition-all bg-slate-50 text-muted-foreground duration-300 ease-in-out overflow-hidden",
        isVisible ? "h-12 opacity-100" : "h-0 opacity-0",
      )}
    >
      <MaxWidthWrapper className="h-12 flex items-center justify-between">
        <div className="text-sm flex items-center">
          <Globe className="h-4 w-4 text-gray-500 inline " />
          {t("welcome")}
        </div>
        <div className="flex items-center gap-12 text-sm">
          {/* User Actions */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="tel:+902129231923"
              className="flex items-center gap-2 hover:text-primary transition-colors group"
            >
              <span className="hidden sm:inline">{t("callCenter")}</span>
              <span className="font-medium">+90 532 599 18 43</span>
            </a>

            <Link
              href="/banka-hesaplari"
              className="flex items-center hover:text-primary transition-colors group"
            >
              <span>{t("bankAccounts")}</span>
            </Link>

            {session?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary hover:bg-white/10"
                  >
                    <User className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-48 bg-white/95 backdrop-blur-sm"
                >
                  <DropdownMenuItem asChild>
                    <Link
                      href="/hesap/ayarlar"
                      className="flex items-center gap-2"
                    >
                      {t("myAccount")}
                    </Link>
                  </DropdownMenuItem>
                  {session.role === "ADMIN" && (
                    <DropdownMenuItem asChild>
                      <button
                        className="flex w-full items-center gap-2"
                        onClick={() => (window.location.href = "/admin")}
                      >
                        <Target className="h-4 w-4" />
                        Yönetim Paneli
                      </button>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem
                    onClick={handleSignOut}
                    className="flex items-center gap-2 text-red-600"
                  >
                    <span>{t("signOut")}</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                href="/giris"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <User className="h-4 w-4" />
                <span>{t("myAccount")}</span>
              </Link>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

const MainNav = () => {
  const t = useTranslations("common");
  const locale = useLocale();

  return (
    <nav className="hidden md:flex items-center gap-2 w-full">
      {navItems.map((item) => (
        <div key={item.key} className="relative group">
          {item.dropdown ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="lg"
                  className="font-medium text-base hover:text-primary hover:bg-primary/5 transition-colors duration-200 flex items-center gap-2 px-3 py-2 rounded-lg"
                >
                  {t(item.key)}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-48 shadow-lg border-0 bg-white/95 backdrop-blur-sm"
              >
                {item.dropdown.map((dropdownItem) => (
                  <DropdownMenuItem key={dropdownItem.key} asChild>
                    <Link
                      href={dropdownItem.href}
                      className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-primary/10 transition-colors"
                    >
                      {t(dropdownItem.key)}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : item.isCategories ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="lg"
                  className="font-medium text-base hover:text-primary hover:bg-primary/5 transition-colors duration-200 flex items-center gap-2 px-3 py-2 rounded-lg"
                >
                  {t(item.key)}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-64 shadow-lg border-0 bg-white/95 backdrop-blur-sm max-h-96 overflow-y-auto"
              >
                {siteConfig.categories?.map((category) => (
                  <DropdownMenuItem key={category.id} asChild>
                    <Link
                      href={`/faaliyetler/${category.slug}`}
                      className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-primary/10 transition-colors"
                    >
                      <span className="truncate">
                        {getCategoryName(category, locale)}
                      </span>
                    </Link>
                  </DropdownMenuItem>
                ))}
                {(!siteConfig.categories ||
                  siteConfig.categories.length === 0) && (
                  <DropdownMenuItem disabled>
                    <span className="text-gray-500 text-sm">
                      {locale === "ar"
                        ? "لم يتم العثور على فئة"
                        : locale === "en"
                          ? "No category found"
                          : "Kategori bulunamadı"}
                    </span>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href={item.href}>
              <Button
                variant="ghost"
                size="lg"
                className="font-medium text-base hover:text-primary hover:bg-primary/5 transition-colors duration-200 flex items-center gap-2 px-3 py-2 rounded-lg"
              >
                {t(item.key)}
              </Button>
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

const MobileNav = () => {
  const t = useTranslations("common");
  const locale = useLocale();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden hover:bg-primary/10 transition-colors"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 bg-white/95 backdrop-blur-lg">
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center gap-3 mb-8 mt-4">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-green-600 rounded-full flex items-center justify-center">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-primary">İslami Merci</h3>
              <p className="text-xs text-gray-500">Hayır Kurumu</p>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex flex-col gap-2 flex-1">
            {navItems.map((item) => (
              <div key={item.key} className="space-y-2">
                {item.href ? (
                  <Link href={item.href}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-base font-medium hover:bg-primary/10 transition-colors"
                    >
                      {t(item.key)}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-base font-medium hover:bg-primary/10 transition-colors"
                  >
                    {t(item.key)}
                  </Button>
                )}

                {item.dropdown && (
                  <div className="pl-8 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <Link key={subItem.key} href={subItem.href}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-sm text-gray-600 hover:text-primary hover:bg-primary/5"
                        >
                          {t(subItem.key)}
                        </Button>
                      </Link>
                    ))}
                  </div>
                )}

                {item.isCategories &&
                  siteConfig.categories &&
                  siteConfig.categories.length > 0 && (
                    <div className="pl-8 space-y-1 max-h-48 overflow-y-auto">
                      {siteConfig.categories.map((category) => (
                        <Link
                          key={category.id}
                          href={`/donations/categories/${category.slug}`}
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start text-sm text-gray-600 hover:text-primary hover:bg-primary/5"
                          >
                            <span className="truncate">
                              {getCategoryName(category, locale)}
                            </span>
                          </Button>
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </nav>

          {/* Mobile Footer Actions */}
          <div className="border-t pt-4 space-y-3">
            <Link href="/donate">
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Heart className="h-4 w-4 " />
                {t("donate")}
              </Button>
            </Link>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <a
                href="tel:+902129231923"
                className="flex items-center gap-1 hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                +90 532 599 18 43
              </a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export function Header() {
  const { cart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // TopBar visibility (disappears after 20px)
          setIsScrolled(currentScrollY > 20);

          // Header visibility logic
          if (currentScrollY < 100) {
            // Always show when near top
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY && currentScrollY > 150) {
            // Hide when scrolling down and past threshold
            setIsVisible(false);
          } else if (currentScrollY < lastScrollY) {
            // Show when scrolling up
            setIsVisible(true);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Original Header - Static positioning */}
      <header className="w-full bg-white/90 backdrop-blur">
        {/* Top Bar */}
        <TopBar isVisible={!isScrolled} />

        {/* Main Navigation */}
        <MaxWidthWrapper className="py-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="mr-5">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <MainNav />

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <LanguageSwitcher />
                <Link href="/sepet">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative hover:bg-primary/10 transition-colors"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    {cart.totalItems > 0 && (
                      <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {cart.totalItems}
                      </span>
                    )}
                  </Button>
                </Link>
              </div>
              {/* Mobile Navigation */}
              <MobileNav />
            </div>
          </div>
        </MaxWidthWrapper>
      </header>

      {/* Floating Header - Fixed positioning with animations */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-in-out transform bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200/50",
          isVisible && isScrolled
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none",
        )}
      >
        <MaxWidthWrapper className="flex justify-between items-center h-16">
          {/* Compact Logo */}
          <Link href="/" className="mr-4">
            <Logo size={36} />
          </Link>

          {/* Desktop Navigation */}
          <MainNav />

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <Link href="/sepet">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative hover:bg-primary/10 transition-colors"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {cart.totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cart.totalItems}
                    </span>
                  )}
                </Button>
              </Link>
            </div>
            {/* Mobile Navigation */}
            <MobileNav />
          </div>
        </MaxWidthWrapper>
      </header>
    </>
  );
}
