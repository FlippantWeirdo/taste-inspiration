import Figure from "./Figure.jsx";
import { familyById, pad } from "../lib/library.js";

export default function Card({ entry, index, total, onOpen }) {
  const vocab = entry.vocabulary || [];
  const shown = vocab.slice(0, 3);
  const extra = vocab.length - shown.length;

  return (
    <button type="button" className="card" onClick={() => onOpen(entry.id)}>
      <div className={"card-figure" + (entry.format === "mobile" ? " card-figure--mobile" : "")}>
        <Figure key={entry.id} entry={entry} />
      </div>
      <div className="card-body">
        <div className="card-head">
          <h3 className="card-title">{entry.title}</h3>
          <span className="style-label">{entry.styleLabel}</span>
        </div>
        <div className="chips">
          {shown.map((v) => (
            <span className="chip" key={v}>
              {v}
            </span>
          ))}
          {extra > 0 && <span className="chip more">+{extra}</span>}
        </div>
        <div className="card-foot">
          <span className="fam">{familyById(entry.family).name}</span>
          <span>
            {pad(index + 1)} / {pad(total)}
          </span>
        </div>
      </div>
    </button>
  );
}
