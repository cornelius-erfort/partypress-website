# Party Press website assets

## Logo

- **partypress-logo.png** — Main logo (symbol + wordmark). Used in the header (inline: logo + “partypress.org” text) and in content (stacked: logo above “partypress.org”).

## Favicons (needs update)

Favicons should be generated from a **square (1:1)** source so they are not stretched in browser tabs and bookmarks.

- If the main logo is wide, create a **square logo variant** (e.g. symbol only, or logo centered in a square canvas) and export favicon sizes from that.
- Current files (favicon-16x16.png, favicon-32x32.png, etc.) may appear stretched until replaced with square-derived versions.
- Standard sizes: 16×16, 32×32, 48×48; 180×180 (Apple touch); 192×192, 512×512 (PWA).

## Recommended logo variants

For consistent branding:

1. **Square version** — For favicons and app icons (no stretching).
2. **Inline version** — Symbol/icon on the left, “partypress.org” on the right (used in header).
3. **Stacked version** — Symbol/icon on top, “partypress.org” below (used in hero/content).
4. **Full lockup** — Optional: single image with “partypress.org” included for download/social.

## site.webmanifest

Web app manifest; icons in the manifest should point to square assets (e.g. 192×192, 512×512).
