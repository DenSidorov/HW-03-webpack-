const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    filename: "main.js",
  },
  // devServer: {
  //   contentBase: '../dist',
  //   port: 3001
  // },
  plugins: [
    new MiniCssExtractPlugin(),
    // new HtmlWebpackPlugin({
    //   template: "./src/index.pug",
    //   filename: "index.html",
    // }),
  ],
  module: {
    rules: [
      {
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true, // позволяет MiniCssExtractPlugin.loader работать в ES6 модулями
            },
          },
          "css-loader",
        ], // index.html => <link rel="stylesheet" type="text/css" href="dist/main.css">
        // use: ['style-loader', 'css-loader'],  // index.js => import './style.css';
        test: /\.css$/,
      },
      // {
      //   test: /\.pug$/,
      //   loader: "pug-loader",
      // },
    ],
  },
};

// Главное, что мы должны указать здесь — это entry, точка входа в приложение. В данном случае это наш index.js . Объект output описывает опции для файла, который генерирует webpack для сборки наших модулей. В данном случае мы задаем название для файла — main.js (оно же используется по умолчанию). Предлагаю для интереса попробовать изменить название файла вывода и пересобрать проект. В результате у вас должен появится новый файл с названием, которое вы укажете в поле filename. Для дальнейшей работы вам останется только подключить его вместо main.js в HTML-файл.
