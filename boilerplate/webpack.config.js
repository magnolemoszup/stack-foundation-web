const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;
module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'index.js')
  },
  cache: false,

  mode: "none",
  devtool: "source-map",

  optimization: {
    minimize: false,
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8005,
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "boilerplate",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./App": "./src/App",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    }),
  ],
};
