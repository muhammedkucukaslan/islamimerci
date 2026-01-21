import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return {
    title: "Mesafeli Satış Sözleşmesi",
    description: "Mesafeli satış sözleşmesi hakkında bilmeniz gerekenler",
  };
}

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

const distanceSellingContent = {
  tr: `
    <div class="prose max-w-none">
      <h1>Mesafeli Satış Sözleşmesi</h1>
      <p>Mesafeli satış sözleşmesi hakkında bilmeniz gerekenler...</p>
    </div>
  `,
};

export default async function DistanceSellingPage({ params }: Props) {
  const { locale } = await params;

  return (
    <div
      className="html-content"
      dangerouslySetInnerHTML={{ __html: distanceSellingContent.tr }}
    />
  );
}
