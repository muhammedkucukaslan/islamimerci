import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return {
    title: "Biz Kimiz?",
    description: "İslami Merci Derneği hakkında bilgi",
  };
}

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;

  return (
    <div className="min-h-screen">
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Biz Kimiz?</h1>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Misyonumuz</h2>
            <p className="text-lg text-gray-700">
              İslami Merci olarak misyonumuz, ihtiyaç sahiplerine din, dil, ırk
              ayrımı yapmaksızın yardım etmektir.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Vizyonumuz</h2>
            <p className="text-lg text-gray-700">
              Dünya genelinde yoksulluk ve açlığın olmadığı bir dünya için
              çalışıyoruz.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Değerlerimiz</h2>
            <p className="text-lg text-gray-700">
              Dürüstlük, şeffaflık ve hesap verebilirlik temel değerlerimizdir.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Biz Kimiz?</h2>
            <p className="text-lg text-gray-700 mb-6">
              İslami Merci Derneği, 2005 yılında bir grup gönüllü tarafından
              Türkiye'de kuruldu. Kuruluşumuzun temelleri, toplumsal dayanışma ve
              yardımlaşma ilkeleri üzerine atıldı. İlk yıllarımızda yerel
              ihtiyaçlara odaklanırken, zaman içinde faaliyetlerimizi
              uluslararası alana genişlettik.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Bugün, dünyanın 45'ten fazla ülkesinde insani yardım, eğitim,
              sağlık, su ve sanitasyon, geçim kaynakları ve acil durum müdahalesi
              gibi alanlarda projeler yürütüyoruz. Kurulduğumuz günden bu yana,
              milyonlarca insanın hayatına dokunmayı başardık.
            </p>
            <p className="text-lg text-gray-700">
              İhtiyaç sahiplerine yardım etmek, toplumları güçlendirmek ve
              sürdürülebilir kalkınmaya katkıda bulunmak için çalışmalarımızı
              sürdürüyoruz.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}