import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biz Kimiz?",
  description: "İslami Merci Derneği hakkında bilgi",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 space-y-8">

        <h1 className="text-4xl font-bold">Biz Kimiz?</h1>

        <p className="text-lg text-gray-700">
          İslami Merci Derneği, Rasulullah sallallahu aleyhi ve sellem’in davasını
          yaşatma gayesiyle kurulmuş bir hayır kuruluşudur. Gayemiz; medrese
          eğitimi, Gazze su ve yemek projeleri, tebliğ faaliyetleri, muhtaç
          aileler ve hayvanlara yardım gibi alanlarda ümmetin hizmetinde
          olmaktır.
        </p>

        <hr />

        <p className="text-gray-700 leading-relaxed">
          Âlemlerin Rabbi, kâinatın kapladığı her bir zerreyi yoktan var eden,
          onların her halinden haberdar olan ve üzerinde mutlak kudret sahibi
          bulunan Allah Azze ve Celle’ye hamd-u senâlar olsun. Âlemlere rahmet
          olarak gönderilen Sevgili Peygamberimiz Muhammed Mustafa’ya
          (sallallahu aleyhi ve sellem), O’nun mübarek kardeşleri olan Hz.
          Âdem’den Hz. Îsâ’ya kadar gelen tüm peygamberlere, Allah yolunda cihad
          etmiş ve büyük mücadeleler vermiş Ashâb-ı Kirâm’a ve onların izinden
          giderek ilmi muhafaza edip insanlara öğreten Ehl-i Sünnet âlimlerine
          salât ve selâm olsun.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Bu faziletleri saymakla bitmeyen, pek mübarek ve üstün zâtların kutlu
          davasını devam ettirmek niyetiyle İslami Merci Derneği, 04.07.2024
          tarihinde Derneğimizin Başkanı Muhammed Emre Karadayı Hoca Efendi ve
          dava arkadaşları tarafından kurulmuştur.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Başkanımız Muhammed Emre Karadayı Hoca Efendi, üç yılı aşkın bir süredir
          özellikle Instagram başta olmak üzere çeşitli sosyal medya
          platformlarında İslâm’a hizmet etmektedir. Rabbimizin lütuf ve
          bereketiyle bu hizmetler kısa sürede geniş bir kitleye ulaşmış ve bugün
          derneğimizin temelini teşkil etmiştir.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Üstadımız ve Sultanımız Hacı Mahmud Ustaosmanoğlu Hazretleri’nin
          bizlere bıraktığı en büyük miras olan medreseleri ihyâ etmek, ümmetin
          kurtuluşu için zaruri olan emr-i bi’l ma’rûf ve nehy-i ani’l münker
          vazifesini omuzlarında taşıyacak tebliğ ehli hocalar yetiştirmek,
          derneğimizin en büyük gayesidir.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Bunun yanında Allah’ın izni ve siz hayırsever kardeşlerimizin
          desteğiyle:
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>İzzet diyarı Gazze’ye su ve yemek yardımları ulaştırılmakta,</li>
          <li>Afrika’da kurbanlar kesilmekte,</li>
          <li>İhtiyaç sahibi ailelere yardımlar yapılmakta,</li>
          <li>Sokak hayvanlarına mama dağıtılmakta,</li>
          <li>ve bunun gibi daha nice hayırlı hizmetler ifa edilmektedir.</li>
        </ul>

        <p className="text-gray-700 leading-relaxed font-medium">
          Rabbimiz, bu hizmetleri daim eylesin; sizlerin yapmış olduğu her yardımı
          sadaka-i câriye eylesin. Âmin.
        </p>

      </div>
    </div>
  );
}
