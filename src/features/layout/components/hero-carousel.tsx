"use client";

import { ImageSlider, SlideItem } from "@/components/shared/image-slider";
import { useRouter } from "next/navigation";

const CAROUSEL_ITEMS: SlideItem[] = [
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
      className="h-[400px] md:h-[500px] object-cover"
      aspectRatio="ultrawide"
      showNavigation={true}
      showPagination={true}
      autoplay={{ delay: 6000 }}
      loop={true}
      rounded={true}
      overlay={false}
      onSlideClick={handleSlideClick}
    />
  );
}
