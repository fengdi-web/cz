const path = require("path");
module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,//处理css
            loader: 'style-loader!css-loader'
        },
        {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)$/,//处理图片
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
        },
        {
            test: /\.(htm|html)$/i,//处理html
            use: ['html-withimg-loader']
        },
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',//es5转es6
                options: {
                    presets: ['@babel/preset-env','@babel/react']
                }
            }
        },
        ]
    },
}