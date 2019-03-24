// Replace strings in files while bundling them.
import replace from "rollup-plugin-replace";

// minifies generated es bundle.
import { terser } from "rollup-plugin-terser";

// Common plugins
import { commonPlugins } from "./rollup.config.common";

// importing package.json
import pkg from './package.json';

export default {
  // entry of rollup
  input: "src/index.tsx",
  // output of rollup
  output: [
    {
      file: pkg.main,
      format: "cjs"
    },
    {
      file: pkg.module,
      format: "esm"
    }
  ],
  plugins: [
    ...commonPlugins,
    // helps inserting env value which triggers optimization of react code
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    terser({
      sourcemap: false
    })
  ],
  external: ['react', 'react-dom']
};
