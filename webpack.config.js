const path = require('path')
const htmlWebpackPlugin =require('html-webpack-plugin')
const cleanWebpackPlugin =require('clean-Webpack-plugin')

console.log(path.resolve(__dirname,'dist'))
module.exports ={
    mode:"production",
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'app[hash].js',
        publicPath :'/dist/'
    },
    // 模块对象
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              { loader: 'style-loader' },
              {
                loader: 'css-loader',
                options: {
                  modules: true
                }
              }
            ]
          }
        ]
      },
    plugins:[
        new htmlWebpackPlugin({
            template:'./public/index.html',
            minify:{
              
            },
            hash:true
        }),
        new cleanWebpackPlugin()
    ]
        
    
}
