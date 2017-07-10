const ExtractTextPlugin = require('extract-text-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry : './js/app.js',
    output : {
        filename: './js/out.js'
    },
    watch: true,
    devtool: 'eval-source-map',
    module: {
        loaders:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:{
                    presets:['es2015']
                }
            }
        ],
        rules: [
            {	
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader?url=false', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./css/style.css'),
        new LiveReloadPlugin()
    ]


}
