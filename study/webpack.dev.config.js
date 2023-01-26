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
        hot: true, // 브라우저 새로고침 안해도 변경된 모듈 자동으로 적용
        static: {
            directory: path.join(__dirname, 'dist'), // 실제 정적 파일 경로
            publicPath: '/assets', // 서버 정적 파일 경로
        }
    },
};