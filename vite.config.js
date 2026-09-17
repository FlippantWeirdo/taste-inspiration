import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";

/* screenshots/ deliberately stays at the project root rather than moving into
   public/ — it's the folder you drop new inspiration into, so it should be the
   first thing you see. Vite serves it straight from the root in dev; this copies
   it into dist/ on build so the built site keeps working. */
function copyScreenshots() {
  return {
    name: "copy-screenshots",
    apply: "build",
    closeBundle() {
      const from = path.resolve(process.cwd(), "screenshots");
      const to = path.resolve(process.cwd(), "dist/screenshots");
      if (fs.existsSync(from)) fs.cpSync(from, to, { recursive: true });
    },
  };
}

export default defineConfig({
  // relative asset paths, so dist/ works wherever it's served from
  base: "./",
  plugins: [react(), copyScreenshots()],
  // `npm start` adds --open; `npm run dev` stays quiet for tooling.
  server: { port: 4610, strictPort: false },
});
