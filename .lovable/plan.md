# Translate the Novara product page to English

## Goal
Convert every visible part of the current product page from French to natural English while preserving the existing layout and interactions.

## Changes
- Translate navigation, product title, selling points, bundle options, size/color controls, cart confirmation, description, FAQ, reviews, footer, accessibility labels, and page metadata.
- Switch price formatting from French euros to English-language euros, matching the current store pricing.
- Replace the French-text product gallery artwork with English equivalents so the full page—not only interface text—is in English.
- Preserve current product photos, bundle behavior, color-to-photo mapping, and review distribution.

## Validation
- Search the page source for remaining French customer-facing text.
- Check the desktop and mobile page visually, including bundle selection and add-to-cart confirmation.
- Confirm the latest preview build has no errors.

## Technical details
- Keep content centralized in the existing product data module.
- Use locally managed generated images for English gallery artwork; no external image hotlinking for new assets.
- Keep semantic styling tokens, accessibility attributes, and the current TanStack route structure.
