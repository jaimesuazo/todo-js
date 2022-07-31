const HtmlWebpack    = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin     = require("copy-webpack-plugin");

module.exports = {
    
    mode: "development",

    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                //este es para el component.css, es decir, para cargarlo via javascript
                //index.js
                test: /\.css$/,
                exclude: /styles.css$/,
                use: [ 'style-loader', 'css-loader']
            },
            {
                //este es para el archivo styles.css, y este se inyecta 
                //al index.html final, no lo hace via js por el index.js
                test: /styles.css$/,
                use: [ MiniCssExtract.loader, 'css-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            }
        ]
    },

    optimization: {},

    plugins: [
        new HtmlWebpack({
            title: 'Mi Webpack App',
            // filename: 'index.html',
            template: './src/index.html'
        }),
        
        //este es para el archivo styles.css
        //este es para el archivo styles.css, y este se inyecta 
        //al index.html final, no lo hacia via js por el index.js
        new MiniCssExtract({
            //aqui lo deja con nombre main.css en el index.html del dist
            filename: '[name].css',
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns: [
                { from: 'src/assets/', to: 'assets/' }
            ]
        })
    ]
}


