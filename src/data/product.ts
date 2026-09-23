/**
 * Static product content mirroring the original storefront page.
 * Kept in one place so presentation components stay dumb.
 */

import shortBlancAsset from "@/assets/product-variants/short-blanc.png.asset.json";
import shortMarronAsset from "@/assets/product-variants/short-marron.png.asset.json";
import shortNoirAsset from "@/assets/product-variants/short-noir.png.asset.json";
import shortRoseAsset from "@/assets/product-variants/short-rose.png.asset.json";
import featuresEnImage from "@/assets/product-gallery/features-en.png";
import confidenceEnImage from "@/assets/product-gallery/move-with-confidence-en.png";
import movementEnImage from "@/assets/product-gallery/designed-to-move-en.png";
import detailsEnImage from "@/assets/product-gallery/details-en.png";
import sizeGuideEnImage from "@/assets/product-gallery/size-guide-en.png";
import setOfFourEnImage from "@/assets/product-gallery/set-of-four-en.png";
import performanceEnImage from "@/assets/product-gallery/performance-en.png";

const SHOP_CDN = "https://getnovara.site/cdn/shop/files";
const FILES_CDN = "https://cdn.shopify.com/s/files/1/0835/3831/3435/files";

export interface GalleryImage {
  readonly src: string;
  readonly alt: string;
}

export const productTitle = "Women's 2-in-1 Performance Shorts – Comfort & Performance";

export const galleryImages: readonly GalleryImage[] = [
  { src: performanceEnImage, alt: `${productTitle} — lightweight performance` },
  { src: setOfFourEnImage, alt: `${productTitle} — set of four colors` },
  { src: detailsEnImage, alt: `${productTitle} — functional details` },
  { src: movementEnImage, alt: `${productTitle} — designed to move` },
  { src: confidenceEnImage, alt: `${productTitle} — move with confidence` },
  { src: featuresEnImage, alt: `${productTitle} — fabric, fit, and freedom of movement` },
  { src: sizeGuideEnImage, alt: `${productTitle} — size guide` },
  { src: `${SHOP_CDN}/ChatGPTImage26deago.de2026_20_52_39.png?v=1787958694&width=1200`, alt: `${productTitle} in pink` },
  { src: `${SHOP_CDN}/ChatGPTImage28deago.de2026_19_57_21.png?v=1787958695&width=1200`, alt: `${productTitle} in brown` },
  { src: `${SHOP_CDN}/ChatGPTImage26deago.de2026_15_34_56.png?v=1787958695&width=1200`, alt: `${productTitle} in black` },
  { src: `${SHOP_CDN}/ChatGPTImage26deago.de2026_15_50_35.png?v=1787958695&width=1200`, alt: `${productTitle} in white` },
];

export const descriptionImages: readonly GalleryImage[] = [
  { src: performanceEnImage, alt: "Performance shorts collection overview" },
  { src: detailsEnImage, alt: "Elastic waistband, drawstring, and zippered pocket details" },
  { src: movementEnImage, alt: "Four colors of shorts designed to move" },
  { src: featuresEnImage, alt: "Fabric and fit features" },
  { src: setOfFourEnImage, alt: "What is included in the four-shorts set" },
  { src: sizeGuideEnImage, alt: "Performance shorts size guide" },
];

export const descriptionClosingImage: GalleryImage = {
  src: confidenceEnImage,
  alt: "Performance shorts worn during a workout",
};

export const sizes = ["S", "M", "L", "XL", "2XL"] as const;
export const colors = ["Black", "Brown", "Pink", "White"] as const;

export type Size = (typeof sizes)[number];
export type Color = (typeof colors)[number];

export const variantImageByColor: Readonly<Record<Color, string>> = {
  Black: shortNoirAsset.url,
  Brown: shortMarronAsset.url,
  Pink: shortRoseAsset.url,
  White: shortBlancAsset.url,
};

export interface Bundle {
  readonly id: string;
  readonly quantity: number;
  readonly label: string;
  readonly subtitle: string;
  readonly badgeText?: string;
  readonly savingsText?: string;
  readonly price: number;
  readonly compareAt?: number;
  readonly perPair: number;
  readonly ribbon?: string;
  /** Shopify cart permalink this offer deep-links to. */
  readonly cartUrl: string;
}

