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
    image: "https://i.hizliresim.com/7fzonfe.jpg",
    desc: "Geleceğin alimlerini ve hafızlarını yetiştirmek için medrese faaliyetlerimize devam ediyoruz. Mahmud Efendi Hazretleri'nin mirasını yaşatıyoruz.",
    link: "/faaliyetlerimiz/medrese",
  },
  {
    id: "gazze",
    title: "Gazze Acil Yardım",
    category: "Yardım",
    date: "Aktif",
    image:
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&auto=format&fit=crop&q=60",
    desc: "İzzet diyarı Gazze'ye ekmek, sıcak yemek ve temiz su yardımlarımızı aralıksız ulaştırıyoruz. Zulme sessiz kalmıyoruz.",
    link: "/faaliyetlerimiz/gazze",
  },
  {
    id: "afrika",
    title: "Afrika Kurban & Su",
    category: "Kalkınma",
    date: "Aylık",
    image:
      "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?w=800&auto=format&fit=crop&q=60",
    desc: "Afrika'da susuzlukla mücadele ediyor, kurban hisselerinizi gerçek ihtiyaç sahiplerine emanet bilinciyle ulaştırıyoruz.",
    link: "/faaliyetlerimiz/afrika",
  },
  {
    id: "ihtiyac-sahibi",
    title: "Yerel Yardım Faaliyetleri",
    category: "Sosyal",
    date: "Günlük",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=60",
    desc: "Ülkemizdeki muhtaç ailelere, dul ve yetimlere gıda ve yakacak yardımları yaparak hayatlarına dokunuyoruz.",
    link: "/faaliyetlerimiz/israil-boykot",
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
            Dünyanın dört bir yanında ümmetin hizmetinde yürüttüğümüz hayır
            projelerimizden haberdar olun.
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
