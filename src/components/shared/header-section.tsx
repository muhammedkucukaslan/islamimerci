"use client";

import { cn } from "@/lib/utils";

type Props = {
  title: string;
  description?: string;
  imageUrl?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

const HeaderSection = ({
  title,
  description,
  imageUrl,
  className,
  size = "sm",
}: Props) => {
  const sizeClasses = {
    sm: "py-8 md:py-12",
    md: "py-10 md:py-16",
    lg: "py-12 md:py-20",
    xl: "py-16 md:py-24",
  };

  const titleSizes = {
    sm: "text-xl md:text-2xl lg:text-3xl",
    md: "text-2xl md:text-3xl lg:text-4xl",
    lg: "text-3xl md:text-4xl lg:text-5xl",
    xl: "text-4xl md:text-5xl lg:text-6xl",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-primary/90 to-primary rounded-xl mb-16",
        sizeClasses[size],
        className
      )}
    >
      {/* Background Image */}
      {imageUrl && (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
        </div>
      )}

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/4 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-10">
        <div className="max-w-4xl">
          <h1
            className={cn(
              "font-bold mb-6 text-white drop-shadow-lg",
              titleSizes[size]
            )}
          >
            {title}
          </h1>

          {description && (
            <p className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
};

export default HeaderSection;
