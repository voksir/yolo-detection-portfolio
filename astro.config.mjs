import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://voksir.github.io",
  base: "/yolo-detection-portfolio",
  output: "static",
  build: {
    format: "directory",
  },
});
