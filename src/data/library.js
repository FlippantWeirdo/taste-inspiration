/* The library. One object per piece of inspiration.
   See README.md for the field guide. Append new objects at the end —
   the index numbers on the cards are generated, not stored. */

export const LIBRARY = [
  {
    id: "verdant",
    title: "Verdant",
    styleLabel: "painterly AI × SaaS",
    family: "painterly-illustrated",
    image: "screenshots/Screenshot 2026-07-10 102608.png",
    source: null,
    summary:
      "An SEO product sold on a hand-painted spring meadow. The whole page sits inside a generated impressionist landscape, and the app screenshot rises out of the hills like a monument.",
    vocabulary: [
      "impressionist meadow",
      "floating pill nav",
      "highlighted phrase boxes",
      "script italic accent",
      "wildflower speckle",
      "green CTA pill",
      "dashboard emerging from horizon",
      "high-key optimism"
    ],
    notes: [
      "Nav is a white rounded-full capsule floating clear of the top edge — it reads as an object on the landscape, not a bar.",
      "Headline mixes three voices: light geometric sans for connective words, a script italic in a lavender box, a bold serif italic in a peach box. Each box carries a small inline icon.",
      "Sky is a faint dot-grid — technical texture smuggled into a painterly scene.",
      "Product screenshot is cropped by the bottom viewport edge, so the page reads as continuous depth."
    ],
    palette: ["#7EC8F0", "#BFE4F7", "#6FA84A", "#F2C14E", "#2FBF57", "#CFC6F5", "#FBE3C6", "#1A1A1A"],
    typeStack: {
      display: "Light geometric sans (Poppins / Objektiv-ish), 300–400 weight",
      accent: "Script + bold serif italic, set inside tinted rounded boxes",
      body: "Neutral grotesk, 400, generous line-height"
    },
    brief:
      "Sell an automation product to people who are tired of automation aesthetics. Replace the usual dark gradient with a painted spring landscape — rolling hills, wildflowers, soft haze — and let the interface float inside it. Nothing should look like a template: the nav detaches into a capsule, the headline breaks into three typographic voices with two words physically highlighted like a marker pen, and the dashboard rises from behind the hills instead of sitting in a browser frame. The emotional target is relief, not power.",
    prompt:
      "Build a landing hero for a SaaS product using a full-bleed painterly landscape as the background, not a gradient. Layout: a white rounded-full navigation capsule floating 24px from the top with the logo left and 4 text links; a centred two-line headline at ~72px in a LIGHT geometric sans (weight 300) where two key phrases are wrapped in rounded tinted boxes — one lavender containing a script italic, one peach containing a bold serif italic, each with a small icon before the word; a two-line grey subhead at 18px; one saturated green rounded-full CTA with a trailing arrow. Below, a light app dashboard screenshot in a rounded card, cropped by the bottom of the viewport so it appears to rise from the horizon. Overlay a subtle dot grid on the sky area only. Palette: sky blues #7EC8F0→#BFE4F7, meadow greens #6FA84A/#9DC65C, flower accents #F2C14E/#E86A8C, CTA #2FBF57, ink #1A1A1A. Keep everything high-key and warm; no dark mode, no glassmorphism.",
    imageRecipe:
      "IMAGE RECIPE — fill [SUBJECT], render at 3:2, 2K\n\n[SUBJECT: rolling spring hills covered in wildflowers under an open sky] painted in loose impressionist oil strokes, thick visible brushwork on the flower field dissolving into soft haze at the horizon, STRICT high-key palette: pale cerulean and powder-blue sky, sage and grass greens, scattered specks of marigold yellow, coral pink and lilac, no dark values below 25% luminance, soft diffuse midday light, generous empty sky in the upper third for headline type, wide cinematic framing, no people, no buildings, no text."
  },

  {
    id: "dune",
    title: "DUNE",
    styleLabel: "cinematic × terminal type",
    family: "cinematic-atmosphere",
    image: "screenshots/Screenshot 2026-07-10 102622.png",
    source: null,
    crossTags: ["mono-technical"],
    summary:
      "A strategy platform dressed as a desert at last light. Pixel-grid uppercase display type sits in the shadowed half of the frame while the lit dune ridge carries the eye to the right.",
    vocabulary: [
      "sunset dune ridge",
      "pixel mono display",
      "letterboxed hero",
      "ember orange accent",
      "segmented nav box",
      "celled logo strip",
      "heavy grain",
      "shadow-side copy"
    ],
    notes: [
      "Headline is a pixel/bitmap monospace in all caps with wide tracking — deliberately low-res against a photoreal image.",
      "Nav is a bordered rectangle with the active item as a filled block; zero radius throughout.",
      "The photo's own composition does the layout work: dark left third for text, lit ridge sweeping to the right edge.",
      "Logo strip is divided into bordered cells, like a contact sheet, pinned flush to the hero's bottom.",
      "Grain is heavy and uniform — it flattens the photo enough that flat UI can sit on it."
    ],
    palette: ["#0B0B0C", "#1C1C1E", "#E8663A", "#F0A868", "#3A4A52", "#EDEDED"],
    typeStack: {
      display: "Pixel / bitmap monospace, uppercase, +6% tracking",
      body: "Neutral grotesk, 400, 16–18px",
      mono: "Same bitmap mono for nav and labels"
    },
    brief:
      "Position an enterprise decision tool as something closer to expedition equipment. Buy or generate one exceptional photograph — a desert dune at the last minute of sunset — and build the entire hero inside its dark quadrant. The typography should contradict the photograph: where the image is smooth, continuous and warm, the type is blocky, quantised and cold. Uppercase pixel monospace, hard-edged boxes, no rounded corners anywhere. The result should feel like a field instrument left in a beautiful place.",
    prompt:
      "Build a dark landing hero anchored by one full-bleed cinematic photograph of a sunset desert dune, composed so the left third is deep shadow. Overlay: top-left a small square logo mark with a wordmark in uppercase mono; top-right a bordered rectangular nav containing 4 items where the active one is a solid filled block (zero border radius). In the shadowed left third, an uppercase two-line headline in a PIXEL/bitmap monospace at ~64px with +6% letter-spacing, white; below it a 2-line grey subhead in a normal grotesk at 17px; below that a rectangular grey-filled button reading 'Book a demo'. Pin a logo strip flush to the bottom of the hero, divided into 7 equal cells separated by 1px hairline borders, logos in 40% white. Apply a uniform film-grain overlay at ~6% across the entire hero. Palette: black #0B0B0C, ember #E8663A, sand highlight #F0A868, cold teal-grey sky #3A4A52. No rounded corners, no glows, no gradients other than the photograph's own.",
    imageRecipe:
      "IMAGE RECIPE — fill [SUBJECT], render at 16:9, 2K\n\n[SUBJECT: a single vast sand dune ridge curving from lower-left to upper-right] photographed at the last minute of sunset, extreme low sun raking across the crest so the windward face glows ember orange and the leeward face falls into near-black, STRICT palette: black, deep charcoal, ember orange #E8663A, pale sand highlight, cold teal-grey sky gradient at top, visible wind-ripple texture in the lit sand, heavy fine film grain, the entire LEFT THIRD of the frame in deep shadow and empty for typography, ultra-wide cinematic framing, no people, no footprints, no text."
  },

  {
    id: "fathom",
    title: "Fathom",
    styleLabel: "editorial × treasury",
    family: "editorial-grotesk",
    image: "screenshots/Screenshot 2026-07-25 214540.png",
    source: null,
    summary:
      "Treasury software presented like a broadsheet. Enormous tight-tracked black grotesk on warm paper, then a deep forest-green product panel that does all the talking about data.",
    vocabulary: [
      "tight-tracked grotesk",
      "warm paper ground",
      "dual pill CTA",
      "forest-green data panel",
      "hairline column rules",
      "reassurance microcopy",
      "lowercase logotype",
      "sparkline forecast"
    ],
    notes: [
      "Headline runs ~76px at roughly −3% tracking, two lines, sentence case — the tightness is the whole signature.",
      "Two CTAs of equal size, unequal weight: solid black pill + white pill with hairline border.",
      "A single line of microcopy under the buttons handles objections ('Live in under a week · No switching banks required') with the reassuring half bolded.",
      "Vertical hairlines mark the content column against the page edges — a quiet grid tell.",
      "The product panel inverts to deep green so the numbers read as a separate, calmer surface."
    ],
    palette: ["#F7F6F3", "#0A0A0A", "#17301F", "#0F2418", "#35C07A", "#C9A227"],
    typeStack: {
      display: "Neo-grotesk (Inter Display / Söhne), 600–700, −3% tracking",
      body: "Same family, 400, 17px, grey-70",
      mono: "Used only inside the product panel for figures"
    },
    brief:
      "Make a finance product feel edited rather than engineered. Set the headline enormous and tight on warm off-white paper, give it room above and below, and refuse decoration entirely — no icons, no gradient, no illustration. Offer two doors of equal size but different weight so a cautious buyer and a ready buyer each see themselves. Then invert: the product panel goes deep forest green, where dense financial data can be quiet. Everything hangs on the tracking and the whitespace; if either slips, it becomes a template.",
    prompt:
      "Build a landing hero for a finance product on a warm off-white ground (#F7F6F3), never pure white. Top bar: lowercase wordmark with a small uppercase mono descriptor after a divider, 5 centred nav links, 'Sign in' text link plus a black rounded-full 'Get started' button. Hero: centred two-line headline at 76px in a neo-grotesk at weight 700 with −3% letter-spacing, near-black; a 3-line centred subhead at 17px in 60% grey, max-width 560px; two equal-size rounded-full CTAs side by side — one solid black with trailing arrow, one white with a 1px grey border; below them a single 13px line of grey microcopy where the reassuring clause is bolded. Draw 1px vertical hairlines at the left and right of the content column, running the full page height. Below the hero, a deep forest-green (#17301F) rounded panel containing a tab row, a 4-up row of stat tiles with label/large figure/small delta, a line chart with a dashed forecast continuation, and a positions list with right-aligned amounts and small tinted badges. Palette: paper #F7F6F3, ink #0A0A0A, panel #17301F, chart green #35C07A, forecast gold #C9A227.",
    imageRecipe:
      "IMAGE RECIPE — no photography needed; this hero is typographic.\n\nIf a supporting image is required: [SUBJECT: a single matte object such as a folded paper form or a brushed metal card] photographed on a warm off-white seamless sweep, soft top-left key light with a large diffuser, long soft shadow falling to the lower right, STRICT palette: warm off-white, paper grey, one deep forest-green element, absolutely no other hue, shallow depth of field, dead-centre composition with wide empty margins, no hands, no text, no reflections."
  },

  {
    id: "polatam",
    title: "Polatam / Ignite",
    styleLabel: "editorial commerce × product photography",
    family: "cinematic-atmosphere",
    image: "screenshots/Screenshot 2026-07-25 214701.png",
    source: null,
    summary:
      "A skincare bottle half-submerged at the waterline, shot against clouds. Serif and serif-italic copy sits low-left in the calm water while the product owns the right two-thirds.",
    vocabulary: [
      "waterline split",
      "half-submerged product",
      "cloud backdrop",
      "serif italic emphasis",
      "mono micro-label pill",
      "ghosted overline",
      "hairline rule under headline",
      "bare minimum chrome"
    ],
    notes: [
      "The image is the layout: sky above the waterline, refracted water below, bottle dead centre-right.",
      "Headline pairs a serif italic first line with a serif roman second — the italic carries the emotion, the roman carries the claim.",
      "A short hairline rule sits directly under the headline, sized to the text, acting as a full stop.",
      "The overline is set in a lighter tint so it reads as a whisper before the statement.",
      "Nav reduces to a wordmark, a progress hairline and three icons — commerce chrome kept nearly invisible.",
      "Micro-label is uppercase mono inside a pill with a single icon chip on its left."
    ],
    palette: ["#A9C4D8", "#E9E5DC", "#D9D5C8", "#4A90D9", "#3B2F2A", "#FFFFFF"],
    typeStack: {
      display: "High-contrast serif, roman + italic mixed in one headline",
      label: "Uppercase mono, +8% tracking, 11px",
      body: "Neutral grotesk, 400, 14px"
    },
    brief:
      "Sell a simplified routine with a simplified image. One bottle, one waterline, one sky — the product literally sitting at the boundary between two states. Type stays in the quiet lower-left where the water is smooth, and speaks in two registers: an italic serif for the feeling and a roman serif for the fact, separated by a hairline that acts as punctuation. Strip the storefront chrome back to a wordmark and three icons. The restraint has to feel expensive, not empty.",
    prompt:
      "Build an ecommerce hero for a skincare brand from one full-bleed photograph of a product bottle half-submerged at a waterline with clouds behind. Chrome: top-left uppercase mono wordmark followed by a short hairline rule; top-right three thin-stroke icons (bag, search, account). Overlay in the upper-left: a pill containing a small rounded-square icon chip and uppercase mono text at 11px with +8% tracking. In the lower-left quadrant: a ghosted overline in 35%-opacity serif, then a two-line headline in a high-contrast serif at ~40px where line one is ITALIC and line two is ROMAN, then a 1px hairline rule matched to the text width, then a 3-line 13px paragraph whose leading statistic is bolded. Palette: sky blue-grey #A9C4D8, cream #E9E5DC, water white foam, one blue accent #4A90D9 on the icon chip only, ink warm brown-black #3B2F2A. No buttons in the hero, no shadows, no rounded cards.",
    imageRecipe:
      "IMAGE RECIPE — fill [SUBJECT], render at 3:2, 2K\n\n[SUBJECT: a tall matte cream cosmetic pump bottle with a black pump head] half-submerged at a perfectly still waterline, camera exactly at water level so the frame splits into water below and soft cloudscape above, clear water with fine bubbles clinging to the submerged surface and gentle refraction distorting the lower half of the bottle, STRICT palette: cream, warm white, pale blue-grey sky, soft grey-blue water, no saturated colour anywhere, soft overcast daylight, product positioned right of centre leaving the LEFT THIRD calm and empty for typography, medium-format realism, no hands, no splashes, no text."
  },

  {
    id: "nexora",
    title: "Nexora",
    styleLabel: "swiss mono × gradient noise",
    family: "mono-technical",
    image: "screenshots/Screenshot 2026-07-25 214930.png",
    source: null,
    summary:
      "A white monospace card floating on a blue-black noise gradient, with the wordmark blown up so large behind it that it bleeds off every edge. Statements run as justified rows, not paragraphs.",
    vocabulary: [
      "giant bleeding wordmark",
      "white card on gradient",
      "monospace headline",
      "justified claim rows",
      "noise gradient ground",
      "four-up statement strip",
      "zero radius",
      "asymmetric CTA placement"
    ],
    notes: [
      "Headline is monospace at display size — unusual, and the single strongest choice on the page.",
      "The CTA sits to the right of the headline on the same baseline block, not underneath it.",
      "Claims are distributed as four evenly spaced items across the full width, like a caption rail rather than a bullet list.",
      "The background wordmark is scaled past the viewport so only stems and counters are visible — texture made from the logo.",
      "Card edges are hard; the only softness in the composition is the noise in the gradient."
    ],
    palette: ["#FFFFFF", "#111111", "#0A0A0F", "#2B4FD8", "#6E9BF5", "#B9CCF7"],
    typeStack: {
      display: "Monospace (JetBrains Mono / IBM Plex Mono), 500, uppercase-friendly",
      body: "Same mono at 13px for rails and labels",
      accent: "Wordmark set in a condensed geometric sans"
    },
    brief:
      "Give an AI CRM the composure of a Swiss poster. Put everything on a hard-edged white card and float it over a deep blue-black noise gradient, then blow the wordmark up behind the card until it's pure texture. Set the headline itself in monospace — that single decision does most of the differentiation. Claims don't stack as bullets; they space out across the full width like a rail of captions. The CTA moves off-axis to the right of the headline. Nothing rounds, nothing glows, nothing floats on a shadow.",
    prompt:
      "Build a landing hero as a hard-edged white card (zero border radius) inset ~10% from each side, floating on a deep blue-to-black noise gradient background. Behind the card, set the brand wordmark in a condensed geometric sans at enormous size so it bleeds off all four edges of the viewport, in near-black at low contrast. Above the card, two corner rails in 12px uppercase monospace: top-left a two-line descriptor, top-right a right-aligned two-line descriptor. Inside the card: centred wordmark nav row with 2 links left and 2 links right; then a two-line headline in MONOSPACE at 44px, weight 500, left-aligned, with a dark rectangular CTA button placed to its RIGHT on the same block rather than below; then a full-width rail of exactly four short claim sentences at 13px, evenly distributed with space-between. Below the card, a dark product screenshot section, then a four-item mono statement strip over the gradient. Palette: white, ink #111, gradient #0A0A0F→#2B4FD8→#6E9BF5, apply film grain over the gradient only. No rounded corners anywhere, no drop shadows.",
    imageRecipe:
      "IMAGE RECIPE — fill [SUBJECT], render at 16:9, 2K\n\n[SUBJECT: a smooth vertical gradient field] rendered as a deep blue-black to electric cobalt to pale periwinkle gradient running bottom to top, heavy fine-grain monochrome noise dithering across the whole surface in the manner of a scanned risograph, faint vertical banding, STRICT palette: #0A0A0F, #2B4FD8, #6E9BF5, #B9CCF7 only, no objects, no light source, no vignette, completely abstract, flat, edge to edge."
  },

  {
    id: "bix",
    title: "BIX",
    styleLabel: "acid neon × bento",
    family: "neon-dark",
    image: "screenshots/Screenshot 2026-07-25 215040.png",
    source: null,
    summary:
      "A crypto card product lit entirely by one acid lime. Glossy 3D renders float in black bento cells over dot-matrix texture, and every headline splits between white and lime.",
    vocabulary: [
      "acid lime accent",
      "split-colour headline",
      "dot-matrix panels",
      "glossy 3D render",
      "bento feature grid",
      "radial bloom",
      "coming-soon badges",
      "dimmed inactive cells"
    ],
    notes: [
      "Headline formula is consistent site-wide: first word in lime, remainder in white ('Crypto, Meet The Real World', 'Bank-Grade Security').",
      "Feature cells that aren't ready are dimmed to ~35% with a lime 'COMING SOON' badge — roadmap used as layout texture.",
      "Every section is a bento grid with visible 1px separations and small plus-marks at intersections.",
      "3D objects (card, shield, hub) are rendered glossy with a lime rim-light and sit on a radial bloom.",
      "Section overlines are tiny lime bullets followed by two-tone uppercase labels."
    ],
    palette: ["#05070A", "#0E1A0B", "#B8F02A", "#9BE60A", "#1A2412", "#8A8F8A"],
    typeStack: {
      display: "Grotesk, 600–700, tight tracking, mixed-colour words",
      body: "Grotesk 400, 13px, 60% grey",
      label: "Uppercase 11px with a lime diamond bullet"
    },
    brief:
      "Build a crypto card site that reads as hardware, not finance. Take the canvas to near-black and admit exactly one colour — an acid lime — then use it with discipline: rim-lights on the 3D objects, the first word of every headline, the active row of every list, the badge on every unreleased feature. Structure everything as bento so the roadmap becomes texture: shipped cells are bright, unshipped cells sit at 35% with a COMING SOON badge, and the grid reads as a product in motion. Dot-matrix panels fill dead space so the black never looks empty.",
    prompt:
      "Build a dark landing page for a crypto card product on near-black #05070A lit by a single acid lime #B8F02A. Hero: full-bleed macro render of a card against lime-lit vertical blinds, headline at 56px weight 700 where the FIRST WORD is lime and the rest is white, 2-line grey subhead at 13px, two dark app-store buttons with small platform icons. Below: bento grid sections with 1px dark separations and small plus-marks at cell intersections. Each cell has a thin-stroke lime icon in a rounded square, a bold 14px title, and 13px grey body — cells for unreleased features are set to 35% opacity with a small lime-outlined 'COMING SOON' badge in the corner. Include a section with a glossy 3D shield render on a radial lime bloom beside a vertical list where only the active row has a lime left-border and lime icon chip. Fill empty cells with dot-matrix perforation texture at low opacity. Section overlines: a small lime diamond followed by uppercase 11px text in two tones. End with a CTA panel over a lime-to-black radial gradient containing a QR code. No blues, no purples, no second accent colour.",
    imageRecipe:
      "IMAGE RECIPE — fill [SUBJECT], render at 16:9, 2K\n\n[SUBJECT: a matte black payment card floating at a 30° angle] rendered in glossy 3D against a backdrop of tall vertical blinds edge-lit with acid lime, hard lime rim-light tracing the card's top and right edges, deep black falloff everywhere else, faint dot-matrix perforation texture visible in the shadows, STRICT palette: near-black #05070A, acid lime #B8F02A, one step of mid-grey, absolutely no other hue, high-gloss reflections, shallow depth of field, product placed right of centre with the LEFT THIRD in unlit black for typography, no text on the card, no hands, no background objects."
  },

  {
    id: "heartcord",
    title: "Heartcord",
    styleLabel: "atmospheric fog × glass UI",
    family: "cinematic-atmosphere",
    image: "screenshots/Screenshot 2026-07-25 215212.png",
    source: null,
    summary:
      "A layered fog-and-pine mountain photograph in cold navy, with soft geometric type centred over it and a cluster of overlapping product cards fanned across the fold.",
    vocabulary: [
      "layered fog ridges",
      "cold navy wash",
      "centred soft sans",
      "glass pill buttons",
      "fanned card cluster",
      "depth-of-field stack",
      "muted logo rail",
      "pine silhouette base"
    ],
    notes: [
      "Three overlapping cards fan out with the centre one forward and larger — the side cards are clipped by it, creating a physical stack.",
      "Buttons are a pair of pills: one white-filled, one dark glass with a hairline border.",
      "Headline is a soft-cornered geometric sans at ~44px, centred, weight 500 — deliberately gentle against a cold image.",
      "The photograph's own atmospheric perspective (ridge, fog, ridge, fog) supplies the section depth for free.",
      "Logo rail sits on near-black at ~40% opacity, sinking rather than announcing."
    ],
    palette: ["#1B2436", "#2A3548", "#4A5A75", "#8FA3C4", "#3B6FE0", "#F2F5FA"],
    typeStack: {
      display: "Soft geometric sans (Poppins / Gilroy), 500, centred",
      body: "Same, 400, 15px at 70% white",
      ui: "Small grotesk inside the product cards"
    },
    brief:
      "Give an AI coding workspace a calm, almost meditative front door. Use a cold, foggy mountain photograph where ridgelines recede in visible layers — that natural depth becomes the page's depth. Centre soft geometric type over it, keep the copy short and unhurried, and offer two pill buttons where one is white and one is dark glass. Below the copy, fan three product cards so they overlap physically, centre card forward: the interface should look like something you're holding, not something being demoed at you. Everything stays in cold navy; the only warmth is the white type.",
    prompt:
      "Build a dark landing hero from a full-bleed photograph of layered foggy mountain ridges with pine silhouettes along the bottom, colour-graded to cold navy #1B2436. Overlay a navy scrim at 40% for legibility. Chrome: top-left uppercase wordmark with wide tracking, 4 centred nav links in 80% white, top-right a white rounded-full pill button. Hero: centred two-line headline at 44px in a SOFT geometric sans at weight 500; a centred 2-line subhead at 15px in 70% white, max-width 620px; two rounded-full buttons side by side — one white with dark text and a trailing arrow, one dark translucent glass with a 1px white-15% border and backdrop blur. Below the copy, a cluster of THREE overlapping product cards fanned horizontally: the centre card is larger, fully opaque, and clips the left and right cards which sit lower and slightly transparent. Cards have 12px radius, 1px white-10% borders, dark navy fills, and contain small realistic UI (tabs, a code block with syntax colour, a chat input, a checklist). End the hero with a centred 'Trusted by' line and a rail of 7 logos at 40% white on near-black. Palette: navy #1B2436, mist #4A5A75, pale blue #8FA3C4, one electric blue #3B6FE0 used only inside the cards.",
    imageRecipe:
      "IMAGE RECIPE — fill [SUBJECT], render at 16:9, 2K\n\n[SUBJECT: four or five receding mountain ridgelines separated by bands of low fog, with a dark pine forest silhouette across the bottom edge] photographed at blue hour with heavy atmospheric perspective so each ridge is paler than the one in front, STRICT palette: cold navy, slate blue, pale blue-grey fog, near-black pine silhouettes, no warm tones at all, no sun, soft even ambient light, fine grain, the upper-centre of the frame kept open and low-detail for centred typography, ultra-wide framing, no people, no structures, no text."
  },

  {
    id: "coinvera",
    title: "Coinvera",
    styleLabel: "black glow × trading floor",
    family: "neon-dark",
    image: "screenshots/Screenshot 2026-07-25 215312.png",
    source: null,
    summary:
      "A funded-trader offer on near-black, lit by a single warm orange bloom behind the headline. A row of rule-badges answers the objections before the dashboard appears.",
    vocabulary: [
      "warm light leak",
      "gradient orange pill",
      "capsule nav with pill active",
      "eyebrow badge",
      "rule badge row",
      "dimmed second line",
      "dashboard on black",
      "amber bloom vignette"
    ],
    notes: [
      "The bloom sits directly behind the headline top-centre, so the type is lit rather than placed.",
      "Headline's second line drops to ~55% opacity — hierarchy inside a single sentence.",
      "Four outlined pill badges each pair a lightning glyph with a rule ('No Daily Loss Limit'), turning terms into features.",
      "Nav is a dark capsule with the active item as a lighter inner pill; a flag + language chevron sits outside it.",
      "The legal disclaimer runs directly under the headline in grey — unusually high on the page, used as credibility.",
      "CTA is a gradient orange pill, the only saturated element above the fold."
    ],
    palette: ["#08070A", "#141014", "#F08A34", "#C96A22", "#7A4A1E", "#EDE7E2"],
    typeStack: {
      display: "Grotesk, 600, −2% tracking, two lines with the second dimmed",
      body: "Grotesk 400, 14px, 55% grey",
      label: "12px inside outlined pills"
    },
    brief:
      "Sell a trading evaluation on near-black without looking like every other trading site. The differentiator is light: one warm amber bloom placed behind the headline so the words appear lit from within, with everything else falling to black. Dim the second line of the headline to create hierarchy inside a single thought. Then convert the rulebook into a feature row — four outlined pill badges, each a lightning bolt plus one term — so the objections are answered before the product appears. One saturated element above the fold: the orange gradient CTA.",
    prompt:
      "Build a dark landing hero on near-black #08070A with a single large warm-orange radial bloom centred behind the headline, falling off to pure black at the edges and corners. Chrome: top-left wordmark with a small orange gradient mark; centre a dark capsule nav where the active item is a lighter inner pill; top-right a flag + chevron language selector, a 'Log in' text link, and an ORANGE GRADIENT rounded-full CTA with a trailing arrow. Hero: a small outlined pill eyebrow containing a sparkle glyph and 13px text; a centred two-line headline at 46px weight 600 with −2% tracking where the SECOND LINE is set to 55% opacity; a centred 2-line legal disclaimer at 14px in 45% grey; a large orange gradient rounded-full CTA. Below, a horizontal row of FOUR outlined rounded-full badges, each containing a small orange lightning glyph and a short rule phrase, one of which includes a tiny outlined sub-badge. Then a dark dashboard screenshot with orange-tinted charts, a highlighted upgrade card in orange gradient, and a watchlist panel. Palette: black #08070A, orange #F08A34→#C96A22 gradient, warm ember falloff #7A4A1E, text #EDE7E2. No blues, no greens, no glassmorphism.",
    imageRecipe:
      "IMAGE RECIPE — fill [SUBJECT], render at 16:9, 2K\n\n[SUBJECT: a soft warm light leak blooming from the upper-centre of the frame] rendered as an abstract volumetric haze, amber and burnt-orange light diffusing through a black void with faint horizontal streak flares, falling to pure black in all four corners, STRICT palette: black, amber #F08A34, burnt orange #C96A22, deep ember brown, no other hue, heavy fine grain, completely abstract with no objects or edges, generous unlit black across the lower half for UI, ultra-wide framing, no text."
  },

  {
    id: "lukana",
    title: "Lukana",
    styleLabel: "light dashboard × lime accent",
    family: "app-surface",
    image: "screenshots/Screenshot 2026-07-25 215350.png",
    source: null,
    summary:
      "A finance dashboard done with real restraint: white surfaces, one lime accent, four stat tiles with tinted icon chips, and an invoice table whose status pills are the only other colour.",
    vocabulary: [
      "left rail nav",
      "stat tile row",
      "tinted icon chips",
      "status pills",
      "segmented tab row",
      "lime primary action",
      "preference section break",
      "hairline table rules"
    ],
    notes: [
      "Every stat tile pairs a label, a large figure, and a delta line with a coloured arrow — plus a soft tinted icon chip top-right.",
      "Status pills use a tinted background with matching darker text (Paid = blue, Pending = peach, Overdue = green here — semantically loose but visually consistent).",
      "Sidebar splits into 'Menu' and 'Preference' groups with a tiny uppercase label between them; the active item is a filled light card, not a bar.",
      "Two accent tones do all the work: a lime gradient for the primary action, a dark pill for the active tab.",
      "Search sits in the top bar with a ⌘F key hint chip — small detail that signals a real tool."
    ],
    palette: ["#FFFFFF", "#F6F8F7", "#A8E063", "#8BD24E", "#14181A", "#DCE9FB", "#FDE6D3"],
    typeStack: {
      display: "Grotesk 600, 22px section titles",
      body: "Grotesk 400, 13–14px",
      figures: "Grotesk 700, 24px for stat values"
    },
    brief:
      "Design an SMB finance dashboard that a non-accountant can read in five seconds. Anchor on white with a barely-tinted page ground, then allow exactly one brand colour — a fresh lime — reserved for the primary create action. Open with four stat tiles: label, big figure, and a delta with a coloured arrow so the trend is legible before the number is. Use tinted status pills so scanning a table is a colour task, not a reading task. Group the sidebar into Menu and Preference with a tiny uppercase divider, and make the active item a soft filled card rather than a highlight bar.",
    prompt:
      "Build a light SaaS dashboard for small-business finance. Layout: a 240px left sidebar on white with a rounded-square brand mark, a collapse chevron, a 'Menu' uppercase 10px label, 8 nav items with thin-stroke icons where the ACTIVE item is a soft filled rounded card, then a 'Preference' label with Settings and Help Center. Top bar: a full-width search field with a magnifier and a ⌘F key-hint chip, an 'Assistant' pill with a small avatar, a bell, and a user block with avatar, name and role over a chevron. Content: an H1 at 22px with a 13px grey subtitle, a warning pill ('4 invoices pending') and a LIME GRADIENT rounded-full '+ New Invoice' button on the right. Then a 4-up stat tile row — each card white, 12px radius, 1px #ECEFEE border, containing a 12px grey label, a 24px bold figure, a small 11px delta line with a coloured arrow, and a soft tinted icon chip in the top-right. Then a segmented tab row where the active tab is a dark filled pill. Then an invoice table card with a title, a lime-tinted 'Create Invoice' button, a 12px grey uppercase header row, and rows with hairline separators containing ID, client, service, a TINTED STATUS PILL, amount, due date and a ⋯ action. Palette: white, ground #F6F8F7, lime #A8E063→#8BD24E, ink #14181A, pill tints #DCE9FB / #FDE6D3 / #E3F3E0.",
    imageRecipe:
      "IMAGE RECIPE — no photography; this is a pure UI surface.\n\nIf a marketing render is needed: [SUBJECT: this dashboard screen] shown floating at a slight 8° perspective tilt on a soft off-white studio ground, one large soft key light from the upper left, a long diffuse shadow to the lower right, STRICT palette: white, pale grey, one lime accent, no other hue, no device bezel, no hands, no reflections, generous empty space above the screen for a headline."
  },

  {
    id: "gloveup",
    title: "GloveUp",
    styleLabel: "lifestyle photo × rounded cards",
    family: "cinematic-atmosphere",
    image: "screenshots/Screenshot 2026-07-25 215507.png",
    source: null,
    summary:
      "A softball academy built from golden-hour field photography set into large rounded cards, with green pill navigation and small stat badges pinned onto the images.",
    vocabulary: [
      "golden hour field",
      "inset rounded hero",
      "green pill nav",
      "avatar stack proof",
      "badge pinned on photo",
      "inline emoji in headline",
      "circular arrow buttons",
      "notched image mask"
    ],
    notes: [
      "The hero photo is inset from the page edges with a large radius — it reads as a card, not a background, which keeps the page feeling light.",
      "Nav items are individual translucent pills rather than plain links; the CTA adds a circular arrow chip inside the pill.",
      "Social proof is an avatar stack plus a one-sentence line, placed to the right of the headline rather than under it.",
      "Section images use a notched/organic mask corner and carry a floating white stat badge ('35K+ Satisfied Players') with its own avatar row.",
      "Headline embeds small emoji-scale objects (a ball, a count badge) inline in the sentence."
    ],
    palette: ["#2E7D32", "#4CAF50", "#F1F1EF", "#101010", "#E8A33D", "#FFFFFF"],
    typeStack: {
      display: "Grotesk 600, 34px, sentence case",
      body: "Grotesk 400, 14px",
      label: "12px inside pills and badges"
    },
    brief:
      "Sell coaching with the feeling of being at the field at 7pm. Shoot or source golden-hour action photography and set it into a large rounded card inset from the page edges, so the site stays airy rather than cinematic. Keep the chrome friendly: nav links become translucent pills, the CTA gets a small circular arrow chip, and social proof arrives as an avatar stack with one plain sentence beside the headline. In the content sections, pin white stat badges directly onto the photography and let small inline objects interrupt the headline — the tone should be energetic and human, never corporate.",
    prompt:
      "Build a sports-academy landing page on a light grey ground #F1F1EF. Hero: a golden-hour photograph of a baseball/softball field inset 16px from the page edges with a 20px border radius, overlaid with a bottom-left dark gradient. On it: top-left a white rounded-full logo pill; centre a row of 4 translucent white nav pills plus a circular search chip; top-right a white pill CTA containing text and a small green circular arrow chip. Bottom-left: a two-line headline at 34px weight 600 in white, with a 14px subline under it. Bottom-right: an overlapping avatar stack, a 3-line 13px white paragraph, and two pill buttons — one white with a green arrow chip, one dark with a green play chip. Below the hero: a section with a small outlined 'About' pill label, a two-line 30px headline that embeds small inline objects mid-sentence (a ball glyph, an amber count badge), a 3-line grey paragraph, and a dark pill 'Learn More' button with a green arrow chip; to the right, a photograph in a rounded mask with one NOTCHED corner, carrying a floating white stat badge card with a bold figure, a label and a small avatar row. Palette: green #2E7D32/#4CAF50, ground #F1F1EF, ink #101010, amber badge #E8A33D.",
    imageRecipe:
      "IMAGE RECIPE — fill [SUBJECT], render at 16:9, 2K\n\n[SUBJECT: a softball game in progress seen from behind home plate, batter mid-swing] photographed at golden hour with the low sun raking across the outfield grass and long shadows stretching toward the camera, warm haze and lens flare at the top edge, floodlight towers and a modest bleacher in the background, STRICT palette: warm sunlit green grass, clay-orange infield, amber sky, deep cool shadows, shallow depth of field on the background, sports-documentary realism, the LOWER-LEFT quadrant kept dark and uncluttered for typography, no text, no logos, no motion blur on the subject."
  },

  {
    id: "mli-group",
    title: "M·Li Group",
    styleLabel: "corporate flat vector",
    family: "painterly-illustrated",
    image: "screenshots/Screenshot 2026-07-25 215816.png",
    source: null,
    summary:
      "An investment firm using flat two-tone vector illustration and a strict blue palette, alternating pale lavender sections with deep navy ones to pace a long scroll.",
    vocabulary: [
      "two-tone flat vector",
      "pale lavender ground",
      "navy section inversion",
      "outlined process cards",
      "video testimonial cards",
      "faint pattern navy panel",
      "square rounded buttons",
      "centred section eyebrow"
    ],
    notes: [
      "Illustrations use exactly two blues plus white and a single line weight — cheap to extend, instantly consistent.",
      "The page alternates pale lavender and deep navy full-width bands so a long scroll stays legible.",
      "Navy panels carry a faint tiled pattern at very low opacity instead of flat fill.",
      "Process is a 2×2 of outlined cards on navy with hairline borders and no icons — text only.",
      "Testimonials are photo cards with a play button overlay and a star rating; a peek of the next card signals a carousel.",
      "Eyebrows are small centred pills with a trailing icon, repeated in every section."
    ],
    palette: ["#F4F5FD", "#2F4FCB", "#16204A", "#5B7BE8", "#FFFFFF", "#C7D0F5"],
    typeStack: {
      display: "Grotesk 600, 40px, sentence case, centred",
      body: "Grotesk 400, 14px",
      label: "12px inside centred eyebrow pills"
    },
    brief:
      "Give a regional investment firm credibility without stock photography of handshakes. Commission a flat two-tone vector illustration set — one line weight, two blues, white — and let it carry every explanatory moment. Pace the long scroll by alternating pale lavender bands with deep navy bands, and give the navy a faint tiled pattern so it never reads as a dead rectangle. Keep the process abstract and text-only in outlined cards. Use real faces only in testimonials, as video cards with a visible play button, and let the next card peek in from the edge so the section obviously scrolls.",
    prompt:
      "Build a corporate investment-firm landing page alternating pale lavender (#F4F5FD) and deep navy (#16204A) full-width bands. Hero: white top bar with a script wordmark, 6 nav links and a blue rounded-rect 'Get Started' button; centred small outlined eyebrow pill with a trailing icon; a centred two-line headline at 40px weight 600 in blue #2F4FCB; a centred 2-line grey subhead at 14px; a blue rounded-rect CTA with a trailing arrow. Below it, a FLAT TWO-TONE VECTOR illustration — a seated figure with a laptop beside floating chart panels, a pie chart and a plant, drawn in exactly two blues plus white with a single consistent line weight and no gradients. Next section: a navy band with a faint tiled pattern at 6% opacity, a centred eyebrow pill, a centred white 26px title, and a 2×2 grid of OUTLINED cards (1px white-20% border, no fill, no icons) each with a bold 14px title and 12px body. Then a light band of testimonial cards: rounded photo card with a circular play button, a quote, a name and a 5-star row, with the next card partially visible at the right edge. Then a navy logo band, an FAQ accordion, and a navy newsletter band with an inline email field and a blue submit button. Palette: lavender #F4F5FD, blue #2F4FCB, light blue #5B7BE8, navy #16204A. No photography outside testimonials, no gradients, no shadows.",
    imageRecipe:
      "IMAGE RECIPE — fill [SUBJECT], render at 4:3, transparent or white background\n\n[SUBJECT: a person seated in a lounge chair working on a laptop, surrounded by floating chart panels, a pie chart and a potted plant] drawn as FLAT TWO-TONE VECTOR illustration, exactly two blues (#2F4FCB and #5B7BE8) plus white plus a thin navy outline, one uniform 2px line weight throughout, no gradients, no shading, no texture, simplified geometric figure with no facial detail beyond a single hair shape, clean isometric-adjacent composition, generous white space around the subject, corporate editorial style, no text, no background scenery."
  },

  {
    id: "sage-steps",
    title: "Sage — Feature Walkthrough",
    styleLabel: "stepped disclosure × mint",
    family: "app-surface",
    image: "screenshots/Screenshot 2026-07-25 215924.png",
    source: null,
    summary:
      "A feature section built as a numbered list where only the active step is legible and the rest fade to 25% — the copy itself becomes the progress indicator, synced to a UI card on the right.",
    vocabulary: [
      "stepped disclosure",
      "dimmed inactive copy",
      "circled step numerals",
      "synced UI panel",
      "mint tinted ground",
      "recessed card well",
      "option row list",
      "lead-in bold sentence"
    ],
    notes: [
      "Only step 1 is at full opacity; steps 2 and 3 sit near 25% — the reader always knows where they are without a progress bar.",
      "Each step's first sentence is bolded and the rest is regular, so scanning the bold text alone gives the whole story.",
      "Step numbers are small circled numerals in hairline outlines, not filled badges.",
      "The right panel is a card inside a slightly darker recessed well — two levels of surface, which makes the UI feel embedded rather than pasted.",
      "The panel content is a list of option rows, each with a tinted icon chip, a title, a sub-line and a chevron — the simplest possible 'choose one' pattern."
    ],
    palette: ["#F2FBF8", "#FFFFFF", "#0B2A22", "#17795C", "#E6F4EF", "#8A9C96"],
    typeStack: {
      display: "Grotesk 600, 30px, two lines",
      body: "Grotesk 400, 14px, with bold lead-in sentences",
      ui: "13px inside the panel rows"
    },
    brief:
      "Explain three capabilities without three separate sections. Build one split module: numbered copy steps on the left, a single product panel on the right that changes with the active step. Dim the inactive steps to roughly a quarter opacity so the copy block doubles as a progress indicator — no dots, no bar. Bold the first sentence of each step so a skimmer gets the full narrative from the bold text alone. Set the product panel inside a recessed well so it reads as embedded in the page rather than pasted on top. Keep the whole thing on a barely-there mint tint.",
    prompt:
      "Build a two-column feature module on a very pale mint ground (#F2FBF8). Left column: a two-line headline at 30px weight 600 in deep green-black; a 2-line 14px grey paragraph; then a vertical list of THREE numbered steps, each with a small circled numeral in a 1px hairline outline and a 3-line paragraph whose FIRST SENTENCE IS BOLD and whose remainder is regular. Step 1 is at 100% opacity; steps 2 and 3 are at 25% opacity. Right column: a large rounded rectangle in a slightly darker mint (#E9F5F1) acting as a recessed well, containing a WHITE card with 12px radius and a soft shadow. Inside the card: a header row with a small green transfer icon and a 15px question in medium weight, then three option rows — each a 1px-bordered rounded rectangle containing a soft tinted circular icon chip, a 14px bold title, a 13px grey sub-line, and a right chevron. Palette: mint ground #F2FBF8, well #E9F5F1, white cards, ink #0B2A22, accent green #17795C, muted #8A9C96. No illustration, no photography, no gradients.",
    imageRecipe:
      "IMAGE RECIPE — no photography; this module is UI plus type.\n\nIf a supporting render is needed: [SUBJECT: this option-picker card] shown floating flat-on with no perspective on a pale mint seamless ground, soft even light from directly above, a very soft short shadow beneath, STRICT palette: pale mint, white, deep green ink, one accent green, no other hue, no device frame, no hands, no reflections, wide empty margins on all sides."
  },

  {
    id: "sage-hero",
    title: "Sage — Hero",
    styleLabel: "editorial × mint fintech",
    family: "editorial-grotesk",
    image: "screenshots/Screenshot 2026-07-25 215947.png",
    source: null,
    summary:
      "Tight black grotesk on a mint-tinted ground, one mint pill CTA, and a triptych of black-and-white photographs with a colour UI card straddling the middle panel.",
    vocabulary: [
      "mint tinted ground",
      "monochrome photo triptych",
      "colour card over B&W",
      "single pill CTA",
      "cropped photo band",
      "three-up benefit rail",
      "icon-led footnotes",
      "centred hero stack"
    ],
    notes: [
      "The photo band is three panels of different widths — narrow, wide, narrow — cropped hard at the bottom, which stops it competing with the headline.",
      "Photography is desaturated to black and white so the single colour UI card floating over it becomes the focal point automatically.",
      "Exactly one CTA above the fold, in mint — restraint that makes the page feel confident rather than desperate.",
      "Under the photo band, three short benefit statements each led by a thin-stroke icon, with the first two words bolded.",
      "The mint tint on the ground is very low saturation — closer to a paper stock than a brand colour."
    ],
    palette: ["#EAFBF4", "#F0FBF6", "#0B2A22", "#7EE6BE", "#17795C", "#FFFFFF"],
    typeStack: {
      display: "Grotesk 700, 58px, −3% tracking, two lines centred",
      body: "Grotesk 400, 16px at 65% ink",
      label: "13px for the benefit rail"
    },
    brief:
      "Make business banking feel calm and edited. Tint the page a pale mint — closer to a paper stock than a brand colour — and set a tight, heavy grotesk headline centred and large with real air around it. Allow exactly one call to action, a soft mint pill. Beneath it, run a triptych of black-and-white photographs of actual small businesses at uneven widths, cropped hard by the section edge, and float one full-colour product card across the centre panel so the eye lands there without being pushed. Close with three icon-led benefit lines whose opening words are bolded.",
    prompt:
      "Build a landing hero for a business bank on a pale mint ground (#EAFBF4). Top bar: a wordmark with a small geometric mark, 3 nav items with chevrons, a 'Login' text link and a MINT rounded-full 'Open an account' button. Hero: a centred two-line headline at 58px weight 700 with −3% letter-spacing in deep green-black; a centred 2-line subhead at 16px in 65% ink, max-width 620px; ONE centred mint rounded-full CTA — no secondary button. Below: a three-panel photo band with uneven widths (narrow / wide / narrow), all images DESATURATED TO BLACK AND WHITE, showing real small-business scenes, cropped hard by the bottom of the section. Straddling the centre panel, a WHITE rounded card in full colour with a soft shadow containing: a header row with a small green transfer icon and a 15px title, a 'How much do you want to borrow?' label, a large 32px currency figure, a green range slider with a white knob, and a 'Over how long?' row of three checkbox options. Below the band, a three-up rail of benefit lines, each with a thin-stroke icon on the left and 13px text whose FIRST TWO WORDS ARE BOLD. Palette: mint ground #EAFBF4, mint accent #7EE6BE, deep green ink #0B2A22, action green #17795C, white cards.",
    imageRecipe:
      "IMAGE RECIPE — fill [SUBJECT], render three panels at 2:3, 4:3, 2:3, 2K each\n\n[SUBJECT: a small-business owner at a counter with a point-of-sale terminal / an empty café interior with wooden chairs and a laptop / a hand tapping a phone on a card reader] photographed as candid documentary BLACK AND WHITE, natural window light, medium contrast with retained shadow detail, fine 35mm grain, shallow depth of field, real unposed subjects, STRICT monochrome with absolutely no colour cast, composed so the centre of each frame is uncluttered enough for a UI card to overlap, no text, no visible brand logos, no eye contact with the camera."
  },

  {
    id: "pogo-hero",
    title: "Pogo — Hero",
    styleLabel: "gradient bloom × orbit diagram",
    family: "neon-dark",
    image: "screenshots/Screenshot 2026-07-25 220411.png",
    source: null,
    summary:
      "A violet bloom rising out of black, with a phone mockup centred and six labelled capability pills orbiting it on hairline connector lines — the architecture diagram as hero art.",
    vocabulary: [
      "violet bloom gradient",
      "blurred 3D blobs",
      "orbiting label pills",
      "hairline connectors",
      "centred phone mockup",
      "announcement top bar",
      "chrome-free black CTA",
      "depth via blur"
    ],
    notes: [
      "The gradient runs black at the top edge, violet through the middle, white at the bottom — the page dissolves rather than ends.",
      "Six pills orbit the phone, three per side, each with a small rounded-square icon, a bold label and a grey sub-label, joined to the device by faint curved hairlines.",
      "Two glossy purple 3D blobs sit heavily blurred at the left and right edges, providing depth without detail.",
      "The phone screen shows a real interaction (a survey question with a receipt card and a face), not an abstract UI.",
      "A dismissible announcement bar sits above the nav in near-black — the only square-cornered element."
    ],
    palette: ["#0A0A0A", "#3A1D7A", "#6B3FD4", "#A98BEA", "#C9B6F5", "#FFFFFF"],
    typeStack: {
      display: "Grotesk 500, 52px, two lines centred",
      body: "Grotesk 400, 14px at 80% white",
      label: "13px bold + 11px grey inside orbit pills"
    },
    brief:
      "Explain a data product by showing what feeds it. Build a violet bloom that rises out of black at the top and dissolves to white at the bottom, so the section has no hard edge. Centre a phone showing a genuine moment of use — an actual question, an actual receipt — and orbit six capability pills around it, connected by faint hairlines, three per side. That diagram is the hero image: a reader understands the input sources before reading a single feature. Add two heavily blurred glossy blobs at the edges for depth, and keep the type modest so the diagram leads.",
    prompt:
      "Build a landing hero on a vertical gradient running near-black at the top through deep violet #3A1D7A and #6B3FD4 in the middle to white at the bottom edge. Above the nav, a full-width near-black announcement bar with centred text, a trailing arrow link and a right-side dismiss ×. Nav: white wordmark left, 6 centred links with chevrons on three, 'Sign In' text link and a WHITE rounded 'Book a Demo' button. Hero: a centred two-line headline at 52px weight 500 in white; a centred 2-line subhead at 14px in 80% white; a black filled 'Book a Demo' button beside a white 'See How it works →' text link. Centre a realistic phone mockup showing an in-app survey — a progress bar, a points chip, a receipt card with a merchant logo and amount, a question in 15px bold, and a circular selfie thumbnail. Around the phone, place SIX capability pills, three on each side, each a white rounded-full pill with a small rounded-square icon, a 13px bold label and an 11px grey sub-label, each connected to the phone by a faint curved 1px hairline. At the far left and right edges, place two glossy violet 3D blob shapes with heavy gaussian blur. Palette: black #0A0A0A, violet #3A1D7A→#6B3FD4, lilac #C9B6F5, white. No neon glow, no grid lines.",
    imageRecipe:
      "IMAGE RECIPE — fill [SUBJECT], render at 16:9, 2K\n\n[SUBJECT: a soft violet gradient bloom rising from a black upper edge and dissolving to white at the bottom] with two glossy organic 3D blob forms in translucent purple placed at the far left and far right edges under heavy gaussian blur, subtle volumetric haze through the centre, STRICT palette: near-black #0A0A0A, deep violet #3A1D7A, electric violet #6B3FD4, pale lilac #C9B6F5, white, no other hue, no hard edges anywhere, the CENTRE of the frame kept clean and low-detail for a device mockup, ultra-wide framing, no objects, no text."
  },

  {
    id: "pogo-usecases",
    title: "Pogo — Use Cases",
    styleLabel: "bento × studio object",
    family: "bento-studio",
    image: "screenshots/Screenshot 2026-07-25 220434.png",
    source: null,
    summary:
      "Eight industry tiles in an uneven bento grid where only four carry studio photography — hands and props on seamless grey — and the empty tiles are left honestly, label-only.",
    vocabulary: [
      "uneven bento grid",
      "seamless grey sweep",
      "hands as scale",
      "single prop accent colour",
      "corner icon per tile",
      "bottom-anchored label",
      "empty tiles kept empty",
      "purple through-line"
    ],
    notes: [
      "Tiles vary in height across a 4-column grid; the eye moves diagonally rather than in rows.",
      "Every tile has a thin-stroke icon in the top-left and a label anchored to the bottom-left — consistent anchors make the uneven grid feel deliberate.",
      "Photography is all shot on the same grey seamless with the same soft key, so eight unrelated industries look like one campaign.",
      "The brand violet appears as a real physical prop in each shot — a shopping basket, a ribbon — rather than as an overlay.",
      "Tiles with no photography are left as flat grey with just icon and label; the restraint reads as confidence, not as a gap."
    ],
    palette: ["#F2F2F2", "#FAFAFA", "#8B5CF6", "#C89B6A", "#1A1A1A", "#DDDDDD"],
    typeStack: {
      display: "Grotesk 500, 44px section title",
      body: "Grotesk 400, 14px intro",
      label: "16px tile labels, sentence case"
    },
    brief:
      "Show eight industries without eight stock photos. Commission one studio session on a single grey seamless: a hand lifting a basket of unbranded white packaging, a hand peeling tape from a kraft box, a hand holding a supplement jar, a hand holding a phone. Place the brand violet in each frame as a physical object, never as a filter. Lay the tiles out as an uneven bento so the eye moves diagonally, anchor an icon top-left and a label bottom-left in every tile for consistency, and leave the four tiles you have no photography for completely empty. The gaps are part of the composition.",
    prompt:
      "Build a 'use cases' section on a light grey ground (#F2F2F2). Header: a 44px weight-500 title left-aligned, with a 2-line 14px grey intro beneath it at max-width 620px. Below, a 4-column BENTO grid of eight tiles with uneven heights (tall, short, tall, short in alternating columns), 12px radius, subtle 1px borders, ~8px gaps. Each tile contains a thin-stroke icon in a 20px box at the TOP-LEFT and a 16px sentence-case label anchored BOTTOM-LEFT. Four of the tiles contain studio photography that fills the tile above the label; the other four are flat pale grey with only the icon and label — leave them genuinely empty. Photography brief for the four filled tiles: hands interacting with objects on a seamless grey sweep, with a single violet #8B5CF6 object present in each. Palette: ground #F2F2F2, tiles #FAFAFA, violet #8B5CF6, kraft brown #C89B6A, ink #1A1A1A. No gradients, no shadows on the tiles, no hover-only content.",
    imageRecipe:
      "IMAGE RECIPE — fill [SUBJECT], render at 1:1 or 4:5, 2K, shoot all variants with identical lighting\n\n[SUBJECT: a hand lifting a violet plastic shopping basket filled with unbranded white cosmetic tubes and jars] photographed on a seamless light grey studio sweep, one large soft key light from the upper left with a subtle fill, soft short shadow directly beneath the object, STRICT palette: light grey, white, one violet #8B5CF6 object, natural skin tone, no other hue, crisp commercial product realism, shallow depth of field, object centred with even margins, no brand marks, no text, no background props."
  },

  {
    id: "content-architecture",
    title: "The Content Architecture",
    styleLabel: "paper mono × type-as-image",
    family: "mono-technical",
    image: "screenshots/Screenshot 2026-07-25 224015.png",
    source: "https://www.contentarchitecture.dev/",
    summary:
      "A hard vertical split: warm paper and editorial sans on the left, a black panel on the right filled with the product name spiralling inward as concentric type. A status bar of key facts pins the footer.",
    vocabulary: [
      "hard vertical split",
      "concentric spiral type",
      "warm paper ground",
      "uppercase mono overline",
      "rust inline emphasis",
      "status readout footer",
      "split-word button",
      "type-as-image"
    ],
    notes: [
      "The right panel is entirely typographic — the phrase 'THE CONTENT ARCHITECTURE' repeated in tightening concentric rings on black. No illustration, no photo, and it's more distinctive than either.",
      "The footer is a four-column status readout (NEXT 16.X / SANITY V6 / TS: STRICT / DRIFT: 0) in uppercase mono — engineering credibility as furniture.",
      "The CTA is one button split visually into two blocks reading GET | ACCESS, divided by a hairline.",
      "Body copy uses a rust/terracotta tint on specific technical nouns inside otherwise black paragraphs.",
      "Uppercase mono overlines top and bottom bracket the headline; the display face is a clean editorial sans, not mono.",
      "The nav floats as a dark capsule straddling the split line."
    ],
    palette: ["#EDE9E0", "#0D0D0D", "#A8552F", "#6B655C", "#FFFFFF", "#1C1C1C"],
    typeStack: {
      display: "Editorial sans, 600, 64px, −2% tracking",
      mono: "Uppercase mono, 12px, +6% tracking, for overlines / nav / status bar",
      body: "Grotesk 400, 16px with rust-tinted keywords"
    },
    brief:
      "Sell a codebase to engineers who distrust marketing. Split the viewport hard down the middle: warm paper on the left for the argument, black on the right for the artwork — and make the artwork out of the product's own name, repeated in concentric rings spiralling to a point. No illustration, no screenshot, no gradient. Bracket the headline with uppercase monospace overlines, tint the technical nouns in the body rust so they read as a scannable index, and pin a status-bar footer of version facts across the bottom. The whole page should feel like a well-set spec sheet.",
    prompt:
      "Build a landing hero as a hard 50/50 vertical split with NO gutter: left half warm paper #EDE9E0, right half near-black #0D0D0D. Right half: fill it entirely with the product name repeated as CONCENTRIC RINGS OF TYPE spiralling inward to a point near the centre, white on black, tracking tightening as the rings shrink, over a faint dot grid — this is the only artwork on the page. Left half: an uppercase 12px mono overline with +6% tracking; a three-line headline at 64px weight 600 in an editorial sans with −2% tracking; a 3-line 16px body paragraph in which specific technical nouns are tinted rust #A8552F; a second uppercase mono line beneath it; then a single black CTA button visually split into two blocks by a 1px hairline, reading 'GET | ACCESS'. Pin a footer status bar across the bottom of the left half: two rows × four columns of uppercase 11px mono key:value readouts. Float a dark capsule nav across the top straddling the split, containing a small hatched logo mark and 6 uppercase mono links. Zero border radius except the nav capsule. No shadows, no gradients, no photography.",
    imageRecipe:
      "IMAGE RECIPE — fill [PHRASE], render at 1:1, 2K\n\n[PHRASE: THE CONTENT ARCHITECTURE] typeset in uppercase monospace and repeated continuously along a tight logarithmic spiral that winds inward to a single point at the centre, white type on pure black, letter-spacing and type size decreasing smoothly toward the centre so the outer rings are legible and the inner rings compress to texture, a faint dark dot grid visible in the background, STRICT palette: pure black and white only, absolutely no colour, no glow, no gradient, no other objects, perfectly square composition, generous black margin at the outer edge."
  },

  {
    id: "langbase",
    title: "Langbase",
    styleLabel: "blueprint grid × gradient swatches",
    family: "mono-technical",
    image: "screenshots/Screenshot 2026-07-25 224108.png",
    source: null,
    summary:
      "Pure black with a dashed blueprint grid and small corner ticks, where the only colour is a scattered field of gradient swatch bars arranged like a Gantt chart to the right of the headline.",
    vocabulary: [
      "dashed blueprint grid",
      "corner tick marks",
      "gradient swatch bars",
      "celled logo grid",
      "keycap glyph in button",
      "pure black ground",
      "left-aligned hero",
      "measurement furniture"
    ],
    notes: [
      "The dashed grid with small square corner ticks reads as a design-tool artboard — the page presents itself as a canvas.",
      "Colour appears only as ~14 small gradient bars (violet→pink, amber→orange) scattered at varying widths across the grid, staggered like a Gantt chart.",
      "The hero is left-aligned inside the grid rather than centred, occupying roughly the left third.",
      "The primary button embeds a ⌘ keycap glyph before the label — a developer signal in three pixels.",
      "The logo wall is a strict 6×2 table of bordered cells, with the 'Trusted by' line occupying the first cell rather than sitting above the grid.",
      "Absolute black background, not near-black — the gradients are the only luminance."
    ],
    palette: ["#000000", "#2A2A2A", "#8B7DF5", "#E58AA8", "#E8A24A", "#D2622A"],
    typeStack: {
      display: "Grotesk 600, 48px, −2% tracking, two lines",
      body: "Grotesk 400, 15px at 70% white",
      ui: "14px in pill buttons with an inline keycap glyph"
    },
    brief:
      "Present a developer platform as an open artboard. Take the background to absolute black and lay a dashed blueprint grid over it with small square ticks at the corners of the working area, so the page announces itself as a canvas under construction. Left-align the hero inside that grid instead of centring it. Then introduce colour exactly once, as a scattered field of small gradient swatch bars staggered across the grid like a Gantt chart — abstract, rhythmic, and the only luminance on the page. Put a ⌘ keycap inside the primary button. Build the logo wall as a bordered table where the 'Trusted by' line takes the first cell.",
    prompt:
      "Build a landing hero on PURE BLACK #000000. Overlay a dashed 1px grid in #2A2A2A defining a working area inset from the viewport, with small solid square tick marks at each corner of that area and at section boundaries. Nav: a wordmark with a ⌘ keycap mark, 8 links with a chevron on the first, and a white rounded-full 'Sign Up' button. A centred announcement line with a ⌘ glyph and an underlined link. Hero: LEFT-ALIGNED within the grid, occupying the left third — a two-line headline at 48px weight 600 with −2% tracking in white; a 2-line 15px subhead at 70% white; a white rounded-full primary button containing an inline ⌘ KEYCAP GLYPH before its label, beside a dark outlined secondary button. To the right of the hero, scatter roughly 14 small GRADIENT SWATCH BARS of varying widths (60–220px) and 24px height across the grid cells, staggered vertically like a Gantt chart, using violet→pink (#8B7DF5→#E58AA8) and amber→orange (#E8A24A→#D2622A) gradients with a faint noise texture — these are the only colour on the page. Below, a logo wall as a strict 6×2 table of bordered cells in #1A1A1A hairlines, where the FIRST CELL contains a two-line 'Trusted by developers at 5000+ companies' label and the remaining cells each hold one white logo. No glows, no rounded cards, no photography.",
    imageRecipe:
      "IMAGE RECIPE — fill [SUBJECT], render at 16:9, 2K\n\n[SUBJECT: a field of small horizontal gradient bars scattered across a black canvas] arranged at staggered vertical positions with varying widths like a Gantt chart, each bar a smooth two-stop gradient — half of them violet to pink, half amber to burnt orange — with fine film grain across each bar, set over a faint dashed dark-grey grid with small square tick marks at the corners, STRICT palette: pure black, dark grey grid lines, violet #8B7DF5, pink #E58AA8, amber #E8A24A, burnt orange #D2622A, no other hue, completely flat and abstract, no objects, no glow, no text, the LEFT THIRD of the frame left empty black."
  },

  {
    id: "fora",
    title: "Fora",
    styleLabel: "cinematic dusk × product hero",
    family: "cinematic-atmosphere",
    crossTags: ["app-surface"],
    image: "screenshots/Screenshot 2026-07-25 232650.png",
    source: "https://fora.so/",
    summary:
      "A community platform sold on a single dusk landscape. Rolling hills at last light fill the whole viewport, the type sits in the empty sky, and the product rises out of the land at the bottom edge.",
    vocabulary: [
      "dusk hillscape",
      "sky-as-canvas headline",
      "light-weight tight grotesk",
      "translucent eyebrow pill",
      "atmospheric haze recession",
      "product rising from the land",
      "cyan bloom card",
      "near-black scrub foreground"
    ],
    notes: [
      "The composition is split by the horizon: everything typographic lives in the upper half where the sky is empty, everything product lives in the lower half where the land is. Nothing overlaps — the photograph does the layout.",
      "The headline is light-weight and tightly tracked rather than bold. On a busy photographic ground that's the counter-intuitive choice, and it's why the type reads as calm instead of shouty.",
      "Sampled, the landscape is almost colourless: the dominant values are all #101010–#505050 with a faint cool cast, and the hills that read as 'green' are actually #211E14 and darker. The warmth you think you see is a few percent of tint at very low luminance. The one genuinely saturated thing in the frame is the card's cyan (#84DFDD into a near-white #F3FFFF bloom) — so the eye lands on the product whether you intend it to or not.",
      "The sky gets lighter towards the horizon rather than darker, and stays cool slate until a narrow band of warm grey-brown (#70615E) at the ridge. That single warm band is what makes it read as dusk instead of overcast.",
      "Haze strength does the depth work: far ridges wash out to near-sky value, the foreground scrub stays dark and detailed. No vignette, no blur — just atmospheric perspective.",
      "The app screenshot is cropped by the bottom of the viewport rather than sitting in a frame, so it reads as continuing below the fold instead of being a picture of a product.",
      "Chrome is all translucent-white-over-dark: the eyebrow pill, the nav CTA and the 'Join now' button are the same material at different sizes."
    ],
    palette: ["#0C100A", "#211E14", "#2A3036", "#30383D", "#484A4D", "#70615E", "#84DFDD", "#F3FFFF"],
    typeStack: {
      display: "Inter Display, 400 weight, ~64px, −4% tracking",
      body: "Inter, 400, 16px in warm grey",
      ui: "Inter, 500, 14px in pills"
    },
    brief:
      "Sell a community platform on the feeling of somewhere to belong rather than on features. Give the hero one photograph — open country at dusk, no people, no buildings — and let it fill the entire viewport instead of sitting in a box. Compose to the horizon: the sky is where the words go, the land is where the product goes, and the two never fight. Keep the headline light and tightly tracked so it settles into the image rather than sitting on top of it, and drain colour out of everything except the product screenshot, so the one saturated thing on the page is the thing you're selling. Push the photograph much further towards neutral than feels comfortable — the warmth should be suggested by a single band at the horizon, not spread through the frame. The emotional target is arrival at the end of a long day, not ambition.",
    prompt:
      "Build a landing hero for a community platform using one full-bleed dusk landscape photograph as the entire background — rolling grass hills at last light, sky graduating from cool slate #2A3036 at the top DOWN to a lighter #484A4D and then a narrow band of warm grey-brown #70615E at the horizon, which sits about 55% down the viewport. Everything typographic goes in the sky, centred: a small translucent eyebrow pill (rgba(255,255,255,0.12), 1px rgba(255,255,255,0.2) border, 13px) reading the category; then an H1 in a neutral grotesk at weight 400 — NOT bold — around 64px with −4% letter-spacing, in near-white #F2EFEA, broken over two lines; then a two-line subhead at 16px in rgba(242,239,234,0.62); then a single off-white pill CTA with dark text. Nav across the top: wordmark left of centre, 5 centred text links at 14px, a text 'Login' and a translucent pill 'Get started' on the right. In the lower third, float a product screenshot that is CROPPED by the bottom of the viewport — no frame, no shadow box, just rounded top corners — showing a dark sidebar with 7 icon-and-label nav rows and, beside it, a community card whose artwork is a cyan gradient bloom running #84DFDD into a near-white #F3FFFF hot spot, with a circular avatar, a name, an avatar stack with member count, and a full-width 'Join now' pill. That cyan is the ONLY saturated colour on the page; the landscape and every piece of chrome stay between #101010 and #505050. No glow, no neon, no glassmorphism panels floating in space, no gradient mesh backgrounds.",
    imageRecipe:
      "IMAGE RECIPE — fill [SUBJECT], render at 16:9, 2K\n\n[SUBJECT: rolling grass hills receding to a far ridgeline at last light] photographed on a long lens from a low vantage, horizon placed 55% down the frame, sky cool slate at the top and lightening DOWNWARD to a narrow warm grey-brown band at the ridge, hills reading as barely-tinted near-black rather than green, dense low scrub across the immediate foreground held dark and sharply detailed, STRICT palette: #0C100A, #211E14, #2A3036, #30383D, #484A4D, #70615E — nothing more saturated than those, no green cast, no golden hour, no orange, deep atmospheric haze so each successive ridge washes lighter towards the sky value, soft overcast dusk with no visible sun and no lens flare, fine natural grain, the UPPER THIRD held open and near-empty for typography, no people, no buildings, no roads, no text."
  },

  {
    id: "dub",
    title: "Dub",
    styleLabel: "near-white × product hero",
    family: "app-surface",
    image: "screenshots/Screenshot 2026-07-26 000659.png",
    source: "https://dub.co/",
    summary:
      "A link attribution platform sold entirely on its own dashboard. The marketing layer is achromatic — white on white on white — and every colour in the frame lives inside the product screenshot.",
    vocabulary: [
      "blueprint grid wash",
      "achromatic marketing layer",
      "band change at the seam",
      "notched panel edge",
      "section switcher chips",
      "black pill + ghost pill",
      "split announcement pill",
      "populated dashboard proof"
    ],
    notes: [
      "Hierarchy is built out of value steps so small they barely register: #FFFFFF ground, #F0F0F0 lower band, #E5E4E5 device bezel, #171717 type. The only pure #000000 on the page is the primary CTA — which is why your eye goes straight to it.",
      "The whole marketing layer is colourless. Every hue in the frame — the violet chart line #9C78F0, the chip icons in violet, green and orange — is inside the product screenshot. Colour is used as evidence that the app exists, not as decoration.",
      "A faint blueprint grid covers only the hero and fades out at its edges. It reads as 'infrastructure' without spending any colour to say so.",
      "The background changes value partway down and the panel edge is notched — it curves up around the section-switcher chips. The chips straddle the seam, so they belong to both the marketing page and the product below it.",
      "The dashboard is shown fully populated with specific figures — $210,429.00, real date ranges, badge counts of 2, 4, 12 — rather than rounded placeholders. The specificity is doing the persuading.",
      "The product shot is cropped by the bottom of the viewport and sits in a thin bezel, so it reads as a real screen continuing past the fold rather than a picture pasted onto the page.",
      "The announcement pill is split in two by a hairline divider: label on the left, muted 'Read more ↗' on the right. One control, two levels of emphasis."
    ],
    palette: ["#FFFFFF", "#F0F0F0", "#E5E4E5", "#171717", "#000000", "#9C78F0", "#78D884", "#F09048"],
    typeStack: {
      display: "Neo-grotesk 600, ~56px, −2% tracking, centred",
      body: "Neo-grotesk 400, 18px in mid grey, two centred lines",
      ui: "Neo-grotesk 500, 14px in nav and pills"
    },
    brief:
      "Sell a developer-adjacent product by showing the product and nothing else. Strip every drop of colour out of the page you build around it, so that the only saturated pixels a visitor sees are inside the app — the chart line, the feature icons. Build hierarchy from value steps of two or three percent rather than from accent colours, and spend your one true black on the single button you want pressed. Fill the dashboard with awkwardly specific numbers instead of round ones; a figure like $210,429.00 is read as a real account, and $200,000 is read as a mockup. The page should feel like a well-lit product photograph of software.",
    prompt:
      "Build a SaaS landing hero on pure white #FFFFFF with a faint blueprint grid — 1px lines at rgba(0,0,0,0.04) forming ~120px squares — covering only the hero area and fading to nothing at its edges. Centred stack: a split announcement pill (white, 1px #E5E4E5 border, fully rounded) divided by a hairline into a label on the left and a muted 'Read more ↗' on the right; then an H1 in a neo-grotesk at weight 600, ~56px, −2% letter-spacing, in #171717; then a two-line subhead at 18px in #6B6B6B; then two side-by-side pills — a solid #000000 primary with white text, and a white ghost with a #E5E4E5 border. Below that, change the page ground to #F0F0F0 with a NOTCHED top edge that curves upward around the centre, and sit three section-switcher chips on that seam — white pills, each with a small rounded-square app icon in violet, green and orange respectively. Under them, a product screenshot in a thin #E5E4E5 bezel with ~14px rounded corners, cropped by the bottom of the viewport: a narrow icon rail, a grouped sidebar with section headings and numeric badges, and a main area holding a revenue card with a violet #9C78F0 line chart over a pale fill, a tasks card with counts, and a links card. Fill it with specific non-round data. Keep the ENTIRE page outside the screenshot achromatic — no accent colour, no gradients, no shadows beyond a 1px border.",
    imageRecipe:
      "IMAGE RECIPE — this hero's image is a UI render, not a photograph; fill [SUBJECT], render at 16:10, 2K\n\n[SUBJECT: an analytics dashboard for a link attribution product] rendered as a crisp light-mode interface screenshot, three-part layout of narrow icon rail, grouped text sidebar with numeric badges, and a main grid of rounded cards, hero card showing a large currency figure above a single violet line chart with a pale gradient fill, secondary cards showing a task list and a link list with small monochrome icons, STRICT palette: #FFFFFF surfaces, #F6F6F6 sidebar, #E5E4E5 hairline borders, #171717 text, #6B6B6B secondary text, violet #9C78F0 as the ONLY chart colour, generous white space, 8px rounded corners on cards, no drop shadows, no glassmorphism, no dark mode, no photographic elements, text rendered as crisp small UI labels, straight-on orthographic view with no perspective tilt."
  },

  {
    id: "velorix",
    title: "Velorix",
    styleLabel: "athletic photo × giant wordmark",
    family: "cinematic-atmosphere",
    crossTags: ["editorial-grotesk"],
    image: "screenshots/Screenshot 2026-07-26 001115.png",
    source: null,
    summary:
      "A fitness brand shot from below against open sky, with an oversized HEALTH wordmark running along the bottom that the athlete stands in front of. The overlap is the whole idea.",
    vocabulary: [
      "shot-against-sky isolation",
      "wordmark occlusion",
      "three-quadrant hero split",
      "floating capsule nav",
      "stacked declarative headline",
      "borrowed accent from wardrobe",
      "low-angle heroic framing",
      "full-stop cadence"
    ],
    notes: [
      "The giant HEALTH wordmark passes BEHIND the subject — her torso interrupts the middle letters. That single occlusion is what stops it reading as text laid over stock photography and makes it read as one constructed image.",
      "Shooting up against open sky is what makes the whole layout possible: there is no background detail to compete with, so type can go anywhere without a scrim.",
      "The hero splits into three: headline in the empty left quadrant, subject through the middle, body copy and CTA in the right quadrant. The photograph is doing the column layout.",
      "Only two hues exist in the frame — cool blue-grey sky and the orange of the sportswear. The CTA is #E83B15, lifted straight out of the clothing, so the button looks like it belongs to the photograph rather than to the page.",
      "The headline is three short stacked lines each ending in a full stop. The periods are what turn it from a slogan into a set of declarations.",
      "The nav is a floating rounded capsule detached from the top edge, translucent over the sky, with its own white pill CTA nested inside it — a control inside a control.",
      "The 'New' badge is a two-tone pill: near-black lozenge for the word, lighter track for the message. Same trick as a split announcement pill, at small size."
    ],
    palette: ["#060407", "#68706F", "#78A0B0", "#A0B8C0", "#D8A890", "#F0603C", "#E83B15", "#FDFDFE"],
    typeStack: {
      display: "Grotesk 600, ~52px, three stacked lines, tight leading",
      wordmark: "Grotesk 700, ~150px, set to the full page width",
      body: "Grotesk 400, 15px in white at ~85% opacity"
    },
    brief:
      "Sell a training service on capability rather than aspiration. Shoot the athlete from below against nothing but sky — no gym, no equipment, no location — so the figure is completely isolated and the frame stays empty enough to hold type. Then run the category word across the bottom at enormous size and let the subject stand in front of it, so image and typography are physically interlocked instead of stacked. Keep the palette to exactly two things: the cool of the sky and the heat of what she's wearing, and pull the button colour out of the wardrobe so the interface looks native to the photograph. Write the headline as short declarations with full stops, not as a promise.",
    prompt:
      "Build a full-viewport fitness landing hero from a single photograph: an athlete shot from a LOW angle against open sky, mid-frame, no location context, sky graduating from #78A0B0 at the top through pale #A0B8C0 to grey cloud #68706F at the bottom. Layer order matters — set the word 'HEALTH' in a grotesk at weight 700 across the full page width along the bottom edge in #FDFDFE, positioned BEHIND the subject so her body occludes the centre letters, with the baseline cropped by the viewport. In the empty left quadrant: a two-tone 'New' badge pill (near-black lozenge plus lighter track), then an H1 at ~52px weight 600 in white, broken into three stacked lines with tight leading, each line ending in a full stop. In the right quadrant: three lines of body copy at 15px in rgba(255,255,255,0.85), then a white pill CTA with a square #E83B15 arrow tile on its right end. Across the top, a floating translucent capsule nav detached from the edge — rgba(255,255,255,0.15) with a hairline border, 5 text links, and a solid white pill CTA nested inside it. The ONLY warm colour anywhere is the orange of the sportswear and the CTA tile, both around #E83B15–#F0603C. No gym equipment, no dark scrim, no gradient overlay, no drop shadows on type.",
    imageRecipe:
      "IMAGE RECIPE — fill [SUBJECT], render at 3:2, 2K\n\n[SUBJECT: an athlete standing with hands on hips, head turned up and laughing] photographed from a LOW camera angle so the figure is silhouetted entirely against open sky with no horizon, no buildings and no equipment in frame, wearing a bright orange training top, overcast diffused daylight with soft wraparound modelling and no hard shadows, sky graduating cool blue-grey from #78A0B0 down to #68706F with soft cloud texture, STRICT palette: cool blue-grey sky, warm skin around #D8A890, sportswear orange #F0603C, nothing else saturated, natural skin texture retained, shot on a 50mm at f/4 so the subject is sharp and the sky stays clean, subject occupying the CENTRE THIRD of the frame with the left and right thirds left open for typography, full body from mid-thigh up, no text, no logos, no motion blur."
  },

  {
    id: "optiva",
    title: "Optiva",
    styleLabel: "acid yellow × near-black",
    family: "neon-dark",
    crossTags: ["editorial-grotesk"],
    image: "screenshots/Screenshot 2026-07-26 004654.png",
    source: null,
    summary:
      "A consulting template on near-black with one acid yellow. Its best move is the about statement: a single paragraph where the opening runs at full white and the remainder drops to half opacity, with the break landing mid-line.",
    vocabulary: [
      "opacity-fill statement",
      "mid-line dim break",
      "acid yellow on near-black",
      "dot-and-caps eyebrow",
      "CTA parked at the paragraph's right",
      "olive-graded boardroom photography",
      "numbered accordion rows",
      "rule-split stat block"
    ],
    notes: [
      "THE ABOUT STATEMENT. One paragraph, one type size, one weight — the only thing that changes is alpha. The opening runs at #FFFFFF and the remainder drops to #8A8A8A, which on this #0A0A0A ground is white at 52% opacity. Nothing else about the text changes.",
      "The break lands MID-LINE, immediately after the word 'help' — not at a line break and not at a sentence end. That's the entire trick. Break it at a sentence and you get two paragraphs; breaking it mid-clause reads as reading progress, a thought still arriving.",
      "It's the frozen state of a scroll-linked opacity fill — the kind that lights words as you scroll. Captured static it still works, which is the test of whether the effect was carrying the design or just decorating it.",
      "The value: a block of copy gets real hierarchy without a second type size, weight or colour. Compare it to bolding a phrase, which shouts; dimming the remainder instead makes the opening feel like the part already understood.",
      "The 'Learn more' pill is parked at the right edge, vertically centred against the paragraph rather than below it, so the band reads as one horizontal row — eyebrow, statement, action.",
      "Acid yellow #FAF032 is the only chroma anywhere in the interface: eyebrow dot, both pill CTAs, the highlighted accordion row. The photography carries an olive-green grade (#5A6428) that rhymes with the yellow without matching it — so the images feel art-directed for the palette rather than dropped into it.",
      "Below the statement the band splits: image tile on the left, an oversized stat and its supporting line on the right, divided by a hairline vertical rule.",
      "Read the palette with care — this is a template presentation, not a page capture. Two page renders are layered at an angle over a blurred backdrop and the rear one is veiled: sampling its cream ground returns a blue-grey #B4BEC8, which is the veil, not the design. Only the front render is true colour."
    ],
    palette: ["#0A0A0A", "#5A6428", "#646E32", "#8A8A8A", "#E1E1E1", "#FAF032", "#FFFFFF"],
    typeStack: {
      statement: "Grotesk 500, ~30px, ~1.35 leading, mixed alpha",
      "statement alpha": "#FFFFFF live → rgba(255,255,255,0.52) receded",
      eyebrow: "Grotesk 500, ~10px, ~0.12em tracking, caps, with a yellow dot",
      stat: "Grotesk 500, ~34px, white"
    },
    brief:
      "Give a services brand a voice that sounds measured rather than loud. Work on near-black with exactly one acid colour and spend it only on things you can click. For the about section, resist the urge to write a headline and a paragraph — write one continuous statement and let opacity do the hierarchy: run the opening at full white, drop the rest to about half, and put the break mid-clause rather than at a sentence end so it reads as a thought still landing. Park the call to action at the right of that same row so the whole band is one gesture. Grade the photography towards the accent colour instead of leaving it neutral, so the images look commissioned for the palette.",
    prompt:
      "Build an ABOUT band for a consulting site on a #0A0A0A ground, full-bleed, generous vertical padding. Top row, left-aligned: a small eyebrow made of a #FAF032 dot followed by 'ABOUT US' in a grotesk at 10px, weight 500, 0.12em letter-spacing, uppercase, in #E1E1E1. Below it, a single statement paragraph in the same grotesk at ~30px, weight 500, ~1.35 line-height, occupying about 60% of the container width, and split by OPACITY ALONE — the first sentence and a half in solid #FFFFFF, the remainder in rgba(255,255,255,0.52). The transition must fall MID-LINE and mid-clause, not at a line break or a full stop. Do not change size, weight, family or hue across the break. Optionally drive the split from scroll position so words light up as the section enters the viewport, but it must read correctly with no scroll applied. At the right edge of that same row, vertically centred against the paragraph, place a fully-rounded #FAF032 pill with dark text and a trailing ↗ arrow. Below, a two-column row: a portrait photograph in a rounded tile on the left, and on the right a large stat figure at ~34px in white with a supporting line beneath, the two columns divided by a 1px rgba(255,255,255,0.12) vertical rule. Acid yellow appears ONLY on the dot and the pill. No gradients, no glow, no borders around the section, no second accent colour.",
    imageRecipe:
      "IMAGE RECIPE — fill [SUBJECT], render at 3:2, 2K\n\n[SUBJECT: a consultant mid-gesture explaining something across a meeting table] photographed over the shoulder of a listening client who sits soft and out of focus in the foreground, shallow depth of field at f/2, available light from a window behind the subject, the whole frame graded towards deep olive-green so the background office reads #5A6428 to #646E32 with the subject's face held neutral, STRICT palette: olive-green environment, near-black shadows #0A0A0A, neutral skin, no blue cast, no orange teal grade, no acid yellow in the photograph itself, natural film grain, candid unposed body language with hands in motion and no eye contact with camera, LEFT THIRD of the frame kept dark and simple for typography, no text, no logos, no laptop screen content."
  },

  {
    id: "acru",
    title: "ACRU",
    styleLabel: "lime finance × dense dashboard",
    family: "app-surface",
    image: "screenshots/Screenshot 2026-09-17 015456.png",
    source: null,
    summary:
      "A personal-finance workspace that makes a lot of information feel unusually calm. A persistent left rail and a tall transaction column frame a softly gridded centre of charts, limits, health signals, and goals, with lime used only for money moving in the right direction.",
    vocabulary: [
      "three-rail finance dashboard",
      "lime savings signal",
      "nested transaction tree",
      "soft card grid",
      "micro-chart stacks",
      "wallet rail",
      "specific currency figures",
      "muted utility icons"
    ],
    notes: [
      "The structure has three durable zones: navigation on the left, a varied analytical grid in the centre, and cards plus transaction history on the right. This makes the dashboard feel like a workspace, not a collection of floating widgets.",
      "Lime is reserved for constructive financial signals - savings, paid-down goals, and the debit card - while the warning and spending series use quiet yellow and orange. The colour carries meaning before it carries decoration.",
      "The Transaction item expands inline into a small indented tree. That one disclosure pattern explains the hierarchy of the product without adding a second navigation system.",
      "The main balance chart is deliberately low-contrast until the active day: the selected column becomes lime, gains an adjacent tooltip, and turns the chart from wallpaper into a control.",
      "Cards have modest radii, pale fills, and almost no shadow. Separation comes from very small value changes and generous gutters rather than dark outlines.",
      "The right rail treats payment operations as a separate cadence: card, quick actions, people, then ledger. Repeating the action tiles makes the rail scannable without competing with the analysis grid.",
      "Amounts are concrete ($12,450, $15,780, $7,000/$10,000) and paired with small deltas. The precision makes the mock account read as an actual financial record."
    ],
    palette: ["#FFFFFF", "#F7F7F5", "#ECECE8", "#161A17", "#A8D34F", "#D7E8A9", "#F2B35A", "#5D9D68"],
    typeStack: {
      display: "Clean grotesk 600, 24px for balances and financial totals",
      ui: "Grotesk 500, 11-13px for labels, navigation, and controls",
      data: "Grotesk 600, tabular-friendly figures with muted 10px supporting labels"
    },
    brief:
      "Make money management feel orderly rather than clinical. Use a fixed left navigation rail to ground the product, a broad centre for financial interpretation, and a narrower right rail for the immediate actions and ledger people use every day. Keep the surfaces almost white and let lime mean only positive movement: savings, progress, and healthy balances. Every number should be specific enough to feel lived-in. The page needs to carry serious density, but the hierarchy should be visible from the first scan - overview first, attention items next, details last.",
    prompt:
      "Build a light-mode personal-finance dashboard inside a large #F7F7F5 rounded application frame. Create a three-rail layout: a 145px left sidebar with a wordmark, icon-and-label navigation, an expanded Transactions item with three indented children, and a dark 'Upgrade now' card at the bottom; a flexible centre analysis area; and a 235px right operations rail. In the centre, place a large $12,450 balance card with a seven-day bar chart, mostly pale grey columns and one selected lime #A8D34F column with a compact white tooltip. Beside it, stack three totals. Below, use a varied grid for a monthly spending-limit bar, an advice card, cost-analysis legend, semicircle financial-health gauge, and a goal tracker with thumbnail rows. Right rail: a green debit-card panel, a 5-up quick-action row, avatar payment chips, then transaction history with merchant icons and signed amounts. Use #FFFFFF and #ECECE8 surfaces, #161A17 type, modest 8-12px radii, 12-16px gutters, hairline dividers, and no heavy shadows. Reserve lime for positive finance states; use soft amber only for spending or caution.",
    imageRecipe:
      "IMAGE RECIPE - this reference is a UI render; fill [SUBJECT], render at 16:10, 2K\\n\\n[SUBJECT: a personal-finance management dashboard] rendered as a crisp light-mode desktop application within a rounded pale-grey frame, three-rail layout of narrow navigation sidebar, broad analytical card grid, and narrow operations/transaction sidebar, dominant balance card with a seven-day bar chart and one active lime-green bar with a small tooltip, stacked financial totals, budget limit, health gauge, goal rows, lime debit-card panel, quick-action icon tiles, avatars, and merchant ledger, STRICT palette: white #FFFFFF, warm off-white #F7F7F5, pale divider grey #ECECE8, charcoal #161A17, lime #A8D34F only for positive money states, soft amber #F2B35A only for spending, precise small UI labels and non-round currency amounts, 8-12px card radii, very subtle depth, straight-on orthographic view, no photography, no dark mode, no gradients."
  },

  {
    id: "logip",
    title: "logip",
    styleLabel: "soft operations × people rail",
    family: "app-surface",
    image: "screenshots/Screenshot 2026-09-17 015633.png",
    source: null,
    summary:
      "A project-management dashboard built like a quiet desk: navigation left, work and performance in the centre, and a human activity feed on the right. Its defining move is making the collaboration rail feel as considered as the task list.",
    vocabulary: [
      "people-first activity rail",
      "soft white workspace",
      "dual-line performance chart",
      "dark chart tooltip",
      "circular task glyphs",
      "pale blue message bubble",
      "rule-led three-column layout",
      "single-accent upgrade pill"
    ],
    notes: [
      "The page is divided by two long vertical rules rather than card borders: sidebar, working canvas, then activity. The continuous lines make the whole app read as one surface.",
      "The right rail opens with one person card before becoming an activity stream. Putting a face, name, and call controls first makes collaboration feel present rather than buried in a notification list.",
      "The performance chart earns its dark tooltip by keeping every other element quiet. A narrow black hover state contains both series and provides the strongest contrast on the page.",
      "Task rows are simple: a circular category glyph, task name, status dot and label, duration, then an overflow menu. The information stays readable because each column repeats exactly.",
      "Pastel blue is used as a service colour - the upgrade control, shared-file row, and message bubble - not as a page-wide brand wash. The pale amber chart line gives the data a second readable series without turning into an alert colour.",
      "The active Tasks item is marked through a stronger icon and text weight instead of a filled nav tab. The navigation remains airy even with the current location clearly established.",
      "Whitespace around the main greeting, chart, and task section creates a deliberate reading order: team status, performance, then actual work."
    ],
    palette: ["#FFFFFF", "#FAFAF8", "#F0F0ED", "#121622", "#6D717B", "#B9D8F3", "#F1C77D", "#4D92C5"],
    typeStack: {
      display: "Rounded geometric grotesk 600, 24px for the greeting and section titles",
      ui: "Rounded grotesk 500, 12-14px for navigation, tasks, and activity",
      data: "Compact grotesk 600 for KPI figures; 10-11px labels and timestamps"
    },
    brief:
      "Design a project workspace that feels personal without becoming decorative. Treat the application as a single pale surface divided by vertical rules, then give its three zones distinct jobs: wayfinding to the left, focused work in the centre, and people on the right. Keep the centre intentionally spare so the performance graph and active tasks have room to breathe. Make the activity rail genuinely useful - a teammate card, comments, files, and a message composer - so collaboration is visible at a glance. Spend colour lightly: calm blue for shared and actionable moments, warm amber for a secondary chart series, and a dark tooltip only at the point of interaction.",
    prompt:
      "Build a light-mode project-management dashboard on #FFFFFF with two full-height #F0F0ED vertical dividers creating a 175px sidebar, a broad central work canvas, and a 250px right activity rail. Left sidebar: small abstract dot logo and wordmark, icon-and-label items for Home, Projects, Tasks, Team, and Settings; make Tasks active with darker text and icon weight rather than a filled background; add a pale upgrade card and help/log-out links at the bottom. Centre: greeting 'Hello, Margaret', short muted subhead, date with calendar icon, a three-item KPI row, then a Performance section containing a clean two-line chart in blue #4D92C5 and amber #F1C77D. Show one focused day with a compact near-black tooltip holding values for both lines. Below, render a Current Tasks table with circular task glyphs, task titles, colored status dots, time estimates, and overflow menus. Right rail: top profile card with circular portrait, name, handle, call/video/more controls; then an Activity feed with avatar-led comments, pale-blue #B9D8F3 message and file rows, and a fixed message composer. Use 12-16px spacing, restrained 10-14px corner radii only on contained utilities, #121622 text, soft grey secondary copy, no strong card shadows, no dark page background, and no decorative gradients.",
    imageRecipe:
      "IMAGE RECIPE - this reference is a UI render; fill [SUBJECT], render at 16:10, 2K\\n\\n[SUBJECT: a collaborative project-management dashboard] rendered as a crisp light-mode desktop application on white, three columns separated by fine full-height divider rules: a narrow icon-and-label sidebar, a broad work canvas with greeting, KPI strip, two-line performance chart, and task table, plus a right collaboration rail with team-member profile card, avatar-led activity feed, file share, message bubble, and composer, STRICT palette: white #FFFFFF, warm pale grey #FAFAF8, divider #F0F0ED, charcoal #121622, muted grey #6D717B, service blue #B9D8F3/#4D92C5, secondary chart amber #F1C77D only, clean rounded grotesk type, small precise UI labels, 10-14px radii on contained controls, no photographs beyond tiny circular avatars, no heavy shadows, no dark mode, no gradients, straight-on orthographic view."
  },

  {
    id: "pixelcot",
    title: "Pixelcot",
    styleLabel: "extension login × orbit diagram",
    family: "app-surface",
    image: "screenshots/Screenshot 2026-09-17 020724.png",
    source: null,
    summary:
      "A writing-assistant sign-in screen that uses the empty half of the page to prove where the product works. The credential form stays ordinary and compact while a concentric compatibility map gives browsers, inboxes, and networks a shared centre.",
    vocabulary: [
      "split auth canvas",
      "concentric compatibility orbit",
      "blue product nucleus",
      "frosted dot grid",
      "platform-logo satellites",
      "quiet social sign-in row",
      "powder-blue feature panel",
      "soft perimeter glow"
    ],
    notes: [
      "The page splits cleanly into two equal jobs: credentials on the left and product explanation on the right. The illustration is not ornamental - it answers the compatibility question before the user asks it.",
      "The central blue product mark acts as a nucleus, with Gmail, Outlook, browser, Apple, Yahoo, and LinkedIn marks arranged on three rings. The orbit geometry makes a long integrations list instantly scannable.",
      "A barely-visible square grid and a few blurred blue tiles sit behind the login mark. They give the blank form half enough texture to feel designed without reducing input contrast.",
      "The form itself stays intentionally conventional: labelled fields, a remembered-state checkbox, recovery link, full-width primary action, then a divider and three provider buttons. Familiarity is doing the trust work.",
      "The right panel uses a single powder-blue wash and fine white orbit lines. Its short headline highlights only 'Everywhere' in saturated blue, connecting the promise to the scattered platform marks.",
      "Small pagination dashes at the bottom reveal that the product illustration can become an onboarding carousel without changing the authentication structure.",
      "The outer frame has a cool blue edge glow and generous inner margins, making the whole login screen read like one contained product surface instead of a web page with two cards."
    ],
    palette: ["#FFFFFF", "#F7FAFF", "#DDECFF", "#2D52D8", "#2248C8", "#B9D5FF", "#171B26", "#E8EDF5"],
    typeStack: {
      display: "Rounded neo-grotesk 600, 20-24px for login and feature headlines",
      ui: "Neo-grotesk 500, 11-13px for labels, controls, and assistance text",
      accent: "Same display face, blue #2D52D8 only on the promise keyword"
    },
    brief:
      "Make a browser-based writing tool feel immediately useful at the point of sign-in. The credential form should remain low-friction and familiar, while the unused half of the viewport explains the product in one visual sentence: it works wherever someone writes. Build the feature side as an orbital map around the product mark rather than a grid of integrations, so the many destinations still feel like one connected system. Keep the colour field exceptionally light and clean, reserve saturated blue for the product and the key word in the promise, and let the form remain the most legible object on the page.",
    prompt:
      "Build a centred desktop sign-in surface on a nearly white #F7FAFF page, inset inside a large white 18px rounded frame with a soft cool-blue perimeter glow. Split it 50/50. Left half: small blue app icon and wordmark at top; a faint 5-by-3 square grid with a few soft blue tiles behind a central login glyph; then a compact 275px-wide form with 'Login to your account!' heading, email and password inputs with line icons, a remember-me checkbox, blue forgot-password link, a full-width #2D52D8 Login button, a thin 'Or login with' divider, and three equal icon-only provider buttons for Google, Apple, and Microsoft. Right half: a #DDECFF rounded feature panel with the centred headline 'Write Better Everywhere', setting only 'Everywhere' in #2248C8. Below it, build three fine white concentric rings around a blue circular product nucleus and place small circular Gmail, Outlook, browser, Messenger, Apple, Yahoo, and LinkedIn marks at different radii. Add a two-line compatibility statement at the bottom and three tiny carousel dashes. Use #171B26 text, 11-13px UI copy, fine #E8EDF5 form borders, generous breathing room, minimal shadows, and no dark surfaces or decorative gradients.",
    imageRecipe:
      "IMAGE RECIPE - this reference is a UI render; fill [SUBJECT], render at 16:10, 2K\\n\\n[SUBJECT: a writing-assistant sign-in screen] rendered as a polished light-mode desktop authentication interface inside a large white rounded frame, split exactly in half: left side contains a compact labelled email/password form, recovery link, solid blue submit button, and three social sign-in buttons over an extremely faint square grid; right side is a powder-blue feature panel with a bold 'write better everywhere' promise and a concentric orbital diagram, blue product mark in the middle and seven small familiar platform marks arranged as satellites, STRICT palette: white #FFFFFF, near-white #F7FAFF, powder blue #DDECFF, saturated product blue #2D52D8/#2248C8, soft border #E8EDF5, charcoal #171B26, very subtle cool-blue edge glow, rounded utility surfaces, precise readable UI labels, no photography, no dark mode, no noisy textures."
  },

  {
    id: "kamion",
    title: "Kamion",
    styleLabel: "freight scene × split login",
    family: "app-surface",
    image: "screenshots/Screenshot 2026-09-17 020833.png",
    source: null,
    summary:
      "A logistics dashboard login that puts the freight network on the left and the credentials on the right. An isometric blue highway full of trucks turns a usually generic auth screen into a credible product introduction.",
    vocabulary: [
      "isometric freight diorama",
      "blue road ribbon",
      "split login shell",
      "fleet depth fade",
      "oversized logistics promise",
      "one-arrow submit button",
      "pale-blue CTA pill",
      "framed white canvas"
    ],
    notes: [
      "The left image panel is a complete miniature system: one saturated blue truck travels on the only saturated road while the other fleet vehicles recede in desaturated grey. The composition makes the product's routing role obvious without a diagram.",
      "The road is a strong diagonal that starts at the lower left and carries the eye through the primary truck toward the login panel. It makes the split layout feel connected rather than divided.",
      "The marketing copy is layered directly into the lower third of the scene. A small all-caps descriptor, three-line promise, and restrained proof line are enough; there is no second callout competing with the sign-in action.",
      "The login half has almost no chrome: quiet sign-up text in the top-right, a mark and two-line title, two long fields, recovery link, then one square blue arrow. The empty space is part of the authority.",
      "The primary submit action is represented by an arrow rather than a word. In a freight product it quietly echoes movement and dispatch while remaining a standard directional affordance.",
      "The white app canvas is inset from a royal-blue field. This thin blue surround turns a familiar two-panel login layout into a branded object, not a plain webpage.",
      "The supporting sign-up button within the freight panel is translucent pale blue, so it belongs to the scene without stealing the credential action's saturated blue."
    ],
    palette: ["#FFFFFF", "#F7F9FD", "#2857BE", "#2452B7", "#8CB7F2", "#D9E2F0", "#1F2C55", "#7C879C"],
    typeStack: {
      display: "Geometric sans 400-500, 28-38px for the product and logistics promise",
      ui: "Geometric sans 500, 11-13px for fields, links, and sign-up utility text",
      label: "Uppercase geometric sans, 10px, wide tracking for the freight descriptor"
    },
    brief:
      "Give a logistics network the confidence of a system already in motion. Frame the login experience as a white operational surface set inside the brand's freight-blue field. Use one carefully art-directed isometric scene to carry the marketing half: a bright blue route, a selected blue truck, and a receding grey fleet should tell the whole story of visibility and throughput. Let the diagonal road create momentum into the credential form. On the form side, be almost severe in the reduction - just title, fields, recovery, and an arrow action - so the page feels like infrastructure rather than a marketing campaign.",
    prompt:
      "Build a desktop logistics-dashboard login on a royal-blue #2857BE page field. Inset a large white 16px rounded application canvas with a 50/50 split. Left panel: full-bleed isometric 3D freight-network image showing a bright #2452B7 road ribbon running diagonally from lower-left toward centre-right, one saturated blue semi-truck on the route, and multiple pale desaturated delivery trucks at varying depths on surrounding roads. Tint the image cool blue and let the lower third deepen enough for white text. Overlay an uppercase 10px tracked descriptor, a three-line 38px white promise 'Visibility, Efficiency, Sustainability', a muted proof line, and a wide translucent #8CB7F2 pill inviting network sign-up. Right panel: top-right small 'Don't have an account? Sign Up' text; then a restrained stacked mark, 'Kamion Dashboard Log In' title in #1F2C55, two long 48px white input fields with fine #D9E2F0 borders and right-aligned email/lock icons, a small forgot-password link, and a compact square #2452B7 button containing a white right arrow. Keep the right half mostly empty, use #7C879C supporting text, small 10-13px UI typography, no extra cards, no heavy shadows, no dark panel, and no gradients outside the image lighting.",
    imageRecipe:
      "IMAGE RECIPE - fill [SUBJECT], render at 4:5, 2K\\n\\n[SUBJECT: a freight logistics network rendered as an isometric miniature] viewed from a high three-quarter angle, one saturated cobalt-blue semi-truck travelling along a matching blue multi-lane road that runs diagonally from the lower-left toward the centre-right, several unbranded white and pale-grey delivery trucks on adjacent roads receding into a cool blurred background, STRICT palette: cobalt #2452B7, royal blue #2857BE, icy blue #8CB7F2, pale grey #D9E2F0, white, no warm colours, soft studio daylight, the lower third held slightly darker and uncluttered for white overlaid headline copy, crisp product-visualisation realism, no text, no logos, no people, no aerial city context."
  },

  {
    id: "lentix",
    title: "Lentix",
    styleLabel: "mint landscape × finance",
    family: "painterly-illustrated",
    crossTags: ["editorial-grotesk"],
    image: "screenshots/IMG_139ED73DB0B2-1.jpeg",
    source: null,
    summary: "A stablecoin landing page that grows its financial world out of soft moss. Two metallic tokens emerge from the terrain while a restrained headline and email form float in open air above it.",
    vocabulary: ["moss landscape", "buried metallic tokens", "mint haze", "italic serif turn", "email-as-CTA", "soft horizon split", "finance without charts"],
    notes: [
      "The page is divided by depth rather than a hard line: clear mint air holds the message, then tactile moss takes over the lower half.",
      "A green italic serif line completes the black sans headline, giving the financial promise a more editorial voice.",
      "The coins are only partly visible. Their scale and material imply a larger world below the fold without showing a product dashboard.",
      "The email field and circular arrow are composed as one long capsule, so the conversion action stays visually quiet."
    ],
    palette: ["#EAF3E9", "#BDEFD0", "#68D89A", "#047A51", "#0A0A0A", "#FFFFFF"],
    typeStack: { display: "Wide neutral sans, 500, with a high-contrast italic serif second line", body: "Neutral sans, 400, centred and compact", ui: "Small neutral sans inside rounded controls" },
    brief: "Make institutional digital money feel tangible and alive. Set the promise in a quiet, airy upper field, then let a richly detailed green terrain occupy the lower half. Use two oversized coins as signs of value, partly hidden by the moss. Keep the signup action simple and the typography confident enough to stand apart from the lush image.",
    prompt: "Build a full-viewport stablecoin landing hero on a pale mint #EAF3E9 ground. Place a small logo top-left, two outlined social circles and a black access pill top-right. Centre a large black sans headline at roughly 68px, followed by a green high-contrast italic serif line. Add two lines of body copy and a 425px white email capsule with a green circular arrow button. Fill the lower 55% with a soft, luminous moss landscape; let two large green metallic tokens rise partially from it. Leave clear negative space behind the headline, with no charts or card grid.",
    imageRecipe: "IMAGE RECIPE — fill [SUBJECT], render at 16:9, 2K\n\n[SUBJECT: two oversized unmarked metallic tokens partly buried in a dense rolling moss landscape] photographed like a premium product campaign, one token left and one right, frosted mint atmosphere opening into empty space across the upper half, tactile miniature foliage and soft macro detail, STRICT palette: pale mint #EAF3E9, fresh green #68D89A, deep emerald #047A51, silver highlights, no warm hues, diffuse daylight, shallow depth of field toward the foreground, no text, no logos, no people."
  },

  {
    id: "synais",
    title: "Synais",
    styleLabel: "tactile finance × editorial",
    family: "editorial-grotesk",
    crossTags: ["app-surface"],
    image: "screenshots/IMG_207890C33BD3-1.jpeg",
    source: null,
    summary: "A finance automation site built around a hand-held device, fine circuit lines, and a warm burgundy second act. The interface previews sit low in the hero while the human hand supplies scale and physicality.",
    vocabulary: ["hand-held hero object", "circuit-line field", "warm ivory canvas", "burgundy chapter", "embedded finance tiles", "oversized proof statement", "product-to-story transition"],
    notes: [
      "The hand bridges the abstract promise and the software: it is centred below the CTA, while thin circuit paths connect it visually to the edge of the page.",
      "Two small dark dashboard tiles at the bottom right show real product texture without turning the hero into a full dashboard screenshot.",
      "The next section flips from ivory to deep burgundy and repeats the value proposition at much larger scale, creating a clear editorial chapter break.",
      "The product mark appears on both the physical object and a floating square, making a small symbol do much of the brand work."
    ],
    palette: ["#E9E6D9", "#F8F7F1", "#321814", "#873C43", "#A8B2A3", "#111111"],
    typeStack: { display: "Neutral grotesk, 400–500, tight large lines", body: "Same grotesk, 400, muted warm grey", ui: "Compact grotesk for financial readouts" },
    brief: "Present finance automation as something calm and graspable. Put one tactile object in a human hand at the centre of the opening scene, then let hairline connection paths and small financial readouts suggest a larger system. Keep the hero on warm ivory; move into deep burgundy for an emphatic explanation below.",
    prompt: "Build a finance automation landing page on a warm ivory #E9E6D9 canvas inset within a grey surround. Use a compact logo control top-left, square login and signup buttons top-right, and a centred two-line 64px grotesk headline with one warm-grey phrase. Below, place a short subhead and two rectangular CTAs, burgundy and white. Centre a photo-real hand holding a small matte sage device beneath the buttons, extending to the hero bottom. Thread very thin pale circuit paths horizontally behind it; place two dark burgundy finance metric tiles at the lower right and a left-aligned explanatory paragraph at the lower left. Follow with a full-width #321814 section carrying an oversized pale statement and three widely spaced metrics.",
    imageRecipe: "IMAGE RECIPE — fill [SUBJECT], render at 4:5, 2K\n\n[SUBJECT: a dark-skinned hand holding a small rounded-square matte sage financial device] premium studio product photography, device face plain with no readable marks, hand rising from the bottom centre with natural skin texture and a deep teal sleeve, STRICT palette: sage #A8B2A3, warm ivory #E9E6D9, deep burgundy #321814, realistic warm skin tones, soft directional studio light, clean isolated ivory background with ample space above, no text, no logos, no charts."
  },

  {
    id: "cantclone-hero",
    title: "Cantclone — Hero",
    styleLabel: "conversion page × product proof",
    family: "app-surface",
    crossTags: ["editorial-grotesk"],
    image: "screenshots/IMG_C5C526FC702F-1.jpeg",
    source: null,
    summary: "A website protection landing page that goes straight from a blunt headline and trial CTA to a large dashboard preview. A vivid blue page frame keeps a mostly white, conversion-heavy layout recognisable.",
    vocabulary: ["blue outer frame", "browser-chrome wrapper", "risk-reversal CTA", "dashboard as evidence", "trust triplet", "before-after panels", "direct-response copy"],
    notes: [
      "The browser bar and electric-blue border turn the landing page into an apparent captured product session.",
      "The primary CTA is repeated with the same wording and bright blue treatment, making the action easy to recognise down the page.",
      "A large dashboard screenshot follows the first promise immediately; it supplies product proof before the long problem explanation.",
      "Three terse reassurance points sit between the CTA and screenshot, answering performance, visitor-impact, and import-tool objections."
    ],
    palette: ["#075BFA", "#2369F6", "#FFFFFF", "#F5F5F5", "#151515", "#777777", "#FF9E00"],
    typeStack: { display: "Bold neutral grotesk, 600–700, centred", body: "Neutral grotesk, 400, short measure", ui: "Compact sans in dashboard controls" },
    brief: "Sell a technical protection product with direct language and immediate evidence. Use a bright blue frame as the brand signature, but keep the reading surface white. Make the trial offer unmistakable, answer the first objections in one row, then let a crisp dashboard preview demonstrate that there is an actual product behind the promise.",
    prompt: "Build a long-form website protection landing page inside a 20px electric-blue #075BFA outer field. Inset a white rounded browser canvas with a minimal browser bar. Beneath a sparse logo/navigation row, centre a small new badge, a two-line bold black headline around 56px, a narrow supporting paragraph, and a saturated blue trial button with a right arrow and compact risk-reversal line. Add a three-item trust row with simple line icons. Place a large pale dashboard screenshot below, fading gently at its base; then introduce the threat with a large centred statement and two side-by-side before/after diagrams. Keep the page predominantly white and the blue concentrated on the frame and actions.",
    imageRecipe: "IMAGE RECIPE — fill [SUBJECT], render at 16:9, 2K\n\n[SUBJECT: a clean website security dashboard showing protected domains and blocked copy attempts] straight-on interface screenshot style, left navigation rail, four compact metric tiles across the top, domain list with restrained status indicators below, one prominent add-domain row, STRICT palette: white #FFFFFF, soft grey #F5F5F5, electric blue #075BFA, black #151515, tiny green status accents, crisp thin dividers, no browser chrome, no people, no photography, no illegible decorative text."
  },

  {
    id: "cantclone-integrations",
    title: "Cantclone — Integrations & Pricing",
    styleLabel: "isometric ecosystem × pricing",
    family: "app-surface",
    crossTags: ["bento-studio"],
    image: "screenshots/IMG_B28ACFF35661-1.jpeg",
    source: null,
    summary: "The middle of the Cantclone page pairs a soft isometric compatibility map with three straightforward pricing columns. Blue CTAs tie the diagram and plan cards back to the same trial action.",
    vocabulary: ["isometric logo field", "raised centre tile", "fade-out ecosystem", "three-tier plan grid", "monthly-annual toggle", "repeated trial action", "blue framed canvas"],
    notes: [
      "Platform compatibility is expressed as a spatial ecosystem: familiar service marks orbit a raised central tile instead of appearing in a plain logo strip.",
      "The isometric tiles dissolve toward the page edges, keeping the centre visually active while the surrounding white space stays calm.",
      "Pricing uses three equally weighted cards with repeated feature language; the key differentiator is domain scale, which makes comparison simple.",
      "One blue trial button appears above the plans and again at the bottom of every card, maintaining continuity through a long section."
    ],
    palette: ["#075BFA", "#EAF2FF", "#FFFFFF", "#F6F6F6", "#111111", "#696969"],
    typeStack: { display: "Bold neutral grotesk, 600–700", body: "Neutral grotesk, 400", ui: "Medium grotesk for pricing labels and features" },
    brief: "Make broad compatibility feel easy to understand, then make the commercial choice easy to compare. Let a lightly dimensional tile field show one tool at the centre of many website platforms. Below it, use three clean pricing plans with shared feature structure, obvious prices, and the same blue action at the same position in every card.",
    prompt: "Design a white SaaS integrations and pricing page inset within a 20px electric-blue #075BFA border. Centre a 44px black heading and two lines of supporting copy above a wide isometric field of pale diamond tiles; raise the central blue product tile and scatter platform marks around it, fading peripheral tiles into white. Add a blue trial CTA under the illustration. Leave generous vertical space, then centre a pricing headline and a small monthly/annual segmented control. Show three equal white plan cards with subtle grey outlines, black headings, aligned feature lists, prices near the bottom, and bright blue full-width trial buttons. Avoid dark backgrounds and decorative gradients.",
    imageRecipe: "IMAGE RECIPE — fill [SUBJECT], render at 16:9, 2K\n\n[SUBJECT: a website tool represented as one raised central tile in a network of compatible website platforms] clean isometric product illustration, white and pale-blue diamond tiles arranged in a loose horizontal grid, one central tile lifted above the rest with a sharp cobalt-blue abstract symbol, surrounding tiles carrying simple abstract platform marks, peripheral tiles dissolving into white, STRICT palette: #075BFA, #EAF2FF, white, very light grey, sparse tiny accent colours only, soft realistic elevation shadows, no text, no people."
  },

  {
    id: "cantclone-close",
    title: "Cantclone — Closing Section",
    styleLabel: "FAQ × conversion close",
    family: "editorial-grotesk",
    crossTags: ["app-surface"],
    image: "screenshots/IMG_3CB85540C20D-1.jpeg",
    source: null,
    summary: "A long-form landing page closes with compact FAQs, an urgent final appeal, a tilted dashboard image, and one more trial action. The same electric-blue surround frames the otherwise spare white layout.",
    vocabulary: ["FAQ accordion stack", "urgency badge", "centred closing pitch", "glowing trial button", "tilted dashboard preview", "soft image fade", "reassurance footer"],
    notes: [
      "The FAQs are grouped into a narrow column of quiet grey rows; they resolve practical objections before the final pitch.",
      "A large blank interval between FAQ and closing headline resets attention after the dense question stack.",
      "The dashboard preview is tilted and fades into the white ground, making it feel like product evidence without creating another hard-edged section.",
      "The final CTA, product mark, and reassurance copy repeat the offer in descending visual emphasis."
    ],
    palette: ["#075BFA", "#FFFFFF", "#F7F7F7", "#151515", "#606060", "#FFAB13"],
    typeStack: { display: "Bold neutral grotesk, 600–700, centred", body: "Neutral grotesk, 400, narrow paragraph measure", ui: "Medium neutral sans for FAQ rows" },
    brief: "Close a long SaaS page by answering practical doubts, restating the stakes, and showing the product once more. Keep the FAQ compact and plain. Give the final appeal its own space, let a blue trial action stand out, and use a softened product preview to connect the sales copy back to the working interface.",
    prompt: "Build the closing portion of a website protection page on white inside a thick electric-blue #075BFA frame. At top, place six narrow pale-grey FAQ accordion rows with right-aligned plus signs. After generous whitespace, centre a small urgency capsule, a bold three-line black headline at about 42px, a short paragraph, and a luminous blue trial button. Set a large dashboard preview below at slight perspective, fading into white at the bottom. Follow with a soft-grey footer panel containing the product mark, two lines of reassurance, a final blue CTA, tiny secondary links, and no new visual motif.",
    imageRecipe: "IMAGE RECIPE — fill [SUBJECT], render at 16:9, 2K\n\n[SUBJECT: a minimal website protection dashboard floating in perspective] clean white software interface with a small left sidebar, four compact activity metrics, a protected-domain table, and understated status labels, viewed at a slight backward tilt with the bottom edge fading smoothly into white, STRICT palette: white, light grey #F7F7F7, electric blue #075BFA, black #151515, tiny green status accents, gentle blue ambient light beneath the interface, no people, no photography, no browser chrome."
  },

  {
    id: "cuby",
    title: "Cuby",
    styleLabel: "crypto payments × app showcase",
    family: "app-surface",
    crossTags: ["editorial-grotesk"],
    image: "screenshots/IMG_662A7827CD5C-1.jpeg",
    source: null,
    summary: "A global payments hero that uses a faint blue grid, floating currency tokens, and three overlapping phone screens to make a complex card-and-crypto offer feel like a familiar consumer app.",
    vocabulary: ["soft blueprint grid", "floating currency tokens", "three-phone fan", "serif italic second line", "black conversion pill", "fade-to-white devices", "trust-logo runway"],
    notes: [
      "The headline combines a direct sans first line with a large italic serif second line, making the payment methods the visual hook.",
      "Four floating currency tiles sit near the hero corners and frame the centred copy without forming a card grid.",
      "A three-phone fan emerges from the bottom of the hero, with the centre balance screen dominant and the side transaction views receding.",
      "The fine square grid fades as it approaches the devices, so the scene reads as technical but stays light."
    ],
    palette: ["#F8F8FC", "#DDEBFF", "#FFFFFF", "#0A0A0B", "#ACF168", "#2F70CE", "#8B67E8"],
    typeStack: { display: "Large geometric sans with high-contrast italic serif second line", body: "Neutral sans, 400, centred", ui: "Compact app sans with tabular figures" },
    brief: "Explain a card and crypto payment layer through a familiar mobile product rather than technical diagrams. Keep the hero light and spacious. Use a precise grid and a few floating currency symbols to signal infrastructure, then let three convincing phone screens establish that it works as a usable account.",
    prompt: "Build a payments landing hero on near-white #F8F8FC. Place a simple nav above a large rounded rectangular hero with a faint blue square grid and soft blue light at the upper edges. Centre a small certification badge, a 64px black sans line 'Get Paid Globally', an equally large black italic serif line 'Card or Crypto', concise copy, and two CTAs: black filled and white outlined. Float four small rounded currency tiles around the content. Across the lower half, show three realistic mobile banking screens fanned in perspective, the centre screen tallest, fading softly into white at the bottom. Add a monochrome trust-logo row below the hero.",
    imageRecipe: "IMAGE RECIPE — fill [SUBJECT], render at 16:9, 2K\n\n[SUBJECT: three premium smartphones displaying a modern global payments account] centred fan arrangement, tallest front phone straight-on with a clear balance and simple payment actions, side phones angled outward with transaction lists, crisp black device bezels and pale app interfaces, STRICT palette: white, icy blue #DDEBFF, black #0A0A0B, tiny lime #ACF168 accents, bright studio light, bottom edges dissolving into white, no hands, no people, no logos, no illegible decorative text."
  },

  {
    id: "moundiq",
    title: "MoundIQ",
    styleLabel: "baseball photo × quiet SaaS",
    family: "cinematic-atmosphere",
    crossTags: ["editorial-grotesk"],
    image: "screenshots/IMG_833C6EC3648E-1.jpeg",
    source: null,
    summary: "A baseball intelligence product puts a huge, softly focused ball at the base of an otherwise empty hero. The natural stadium image gives a plain black headline and dark-green demo button immediate context.",
    vocabulary: ["low baseball horizon", "defocused stadium", "wide quiet sky", "deep-green demo pill", "centre-seam anchor", "soft edge vignette", "sport-specific product proof"],
    notes: [
      "The image reserves its bright upper half for text and moves all recognisable baseball detail below the CTA.",
      "A ball on the centre axis anchors the page without competing with the headline; other balls at the edges add depth.",
      "The dark-green primary CTA is the only saturated UI colour, borrowing from the field rather than introducing a new brand hue.",
      "The nav is a small floating capsule, leaving most of the wide hero free of interface chrome."
    ],
    palette: ["#F8F7F3", "#0B0C0A", "#004B3C", "#42532C", "#8A4331", "#E9E8E2"],
    typeStack: { display: "Neutral grotesk, 500–600, very large", body: "Neutral sans, 400, compact centred lines", ui: "Small neutral sans inside restrained pills" },
    brief: "Make baseball analytics feel native to the game rather than to a generic dashboard. Use one photographic scene with ample empty light above and tactile balls close to the lens below. Keep the product promise and call to action spare, with a deep-green accent drawn from the field.",
    prompt: "Create a full-width baseball analytics landing hero. Use a photographic background with an almost-white softly blurred stadium upper half, a green field near the lower middle, and three oversized baseballs across the bottom foreground, the centre ball in clearest focus. Place a black logo top-left, a small floating white navigation capsule top-centre, and a deep-green demo pill top-right. Centre a small trust capsule, a two-line black 68px grotesk headline, concise supporting copy, and two rounded buttons above the balls. Keep all text in the empty upper area; let the photograph do the branding.",
    imageRecipe: "IMAGE RECIPE — fill [SUBJECT], render at 16:9, 2K\n\n[SUBJECT: three baseballs resting close to the camera at the edge of a professional baseball field] centre baseball large and in crisp focus with tactile leather and red stitching, side baseballs partially cropped and softly defocused, distant grass and stadium blurred into a bright nearly white open upper half for typography, STRICT palette: warm off-white #F8F7F3, field green #42532C, muted red stitching #8A4331, natural overcast daylight, shallow depth of field, no players, no text, no logos."
  },

  {
    id: "finku",
    title: "finku",
    styleLabel: "mint frame × global finance",
    family: "editorial-grotesk",
    crossTags: ["app-surface"],
    image: "screenshots/IMG_B83C5F032F2D-1.jpeg",
    source: null,
    summary: "A global finance page framed in bright mint, with a dark-green headline, concentric guide rings, partner logos, and broad lifestyle photo panels that introduce the product before a transfer UI appears.",
    vocabulary: ["mint page frame", "concentric guide rings", "dark-green display", "partner logo runway", "lifestyle diptych", "overlaid account tiles", "transfer-card reveal"],
    notes: [
      "The mint surround forms a persistent visual border while the white interior supports long-form content.",
      "Very faint concentric circles sit behind the headline and CTA, adding a financial-network suggestion without a literal diagram.",
      "The first large photo pair balances a single portrait against a wider group scene; small finance cards overlay each image to connect lifestyle to product.",
      "The page moves from human scenes into a mint-tinted money-transfer interface, making the product reveal feel earned."
    ],
    palette: ["#5AE6A6", "#FFFFFF", "#084E43", "#CFF9E9", "#80BADA", "#141414"],
    typeStack: { display: "Geometric grotesk, 400–500, broad lines", body: "Neutral sans, 400", ui: "Compact sans with tabular figures in transfer cards" },
    brief: "Present cross-border money management as a daily human activity. Use the fresh mint brand colour to frame a calm white page, make the headline the first dominant element, then show real people and small financial overlays before introducing the transfer tool itself. Keep the interface credible and the photography optimistic.",
    prompt: "Build a long-form finance landing page inside a 24px mint #5AE6A6 page surround. On white, place a logo top-left, quiet horizontal nav, and dark-green top-right action. Centre a large 68px deep-green headline with two lines, a green capsule action, and faint concentric rings behind it. Set a horizontal partner-logo row beneath. Follow with two large rounded photo panels: a close portrait on blue at left and an outdoor group scene at right, each carrying one small dark-green or mint finance overlay. Below, introduce a centred transfer interface on a pale-mint section. Keep visual weight in the photos and headline; use hairline section structure.",
    imageRecipe: "IMAGE RECIPE — fill [SUBJECT], render at 16:9, 2K\n\n[SUBJECT: four friends in expressive green, blue and pink clothing walking together in bright open air] premium candid lifestyle photography for an inclusive global finance brand, optimistic natural gestures, fresh blue sky and a strip of green landscape, leave clean space in the upper-right for a small UI overlay, STRICT palette: fresh mint #5AE6A6, deep green #084E43, sky blue #80BADA, touches of vivid pink, crisp daylight, real skin tones, no text, no logos, no payment cards."
  },

  {
    id: "shopify-sidekick",
    title: "Shopify Sidekick",
    styleLabel: "commerce UI × floating objects",
    family: "app-surface",
    crossTags: ["bento-studio"],
    image: "screenshots/IMG_D0784D8A38F4-1.jpeg",
    source: null,
    summary: "A Shopify order screen is presented as the hero object, surrounded by isolated 3D merchandise. The Sidekick input sits inside the real workflow at the bottom, framing the assistant as part of store operations.",
    vocabulary: ["full-order interface", "floating merchandise", "black navigation rail", "embedded assistant composer", "operational hero", "product-object halo", "clean studio ground"],
    notes: [
      "The order detail is large enough to show real operational context: fulfilment, payment, customer, risk, and timeline all remain visible.",
      "A small Sidekick composer is placed within the order screen rather than in a separate marketing card, showing where assistance happens.",
      "The surrounding chairs and glass objects make the merchant's catalogue tangible while the UI remains the central subject.",
      "The objects break the rectangular silhouette of a standard software screenshot but do not obscure the primary order information."
    ],
    palette: ["#F2F2F2", "#FFFFFF", "#111111", "#F7DC47", "#285AF6", "#78A71B", "#B77318"],
    typeStack: { display: "Product UI sans, 500–600 for the order heading", body: "Compact product UI sans, 400", ui: "Dense but readable operational labels and tabular figures" },
    brief: "Show an AI commerce assistant at the point of work. Let a full, believable order screen dominate the composition and place the assistant entry point inside it. Surround that screen with a few well-lit product objects that imply a merchant catalogue, while keeping the interface content unobstructed.",
    prompt: "Create a product showcase on a seamless light-grey studio background. Centre a wide 16:9 commerce order-detail interface with a black left navigation rail, white main canvas, order heading, status badges, fulfilment item list, payment summary, and a narrow right customer-information column. Place a compact AI assistant composer along the bottom edge of the interface. Float a handful of photoreal catalogue objects just outside its boundaries: a mustard upholstered chair above, an iridescent glass stool lower-left, blue glassware to the left, a green chair to the right, and a small blue textured object high-right. Keep the screenshot readable and the objects secondary.",
    imageRecipe: "IMAGE RECIPE — fill [SUBJECT], render at 16:9, 2K\n\n[SUBJECT: a curated collection of modern furniture and glass objects floating around an empty central rectangle] premium e-commerce studio art direction, mustard upholstered chair above, iridescent translucent glass stool lower-left, blue glass vessel left, small vivid green chair right, blue textured object upper-right, all casting soft believable shadows onto a seamless light-grey ground, STRICT palette: #F2F2F2, mustard #B77318, cobalt #285AF6, lime #78A71B, black only in fine details, central rectangular space clear for a software interface, no people, no text, no logos."
  },

  {
    id: "growcode",
    title: "Growcode",
    styleLabel: "grainy landscape × studio",
    family: "painterly-illustrated",
    crossTags: ["editorial-grotesk"],
    image: "screenshots/IMG_DB8ED8F4C27C-1.jpeg",
    source: null,
    summary: "A creative studio leads with a saturated, grainy illustrated landscape, then pivots to a stark black service statement on white. The image gives emotion; the typography explains the offer.",
    vocabulary: ["halftone sunset", "solitary hill tree", "cobalt sky field", "coral cloud wall", "floating black nav", "image-then-statement", "editorial two-column close"],
    notes: [
      "The artwork occupies the entire opening panel and carries no overlaid headline, allowing its colour and composition to be read without interference.",
      "A lone tree at the right third gives scale to the sweeping hill and huge rising cloud bank.",
      "The black nav capsule sits above the illustration as a separate utility object; its white terminal button previews the white content section below.",
      "The service statement appears after the image in a simple two-column layout, converting atmosphere into a clear business proposition."
    ],
    palette: ["#1039C4", "#FFCF66", "#F2746E", "#185A3B", "#FFFFFF", "#0B0B0B"],
    typeStack: { display: "Large neutral grotesk, 500, tight two-line statement", body: "Neutral sans, 400, short paragraph", ui: "Small sans in black pill navigation" },
    brief: "Give a digital studio an unmistakable visual memory before explaining its service. Use one spectacular grainy landscape illustration as the opening act, with no text over it. Then let a plain, oversized black statement and a short supporting paragraph resolve the meaning below. Keep navigation self-contained in a dark floating capsule.",
    prompt: "Build a creative studio landing page on white with narrow side margins. Centre a black rounded-full navigation capsule near the top, containing logo, four short links, and a small white action pill. Under it, place a wide 2:1 illustrated landscape panel: deep cobalt sky, enormous coral and golden cloud bank, rolling green-blue hill, and one small dark tree near the right third. Use visible halftone grain and crisp rectangular image edges. Below the artwork, set a two-column white section with a huge black two-line grotesk statement on the left and a short paragraph plus black button on the right. Do not overlay copy on the artwork.",
    imageRecipe: "IMAGE RECIPE — fill [SUBJECT], render at 2:1, 2K\n\n[SUBJECT: a lone small tree on the crest of a rolling hill beneath a monumental sunset cloud bank] richly art-directed digital landscape illustration with printed halftone grain, deep cobalt-blue open sky at left, huge scalloped clouds swelling from centre to upper-right in gold, coral and rose, dark green hill rising toward the tree, distant layered blue hills, STRICT palette: cobalt #1039C4, gold #FFCF66, coral #F2746E, forest #185A3B, no white sky, cinematic wide framing, no people, no buildings, no text."
  },

  {
    id: "elevenlabs",
    title: "ElevenLabs",
    styleLabel: "voice orb × bitmap type",
    family: "mono-technical",
    crossTags: ["painterly-illustrated"],
    image: "screenshots/IMG_E68AA6EE6BD6-1.jpeg",
    source: null,
    summary: "An AI voice platform puts a luminous blue waveform sculpture above a large bitmap-style promise. Sparse navigation and small side labels keep the white page from feeling like a standard software hero.",
    vocabulary: ["blue waveform sculpture", "particle-mesh surface", "bitmap display line", "side-index labels", "white-space theatre", "black CTA capsule", "editorial bottom split"],
    notes: [
      "The central orb carries the first impression. Its tiny repeated lines suggest sound data while its soft, fluid shape keeps it expressive.",
      "A vertical list of voice capabilities sits to the left of the image like an index, adding navigational context without a card or feature grid.",
      "The oversized bitmap headline starts at the lower left, while the supporting copy and actions form a smaller column at the lower right.",
      "The black action pill and near-white secondary control provide clear hierarchy without adding a colour that would compete with the blue form."
    ],
    palette: ["#FFFFFF", "#F7FAFF", "#B7E4FD", "#388AD5", "#163F8A", "#090909"],
    typeStack: { display: "Large bitmap or dot-matrix sans, 400, for the promise", body: "Neutral sans, 400, small and compact", ui: "Neutral sans, 400–500, sparse navigation" },
    brief: "Make an AI voice platform feel both technically advanced and emotionally open. Give the hero one beautiful data-like blue form, large enough to command attention but soft enough to suggest sound rather than machinery. Place the promise below it in a distinctive bitmap display voice; keep the rest of the interface almost invisible.",
    prompt: "Create a white AI voice landing hero with a thin, quiet navigation row across the top, login text, and a black signup pill. Centre a large luminous abstract blue waveform orb in the upper-middle: fluid folds built from thousands of tiny horizontal lines or dots, with a faint blue reflection below. To the orb's left, place a sparse vertical list of voice-related product areas connected by fine grey rules. At the bottom, split the layout: a huge two-line black bitmap-style headline on the left, a narrow paragraph and black/white pill actions on the right. Use ample white space, no dark section, and no card grid.",
    imageRecipe: "IMAGE RECIPE — fill [SUBJECT], render at 1:1, 2K\n\n[SUBJECT: a hovering fluid sculpture made of fine blue sound-wave filaments] abstract three-dimensional folded form, thousands of evenly spaced microscopic luminous lines and dot-like particles tracing curved membranes and deep inner folds, electric-blue core with icy cyan rim highlights, soft reflection and diffused glow immediately below, STRICT palette: white #FFFFFF, ice blue #B7E4FD, bright blue #388AD5, deep blue #163F8A, no purple, no black background, isolated on pure white, no text, no logos, no people."
  },
  {
    id: "cencori-hero",
    title: "Cencori — Hero",
    styleLabel: "black infrastructure × green seam",
    family: "neon-dark",
    crossTags: ["cinematic-atmosphere", "mono-technical"],
    image: "screenshots/Screenshot 2026-09-28 at 01.22.20.png",
    source: "https://cencori.com/",
    summary: "An AI infrastructure hero built almost entirely from black space and a monumental stack of brushed-metal planes. One narrow green light seam gives the structure its only colour while a compact white promise anchors the lower left.",
    vocabulary: [
      "monumental metal stack", "green light seam", "brushed-steel planes",
      "black negative space", "lower-left promise", "architectural compute metaphor",
      "restrained utility nav", "edge-lit depth"
    ],
    notes: [
      "The image mass sits to the right while the left half remains nearly empty, creating room for the headline without a scrim.",
      "Closely spaced vertical metal slabs suggest racks or processors without illustrating literal hardware; repeated edges establish scale and rhythm.",
      "A single emerald seam reveals the depth between planes and prevents the near-black composition from flattening.",
      "The headline is deliberately small compared with the object and pinned low rather than centred, giving the hero the pace of an architectural photograph.",
      "White navigation and the pale contact button stay legible but secondary to the physical form."
    ],
    palette: ["#050606", "#101416", "#303738", "#777E7E", "#17D8A8", "#F2F3EF"],
    typeStack: {
      display: "Neutral grotesk, 500, tight three-line headline",
      body: "Neutral sans, 400, reserved for supporting sections",
      ui: "Small neutral grotesk, 500, with minimal navigation chrome"
    },
    brief: "Give an AI infrastructure company physical weight. Show computing capacity as an immense, precise architectural object rather than a cloud diagram or a chip icon. Let black space do most of the composition work, use one green shaft of light to reveal the structure, and keep the verbal promise concise and low in the frame.",
    prompt: "Build a full-viewport AI infrastructure landing hero on near-black #050606. Place a white geometric wordmark top-left, five quiet navigation links across the upper middle, and a translucent console control plus a small pale contact pill top-right. Fill the right half with a huge close-cropped 3D arrangement of brushed black-metal vertical slabs and horizontal fins, receding into darkness. Put one narrow emerald #17D8A8 light seam deep between the central slabs; use only silver edge highlights elsewhere. Leave the left half mostly black. Anchor a white, three-line, roughly 64px neutral-grotesk promise near the lower-left corner. No feature cards, gradients, particle field, or extra accent colours.",
    imageRecipe: "IMAGE RECIPE — fill [SUBJECT], render at 16:9, 2K\n\n[SUBJECT: monumental vertical slabs of brushed black metal arranged like an abstract compute infrastructure] extreme close architectural product render, dense stacked planes filling the RIGHT half, occasional horizontal fins extending toward the right edge, the LEFT half falling into nearly pure black empty space for typography, one narrow emerald-green illuminated seam visible between central slabs, fine linear brushing on metal, hard silver edge reflections and deep layered shadows, STRICT palette: black #050606, graphite #303738, cool silver #777E7E, emerald #17D8A8 only at the seam, no blue or purple, no people, no text, no logos."
  },

  {
    id: "cencori-thesis",
    title: "Cencori — Our Thesis",
    styleLabel: "overscale statement × tonal fade",
    family: "editorial-grotesk",
    crossTags: ["neon-dark"],
    image: "screenshots/Screenshot 2026-09-28 at 01.22.39.png",
    source: "https://cencori.com/",
    summary: "A stark thesis section where one enormous paragraph fills the black canvas. Its opening phrase is white, then the text steps through greys until the final line nearly disappears into the background.",
    vocabulary: [
      "full-width thesis", "tonal text fade", "overscale paragraph", "black-on-black ending",
      "left-edge alignment", "reading as scroll reveal", "single-statement section"
    ],
    notes: [
      "The small 'Our thesis' label gives context, then yields almost the entire viewport to one uninterrupted statement.",
      "The type is set at display scale across nearly the full width, so line breaks create the composition rather than a grid or illustration.",
      "The first line begins in warm white, the next turns medium grey, and later lines approach black. The fade creates an implied reading progression.",
      "Large empty space below the paragraph slows the transition and lets the fading final word linger."
    ],
    palette: ["#050505", "#F2F2EF", "#B8B9B7", "#777977", "#292B2A"],
    typeStack: {
      display: "Neutral grotesk, 500–600, extremely large with tight tracking and line-height",
      label: "Small neutral sans, 400, muted grey",
      body: "The display paragraph carries all narrative content"
    },
    brief: "State the company's thesis with the conviction of a manifesto, using typography alone. Make the first words unmistakably clear, then let the rest of the thought recede through grey into black as the reader moves down the page. Keep the canvas empty around the statement and avoid charts, diagrams, buttons, and decorative elements.",
    prompt: "Create a nearly full-viewport editorial section on solid black #050505. At the upper-left margin place a small muted-grey label reading 'Our thesis'. Begin the main statement about 180px below it, aligned to the same left edge and stretching across almost the entire width. Set the copy in a heavy neutral grotesk around 118px on a 1900px desktop, with tight tracking and line-height; let it wrap into approximately five long lines. Start the opening phrase in warm white #F2F2EF, move through #B8B9B7 and #777977 by the middle, and fade the last lines toward #292B2A. Keep a broad area of black below the final line. Do not use a card, image, CTA, or gradient-filled lettering.",
    imageRecipe: "IMAGE RECIPE — fill [SUBJECT], render at 16:9, 2K\n\n[SUBJECT: an empty architectural interior disappearing into darkness] barely perceptible layered depth, broad uninterrupted black area suitable as a background for oversized editorial typography, faint graphite surfaces only near the far edges, STRICT palette: black #050505, charcoal #292B2A, no saturated colour, no visible light source, no objects, no people, no text, no logos."
  },

  {
    id: "mota-features",
    title: "Mota — Features",
    styleLabel: "product collage × soft utility",
    family: "app-surface",
    crossTags: ["editorial-grotesk", "bento-studio"],
    image: "screenshots/Screenshot 2026-10-06 at 22.03.32.png",
    source: "https://mota-platform.webflow.io/#features",
    summary: "A remote-collaboration product introduces itself with a sparse centred promise, then lets oversized interface cards tumble into view around the main app. Powder-blue emphasis and faint shadows soften an otherwise black-and-white utility aesthetic.",
    vocabulary: [
      "floating utility nav", "masked accent word", "cropped product stage", "tilted interface cards",
      "depth-by-overlap", "dotted workspace canvas", "soft monochrome controls", "single pastel accent"
    ],
    notes: [
      "The compact floating navigation repeats the product's rounded control language and places the logo in the centre as a visual hinge.",
      "A cyan capsule masks the final word of the headline, turning a short piece of live or changing copy into the hero's only colour event.",
      "The product demonstration begins below the fold line: a dark application frame anchors several white feature panels that overlap it at opposing angles.",
      "Rotation, crop, and occlusion create the sense of many capabilities without shrinking them into an equal card grid.",
      "Very soft grey borders and shadows keep the UI legible against white while preserving the page's low-contrast calm."
    ],
    palette: ["#FFFFFF", "#F4F5F6", "#D9DDE0", "#9BD6DF", "#55575A", "#191919"],
    typeStack: {
      display: "Rounded geometric sans, 600, centred with compact line-height",
      body: "Rounded geometric sans, 400, medium-grey and centred",
      ui: "Rounded sans, 400–600, used consistently across navigation and product controls"
    },
    brief: "Make a browser-based collaboration suite feel approachable without hiding its breadth. Lead with a short, friendly promise and one quiet pastel signal, then prove the product through a theatrical pile-up of real interface surfaces. The composition should feel active and abundant, while the surrounding page remains spacious and controlled.",
    prompt: "Build a white desktop SaaS hero for a remote collaboration platform. Float a wide white pill navigation near the top with four grey text links and a square black logo centred between the pairs. Set a large, two-line black rounded-grotesk headline in the middle; place the changing final word inside a wide cyan #9BD6DF rounded rectangle. Add two centred lines of grey supporting copy and a compact black waitlist button. In the lower half, reveal a large dark-framed product window on a faint dotted canvas. Overlap it with four oversized white UI panels for remote control, partner connection, storage, and another feature; rotate the left and right panels by roughly 4–7 degrees, crop them at the viewport edges, and use soft directional shadows. Keep all other colour nearly monochrome.",
    imageRecipe: "IMAGE RECIPE — fill [SUBJECT], render at 16:9, 2K\n\n[SUBJECT: a layered collage of remote-control and file-sharing application panels] crisp desktop SaaS interface mockup, one large dark-framed workspace behind several oversized white control cards, cards entering from the lower-left and lower-right at subtle opposing angles, fields, radio controls and quiet grey labels visible but no readable brand names, faint dotted canvas behind, soft realistic elevation and broad white negative space above, STRICT palette: white #FFFFFF, mist #F4F5F6, line grey #D9DDE0, cyan #9BD6DF, charcoal #191919, no saturated warm colours, no people, no device hardware, no logos."
  },

  {
    id: "mota-extension",
    title: "Mota — Extension",
    styleLabel: "numbered feature × app proof",
    family: "editorial-grotesk",
    crossTags: ["app-surface", "mono-technical"],
    image: "screenshots/Screenshot 2026-10-06 at 22.04.17.png",
    source: "https://mota-platform.webflow.io/#features",
    summary: "A near-empty feature section pairs a numbered vertical rail and concise collaboration pitch with one enlarged extension window. A violet marker and cyan 3D figure add just enough colour to turn a restrained product explainer into a memorable composition.",
    vocabulary: [
      "numbered section rail", "hairline progress track", "editorial feature split", "extension-window proof",
      "violet active marker", "one-click meeting field", "cyan 3D mascot", "asymmetric white space"
    ],
    notes: [
      "The left rail makes the section part of a three-step sequence; only the active segment receives violet colour, so progress is legible without a bulky component.",
      "Copy occupies a narrow middle column and stays vertically centred against the product window, creating a clear read-then-inspect path.",
      "The extension mockup is shown large enough for tabs, actions, and the meeting-code field to remain meaningful rather than decorative.",
      "A small cyan 3D figure interrupts the otherwise flat interface and gives the product its only expressive image.",
      "The floating navigation remains visible above the section, tying the feature story back to the landing-page frame."
    ],
    palette: ["#FFFFFF", "#F4F4F6", "#D7D9DC", "#7447FF", "#54CBD8", "#181818"],
    typeStack: {
      display: "Rounded geometric sans, 600, large two-line feature title",
      body: "Rounded geometric sans, 400, relaxed four-line measure",
      ui: "Compact rounded sans, 400–600, with tabular numerals in the meeting code"
    },
    brief: "Explain one collaboration capability with editorial restraint and concrete product evidence. Make the sequence visible, keep the verbal case short, and enlarge the extension interface until its main action can be understood at a glance. Use colour only to mark the active step and animate the product illustration.",
    prompt: "Create a spacious white product-feature section beneath a floating pill navigation. Use a three-row vertical index at the far left with the numerals 1, 2, and 3, separated by thin grey tracks; colour only the active upper track violet #7447FF. In the centre-left, set a small violet feature marker followed by a large two-line black headline and a short grey paragraph about remote meetings. On the right, show a tall rounded browser-extension window with a pale grey header, black wordmark placeholder, three segmented tabs, a cyan abstract 3D figure on a faint grid, a bold one-line message, supporting copy, a black meeting button, and a pale green-outlined code field. Keep the columns vertically centred, leave generous white space, and avoid extra cards or background decoration.",
    imageRecipe: "IMAGE RECIPE — fill [SUBJECT], render at 4:3, 2K\n\n[SUBJECT: a playful abstract figure reclining in a floating ribbon chair] minimal studio-lit 3D object for a collaboration app, compact human-like form built from a matte charcoal sphere and a folded turquoise-to-cyan ribbon body, gentle depth and contact shadow, subtle square construction grid behind the object, isolated composition with generous breathing room, STRICT palette: charcoal #282828, cyan #54CBD8, turquoise #2EAFC2, white #FFFFFF, no purple on the object, no facial features, no text, no logos, no photoreal person."
  }
];
