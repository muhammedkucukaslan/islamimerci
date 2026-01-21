import { siteConfig } from "@/lib/siteconfig";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Çerez Politikası",
    description: "Web sitemizde çerezlerin kullanımı hakkında bilmeniz gerekenler",
  };
}

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function CookiesPage({ params }: Props) {
  const { locale } = await params;
  const getCookiesContent = (locale: string) => {
    const cookiesContent = siteConfig.cookies.cookiesContent.find(
      (content) => content.language === locale,
    );
    return (
      cookiesContent?.content ||
      siteConfig.cookies.cookiesContent[0]?.content ||
      ""
    );
  };

  return (
    <div
      className="html-content"
      dangerouslySetInnerHTML={{ __html: getCookiesContent(locale) }}
    />
  );
}
