"use client";

import { Button } from "@/components/ui/button";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";

export default function NotFoundPage() {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Sayfa Bulunamadı
          </h2>
          <p className="text-gray-600 mb-8 max-w-md">
            Aradığınız sayfa bulunamadı. URL'yi doğru yazdığınızdan emin olun veya
            ana sayfaya dönün.
          </p>
          <Button onClick={() => (window.location.href = "/")}>
            Ana Sayfaya Dön
          </Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
