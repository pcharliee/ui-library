import { defineConfig } from "vite"
import dts from "vite-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { resolve } from "path";
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "ComponentLibrary",
      fileName: "component-library",
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn"t be bundled
      // into your library
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@chakra-ui/react",
        "@chakra-ui/next-js",
        "@emotion/react",
        "@emotion/styled",
        "framer-motion"
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "JsxRuntime",
          "@chakra-ui/react": "chakra",
          "@chakra-ui/next-js": "chakraNext",
          "@emotion/react": "emotion",
          "@emotion/styled": "emotionStyled",
          "framer-motion": "framer"
        },
      },
    }
  },
  plugins: [
    peerDepsExternal(),
    react(),
    dts({
      // Include only the necessary files in the generated declaration files
      include: ["./lib/**/*"],
      // Exclude files that don"t need to be included in the declaration files
      exclude: ["./node_modules/**/*", "./lib/**/*.spec.*"],
      // Insert types entry in package.json for TypeScript projects to find the types
      insertTypesEntry: true,
    }),
  ],
})
