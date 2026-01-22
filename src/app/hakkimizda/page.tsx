import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, HeartHandshake, Star, Users } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

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
    <div className="flex flex-col pb-20 gap-10">
      {/* Premium Header */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-emerald-600 to-accent animate-gradient-xy opacity-90" />
        <div className="container mx-auto px-4 relative z-10 text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
            Biz Kimiz?
          </h1>
          <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto">
            Rasûlullâh sallallahu aleyhi ve sellem'in askerleriyiz
          </p>
        </div>
      </section>

      {/* Main Content */}
        <section className="container mx-auto px-4 -mt-20 relative z-20 flex justify-center">
        <div className="w-full max-w-5xl">

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: Text Content */}
          <div className="lg:col-span-12 space-y-12">
            <Card className="rounded-[2.5rem] border-none shadow-2xl overflow-hidden glass-morphism">
              <CardContent className="p-8 md:p-16 space-y-10">
                <div className="max-w-3xl space-y-10">
                  {/* Giriş Hamd u Sena */}
                  <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                    <p>
                      Âlemlerin Rabbi, kâinatın kapladığı her bir zerreyi yoktan var eden, onların
                      her halinden haberdar olan ve üzerlerinde mutlak kudret sahibi bulunan Allah
                      Azze ve Celle'ye hamd-u senâlar olsun.
                    </p>
                    <p>
                      Âlemlere rahmet olarak gönderilen Sevgili Peygamberimiz Muhammed Mustafa'ya
                      (sallallahu aleyhi ve sellem), O'nun mübarek kardeşleri olan Hz. Âdem'den
                      Hz. Îsâ'ya kadar gelen tüm peygamberlere, Allah yolunda cihad etmiş ve büyük
                      mücadeleler vermiş Ashâb-ı Kirâm'a ve onların izinden giderek ilmi muhafaza
                      edip insanlara öğreten Ehl-i Sünnet âlimlerine salât ve selâm olsun.
                    </p>
                  </div>

                  {/* Kuruluş */}
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-primary flex items-center gap-3">
                      Kuruluşumuz
                    </h2>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Bu faziletleri saymakla bitmeyen, pek mübarek ve üstün zâtların kutlu davasını
                      devam ettirmek niyetiyle İslami Merci Derneği, 04.07.2024 tarihinde
                      Derneğimizin Başkanı Muhammed Emre Karadayı Hoca Efendi ve dava arkadaşları
                      tarafından kurulmuştur.
                    </p>
                  </div>

                  {/* Sosyal Medya Hizmetleri */}
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Başkanımız Muhammed Emre Karadayı Hoca Efendi, üç yılı aşkın bir süredir
                    özellikle Instagram başta olmak üzere çeşitli sosyal medya platformlarında
                    İslâm'a hizmet etmektedir. Rabbimizin lütuf ve bereketiyle bu hizmetler kısa
                    sürede geniş bir kitleye ulaşmış ve bugün derneğimizin temelini teşkil
                    etmiştir.
                  </p>

                  {/* Fotoğraf Bölümü */}
                  <div className="my-12">
                    <div className="relative w-full h-[100px] md:h-[700px] rounded-2xl overflow-hidden shadow-2xl group">
                      <Image
                        src="https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNloarXZ0wZRdGsEg5Ipy3BlUcqbfrKLONkwiv6"
                        alt="İslami Merci Derneği"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                       
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
          <div className="h-8" />
                    <div className="relative w-full h-[100px] md:h-[700px] rounded-2xl overflow-hidden shadow-2xl group">
                      <Image
                        src="https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNlkaIGYhOOok67SsTaNJUfEy94veCDtWluL5m0"
                        alt="İslami Merci Derneği"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                       
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Alıntı */}
                  <div className="border-l-4 border-primary/30 pl-6 italic text-lg text-muted-foreground bg-primary/5 py-6 rounded-r-xl">
                    Üstadımız ve Sultanımız Hacı Mahmud Ustaosmanoğlu Hazretleri'nin bizlere
                    bıraktığı en büyük miras olan medreseleri ihyâ etmek, ümmetin kurtuluşu için
                    zaruri olan emr-i bi'l ma'rûf ve nehy-i ani'l münker vazifesini omuzlarında
                    taşıyacak tebliğ ehli hocalar yetiştirmek, derneğimizin en büyük gayesidir.
                  </div>

                  {/* Faaliyetler */}
                  <div className="space-y-3 text-lg text-muted-foreground">
                    <p>Bunun yanında Allah'ın izni ve siz hayırsever kardeşlerimizin desteğiyle:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>İzzet diyarı Gazze'ye su ve yemek yardımları ulaştırılmakta,</li>
                      <li>Afrika'da kurbanlar kesilmekte,</li>
                      <li>İhtiyaç sahibi ailelere yardımlar yapılmakta,</li>
                      <li>Sokak hayvanlarına mama dağıtılmakta,</li>
                      <li>ve daha nice hayırlı hizmetler ifa edilmektedir.</li>
                    </ul>
                  </div>

                  {/* Dua */}
                  <p className="text-lg leading-relaxed text-muted-foreground font-medium pt-4">
                    Rabbimiz, bu hizmetleri daim eylesin; sizlerin yapmış olduğu her yardımı
                    sadaka-i câriye eylesin. Âmin.
                  </p>
                </div>

                {/* İnisiyatifler Grid */}
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