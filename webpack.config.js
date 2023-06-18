const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ghpages = require('gh-pages');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

ghpages.publish('dist', function (err) { });

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.[contenthash].js',
        assetModuleFilename: path.join('[name].[contenthash][ext]'),
    },
    experiments: {
        topLevelAwait: true
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/pages', 'home.html'),
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/pages', 'home.html'),
            filename: 'home.html',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/pages', 'article.html'),
            filename: 'article.html',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/pages', 'article2.html'),
            filename: 'article2.html',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/pages', 'article3.html'),
            filename: 'article3.html',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/pages', 'article4.html'),
            filename: 'article4.html',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/pages', 'article4.html'),
            filename: 'article5.html',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/pages', 'blog.html'),
            filename: 'blog.html',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/pages', 'about.html'),
            filename: 'about.html',
        }),

        new FaviconsWebpackPlugin('./src/assets/images/LogoFavicon.svg'),
        new FileManagerPlugin({
            events: {
                onEnd: {
                    copy: [
                        {
                            source: path.join('src', 'static'),
                            destination: 'dist',
                        },
                    ],
                },
            },
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(
            {
                filename: '[name].[contenthash].css',
            }
        ),
        new ESLintPlugin(),
    ],
    devServer: {
        watchFiles: path.resolve(__dirname, 'src'),
        port: 9000,
    },
    optimization: {
        minimizer: [
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ['gifsicle', { interlaced: true }],
                            ['jpegtran', { progressive: true }],
                            ['optipng', { optimizationLevel: 5 }],
                            ['svgo', { name: 'preset-default' }],
                        ],
                    },
                },
            }),
        ],
    },
};
