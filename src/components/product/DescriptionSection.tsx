import { descriptionClosingImage, descriptionImages } from "@/data/product";

export function DescriptionSection() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10 lg:py-14" aria-labelledby="description-heading">
      <div className="space-y-4">
        {descriptionImages.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={1400}
            height={1400}
            loading="lazy"
            className="w-full rounded-xl object-cover"
          />
        ))}
      </div>

      <div className="mt-10 text-center">
        <h2 id="description-heading" className="text-2xl font-bold text-foreground lg:text-3xl">
          Move freely. With confidence.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground lg:text-base">
          Designed for workouts and everyday wear, these performance shorts use lightweight,
          breathable, quick-drying fabric. The adjustable elastic waistband provides a secure fit,
          while zippered pockets keep your essentials safe.
        </p>
      </div>

      <img
        src={descriptionClosingImage.src}
        alt={descriptionClosingImage.alt}
        width={1400}
        height={1400}
        loading="lazy"
        className="mt-10 w-full rounded-xl object-cover"
      />
    </section>
  );
}
