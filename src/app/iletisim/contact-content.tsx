  "use client";

  import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
  import { Button } from "@/components/ui/button";
  import { Card, CardContent, CardHeader } from "@/components/ui/card";
  import { Instagram, Mail, MapPin, MessageCircle, Youtube, ExternalLink } from "lucide-react";

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

    const locations = [
      {
        name: "İslami Merci Derneği Mescidi - 1",
        address: "Merkez Mahallesi, Yardım Sokak No:123",
        district: "Bahçelievler / İstanbul",
        mapUrl: "BURAYA_GOOGLE_MAPS_EMBED_LINKI_1", // Google Maps'ten Embed link al
        directionsUrl: "BURAYA_GOOGLE_MAPS_DIRECTIONS_LINKI_1", // Google Maps directions linki
      },
      {
        name: "İslami Merci Derneği Mescid - 2",
        address: "Cumhuriyer Mahallesi, Çelik Hançer Caddesi, No: 14b",
        district: "Bahçelievler / İstanbul",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2389.3287628599205!2d28.852229859134788!3d41.01726027979607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa537e44c5f57%3A0x594e1904e52236b5!2s%C4%B0slami%20Merci%20Derne%C4%9Fi!5e0!3m2!1sen!2str!4v1769031903426!5m2!1sen!2str" , // Google Maps'ten Embed link al
        directionsUrl: "https://maps.app.goo.gl/yDDzLhjBTAxVePjL8", // Google Maps directions linki
      },
    ];

    return (
      <div className="flex flex-col pb-20">
        {/* Header Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-background border-b border-primary/10 py-24">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 text-center space-y-6 relative z-10">
            <div className="inline-block">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Mail className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              İletişim
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
              Hizmetlerimiz hakkında bilgi almak veya destek olmak için bize her
              zaman ulaşabilirsiniz.
            </p>
          </div>
        </section>

        <MaxWidthWrapper className="py-20">
          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full rounded-3xl border-2 border-primary/5 group-hover:border-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-500 overflow-hidden backdrop-blur-sm bg-card/50 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="pt-10 relative z-10">
                    <div
                      className={`w-20 h-20 rounded-2xl ${method.color}/10 flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <method.icon
                        className={`w-10 h-10 ${method.color.replace("bg-", "text-")}`}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="pb-10 space-y-3 relative z-10">
                    <h3 className="text-2xl font-bold">{method.title}</h3>
                    <p className="text-primary font-semibold text-lg">{method.value}</p>
                    <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                        Tıklayın <ExternalLink className="w-4 h-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          {/* Locations Section */}
          <div className="space-y-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Mescidlerimiz</h2>
              <p className="text-muted-foreground text-lg">
                Size en yakın mescidimizi ziyaret edebilirsiniz
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {locations.map((location, idx) => (
                <Card
                  key={idx}
                  className="rounded-3xl border-2 border-primary/5 overflow-hidden backdrop-blur-sm bg-card/50 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
                >
                  {/* Map Embed */}
                  <div className="relative w-full h-80 bg-muted overflow-hidden">
                    <iframe
                      src={location.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                  </div>

                  {/* Location Info */}
                  <div className="p-8 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="text-2xl font-bold">{location.name}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {location.address}
                          <br />
                          {location.district}
                        </p>
                      </div>
                    </div>

                    <a
                      href={location.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Button
                        size="lg"
                        className="w-full rounded-2xl h-14 font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 group"
                      >
                        <MapPin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        Yol Tarifi Al
                        <ExternalLink className="w-4 h-4 ml-2 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Button>
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="mt-16 rounded-3xl border-2 border-primary/10 overflow-hidden backdrop-blur-sm bg-gradient-to-br from-primary/5 to-background p-12 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold">Sorularınız mı var?</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                WhatsApp üzerinden bize 7/24 ulaşabilir, tüm sorularınızı
                sorabilirsiniz. Size yardımcı olmaktan mutluluk duyarız.
              </p>
              <a
                href="https://wa.me/905325991843"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="rounded-2xl h-14 px-8 font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp'tan Yazın
                </Button>
              </a>
            </div>
          </Card>
        </MaxWidthWrapper>

        <style jsx>{`
          .bg-grid-pattern {
            background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
            background-size: 24px 24px;
          }
        `}</style>
      </div>
    );
  }