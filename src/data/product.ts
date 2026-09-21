/**
 * Static product content mirroring the original storefront page.
 * Kept in one place so presentation components stay dumb.
 */

import shortBlancAsset from "@/assets/product-variants/short-blanc.png.asset.json";
import shortMarronAsset from "@/assets/product-variants/short-marron.png.asset.json";
import shortNoirAsset from "@/assets/product-variants/short-noir.png.asset.json";
import shortRoseAsset from "@/assets/product-variants/short-rose.png.asset.json";
import caracteristiquesFrAsset from "@/assets/product-gallery/caracteristiques-fr.png.asset.json";
import confianceFrAsset from "@/assets/product-gallery/confiance-fr.png.asset.json";
import concuPourBougerFrAsset from "@/assets/product-gallery/concu-pour-bouger-fr.png.asset.json";
import detailsFrAsset from "@/assets/product-gallery/details-fr.png.asset.json";
import guideTaillesFrAsset from "@/assets/product-gallery/guide-tailles-fr.png.asset.json";
import lotQuatreFrAsset from "@/assets/product-gallery/lot-quatre-fr.png.asset.json";
import performanceFrAsset from "@/assets/product-gallery/performance-fr.png.asset.json";

const SHOP_CDN = "https://getnovara.site/cdn/shop/files";
const FILES_CDN = "https://cdn.shopify.com/s/files/1/0835/3831/3435/files";

export interface GalleryImage {
  readonly src: string;
  readonly alt: string;
}

export const productTitle = "Short de Sport Femme 2-en-1 – Confort & Performance";

export const galleryImages: readonly GalleryImage[] = [
  { src: performanceFrAsset.url, alt: `${productTitle} — légèreté et performance` },
  { src: lotQuatreFrAsset.url, alt: `${productTitle} — lot de quatre couleurs` },
  { src: detailsFrAsset.url, alt: `${productTitle} — détails fonctionnels` },
  { src: concuPourBougerFrAsset.url, alt: `${productTitle} — conçu pour bouger` },
  { src: confianceFrAsset.url, alt: `${productTitle} — bougez en toute confiance` },
  { src: caracteristiquesFrAsset.url, alt: `${productTitle} — tissu, taille et liberté de mouvement` },
  { src: guideTaillesFrAsset.url, alt: `${productTitle} — tableau des tailles` },
  { src: `${SHOP_CDN}/ChatGPTImage26deago.de2026_20_52_39.png?v=1787958694&width=1200`, alt: `${productTitle} roses` },
  { src: `${SHOP_CDN}/ChatGPTImage28deago.de2026_19_57_21.png?v=1787958695&width=1200`, alt: `${productTitle} beiges` },
  { src: `${SHOP_CDN}/ChatGPTImage26deago.de2026_15_34_56.png?v=1787958695&width=1200`, alt: `${productTitle} noirs` },
  { src: `${SHOP_CDN}/ChatGPTImage26deago.de2026_15_50_35.png?v=1787958695&width=1200`, alt: `${productTitle} blancs` },
];

export const descriptionImages: readonly GalleryImage[] = [
  { src: performanceFrAsset.url, alt: "Vue d’ensemble en français de la collection de shorts de performance" },
  { src: detailsFrAsset.url, alt: "Détails de la ceinture, du cordon et des poches zippées" },
  { src: concuPourBougerFrAsset.url, alt: "Quatre couleurs de shorts conçus pour bouger" },
  { src: caracteristiquesFrAsset.url, alt: "Caractéristiques du tissu et de la coupe" },
  { src: lotQuatreFrAsset.url, alt: "Contenu du lot de quatre shorts" },
  { src: guideTaillesFrAsset.url, alt: "Tableau des tailles en français" },
];

export const descriptionClosingImage: GalleryImage = {
  src: confianceFrAsset.url,
  alt: "Short de performance porté à l’entraînement",
};

export const sizes = ["S", "M", "L", "XL", "2XL"] as const;
export const colors = ["Noir", "Marron", "Rose", "Blanc"] as const;

export type Size = (typeof sizes)[number];
export type Color = (typeof colors)[number];

export const variantImageByColor: Readonly<Record<Color, string>> = {
  Noir: shortNoirAsset.url,
  Marron: shortMarronAsset.url,
  Rose: shortRoseAsset.url,
  Blanc: shortBlancAsset.url,
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
}

export const bundles: readonly Bundle[] = [
  {
    id: "buy-1",
    quantity: 1,
    label: "Achetez-en 1",
    subtitle: "Pour essayer",
    price: 39.95,
    perPair: 39.95,
  },
  {
    id: "buy-2",
    quantity: 2,
    label: "Achetez-en 2",
    subtitle: "Vous économisez 19,95 €",
    savingsText: "Économisez 25 %",
    price: 59.95,
    compareAt: 79.9,
    perPair: 29.98,
  },
  {
    id: "buy-4",
    quantity: 4,
    label: "Achetez-en 4",
    subtitle: "Vous économisez 69,85 €",
    savingsText: "Meilleure offre",
    price: 89.95,
    compareAt: 159.8,
    perPair: 22.49,
    ribbon: "Meilleur rapport qualité-prix",
  },
];

