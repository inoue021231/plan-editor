import path from "path";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
const __dirname = path.resolve(path.dirname(""));

const config = {
  mode: "development",
  entry: "./src/main.tsx",
  /* entry: "./server/index.js", */
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.cjs",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
  },
  /* target: ["web", "es5"], */
  target: "node",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      querystring: "querystring-es3",
      process: "process/browser",
    },
    fallback: {
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      crypto: false,
      buffer: false,
      util: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        //拡張子 .scss、.sass、css を対象
        test: /\.(scss|sass|css)$/i,
        // 使用するローダーの指定（後ろから順番に適用される）
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  //プラグインの設定
  plugins: [
    new MiniCssExtractPlugin({
      // 抽出する CSS のファイル名
      filename: "style.css",
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
  ignoreWarnings: [/Critical dependency/],
};

export default config;
