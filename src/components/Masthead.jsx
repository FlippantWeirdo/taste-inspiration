import { FAMILIES, countFor } from "../lib/library.js";

export default function Masthead({
  family,
  onFamily,
  searchText,
  onSearchText,
  resultCount,
  contextLine,
  theme,
  onToggleTheme,
  searchRef, // App focuses this when "/" is pressed
}) {
  const tabs = [{ id: "all", name: "All" }, ...FAMILIES];

  return (
    <header className="masthead">
      <div className="masthead-row">
        <div className="brand">
          <span className="brand-mark">◆</span>
          <span className="brand-name">Taste</span>
          <span className="brand-sub">inspiration library</span>
        </div>

        <div className="masthead-tools">
          <div className="search-wrap">
            <span className="search-icon" aria-hidden="true">
              ⌕
            </span>
            <input
              ref={searchRef}
              id="search"
              type="search"
              value={searchText}
              onChange={(e) => onSearchText(e.target.value)}
              placeholder="Search titles, vocabulary, briefs…"
              autoComplete="off"
              spellCheck="false"
              aria-label="Search the library"
            />
            <kbd className="search-kbd">/</kbd>
          </div>
          <button
            className="icon-btn"
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === "ink" ? "Switch to paper theme" : "Switch to ink theme"}
            title="Toggle theme"
          >
            ◑
          </button>
        </div>
      </div>

      <nav className="families" aria-label="Design types">
        {tabs.map((f) => (
          <button
            key={f.id}
            type="button"
            className="family-btn"
            aria-pressed={family === f.id}
            onClick={() => onFamily(f.id)}
          >
            {f.name}
            <span className="n">{countFor(f.id)}</span>
          </button>
        ))}
      </nav>

      <div className="masthead-meta">
        <span>
          {resultCount} {resultCount === 1 ? "entry" : "entries"}
        </span>
        <span className="dot">·</span>
        <span>{contextLine}</span>
      </div>
    </header>
  );
}
