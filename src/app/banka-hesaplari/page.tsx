import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return {
    title: "Banka Hesap Numaralarımız",
    description: "Güvenli ve hızlı bağış yapabilmeniz için doğrulanmış banka hesap numaralarımız. Bağışlarınızı dilediğiniz para birimi ile gerçekleştirebilirsiniz.",
  };
}

export default async function BankAccountsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <div className="py-20">
      Derneğimizin açıktan IBAN paylaşma izni yoktur. Bağış yapmak istediğiniz hizmetinizle ilgili IBAN'ı Instagram DM'den mesaj atarak öğrenebilirsiniz.
      <br />
      Instagram: @islamimerci
    </div>
  );
}
