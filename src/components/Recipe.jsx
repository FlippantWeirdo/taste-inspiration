/* Tints the "IMAGE RECIPE —" header line and every [BRACKETED] slot.
   Built as real nodes rather than injected HTML, so entry text can never be
   interpreted as markup. */

function slots(line, keyBase) {
  return line.split(/(\[[^\]]+\])/g).map((part, i) =>
    /^\[[^\]]+\]$/.test(part) ? (
      <span className="rx-slot" key={keyBase + ":" + i}>
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function Recipe({ text }) {
  const lines = String(text || "").split("\n");

  return (
    <pre className="recipe">
      {lines.map((line, i) => (
        <span key={i}>
          {i === 0 && /^IMAGE RECIPE/.test(line) ? (
            <span className="rx-head">{line}</span>
          ) : (
            slots(line, i)
          )}
          {i < lines.length - 1 ? "\n" : null}
        </span>
      ))}
    </pre>
  );
}
