"use client";

import { ImageSlider, SlideItem } from "@/components/shared/image-slider";
import { useRouter } from "next/navigation";

const CAROUSEL_ITEMS: SlideItem[] = [
  {
    id: "about-main",
    src: "https://i.hizliresim.com/7fzonfe.jpg",
    alt: "Hakkımızda - İslami Merci",
    objectFit: "contain",
    link: "/hakkimizda",
  },
  {
    id: "medrese",
    src: "https://i.hizliresim.com/7fzonfe.jpg",
    alt: "Medrese ve Hafızlık kayıtları başladı",
    link: "mailto:iletisim@islamimerci.org",
  },
];

export function HeroCarousel() {
  const router = useRouter();

  const handleSlideClick = (slide: SlideItem) => {
    if (slide.link) {
      router.push(slide.link);
    }
  };

  return (
    <ImageSlider
      slides={CAROUSEL_ITEMS}
      className="h-[300px] md:h-[550px]"
      aspectRatio="video"
      showNavigation={true}
      showPagination={true}
      autoplay={{ delay: 8000 }}
      loop={true}
      rounded={true}
      overlay={false}
      onSlideClick={handleSlideClick}
    />
  );
}
