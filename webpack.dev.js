const {VueLoaderPlugin} = require('vue-loader'),
    path = require('path'),
    outputDir = path.resolve(__dirname, 'dist/vue'),
    TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        proxyShop: path.resolve(__dirname, '/src/vue/proxyShop.js'),
        proxyList: path.resolve(__dirname, '/src/vue/proxyList.js')
    },
    output: {
        path: outputDir,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        modules: [path.resolve(__dirname, 'node_modules'), 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)(\?.*)?$/,
                use: [
                    'url-loader?name=assets/[name].[ext]',
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    optimization: {
        minimizer: [new TerserPlugin({
            extractComments: false,
        })],
    },
}

