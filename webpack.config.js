const path = require('path')
const fs = require('fs')

module.exports = {
    entry: {
        index: './src/index.js',
        store: './src/store.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'release'),
        libraryTarget: 'amd',
        library: 'loginUI'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: ['babel-loader?cacheDirectory'],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: '/microportal/',
                        }
                    }
                ]
            }
        ],
    },
    devtool: 'eval-source-map',
    // devServer: {
    //     http2: true,
    //     https: {
    //         key: fs.readFileSync('nginx/microportal.key'),
    //         cert: fs.readFileSync('nginx/microportal.crt')
    //     }
    // }
};
