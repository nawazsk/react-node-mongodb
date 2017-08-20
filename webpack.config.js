module.exports = {
    entry: "./src/index.js", //entry point to the project
    output: {                //compiles all modular files to bundle file
      path: __dirname + "/public",
      filename: "bundle.js"
    },
    module: {
      loaders: [  //convert the high level unsupportive non standard js/jsx into react readable
          {
            test: /\.json$/,
            loader: "json-loader"
          },
          {
            test: /\.js$/,
            loader: "babel-loader"
          }
      ]
    }
};
