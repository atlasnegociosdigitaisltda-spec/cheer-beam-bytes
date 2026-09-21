import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/data/product";

export interface ProductGalleryProps {
  readonly images: readonly GalleryImage[];
  readonly className?: string;
}

export function ProductGallery({ images, className }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbsRef = useRef<HTMLDivElement>(null);

  if (images.length === 0) return null;

  const active = images[Math.min(activeIndex, images.length - 1)];
  if (!active) return null;

  const scrollThumbs = (direction: -1 | 1) => {
    thumbsRef.current?.scrollBy({ left: direction * 240, behavior: "smooth" });
  };

  const step = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + images.length) % images.length);
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="relative overflow-hidden rounded-[14px] bg-muted max-md:rounded-[14px]">
        <img
          src={active.src}
          alt={active.alt}
          width={1200}
          height={1200}
          loading="eager"
          className="aspect-square w-full object-contain"
        />
        <Button
          type="button"
          onClick={() => step(-1)}
          aria-label="Image précédente"
          variant="ghost"
          size="icon"
          className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-background/85 md:hidden"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </Button>
        <Button
          type="button"
          onClick={() => step(1)}
          aria-label="Image suivante"
          variant="ghost"
          size="icon"
          className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-background/85 md:hidden"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </Button>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <Button
          type="button"
          onClick={() => scrollThumbs(-1)}
          aria-label="Faire défiler les miniatures vers la gauche"
          variant="ghost"
          size="icon"
          className="hidden h-8 w-8 shrink-0 rounded-full md:inline-flex"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </Button>

        <div
          ref={thumbsRef}
          className="flex flex-1 gap-2 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
               aria-label={`Afficher l’image ${index + 1}`}
              aria-current={index === activeIndex}
              className={cn(
                "h-[62px] w-[62px] shrink-0 overflow-hidden rounded-md border-2 transition-colors sm:h-[62px] sm:w-[62px]",
                index === activeIndex ? "border-foreground" : "border-transparent hover:border-border",
              )}
            >
              <img
                src={image.src}
                alt=""
                width={160}
                height={160}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>

        <Button
          type="button"
          onClick={() => scrollThumbs(1)}
          aria-label="Faire défiler les miniatures vers la droite"
          variant="ghost"
          size="icon"
          className="hidden h-8 w-8 shrink-0 rounded-full md:inline-flex"
        >
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}
