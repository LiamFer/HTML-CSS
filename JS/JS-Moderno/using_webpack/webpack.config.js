// const path = require("path"); Conseguir o caminho até a pasta atual

module.exports = {
  entry: {
    // Chave é o nome do arquivo
    main: "./src/index.js",
    // hello: "./src/another.js",
  },
  mode: "development",
//   output: {
//     path: path.resolve(__dirname, "public"),
//     filename: "bundle.[name].min.js", // [name] é para pegar as entry e criar um arquivo para cada
//   },
};
