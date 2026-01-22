import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Faaliyetlerimiz - İslami Merci",
  description:
    "İslami Merci Derneği tarafından yürütülen faaliyetler ve hayır projeleri.",
};

const activities = [
  {
    id: "medrese",
    title: "Medrese Eğitimi",
    category: "Eğitim",
    date: "Sürekli",
    image: "https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNlwG1i8I9cpQ9F4PjxLTW0fdDvlhMbaRq7utVk",
    desc: "Ümmetin alimlerini ve hafızlarını yetiştirmek için medrese faaliyetlerimize devam ediyoruz. Mahmud Efendi Hazretleri'nin mirasını yaşatıyoruz.",
    link: "/faaliyetlerimiz/medrese",
  },
  {
    id: "mushaf",
    title: "Mushaf-ı Şerif Dağıtımı",
    category: "Eğitim",
    date: "Aktif",
    image:
      "https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNlVrYcqblYCkuNXrHI6xQvd7lFL3RmPsy8opqB",
    desc: "Dünyanın dört bir yanındaki ihtiyaç sahiplerine Mushaf-ı Şerif dağıtarak Rabbimizin Yüce Kelâmı Kur'ân-ı Kerîm'in yayılmasına vesile oluyoruz.",
    link: "/faaliyetlerimiz/mushaf-dagitimi",
  },
  {
    id: "teblig",
    title: "Dini Tebliğ Faaliyetleri",
    category: "Tebliğ",
    date: "Sürekli",
    image:
      "https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNlzON8AoqAC9IMDN0sT5wrVR8vqtj4X6PpHgEi",
    desc: "İslam'ın doğru ve güzel mesajını insanlara ulaştırmak için tebliğ faaliyetlerimizi sürdürüyoruz. Herkesi bu kutlu davaya davet ediyoruz.",
    link: "/faaliyetlerimiz/teblig",
  },
  {
    id: "gazze",
    title: "Gazze'ye Yardım Eli Uzatın",
    category: "Yardım",
    date: "Aktif",
    image:
      "https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNlgE6Xw4J89iDG0OpbzcY7MhmVkW6lHufaEgRq",
    desc: "Gazze'de yaşanan insanlık dramı karşısında sessiz kalamayız. Mazlumların yanında olmak İslam'ın emridir.",
    link: "/faaliyetlerimiz/gazze",
  },
  {
    id: "faziletli-ameller",
    title: "Faziletli Amel Paylaşımları",
    category: "Bilgi",
    date: "Sürekli",
    image:
      "https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNloarXZ0wZRdGsEg5Ipy3BlUcqbfrKLONkwiv6",
    desc: "Muhammed Emre Karadayı Hoca Efendi'nin faziletli ameller hakkında paylaşımlarını takip edin. Hayırlı amellerle ahiret kesenizi doldurun.",
    link: "/faaliyetlerimiz/faziletli-ameller",
  },
];

export default function ActivitiesPage() {
  return (
    <div className="flex flex-col pb-20">
      {/* Header */}
      <section className="bg-primary/5 border-b border-primary/10 py-20">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Faaliyetlerimiz
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ümmetin selameti ve yardımlaşma ruhunu yaşatmak 
            adına yürüttüğümüz temel faaliyetlerimiz.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {activities.map((item) => (
            <Card
              key={item.id}
              className="group rounded-[2rem] border-primary/5 hover:border-primary/20 hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="md:w-3/5 p-8 space-y-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center text-muted-foreground text-sm space-x-4 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.date}
                    </div>
                    <div className="flex items-center">
                      <Tag className="w-4 h-4 mr-1" />
                      {item.category}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                  <p className="text-muted-foreground mt-4 leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>
                <Link href={item.link}>
                  <Button
                    variant="link"
                    className="p-0 text-primary font-bold group/btn flex items-center space-x-2"
                  >
                    <span>Devamını Oku</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
