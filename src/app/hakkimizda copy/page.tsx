import HeaderSection from "@/components/shared/header-section";
import { siteConfig } from "@/lib/siteconfig";
import { getTranslations } from "next-intl/server";

import type { Metadata } from "next";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function AboutUsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("about");

  // Get about content based on locale
  const getAboutContent = (locale: string) => {
    const aboutContent = siteConfig.about.aboutContent.find(
      (content) => content.language === locale,
    );
    return (
      aboutContent?.content || siteConfig.about.aboutContent[0]?.content || ""
    );
  };

  const getPageDescription = (locale: string) => {
    const pageDesc = siteConfig.about.pageDescription.find(
      (desc) => desc.language === locale,
    );
    return (
      pageDesc?.content || siteConfig.about.pageDescription[0]?.content || ""
    );
  };

  return (
    <div className="container">
      {/* Hero Section */}
      <HeaderSection
        title={t("title")}
        description={getPageDescription(locale)}
        imageUrl="https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNlIsOIsNPmcXsaGLYp37nVoTxQH1JbiWFEkrj9"
      />

      {/* Our Story Section */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
          {t("story")}
        </h2>
        <div className="prose prose-lg max-w-none">
          <div
            className={`html-content text-gray-700 leading-relaxed space-y-6 ${
              locale === "ar" ? "text-right" : "text-left"
            }`}
            dir={locale === "ar" ? "rtl" : "ltr"}
            dangerouslySetInnerHTML={{
              __html: getAboutContent(locale),
            }}
          />
        </div>
      </div>
    </div>
  );
}
