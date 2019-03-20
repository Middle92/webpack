const path = require('path')
const fs = require('fs')
// html-webpack-html 生成默认index.html
// 文档： https://github.com/jaketrent/html-webpack-template
const HtmlWebpackPlugin = require('html-webpack-plugin')
// clean-webpack-plugin 清除dist下的所有文件
// 文档： https://github.com/johnagan/clean-webpack-plugin
const CleanWebpackPlugin = require('clean-webpack-plugin')
// 读取文件 遍历文件名称数据
let html = fs.readdirSync(path.resolve(__dirname, './public/view')).map((filename) => 
    // 返回 HtmlWebpackPlugin 实例    
    new HtmlWebpackPlugin({
        // 是否注入文件（Boolean）
        inject: false,
        // 输出的文件名称
        filename: path.resolve(__dirname, `./dist/view/${filename}`),
        // 使用的模板
        template: path.resolve(__dirname, `./public/view/${filename}`)
    })
)

module.exports = {
    // 开发环境
    mode: 'development',
    // source map 跟踪报错文件
    devtool: 'inline-source-map',
    // entry 输入文件
    entry: {
        common: path.resolve(__dirname, './public/js/common.js')
    },
    // output 输出文件
    output: {
        path: path.resolve(__dirname, './dist/js'),
        filename: '[name].js'
    },
    // plugins 使用的插件
    plugins: [
        // 清楚文件下所有文件
        new CleanWebpackPlugin(['dist']),
        // 拼接html -> HtmlWebpackPlugin
        ...html
    ]
}