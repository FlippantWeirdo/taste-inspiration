import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Masthead from "./components/Masthead.jsx";
import Card from "./components/Card.jsx";
import Sheet from "./components/Sheet.jsx";
import { FAMILIES, LIBRARY, familyById, filterEntries } from "./lib/library.js";
import { useRoute } from "./lib/useRoute.js";
import { useCopy } from "./lib/useCopy.js";

function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "paper"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("taste-theme", theme);
    } catch {
      /* private mode — the theme just won't persist */
    }
  }, [theme]);

  return [theme, () => setTheme((t) => (t === "ink" ? "paper" : "ink"))];
}

export default function App() {
  const [route, setRoute] = useRoute();
  const [copy, toast] = useCopy();
  const [theme, toggleTheme] = useTheme();
  const [searchText, setSearchText] = useState(route.query);
  const searchRef = useRef(null);

  /* Typing updates the grid on a short debounce; the input itself stays
     instant because it's driven by local state. */
  useEffect(() => {
    const t = setTimeout(() => setRoute({ query: searchText.trim() }), 120);
    return () => clearTimeout(t);
  }, [searchText, setRoute]);

  // Keeps the box in step when the query arrives from a link rather than a keystroke.
  useEffect(() => {
    setSearchText((cur) => (route.query === cur.trim() ? cur : route.query));
  }, [route.query]);

  const visible = useMemo(
    () => filterEntries(route.family, route.query),
    [route.family, route.query]
  );

  /* The open entry is derived, never stored. If the id doesn't resolve — a stale
     link, a deleted entry — there's simply no sheet, rather than an empty one. */
  const openIndex = route.openId ? visible.findIndex((e) => e.id === route.openId) : -1;
  const openEntry =
    openIndex !== -1
      ? visible[openIndex]
      : route.openId
        ? LIBRARY.find((e) => e.id === route.openId) || null
        : null;

  // Drop an id that matches nothing so the URL doesn't stay wrong.
  useEffect(() => {
    if (route.openId && !openEntry) setRoute({ openId: null });
  }, [route.openId, openEntry, setRoute]);

  const openId = useCallback((id) => setRoute({ openId: id }), [setRoute]);
  const close = useCallback(() => setRoute({ openId: null }), [setRoute]);

  const step = useCallback(
    (delta) => {
      setRoute((prev) => {
        const i = visible.findIndex((e) => e.id === prev.openId);
        const next = i + delta;
        if (i === -1 || next < 0 || next >= visible.length) return prev;
        return { openId: visible[next].id };
      });
    },
    [visible, setRoute]
  );

  const chooseFamily = useCallback(
    (family) => {
      setRoute({ family, openId: null });
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [setRoute]
  );

  // "/" focuses search from anywhere. The sheet handles its own keys while open.
  const sheetOpen = Boolean(openEntry);
  useEffect(() => {
    if (sheetOpen) return;
    const onKey = (e) => {
      const typing = /^(INPUT|TEXTAREA)$/.test(document.activeElement?.tagName || "");
      if (e.key === "/" && !typing) {
        e.preventDefault();
        searchRef.current?.focus();
      } else if (e.key === "Escape" && typing) {
        document.activeElement.blur();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [sheetOpen]);

  const family = route.family === "all" ? null : familyById(route.family);

  return (
    <>
      <a className="skip" href="#grid">
        Skip to library
      </a>

      <Masthead
        family={route.family}
        onFamily={chooseFamily}
        searchText={searchText}
        onSearchText={setSearchText}
        resultCount={visible.length}
        contextLine={
          route.query
            ? `matching "${route.query}"`
            : family
              ? family.name
              : "Everything in the library"
        }
        theme={theme}
        onToggleTheme={toggleTheme}
        searchRef={searchRef}
      />

      <main>
        {family && (
          <section className="family-intro">
            <h2 className="family-intro-title">{family.name}</h2>
            <p className="family-intro-blurb">{family.blurb}</p>
            <ul className="family-intro-tells">
              {(family.tells || []).map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>
        )}

        <section id="grid" className="grid" aria-label="Inspiration entries">
          {visible.map((entry, i) => (
            <Card
              key={entry.id}
              entry={entry}
              index={i}
              total={visible.length}
              onOpen={openId}
            />
          ))}
        </section>

        {visible.length === 0 && (
          <p className="empty">
            Nothing matches that.{" "}
            <button
              type="button"
              className="linkish"
              onClick={() => {
                setSearchText("");
                searchRef.current?.focus();
              }}
            >
              Clear the search
            </button>
          </p>
        )}
      </main>

      <footer className="colophon">
        <span>
          {LIBRARY.length} entries · {FAMILIES.length} design types
        </span>
        <span>
          Add more by appending to <code>src/data/library.js</code> — see{" "}
          <code>README.md</code>
        </span>
      </footer>

      {openEntry && (
        <Sheet
          entry={openEntry}
          index={openIndex}
          total={visible.length}
          onClose={close}
          onStep={step}
          onCopy={copy}
        />
      )}

      {toast && (
        <div className="toast" role="status" aria-live="polite">
          {toast}
        </div>
      )}
    </>
  );
}
