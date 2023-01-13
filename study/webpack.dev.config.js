const path = require('path');
const commonConfig = require('./webpack.common.config.js'); // 공통 설정 가져오기

module.exports = {
    mode: 'development',
    entry: commonConfig.entry,
    module: commonConfig.module,
    plugins: [
        ...commonConfig.plugins,
    ],
    devServer: {
        open: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'assets'), // 실제 정적 파일 경로
            publicPath: '/static', // 서버 정적 파일 경로
        }
    },
};