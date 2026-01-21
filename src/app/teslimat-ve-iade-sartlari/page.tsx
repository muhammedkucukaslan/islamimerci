import { siteConfig } from "@/lib/siteconfig";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "deliveryAndReturns" });
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

export default async function DeliveryAndReturnsPage({ params }: Props) {
  const { locale } = await params;
  const getDeliveryContent = (locale: string) => {
    const deliveryContent =
      siteConfig.deliveryAndReturns.deliveryAndReturnsContent.find(
        (content) => content.language === locale,
      );
    return (
      deliveryContent?.content ||
      siteConfig.deliveryAndReturns.deliveryAndReturnsContent[0]?.content ||
      ""
    );
  };

  return (
    <div
      className="html-content"
      dangerouslySetInnerHTML={{ __html: getDeliveryContent(locale) }}
    />
  );
}
