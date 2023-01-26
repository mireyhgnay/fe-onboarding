const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const folderName = '01_study'; // 로컬에서 확인할 폴더명으로 변경

module.exports = {
  entry: { // webpack bundler 에 누가 참여할건지?
    ['main.bundle']: path.resolve(__dirname, 'src', folderName, 'index.js'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        // 로더 순서는 마지막부터 실행됩니다. css-loader 가 먼저 실행된 후 style-loader 순으로 되어있어야함. (순서를 반대로 하면 에러 발생)
        // sass-loader 제일 첫 순서로 추가
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // node_modules 제외시키기
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', folderName, 'index.html'),
		}),
	],
};