import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/features/layout/components/hero-carousel";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "İslami Merci Derneği",
  description:
    "İslami Merci, dünyanın dört bir yanındaki ihtiyaç sahiplerine yardım ulaştıran bir Derneğidur.",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <section>
        <HeroCarousel />
      </section>

      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
              Biz Kimiz?
            </h2>
            <p className="text-gray-600 mb-4">
              İslami Merci Derneği, 2024 yılından beri İslami faaliyetler
              yürüten ve ihtiyaç sahiplerine yardım eden bir kuruluştur.
            </p>
            <p className="text-gray-600 mb-6">
              Misyonumuz, dinimizin tebliğ ve yardımlaşma ilkeleri doğrultusunda
              hizmet etmektir.
            </p>
            <Link href="/hakkimizda">
              <Button variant="outline" className="text-green-700 border-green-700">
                Daha Fazla Bilgi
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/about-preview.jpg"
              alt="Hakkımızda"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />j
          </div>
        </div>
      </section>
    </div>
  );
}