import { siteConfig } from "@/lib/siteconfig";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Gizlilik Politikası",
    description: "Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilmeniz gerekenler",
  };
}

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  const getPrivacyContent = (locale: string) => {
    const privacyContent = siteConfig.privacy.privacyContent.find(
      (content) => content.language === locale,
    );
    return (
      privacyContent?.content ||
      siteConfig.privacy.privacyContent[0]?.content ||
      ""
    );
  };

  return (
    <div
      className="html-content"
      dangerouslySetInnerHTML={{ __html: getPrivacyContent(locale) }}
    />
  );
}
