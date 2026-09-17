import { useCallback, useEffect, useRef, useState } from "react";
import { isKnownFamily } from "./library.js";

/* State lives in the URL hash so views are shareable:
   #family/<id>, #entry/<id>, #q/<search>.

   The hash only ever carries the most specific thing, but the in-memory route
   keeps all three — so opening an entry while filtered doesn't lose the filter,
   and closing it puts you back where you were. */

const EMPTY = { family: "all", query: "", openId: null };

function parseHash() {
  const raw = decodeURIComponent(window.location.hash.replace(/^#/, ""));
  if (!raw) return EMPTY;
  const i = raw.indexOf("/");
  const kind = i === -1 ? raw : raw.slice(0, i);
  const val = i === -1 ? "" : raw.slice(i + 1);

  if (kind === "entry" && val) return { openId: val };
  if (kind === "q" && val) return { query: val, openId: null };
  if (kind === "family" && isKnownFamily(val)) return { family: val, openId: null };
  return EMPTY;
}

function toHash({ family, query, openId }) {
  if (openId) return "entry/" + openId;
  if (query) return "q/" + encodeURIComponent(query);
  if (family !== "all") return "family/" + family;
  return "";
}

export function useRoute() {
  const [route, setRouteState] = useState(() => ({ ...EMPTY, ...parseHash() }));

  // Guards the hashchange listener from reacting to hashes we wrote ourselves.
  const writing = useRef(false);

  const setRoute = useCallback((patch) => {
    setRouteState((prev) => ({
      ...prev,
      ...(typeof patch === "function" ? patch(prev) : patch),
    }));
  }, []);

  useEffect(() => {
    const want = toHash(route);
    const have = window.location.hash.replace(/^#/, "");
    if (want === have) return;
    writing.current = true;
    const url = want ? "#" + want : window.location.pathname + window.location.search;
    window.history.replaceState(null, "", url);
    // replaceState doesn't fire hashchange, but clear the guard on the next tick
    // in case anything else did.
    queueMicrotask(() => {
      writing.current = false;
    });
  }, [route]);

  useEffect(() => {
    const onHashChange = () => {
      if (writing.current) return;
      setRouteState((prev) => ({ ...prev, ...parseHash() }));
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return [route, setRoute];
}
