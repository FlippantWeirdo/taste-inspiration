import { useCallback, useEffect, useRef, useState } from "react";

/* The modern API needs a secure context *and* user activation. localhost and
   https qualify; a dist/ opened straight off disk doesn't, and even on
   localhost the call can be rejected. So always keep the old path in reserve
   rather than only using it when isSecureContext is false. */
function legacyWrite(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.cssText = "position:fixed;top:-1000px;opacity:0";
  document.body.appendChild(ta);
  ta.select();
  try {
    if (!document.execCommand("copy")) throw new Error("execCommand returned false");
  } finally {
    document.body.removeChild(ta);
  }
}

function write(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard
      .writeText(text)
      .catch(() => legacyWrite(text)); // rejects without user activation
  }
  return Promise.resolve().then(() => legacyWrite(text));
}

export function useCopy() {
  const [toast, setToast] = useState(null);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = useCallback((text, okMsg = "Copied to clipboard") => {
    write(String(text ?? ""))
      .then(() => setToast(okMsg))
      .catch(() => setToast("Copy failed — select the text manually"));
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 1800);
  }, []);

  return [copy, toast];
}