export const highlights: readonly string[] = [
  "Livraison gratuite dès 2 shorts",
  "Garantie taille 30 jours, échanges gratuits",
  "Tailles du S au 2XL",
];

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export const faqs: readonly FaqItem[] = [
  {
    question: "Comment fonctionnent les offres sur les shorts ?",
    answer:
      "Choisissez simplement l’offre qui vous convient avant d’ajouter le produit à votre panier. Les options disponibles peuvent inclure 1, 2, 4 shorts ou plus, comme indiqué sur la page produit.",
  },
  {
    question: "En quelle matière sont fabriqués les shorts ?",
    answer:
      "Le tissu est léger, doux, respirant et sèche rapidement. Confortable, il accompagne chacun de vos mouvements.",
  },
  {
    question: "Les shorts ont-ils une doublure intégrée ?",
    answer: "Les shorts disposent d’une doublure intérieure confortable qui garantit maintien et liberté de mouvement.",
  },
  {
    question: "Conviennent-ils à l’entraînement ?",
    answer:
      "Oui. Ils sont parfaits pour la salle de sport, la course, la marche, le yoga ou simplement pour être à l’aise au quotidien.",
  },
  {
    question: "Les poches peuvent-elles contenir mon téléphone ?",
    answer:
      "Oui. Chaque short possède des poches latérales zippées pour garder vos petits essentiels en sécurité pendant vos activités.",
  },
  {
    question: "Quels sont les délais de livraison ?",
    answer:
      "Le délai de livraison est calculé lors du paiement selon votre adresse. Dès l’expédition de votre commande, vous recevrez les informations de suivi par e-mail.",
  },
  {
    question: "Puis-je échanger ma commande si la taille ne convient pas ?",
    answer:
      "Oui ! Vous pouvez échanger votre commande si la taille ne convient pas. Nous offrons également une garantie satisfaction de 7 jours : contactez simplement notre service client dans les 7 jours suivant la réception.",
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
    text: "Incroyable ! Le tissu est très léger et sèche rapidement après mon entraînement. Excellent rapport qualité-prix.",
    photo: `${FILES_CDN}/ChatGPT_Image_31_de_ago._de_2026_19_23_33.png?v=1788215420&width=600`,
  },
  {
    name: "Manon S.",
    rating: 5,
    text: "J’ai commandé la taille L et elle me va parfaitement. Les quatre couleurs sont magnifiques, surtout le rose.",
    photo: `${FILES_CDN}/ChatGPT_Image_31_de_ago._de_2026_19_23_39.png?v=1788215420&width=600`,
  },
  {
    name: "Émilie M.",
    rating: 5,
    text: "Reçus bien emballés. Je les porte pour courir et ils sont incroyablement confortables.",
    photo: `${FILES_CDN}/ChatGPT_Image_31_de_ago._de_2026_19_29_51.png?v=1788215420&width=600`,
  },
  {
    name: "Juliette L.",
    rating: 5,
    text: "Le parfait équilibre entre qualité et prix. Je les ai déjà recommandés à mes amies de la salle de sport.",
  },
  {
    name: "Océane C.",
    rating: 5,
    text: "Ils ne remontent pas, ne se froissent pas et le cordon s’ajuste parfaitement. Je les adore !",
    photo: `${FILES_CDN}/ChatGPT_Image_31_de_ago._de_2026_19_23_44.png?v=1788215420&width=600`,
  },
  {
    name: "Anaïs P.",
    rating: 5,
    text: "Mon achat préféré du mois. Je les porte pour m’entraîner comme à la maison : ils sont tellement polyvalents.",
  },
  {
    name: "Laurine D.",
    rating: 5,
    text: "Le tissu est vraiment haut de gamme, bien mieux que ce que j’attendais à ce prix.",
  },
  {
    name: "Mégane V.",
    rating: 5,
    text: "La coupe met en valeur sans serrer. Ils sont confortables dès la première utilisation.",
    photo: `${FILES_CDN}/ChatGPT_Image_31_de_ago._de_2026_19_23_48.png?v=1788215420&width=600`,
  },
  {
    name: "Bérénice T.",
    rating: 4,
    text: "Les poches zippées sont très pratiques et les shorts restent confortables pendant tout mon entraînement.",
  },
  {
    name: "Chloé A.",
    rating: 5,
    text: "Doux, légers et faciles à assortir. Avec quatre couleurs, ce lot est une excellente affaire.",
  },
];

export const formatPrice = (value: number): string =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(value);
