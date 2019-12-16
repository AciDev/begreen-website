const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.html", "./src/**/*.ts", "./src/*.ts"],
  whitelistPatterns: [],
  whitelist: [],

  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

const cssnano = require("cssnano")({
  preset: "default"
});

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("precss"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
    cssnano
  ]
};
