import { Star, StarHalf } from "lucide-react";

import { cn } from "@/lib/utils";

export interface StarRatingProps {
  /** Rating from 0 to 5; halves are rendered as half stars. */
  readonly rating: number;
  readonly className?: string;
  readonly starClassName?: string;
}

export function StarRating({ rating, className, starClassName }: StarRatingProps) {
  const safeRating = Math.max(0, Math.min(5, rating));
  const full = Math.floor(safeRating);
  const hasHalf = safeRating - full >= 0.25 && safeRating - full < 0.85;
  const rounded = safeRating - full >= 0.85 ? full + 1 : full;

  return (
    <span
      className={cn("inline-flex items-center gap-0.5", className)}
      role="img"
      aria-label={`${safeRating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, index) => {
        const filled = index < rounded;
        const half = hasHalf && index === full;

        if (half) {
          return (
            <StarHalf
              key={index}
              className={cn("h-4 w-4 fill-amber-400 text-amber-400", starClassName)}
              aria-hidden="true"
            />
          );
        }

        return (
          <Star
            key={index}
            className={cn(
              "h-4 w-4",
              filled ? "fill-amber-400 text-amber-400" : "fill-muted text-muted",
              starClassName,
            )}
            aria-hidden="true"
          />
        );
      })}
    </span>
  );
}
