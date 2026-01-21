"use client";

import { ImageSlider, SlideItem } from "@/components/shared/image-slider";
import { useRouter } from "next/navigation";

const CAROUSEL_ITEMS: SlideItem[] = [
  {
    id: "hakkimizda",
    src: "https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNlDMtV7R10j6oazXRHblAvLpfOehYG3ri1N4gm",
    alt: "Hakkımızda - İslami Merci",
    objectFit: "contain",
    link: "/hakkimizda",
  },
  {
    id: "medrese",
    src: "https://a6c61391m3.ufs.sh/f/B1cf7tZ2SmNlwG1i8I9cpQ9F4PjxLTW0fdDvlhMbaRq7utVk",
    alt: "Medrese ve Hafızlık kayıtları başladı",
    link: "/faaliyetlerimiz/medrese",
  },
];

export function HeroCarousel() {
  const router = useRouter();

  const handleSlideClick = (slide: SlideItem) => {
    if (slide.link) router.push(slide.link);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-6">
      <ImageSlider
        slides={CAROUSEL_ITEMS}
       className="h-[220px] sm:h-[280px] md:h-[360px] lg:h-[440px] xl:h-[480px]"

        aspectRatio="video"
        showNavigation={true}
        showPagination={true}
        autoplay={{ delay: 7000 }}
        loop={true}
        rounded={true}
        overlay={false}
        onSlideClick={handleSlideClick}
      />
    </div>
  );
}
