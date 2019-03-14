// helps in importing json
import json from "rollup-plugin-json";

// helps in resolving node modules
import resolve from "rollup-plugin-node-resolve";

// for babel configuration
import babel from "rollup-plugin-babel";

// converts cjs to es
import commonjs from "rollup-plugin-commonjs";

// Replace strings in files while bundling them.
import replace from "rollup-plugin-replace";

// Serve bundle
import serve from "rollup-plugin-serve";

// helps in page refresh/broswer refresh when any code change detected
import livereload from "rollup-plugin-livereload";

// injects the bundle into html and runs the code.
import htmlTemplate from "rollup-plugin-generate-html-template";

// this will insert the styles into style tag in html
import postcss from "rollup-plugin-postcss";

// copies assets to the output folder
import copy from 'rollup-copy-plugin';

export default {
  // entry of rollup
  input: "src/index.js",
  // output of rollup
  output: {
    file: "dist/bundle.js",
    format: "cjs"
  },
  plugins: [
    // resolves the modules
    resolve(),
    // helps in importing json files
    json(),
    // injects css into html
    postcss({
      extensions: [".css"]
    }),
    // helps in configuring babel into the project
    babel({
      exclude: "node_modules/**"
    }),
    // helps in converting commonjs to es
    commonjs(),
    // helps insetting env value which triggers optimization of react code
    replace({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    // takes html and injects the bundled script
    htmlTemplate({
      template: "public/index.html",
      target: "dist/index.html"
    }),
    //copies assets to the output folder
    copy({
      'public/favicon.png': 'dist/favicon.png'
    }),
    //servers file like webpack-dev-server
    serve({ contentBase: "dist", open: true, port: 8087 }),
    // helps in live reloading
    livereload({ watch: "dist" })
  ]
};
