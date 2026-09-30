import {
  siAmericanexpress,
  siApplepay,
  siDinersclub,
  siDiscover,
  siGooglepay,
  siPaypal,
  siVisa,
} from "simple-icons";

interface BrandIcon {
  readonly name: string;
  /** Optional brand color; omit for neutral marks (Apple Pay). */
  readonly color?: string;
  readonly svg: React.ReactNode;
}

/**
 * Hand-drawn Mastercard mark: the brand cannot be reproduced with a
 * single-color path because it needs its two overlapping circles.
 */
function MastercardMark() {
  return (
    <svg viewBox="0 0 36 24" className="h-full w-full" aria-hidden="true">
      <circle cx="13" cy="12" r="9" fill="#EB001B" />
      <circle cx="23" cy="12" r="9" fill="#F79E1B" />
      <path d="M18 4.52 A9 9 0 0 1 18 19.48 A9 9 0 0 0 18 4.52 Z" fill="#FF5F00" />
    </svg>
  );
}

const brands: readonly BrandIcon[] = [
  { name: "American Express", color: "#016FD0", svg: <path d={siAmericanexpress.path} /> },
  { name: "Apple Pay", svg: <path d={siApplepay.path} /> },
  { name: "Diners Club", color: "#0079BE", svg: <path d={siDinersclub.path} /> },
  { name: "Discover", color: "#FF6000", svg: <path d={siDiscover.path} /> },
  { name: "Google Pay", color: "#4285F4", svg: <path d={siGooglepay.path} /> },
  { name: "Mastercard", svg: <MastercardMark /> },
  { name: "PayPal", color: "#003087", svg: <path d={siPaypal.path} /> },
  { name: "Visa", color: "#1A1F71", svg: <path d={siVisa.path} /> },
];

export function PaymentMethods() {
  return (
    <ul className="flex flex-wrap items-center gap-2">
      {brands.map((brand) => (
        <li key={brand.name}>
          <span
            role="img"
            aria-label={brand.name}
            title={brand.name}
            className="grid h-8 w-[50px] place-items-center rounded-md border border-border bg-background p-1.5"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-full w-full"
              fill={brand.color ?? "currentColor"}
              aria-hidden="true"
            >
              {brand.svg}
            </svg>
          </span>
        </li>
      ))}
    </ul>
  );
}
