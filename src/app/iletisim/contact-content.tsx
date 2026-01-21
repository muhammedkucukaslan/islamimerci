"use client";

import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Instagram, Mail, MapPin, MessageCircle, Youtube } from "lucide-react";

export default function ContactContent() {
  const contactMethods = [
    {
      title: "WhatsApp Destek",
      value: "+90 532 599 18 43",
      icon: MessageCircle,
      link: "https://wa.me/905325991843",
      color: "bg-green-500",
    },
    {
      title: "Instagram",
      value: "@islamimerci",
      icon: Instagram,
      link: "https://instagram.com/islamimerci",
      color: "bg-pink-600",
    },
    {
      title: "E-posta",
      value: "iletisim@islamimerci.org",
      icon: Mail,
      link: "mailto:iletisim@islamimerci.org",
      color: "bg-blue-600",
    },
    {
      title: "YouTube",
      value: "@islamimerci",
      icon: Youtube,
      link: "https://youtube.com/@islamimerci",
      color: "bg-red-600",
    },
  ];

  return (
    <div className="flex flex-col pb-20">
      {/* Header Section */}
      <section className="bg-primary/5 border-b border-primary/10 py-20">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            İletişim
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hizmetlerimiz hakkında bilgi almak veya destek olmak için bize her
            zaman ulaşabilirsiniz.
          </p>
        </div>
      </section>

      <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, idx) => (
            <a
              key={idx}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="h-full rounded-[2.5rem] border-primary/5 group-hover:border-primary/20 group-hover:shadow-2xl transition-all duration-500 overflow-hidden glass-morphism text-center">
                <CardHeader className="pt-10">
                  <div
                    className={`w-16 h-16 rounded-2xl ${method.color}/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}
                  >
                    <method.icon
                      className={`w-8 h-8 ${method.color.replace("bg-", "text-")}`}
                    />
                  </div>
                </CardHeader>
                <CardContent className="pb-10 space-y-2">
                  <div className="text-xl font-bold">{method.title}</div>
                  <div className="text-primary font-medium">{method.value}</div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Address Card */}
        <div className="mt-12">
          <Card className="rounded-[3rem] border-primary/5 glass-morphism p-8 md:p-16">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-10 h-10 text-primary" />
              </div>
              <div className="text-center md:text-left space-y-4">
                <h2 className="text-3xl font-bold">Ofisimiz</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Merkez Mahallesi, Yardım Sokak No:123 <br />
                  Bahçelievler / İstanbul, Türkiye
                </p>
              </div>
              <div className="md:ml-auto w-full md:w-auto">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button
                    size="lg"
                    className="w-full rounded-2xl px-10 h-16 font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all"
                  >
                    Yol Tarifi Al
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
