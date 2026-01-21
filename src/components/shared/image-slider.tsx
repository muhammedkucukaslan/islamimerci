"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface SlideItem {
  id?: string;
  src: string;
  alt?: string;
  title?: string;
  description?: string;
  link?: string;
}

interface ImageSliderProps {
  slides: SlideItem[];
  className?: string;
  aspectRatio?: "video" | "square" | "wide" | "ultrawide";
  showNavigation?: boolean;
  showPagination?: boolean;
  autoplay?: boolean | { delay: number };
  loop?: boolean;
  rounded?: boolean;
  overlay?: boolean;
  onSlideClick?: (slide: SlideItem, index: number) => void;
  children?: React.ReactNode; // For custom overlay content
}

const ASPECT_RATIOS = {
  video: "aspect-video", // 16:9
  square: "aspect-square", // 1:1
  wide: "aspect-[3/2]", // 3:2
  ultrawide: "aspect-[21/9]", // 21:9
};

export function ImageSlider({
  slides,
  className,
  aspectRatio = "video",
  showNavigation = true,
  showPagination = true,
  autoplay = false,
  loop = true,
  rounded = true,
  overlay = false,
  onSlideClick,
  children,
}: ImageSliderProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render on server to avoid hydration issues
  if (!isClient) {
    return (
      <div
        className={cn(
          "w-full bg-gray-200 animate-pulse",
          ASPECT_RATIOS[aspectRatio],
          rounded && "rounded-xl",
          className
        )}
      />
    );
  }

  // Single slide - no need for Swiper
  if (slides.length <= 1) {
    const slide = slides[0];
    return (
      <div
        className={cn(
          "relative w-full overflow-hidden",
          ASPECT_RATIOS[aspectRatio],
          rounded && "rounded-xl",
          className
        )}
      >
        <img
          src={slide?.src || "/placeholder-image.jpg"}
          alt={slide?.alt || "Image"}
          className={cn(
            "object-cover w-full h-full",
            rounded && "rounded-xl",
            onSlideClick && "cursor-pointer"
          )}
          onClick={() => onSlideClick?.(slide, 0)}
        />

        {overlay && (
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent",
              rounded && "rounded-xl"
            )}
          />
        )}

        {children && <div className="absolute inset-0 z-30">{children}</div>}
      </div>
    );
  }

  // Multiple slides - use Swiper
  const autoplayConfig =
    typeof autoplay === "boolean"
      ? autoplay
        ? { delay: 5000, disableOnInteraction: false }
        : false
      : autoplay;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        ASPECT_RATIOS[aspectRatio],
        rounded && "rounded-xl",
        className
      )}
    >
      <>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={
            showNavigation
              ? {
                  nextEl: ".image-slider-button-next",
                  prevEl: ".image-slider-button-prev",
                }
              : false
          }
          pagination={
            showPagination
              ? {
                  clickable: true,
                  bulletClass: "image-slider-pagination-bullet",
                  bulletActiveClass: "image-slider-pagination-bullet-active",
                }
              : false
          }
          autoplay={autoplayConfig}
          loop={loop}
          className={cn("h-full", rounded && "rounded-xl")}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id || index}>
              <img
                src={slide.src}
                alt={slide.alt || `Slide ${index + 1}`}
                className={cn(
                  "object-cover w-full h-full",
                  rounded && "rounded-xl",
                  onSlideClick && "cursor-pointer"
                )}
                onClick={() => onSlideClick?.(slide, index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        {showNavigation && (
          <>
            <button className="image-slider-button-prev absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 cursor-pointer z-50">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button className="image-slider-button-next absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 cursor-pointer z-50">
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {/* Overlay */}
        {overlay && (
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10",
              rounded && "rounded-xl"
            )}
          />
        )}

        {/* Custom Content Overlay */}
        {children && <div className="absolute inset-0 z-30">{children}</div>}
      </>
    </div>
  );
}
