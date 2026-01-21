import HeaderSection from "@/components/shared/header-section";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import Image from "next/image";

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    tr: "Mahmud Efendi Hazretleri (k.s)",
    en: "Mahmud Efendi Hazretleri (k.s)",
    ar: "الشيخ محمود أفندي",
  };

  const descriptions: Record<string, string> = {
    tr: "Mahmud Efendi Hazretleri'nin hayatı, eserleri ve öğretileri",
    en: "Life, works and teachings of Mahmud Efendi Hazretleri",
    ar: "حياة وأعمال وتعاليم الشيخ محمود أفندي",
  };

  return {
    title: titles[locale] || titles["tr"],
    description: descriptions[locale] || descriptions["tr"],
  };
}

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

const mahmudEfendiContent: Record<string, string> = {
  tr: `
    <div class="prose max-w-none">
      <h2>Hayatı</h2>
      <p>Mahmud Efendi Hazretleri hakkında bilgi...</p>
      <h2>Öğretileri</h2>
      <p>Öğretileri hakkında detay...</p>
    </div>
  `,
  en: `
    <div class="prose max-w-none">
      <h2>Life</h2>
      <p>Information about Mahmud Efendi Hazretleri...</p>
      <h2>Teachings</h2>
      <p>Details about his teachings...</p>
    </div>
  `,
  ar: `
    <div class="prose max-w-none">
      <h2>الحياة</h2>
      <p>معلومات عن الشيخ محمود أفندي...</p>
      <h2>التعاليم</h2>
      <p>تفاصيل عن تعاليمه...</p>
    </div>
  `,
};

const shortDescriptions: Record<string, string> = {
  tr: "Şeyhimiz Mahmud Efendi Hazretlerinin (k.s) hayatı, öğretileri ve İslam dünyasına katkıları hakkında bilgi edinin.",
  en: "Learn about the life, teachings and contributions of Mahmud Efendi Hazretleri to the Islamic world.",
  ar: "تعرف على حياة وتعاليم ومساهمات الشيخ محمود أفندي في العالم الإسلامي.",
};

const mahmudEfendiImage = "https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNlIsOIsNPmcXsaGLYp37nVoTxQH1JbiWFEkrj9";

const titles: Record<string, string> = {
  tr: "Mahmud Efendi Hazretleri (k.s)",
  en: "Mahmud Efendi Hazretleri (k.s)",
  ar: "الشيخ محمود أفندي",
};

export default async function MahmudEfendiPage({ params }: Props) {
  const { locale } = await params;

  return (
    <MaxWidthWrapper>
      {/* Hero Section */}
      <HeaderSection
        title={titles[locale] || titles["tr"]}
        description={shortDescriptions[locale] || shortDescriptions["tr"]}
        imageUrl={mahmudEfendiImage}
      />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        {/* Biography Image */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-md h-[600px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={mahmudEfendiImage}
              alt={titles[locale] || titles["tr"]}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* HTML Content */}
        <div className="prose prose-lg max-w-none">
          <div
            className={`html-content text-gray-700 leading-relaxed space-y-6 ${
              locale === "ar" ? "text-right" : "text-left"
            }`}
            dir={locale === "ar" ? "rtl" : "ltr"}
            dangerouslySetInnerHTML={{
              __html: mahmudEfendiContent[locale] || mahmudEfendiContent["tr"],
            }}
          />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
