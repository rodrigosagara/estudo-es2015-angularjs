const webpack = require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/app.component.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".js"]
    },
    plugins:[
        new HtmlPlugin({
            template: path.join(__dirname,'src/index.html'),
            filename: "index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /.js?$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'app'),
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        publicPath: "/",
        contentBase: "./dist"
    }
}