import { useMemo, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  bundles,
  colors,
  formatPrice,
  sizes,
  variantImageByColor,
  type Bundle,
  type Color,
  type Size,
} from "@/data/product";

interface PairSelection {
  size: Size;
  color: Color;
}

const makePairs = (quantity: number): PairSelection[] =>
  Array.from({ length: quantity }, () => ({ size: "S" as Size, color: "Black" as Color }));

function PairRow({
  index,
  value,
  onChange,
}: {
  readonly index: number;
  readonly value: PairSelection;
  readonly onChange: (next: PairSelection) => void;
}) {
  return (
    <div className="grid min-h-[66px] grid-cols-[32px_84px_48px_minmax(0,1fr)] items-center gap-2 rounded-xl border border-border bg-background px-2 py-2.5">
      <span className="shrink-0 text-sm font-medium text-muted-foreground">#{index + 1}</span>

      <label className="sr-only" htmlFor={`size-${index}`}>
        Size for pair {index + 1}
      </label>
      <select
        id={`size-${index}`}
        value={value.size}
        onChange={(event) => onChange({ ...value, size: event.target.value as Size })}
        className="h-[43px] w-full rounded-xl border border-input bg-background px-3 text-sm text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        {sizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>

      <img
        src={variantImageByColor[value.color]}
        alt={`${value.color} performance shorts`}
        width={40}
        height={40}
        loading="lazy"
        className="h-[43px] w-[43px] shrink-0 rounded-lg border border-border object-cover"
      />

      <label className="sr-only" htmlFor={`color-${index}`}>
        Color for pair {index + 1}
      </label>
      <select
        id={`color-${index}`}
        value={value.color}
        onChange={(event) => onChange({ ...value, color: event.target.value as Color })}
        className="h-[43px] min-w-0 w-full rounded-xl border border-input bg-background px-3 text-sm text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        {colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  );
}

function BundleCard({
  bundle,
  selected,
  onSelect,
  pairs,
  onPairChange,
}: {
  readonly bundle: Bundle;
  readonly selected: boolean;
  readonly onSelect: () => void;
  readonly pairs: PairSelection[];
  readonly onPairChange: (index: number, next: PairSelection) => void;
}) {
  return (
    <div
      className={cn(
        "relative overflow-visible rounded-[19px] border-2 bg-card transition-colors",
        selected ? "border-brand" : "border-border hover:border-muted-foreground/40",
      )}
    >
      {bundle.ribbon ? (
        <span className="absolute -top-2.5 right-4 z-10 rounded-full bg-brand px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-foreground">
          {bundle.ribbon}
        </span>
      ) : null}

      <Button
        type="button"
        onClick={onSelect}
        aria-pressed={selected}
        variant="ghost"
        className="flex h-auto min-h-[86px] w-full items-start gap-4 rounded-none px-4 py-4 text-left hover:bg-transparent"
      >
        <span
          className={cn(
            "mt-1 grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full border",
            selected ? "border-brand" : "border-muted-foreground/50",
          )}
        >
          {selected ? <span className="h-3 w-3 rounded-full bg-brand" /> : null}
        </span>

        <span className="min-w-0 flex-1">
          <span className="block text-lg font-medium uppercase text-foreground">
            {bundle.label}
          </span>
          <span className="block text-sm text-muted-foreground">{bundle.subtitle}</span>
          {bundle.savingsText ? (
            <span className="mt-0.5 block text-xs font-bold uppercase tracking-wide text-brand">
              {bundle.savingsText}
            </span>
          ) : null}
        </span>

        <span className="shrink-0 text-right">
          <span className="block text-[22px] font-bold leading-7 text-brand">{formatPrice(bundle.price)}</span>
          {bundle.compareAt ? (
            <span className="block text-sm text-muted-foreground line-through">
              {formatPrice(bundle.compareAt)}
            </span>
          ) : null}
          <span className="block text-xs text-muted-foreground">
             {formatPrice(bundle.perPair)} / short
          </span>
        </span>
      </Button>

      {selected ? (
        <div className="space-y-2 border-t border-border px-4 py-4">
          {pairs.map((pair, index) => (
            <PairRow
              key={index}
              index={index}
              value={pair}
              onChange={(next) => onPairChange(index, next)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function BundlePicker() {
  const [selectedId, setSelectedId] = useState<string>("buy-1");
  const [pairsByBundle, setPairsByBundle] = useState<Record<string, PairSelection[]>>(() =>
    Object.fromEntries(bundles.map((bundle) => [bundle.id, makePairs(bundle.quantity)])),
  );

  const selected = useMemo(() => bundles.find((bundle) => bundle.id === selectedId), [selectedId]);

  if (!selected) return null;

  const handlePairChange = (bundleId: string, index: number, next: PairSelection) => {
    setPairsByBundle((current) => {
      const list = [...(current[bundleId] ?? [])];
      list[index] = next;
      return { ...current, [bundleId]: list };
    });
  };

  const handleAddToCart = () => {
    // Deep-link to the Shopify cart permalink for the selected offer.
    window.location.href = selected.cartUrl;
  };

  return (
    <div>
      <div className="space-y-3">
        {bundles.map((bundle) => (
          <BundleCard
            key={bundle.id}
            bundle={bundle}
            selected={bundle.id === selected.id}
            onSelect={() => setSelectedId(bundle.id)}
            pairs={pairsByBundle[bundle.id] ?? []}
            onPairChange={(index, next) => handlePairChange(bundle.id, index, next)}
          />
        ))}
      </div>

      <Button
        type="button"
        onClick={handleAddToCart}
        className="mt-5 h-auto w-full rounded-md bg-brand px-6 py-4 text-base font-semibold uppercase tracking-[0.06em] text-brand-foreground transition-colors hover:bg-brand/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        Add {selected.quantity} pair{selected.quantity > 1 ? "s" : ""} — {formatPrice(selected.price)}
      </Button>
    </div>
  );
}
