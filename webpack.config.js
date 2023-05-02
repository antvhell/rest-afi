import path from "path";

export default {
  mode: "development",
  entry: {
    mapa: "./src/js/mapa.js",
    plays: "./src/js/plays.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("public/js"),
  },
};
