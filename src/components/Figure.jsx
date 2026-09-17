import { useState } from "react";
import { imgSrc } from "../lib/library.js";

/** Typographic stand-in, used for link-only entries and if an image 404s. */
function Fallback({ entry, note }) {
  return (
    <div className="figure-fallback">
      <div className="ff-name">{entry.title}</div>
      <div className="ff-bars">
        {(entry.palette || []).slice(0, 6).map((hex) => (
          <i key={hex} style={{ background: hex }} />
        ))}
      </div>
      <div className="ff-note">{note}</div>
    </div>
  );
}

export default function Figure({ entry }) {
  const [broken, setBroken] = useState(false);

  if (!entry.image) return <Fallback entry={entry} note="link entry — no screenshot yet" />;
  if (broken) return <Fallback entry={entry} note="screenshot missing from /screenshots" />;

  return (
    <img
      src={imgSrc(entry.image)}
      alt={entry.title}
      loading="lazy"
      decoding="async"
      onError={() => setBroken(true)}
    />
  );
}
