const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const commonConfig = require('./webpack.common.config.js'); // 공통 설정 가져오기

module.exports = {
    entry: commonConfig.entry,
    output: { // 그 결과물은 어디로?
        path: path.resolve(__dirname, 'dist'),
    },
    module: commonConfig.module,
    plugins: [ 
        new CleanWebpackPlugin(),
		...commonConfig.plugins,
    ],
};