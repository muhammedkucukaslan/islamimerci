import { siteConfig } from "@/lib/siteconfig";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "terms" });
  return {
    title: t("pageTitle"),
    description: t("pageDescription"),
  };
}

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  const getTermsContent = (locale: string) => {
    const termsContent = siteConfig.terms.termsContent.find(
      (content) => content.language === locale,
    );
    return (
      termsContent?.content || siteConfig.terms.termsContent[0]?.content || ""
    );
  };

  return (
    <div
      className="html-content"
      dangerouslySetInnerHTML={{ __html: getTermsContent(locale) }}
    />
  );
}
