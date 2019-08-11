const path = require("path");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const postcssPresetEnv = require("postcss-preset-env");

const outDirectory = ".dist";

module.exports = {
  entry: { app: "./src/index.jsx" },
  output: {
    filename: "[chunkhash].app.js",
    path: path.resolve(__dirname, outDirectory)
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[local]__[hash:base64:8]",
              sourceMap: true,
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [
                postcssPresetEnv({ autoprefixer: { grid: true } })
              ]
            }
          },
          { loader: "sass-loader", options: { sourceMap: true } }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      automaticNameDelimiter: ".",
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          priority: 1,
          minSize: 120000
        },
        styles: {
          name: "styles",
          test: /\.scss$/,
          chunks: "all",
          enforce: true
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackAssetsManifest({ output: "./.dist/manifest.json" }),
    new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: "[hash].[name].css"
    })
  ],
  mode: "development",
  devtool: "inline-cheap-source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, ".dist"),
    compress: true,
    host: "0.0.0.0",
    port: 8080,
    proxy: {
      context: () => true,
      target: "http://0.0.0.0:8081"
    },
    disableHostCheck: true,
    writeToDisk: true,
    hot: false,
    inline: false
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  }
};
