import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

export default {
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, 'src/js/index.js')
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React Async Todos',
            template: path.join(__dirname, 'src/index-html-template.ejs')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'inline-source-map'
};