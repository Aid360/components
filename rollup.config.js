import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import scss from "rollup-plugin-scss";

const packageJson = require("./package.json");

const config = [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      // {
      //   file: packageJson.module,
      //   format: "esm",
      //   sourcemap: true,
      // },
    ],
    plugins: [
      resolve(),
      commonjs({
        strictRequires: true,
      }),
      typescript({ tsconfig: "./tsconfig.json" }),

      scss({
        fileName: "styles.css",
        failOnError: true,
      }),
    ],
  },
  {
    input: "dist/cjs/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "cjs" }],
    plugins: [dts()],

    external: [/\.s?css$/],
  },
];

export default config;
