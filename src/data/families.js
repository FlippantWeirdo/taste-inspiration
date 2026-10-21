/* Design-type taxonomy. Each entry in library.js points at one `family` id.
   Add a family here before using it, or it'll fall into "Unfiled". */

export const FAMILIES = [
  {
    id: "mobile",
    name: "Mobile",
    blurb:
      "Expressive interfaces made for the hand: sculptural cards, playful data, characterful onboarding, and product photography that breaks out of the rectangle.",
    tells: [
      "portrait composition with a clear thumb-level action",
      "oversized rounded surfaces and floating bottom navigation",
      "personality through colour, illustration, and organic image masks",
      "large readable numbers and compact, tactile controls"
    ],
    swatch: ["#F5F4F0", "#F6A6E3", "#F8F56A", "#1D1D1B"]
  },
  {
    id: "editorial-grotesk",
    name: "Editorial Grotesk",
    blurb:
      "Huge, tightly tracked neo-grotesk headlines on a calm ground. The type is the artwork; product imagery sits below the fold of the fold.",
    tells: [
      "display size 64–120px, letter-spacing −2% to −4%",
      "off-white or tinted ground, never pure white",
      "one saturated accent, used only on the primary button",
      "generous top padding — hero starts low on the page"
    ],
    swatch: ["#F7F6F3", "#0A0A0A", "#17795C"]
  },
  {
    id: "mono-technical",
    name: "Mono Technical",
    blurb:
      "Monospace and uppercase micro-labels, visible grid, status-bar furniture. Reads like an instrument panel that happens to sell something.",
    tells: [
      "monospace for nav, labels, and often the headline itself",
      "hairline rules and dashed grid lines with corner ticks",
      "footer or header strip of key:value status readouts",
      "near-zero border radius"
    ],
    swatch: ["#EDE9E0", "#0D0D0D", "#A8552F"]
  },
  {
    id: "cinematic-atmosphere",
    name: "Cinematic Atmosphere",
    blurb:
      "One full-bleed photograph carrying the entire mood — dunes, fog, floodlights. Copy is set into the dark half of the frame.",
    tells: [
      "full-viewport image with a directional gradient scrim",
      "text anchored to the empty quadrant, never centred over detail",
      "film grain / noise overlay at 3–8% opacity",
      "logo strip pinned to the bottom edge of the hero"
    ],
    swatch: ["#0B0B0C", "#E8663A", "#EDEDED"]
  },
  {
    id: "neon-dark",
    name: "Neon Dark",
    blurb:
      "Near-black canvas lit from inside by one acid or bloom colour. Glossy 3D objects, dot-matrix texture, glow everywhere.",
    tells: [
      "single hyper-saturated hue against #05070A-ish black",
      "radial bloom behind the focal object",
      "half the headline in the accent colour, half in white",
      "dotted/perforated texture panels between sections"
    ],
    swatch: ["#05070A", "#B8F02A", "#8A8F8A"]
  },
  {
    id: "painterly-illustrated",
    name: "Painterly & Illustrated",
    blurb:
      "Drawn or generated worlds instead of photography — impressionist meadows, flat vector spot art. Warm, optimistic, non-corporate.",
    tells: [
      "illustration bleeds behind and around the UI, not beside it",
      "mixed type: geometric sans body + script or serif italic accents",
      "highlight boxes with rounded corners and small inline icons",
      "high-key palette, 5+ hues living together"
    ],
    swatch: ["#BFE4F7", "#6FA84A", "#F2C14E"]
  },
  {
    id: "bento-studio",
    name: "Bento Studio",
    blurb:
      "A grid of unequal cards, each holding one studio-lit object on seamless backdrop. Hands, props, one brand-coloured accent object.",
    tells: [
      "asymmetric card grid, 2–4 sizes, 8–16px radius",
      "objects shot on a single seamless grey/white sweep",
      "cards without imagery stay empty — label only",
      "icon in the top-left corner of every tile"
    ],
    swatch: ["#F2F2F2", "#8B5CF6", "#C89B6A"]
  },
  {
    id: "app-surface",
    name: "App Surface",
    blurb:
      "The product itself as the hero: sidebars, stat tiles, tables, status pills. Sells by showing the working day.",
    tells: [
      "left rail nav + stat-tile row + table or chart below",
      "status pills in tinted pastels with matching text",
      "one accent colour on the primary create action only",
      "soft shadow, 10–14px radius, 1px hairline borders"
    ],
    swatch: ["#F6F8F7", "#8BD24E", "#14181A"]
  }
];
