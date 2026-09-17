import { useEffect, useRef, useState } from "react";
import Figure from "./Figure.jsx";
import Recipe from "./Recipe.jsx";
import { familyById, pad } from "../lib/library.js";

const COPY_FIELDS = [
  { field: "brief", label: "Copy brief" },
  { field: "prompt", label: "Copy build prompt" },
  { field: "imageRecipe", label: "Copy image recipe" },
];

function CopyButton({ label, value, onCopy }) {
  const [done, setDone] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  // A new entry re-keys these buttons, so "Copied ✓" can't leak between entries.
  return (
    <button
      className={"btn" + (done ? " done" : "")}
      type="button"
      onClick={() => {
        onCopy(value);
        setDone(true);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setDone(false), 1600);
      }}
    >
      {done ? "Copied ✓" : label}
    </button>
  );
}

export default function Sheet({ entry, index, total, onClose, onStep, onCopy }) {
  const overlayRef = useRef(null);
  const sheetRef = useRef(null);
  const restoreFocus = useRef(null);

  const hasPrev = index > 0;
  const hasNext = index !== -1 && index < total - 1;

  // Remember what was focused when the sheet opened, and give it back on close.
  useEffect(() => {
    restoreFocus.current = document.activeElement;
    return () => {
      const node = restoreFocus.current;
      if (node && document.contains(node)) node.focus();
    };
  }, []);

  // Lock the page behind the sheet. The cleanup is what guarantees the page
  // never ends up permanently unscrollable, whatever happens while it's open.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    sheetRef.current?.focus();
  }, []);

  // Back to the top whenever you step to another entry.
  useEffect(() => {
    if (overlayRef.current) overlayRef.current.scrollTop = 0;
  }, [entry.id]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (/^(INPUT|TEXTAREA)$/.test(document.activeElement?.tagName || "")) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        onStep(-1);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        onStep(1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onStep]);

  const fam = familyById(entry.family);
  const typeStack = Object.entries(entry.typeStack || {});

  return (
    <div
      className="overlay"
      ref={overlayRef}
      onMouseDown={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        className="sheet"
        role="dialog"
        aria-modal="true"
        aria-label={entry.title}
        tabIndex={-1}
        ref={sheetRef}
      >
        <button className="sheet-close icon-btn" type="button" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="sheet-figure">
          <Figure key={entry.id} entry={entry} />
        </div>

        <div className="sheet-body">
          <div className="sheet-head">
            <h2 className="sheet-title">{entry.title}</h2>
            <div className="sheet-head-meta">
              <span className="style-label">{entry.styleLabel}</span>
              <span className="family-tag">{fam.name}</span>
            </div>
          </div>

          {entry.summary && <p className="sheet-summary">{entry.summary}</p>}

          <div className="chips">
            {(entry.vocabulary || []).map((v) => (
              <span className="chip" key={v}>
                {v}
              </span>
            ))}
          </div>

          <div className="recipe-block">
            <Recipe text={entry.imageRecipe} />
          </div>

          <div className="sheet-cols">
            <section className="block">
              <h3 className="block-title">What's going on</h3>
              <ul className="notes">
                {(entry.notes || []).map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            </section>

            <section className="block">
              <h3 className="block-title">Palette &amp; type</h3>
              <div className="swatches">
                {(entry.palette || []).map((hex) => (
                  <button
                    key={hex}
                    type="button"
                    className="swatch"
                    style={{ background: hex }}
                    data-hex={hex}
                    title={"Copy " + hex}
                    onClick={() => onCopy(hex, "Copied " + hex)}
                  />
                ))}
              </div>

              <dl className="typestack">
                {typeStack.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>

              <p className="source-line">
                Source ·{" "}
                {entry.source ? (
                  <a href={entry.source} target="_blank" rel="noopener noreferrer">
                    {entry.source.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  </a>
                ) : (
                  <span style={{ color: "var(--ink-3)" }}>screenshot only</span>
                )}
              </p>
            </section>
          </div>

          <section className="block">
            <h3 className="block-title">The brief</h3>
            <p className="prose">{entry.brief}</p>
          </section>

          <section className="block">
            <h3 className="block-title">Build prompt</h3>
            <pre className="prompt-box">{entry.prompt}</pre>
          </section>
        </div>

        <div className="sheet-actions">
          {COPY_FIELDS.map(({ field, label }) => (
            <CopyButton
              key={entry.id + ":" + field}
              label={label}
              value={entry[field]}
              onCopy={onCopy}
            />
          ))}
          <span className="spacer" />
          <button className="btn ghost" type="button" onClick={onClose}>
            Close
          </button>
        </div>

        <nav className="sheet-nav">
          <button
            className="ghost-btn"
            type="button"
            onClick={() => onStep(-1)}
            disabled={!hasPrev}
          >
            ← Previous
          </button>
          <span className="sheet-index">
            {pad(Math.max(index, 0) + 1)} / {pad(total || 1)}
          </span>
          <button
            className="ghost-btn"
            type="button"
            onClick={() => onStep(1)}
            disabled={!hasNext}
          >
            Next →
          </button>
        </nav>
      </div>
    </div>
  );
}
