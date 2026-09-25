import localFont from "next/font/local";

export const plexSans = localFont({
  src: "./fonts/ibm-plex-sans-latin.woff2",
  variable: "--font-plex-sans",
  weight: "400 600",
  style: "normal",
  display: "swap",
});

export const plexCondensed = localFont({
  src: [
    { path: "./fonts/ibm-plex-sans-condensed-500-latin.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ibm-plex-sans-condensed-600-latin.woff2", weight: "600", style: "normal" },
    { path: "./fonts/ibm-plex-sans-condensed-700-latin.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-plex-condensed",
  display: "swap",
});

export const plexMono = localFont({
  src: [
    { path: "./fonts/ibm-plex-mono-400-latin.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-mono-500-latin.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

// Arabic-only subset. No metric-adjusted fallback: the Arial fallback it would generate
// covers Latin glyphs too, which would stop Latin text falling through to IBM Plex.
export const plexArabic = localFont({
  src: [
    { path: "./fonts/ibm-plex-sans-arabic-400-arabic.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-sans-arabic-500-arabic.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ibm-plex-sans-arabic-600-arabic.woff2", weight: "600", style: "normal" },
    { path: "./fonts/ibm-plex-sans-arabic-700-arabic.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-plex-arabic",
  display: "swap",
  adjustFontFallback: false,
  // English pages only need it for the odd Arabic label (the language switch), so only
  // the Arabic layout should pay for preloading it.
  preload: false,
  // Plex Arabic reads smaller than Plex Latin at the same size.
  declarations: [{ prop: "size-adjust", value: "108%" }],
});

export const fontVariables = `${plexSans.variable} ${plexCondensed.variable} ${plexMono.variable} ${plexArabic.variable}`;
