import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

function normalizeBasePath(value: string | undefined) {
  if (!value?.trim()) {
    return "/";
  }

  const basePath = value.trim();

  if (/^https?:\/\//.test(basePath)) {
    return basePath.endsWith("/") ? basePath : `${basePath}/`;
  }

  const withLeadingSlash = basePath.startsWith("/") ? basePath : `/${basePath}`;
  return withLeadingSlash.endsWith("/") ? withLeadingSlash : `${withLeadingSlash}/`;
}

export default defineConfig({
  base: normalizeBasePath(process.env.BASE_PATH ?? process.env.VITE_BASE_PATH),
  plugins: [react(), tailwindcss(), tsConfigPaths()],
  build: {
    emptyOutDir: true,
    outDir: "dist-pages",
  },
});
