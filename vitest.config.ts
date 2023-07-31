/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import { resolve } from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  test: {
    deps: {
      inline: ["minifaker"],
    },
    clearMocks: true,
    coverage: {
      all: true,
      exclude: ["lib"],
      include: ["src"],
      provider: "istanbul",
      reporter: ["html", "lcov"],
    },
    exclude: ["bin", "dist", "node_modules"],
    setupFiles: ["console-fail-test/setup"],
  },
});
