import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, ShieldCheck, Truck } from "lucide-react";

import { BundlePicker } from "@/components/product/BundlePicker";
import { DescriptionSection } from "@/components/product/DescriptionSection";
import { FaqSection } from "@/components/product/FaqSection";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ReviewsSection } from "@/components/product/ReviewsSection";
import { SiteFooter } from "@/components/product/SiteFooter";
import { SiteHeader } from "@/components/product/SiteHeader";
import { StarRating } from "@/components/product/StarRating";
import { Toaster } from "@/components/ui/sonner";
import { galleryImages, highlights, productTitle } from "@/data/product";

const OG_IMAGE =
  "https://getnovara.site/cdn/shop/files/ChatGPTImage28deago.de2026_15_53_54.png?v=1787943249&width=1200";

const description =
  "Lightweight, breathable, quick-drying performance shorts with zippered pockets. Buy 1, 2, or 4 pairs and save up to 44%.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Women's 2-in-1 Performance Shorts | Novara" },
      { name: "description", content: description },
      { property: "og:title", content: "Women's 2-in-1 Performance Shorts | Novara" },
      { property: "og:description", content: description },
      { property: "og:type", content: "product" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: ProductPage,
});

const highlightIcons = [Truck, ShieldCheck, CheckCircle2] as const;

function ProductPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-[1180px] py-0 md:px-4 md:py-9 lg:px-0">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[532px_1fr] lg:gap-16">
            <ProductGallery images={galleryImages} className="lg:sticky lg:top-6 lg:self-start" />

            <div className="px-4 md:px-0">
              <div className="flex items-center gap-2">
                <StarRating rating={4.8} />
                <span className="text-sm text-muted-foreground">(4.8 reviews)</span>
              </div>

              <h1 className="mt-2 text-[27px] font-semibold leading-tight text-foreground lg:text-[31px]">
                {productTitle}
              </h1>

              <ul className="mt-5 space-y-3">
                {highlights.map((highlight, index) => {
                  const Icon = highlightIcons[index] ?? CheckCircle2;
                  return (
                    <li key={highlight} className="flex items-center gap-3">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-soft">
                        <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
                      </span>
                      <span className="text-sm text-foreground">{highlight}</span>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6">
                <BundlePicker />
              </div>
            </div>
          </div>
        </section>

        <DescriptionSection />
        <FaqSection />
        <ReviewsSection />
      </main>

      <SiteFooter />
      <Toaster />
    </div>
  );
}
