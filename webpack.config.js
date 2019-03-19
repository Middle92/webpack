const path = require('path')
// html-webpack-html 生成默认index.html
// 文档： https://github.com/jaketrent/html-webpack-template
const HtmlWebpackPlugin = require('html-webpack-plugin')
// clean-webpack-plugin 清除dist下的所有文件
// 文档： https://github.com/johnagan/clean-webpack-plugin
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    // 开发环境
    mode: 'development',
    // source map 跟踪报错文件
    devtool: 'inline-source-map',
    // entry 输入文件
    entry: {
        app: './public/js/app.js',
        index: './public/js/index.js',
    },
    // output 输出文件
    output: {
        // 输出文件路径
        path: path.resolve(__dirname, 'dist'),
        // 输出文件名称
        filename: '[name].bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '管理输出'
        })
    ]
}