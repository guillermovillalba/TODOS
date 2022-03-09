const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");




module.exports = {
mode: 'production',

output: {
    clean: true,
},

module:{
    rules:[
        {
            test: /\.html$/,
            loader: 'html-loader',
            options:{
                sources: false
            }
        },
        
        {
            test: /\.css$/,
            exclude: /styles.css$/,
            use: ['style-loader', 'css-loader', "sass-loader"]
        },
        {
            test: /styles.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]

        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader'
        },
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        

    ]
},
performance: {
    hints: false,
  },

optimization: {},

plugins: [
    new HtmlWebpack({
        title:'Webpack Brahian', //Titulo del html
        //filename:'index.html', //como se llama el archivo.
        template: './src/index.html',
        
    }),
    
    new MiniCssExtractPlugin({
        filename: '[name].css',
        ignoreOrder: false
    }),
    new CopyPlugin({
        patterns: [
          { from: 'src/assents/', to: "assents/" },
          
        ],
      }),
],



}