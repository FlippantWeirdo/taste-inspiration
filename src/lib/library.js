import { FAMILIES } from "../data/families.js";
import { LIBRARY } from "../data/library.js";

export { FAMILIES, LIBRARY };

export const UNFILED = {
  id: "unfiled",
  name: "Unfiled",
  blurb: "Not yet assigned a design type.",
  tells: [],
  swatch: [],
};

const familyIndex = new Map(FAMILIES.map((f) => [f.id, f]));

export function familyById(id) {
  return familyIndex.get(id) || UNFILED;
}

export function isKnownFamily(id) {
  return familyIndex.has(id);
}

/** Screenshot filenames contain spaces; encode each segment but keep the slashes. */
export function imgSrc(path) {
  return path.split("/").map(encodeURIComponent).join("/");
}

export function pad(n) {
  return (n < 10 ? "0" : "") + n;
}

/** Everything an entry can be searched by, flattened once and cached. */
const hayCache = new WeakMap();
function haystack(entry) {
  let hay = hayCache.get(entry);
  if (hay) return hay;
  hay = [
    entry.title,
    entry.styleLabel,
    entry.summary,
    entry.brief,
    entry.prompt,
    entry.imageRecipe,
    familyById(entry.family).name,
    (entry.vocabulary || []).join(" "),
    (entry.notes || []).join(" "),
    (entry.palette || []).join(" "),
    (entry.crossTags || []).join(" "),
    entry.source || "",
  ]
    .join(" ")
    .toLowerCase();
  hayCache.set(entry, hay);
  return hay;
}

function inFamily(entry, family) {
  return (
    family === "all" ||
    entry.family === family ||
    (entry.crossTags || []).includes(family)
  );
}

export function filterEntries(family, query) {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  return LIBRARY.filter((entry) => {
    if (!inFamily(entry, family)) return false;
    if (!terms.length) return true;
    const hay = haystack(entry);
    return terms.every((t) => hay.includes(t)); // AND, so "dark mono grid" narrows
  });
}

export function countFor(familyId) {
  return LIBRARY.filter((e) => inFamily(e, familyId)).length;
}
