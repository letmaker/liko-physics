import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "liko-physics",
      formats: ["cjs", "es"],
      fileName: (format) => `liko.physics.${format}.js`,
    },
    sourcemap: true,
    rollupOptions: {
      external: ["@webgpu/types", "planck", 'liko'],
      output: {
        globals: {
          planck: "planck",
        },
      },
    },
  },
  plugins: [dts({ rollupTypes: true })],
});
