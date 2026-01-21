import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, HeartHandshake, Star, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biz Kimiz? - İslami Merci",
  description: "İslami Merci Derneği hakkında bilgi",
};

export default function AboutPage() {
  const initiatives = [
    {
      title: "Medrese Eğitimi",
      icon: BookOpen,
      desc: "Ümmetin kurtuluşu için zaruri olan tebliğ ehli hocalar yetiştiriyoruz.",
    },
    {
      title: "Gazze Yardımları",
      icon: HeartHandshake,
      desc: "İzzet diyarı Gazze'ye su ve yemek yardımları ulaştırıyoruz.",
    },
    {
      title: "Afrika Hizmetleri",
      icon: Star,
      desc: "Afrika'da kurban kesimleri ve insani yardım faaliyetleri yürütüyoruz.",
    },
    {
      title: "Muhtaç Aileler",
      icon: Users,
      desc: "Düzenli olarak ihtiyaç sahibi ailelere destek sağlıyoruz.",
    },
  ];

  return (
    <div className="flex flex-col pb-20">
      {/* Premium Header */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-emerald-600 to-accent animate-gradient-xy opacity-90" />
        <div className="container mx-auto px-4 relative z-10 text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
            Biz Kimiz?
          </h1>
          <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto">
            Rasulullah sallallahu aleyhi ve sellem’in davasını yaşatma gayesiyle
            yola çıktık.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: Text Content */}
          <div className="lg:col-span-12 space-y-12">
            <Card className="rounded-[2.5rem] border-none shadow-2xl overflow-hidden glass-morphism">
              <CardContent className="p-8 md:p-16 space-y-10">
                <div className="max-w-3xl space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-primary flex items-center gap-3">
                      <Heart className="w-8 h-8" />
                      Kuruluş Hikayemiz
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      İslami Merci Derneği, 04.07.2024 tarihinde Muhammed Emre
                      Karadayı Hoca Efendi ve dava arkadaşları tarafından, ilmi
                      muhafaza edip insanlara öğretmek amacıyla kurulmuştur.
                    </p>
                  </div>

                  <div className="space-y-4 border-l-4 border-primary/20 pl-8 italic text-lg text-muted-foreground/80">
                    "Üstadımız Mahmud Ustaosmanoğlu Hazretleri'nin bizlere
                    bıraktığı en büyük miras olan medreseleri ihyâ etmek en
                    büyük gayemizdir."
                  </div>

                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Başkanımız Muhammed Emre Karadayı Hoca Efendi, üç yılı
                      aşkın süredir dijital mecralarda İslâm'a hizmet
                      etmektedir. Rabbimizin bereketiyle bu hizmetler geniş bir
                      kitleye ulaşmış ve bugünkü derneğimizin temelini teşkil
                      etmiştir.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-6 pt-10 border-t border-primary/10">
                  {initiatives.map((item, idx) => (
                    <div key={idx} className="space-y-4 group">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-primary rounded-[3rem] p-8 md:p-20 text-center text-primary-foreground space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-3xl md:text-5xl font-bold">
            Gelecek Nesillere Umutla
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Rabbimiz, bu hizmetleri daim eylesin; sizlerin yapmış olduğu her
            yardımı sadaka-i câriye eylesin. Dualarınız ve desteklerinizle daha
            nice hayırlı işlerde buluşmak üzere.
          </p>
          <div className="text-2xl font-bold italic opacity-80 pt-4">Âmin.</div>
        </div>
      </section>
    </div>
  );
}