export const bundles: readonly Bundle[] = [
  {
    id: "buy-1",
    quantity: 1,
    label: "Buy 1",
    subtitle: "Perfect for trying them out",
    price: 39.95,
    perPair: 39.95,
    cartUrl: "https://getnovara.site/cart/49196480790747:1",
  },
  {
    id: "buy-2",
    quantity: 2,
    label: "Buy 2",
    subtitle: "You save €19.95",
    savingsText: "Save 25%",
    price: 59.95,
    compareAt: 79.9,
    perPair: 29.98,
    cartUrl: "https://getnovara.site/cart/49196480823515:1",
  },
  {
    id: "buy-4",
    quantity: 4,
    label: "Buy 4",
    subtitle: "You save €69.85",
    savingsText: "Best offer",
    price: 89.95,
    compareAt: 159.8,
    perPair: 22.49,
    ribbon: "Best value",
    cartUrl: "https://getnovara.site/cart/49196480856283:1",
  },
];

export const highlights: readonly string[] = [
  "Free shipping when you buy 2 or more",
  "30-day fit guarantee with free exchanges",
  "Sizes S to 2XL",
];

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export const faqs: readonly FaqItem[] = [
  {
    question: "How do the shorts offers work?",
    answer:
      "Simply choose the offer that works best for you before adding the product to your cart. Available options include 1, 2, or 4 shorts, as shown on the product page.",
  },
  {
    question: "What are the shorts made from?",
    answer:
      "The fabric is lightweight, soft, breathable, and quick-drying. It feels comfortable and moves with you.",
  },
  {
    question: "Do the shorts have a built-in liner?",
    answer: "The shorts feature a comfortable inner liner that provides support and freedom of movement.",
  },
  {
    question: "Are they suitable for workouts?",
    answer:
      "Yes. They are perfect for the gym, running, walking, yoga, or simply staying comfortable throughout the day.",
  },
  {
    question: "Can the pockets hold my phone?",
    answer:
      "Yes. Each pair has zippered side pockets to keep your small essentials secure while you move.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Your delivery estimate is calculated at checkout based on your address. Once your order ships, you will receive tracking details by email.",
  },
  {
    question: "Can I exchange my order if the size does not fit?",
    answer:
      "Yes! You can exchange your order if the size does not fit. We also offer a 7-day satisfaction guarantee—simply contact customer support within 7 days of delivery.",
  },
];

export interface Review {
  readonly name: string;
  readonly rating: number;
  readonly text: string;
  readonly photo?: string;
}

export const reviews: readonly Review[] = [
  {
    name: "Camille R.",
    rating: 5,
    text: "Amazing! The fabric is so lightweight and dries quickly after my workout. Excellent value for money.",
    photo: `${FILES_CDN}/ChatGPT_Image_31_de_ago._de_2026_19_23_33.png?v=1788215420&width=600`,
  },
  {
    name: "Manon S.",
    rating: 5,
    text: "I ordered size L and it fits perfectly. All four colors are beautiful, especially the pink.",
    photo: `${FILES_CDN}/ChatGPT_Image_31_de_ago._de_2026_19_23_39.png?v=1788215420&width=600`,
  },
  {
    name: "Émilie M.",
    rating: 5,
    text: "They arrived well packaged. I wear them for running and they are incredibly comfortable.",
    photo: `${FILES_CDN}/ChatGPT_Image_31_de_ago._de_2026_19_29_51.png?v=1788215420&width=600`,
  },
  {
    name: "Juliette L.",
    rating: 5,
    text: "The perfect balance of quality and price. I have already recommended them to my friends at the gym.",
  },
  {
    name: "Océane C.",
    rating: 5,
    text: "They do not ride up or wrinkle, and the drawstring adjusts perfectly. I love them!",
    photo: `${FILES_CDN}/ChatGPT_Image_31_de_ago._de_2026_19_23_44.png?v=1788215420&width=600`,
  },
  {
    name: "Anaïs P.",
    rating: 5,
    text: "My favorite purchase this month. I wear them for workouts and at home—they are so versatile.",
  },
  {
    name: "Laurine D.",
    rating: 5,
    text: "The fabric feels truly premium, much better than I expected at this price.",
  },
  {
    name: "Mégane V.",
    rating: 5,
    text: "The fit is flattering without feeling tight. They were comfortable from the first wear.",
    photo: `${FILES_CDN}/ChatGPT_Image_31_de_ago._de_2026_19_23_48.png?v=1788215420&width=600`,
  },
  {
    name: "Bérénice T.",
    rating: 4,
    text: "The zippered pockets are very practical, and the shorts stay comfortable throughout my workout.",
  },
  {
    name: "Chloé A.",
    rating: 5,
    text: "Soft, lightweight, and easy to style. With four colors, this set is a great deal.",
  },
];

export const formatPrice = (value: number): string =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "EUR" }).format(value);
