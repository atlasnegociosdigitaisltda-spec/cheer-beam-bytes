import { BadgeCheck } from "lucide-react";

import { StarRating } from "@/components/product/StarRating";
import { reviews } from "@/data/product";

export function ReviewsSection() {
  return (
    <section
      className="border-t border-border bg-muted/40 px-4 py-12 lg:py-16"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="reviews-heading"
          className="text-center text-2xl font-bold text-foreground lg:text-3xl"
        >
          Customer Reviews
        </h2>
        <div className="mt-6 grid min-w-0 gap-8 border-y border-border py-7 md:grid-cols-2">
          <div className="text-center md:border-r md:border-border">
            <p className="text-4xl font-semibold text-foreground">4.8 <span className="text-lg font-normal">/5</span></p>
            <StarRating rating={4.8} className="mt-2" />
            <p className="mt-2 text-sm text-muted-foreground">Based on 128 reviews</p>
          </div>
          <div className="mx-auto w-full max-w-[240px] min-w-0 space-y-1.5 text-sm text-foreground md:mx-0 md:max-w-none md:pl-8">
            {[{ stars: 5, count: 105 }, { stars: 4, count: 22 }, { stars: 3, count: 1 }, { stars: 2, count: 0 }, { stars: 1, count: 0 }].map(({ stars, count }) => (
               <div key={stars} className="flex min-w-0 items-center gap-2">
                 <span className="w-3 tabular-nums">{stars}</span>
                 <progress
                   className="h-2 min-w-0 flex-1 appearance-none overflow-hidden rounded-full bg-rating-track [&::-moz-progress-bar]:rounded-full [&::-moz-progress-bar]:bg-rating-fill [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-rating-track [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-rating-fill"
                   max={128}
                   value={count}
                    aria-label={`${count} ${stars}-star reviews`}
                 />
                 <span className="w-7 text-right tabular-nums">{count}</span>
               </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center text-sm"><span>Most recent</span></div>

        <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 8).map((review) => (
            <li
              key={review.name}
              className="flex flex-col rounded-lg border border-border bg-card p-4"
            >
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold text-foreground">{review.name}</span>
                <BadgeCheck className="h-4 w-4 text-verified" aria-hidden="true" />
                  <span className="text-xs text-muted-foreground">Verified buyer</span>
              </div>

              <StarRating rating={review.rating} className="mt-2" />

              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {review.text}
              </p>

              {review.photo ? (
                <img
                  src={review.photo}
                  alt={`Product photo shared by ${review.name}`}
                  width={600}
                  height={600}
                  loading="lazy"
                  className="mt-3 aspect-square w-24 rounded-md object-cover"
                />
              ) : null}
            </li>
          ))}
        </ul>
        <nav aria-label="Review pages" className="mt-8 flex justify-center gap-5 text-sm text-foreground"><span>‹</span><strong>1</strong><span>2</span><span>›</span></nav>
      </div>
    </section>
  );
}
