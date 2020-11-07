const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { args } = require('commander');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = (env, args) => {
    const isDev = (args.mode === 'development');

    return {
        mode: isDev ? 'development' : 'production',
        entry: './src/index.tsx',
        output: {
            filename: 'bundle.[fullhash:6].js',
            path: path.resolve(__dirname, 'dist'),
        },
        devServer: {
            historyApiFallback: true,
            hot: true,
            open: true,
            contentBase: path.resolve(__dirname, 'dist'),
            watchContentBase: true
        },
        devtool: isDev ? 'source-map' : false,
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
                favicon: './public/favicon.ico'
            }),
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash:6].css'
            })
        ],
        module: {
            rules: [
                {
                    test: /\.(js|ts)x?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                                '@babel/preset-typescript'
                            ]
                        }
                    }
                },
                {
                    test: /\.(svg|png|jpg|jpeg|gif)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[path].[name].[ext]'
                        }
                    }
                },
                {
                    test: /\.s[ac]ss$/,
                    use: [
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: isDev ? true : false
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: isDev ? true : false
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: isDev ? true : false
                            }
                        }
                    ]
                },
                {
                    test: /\.(woff|woff2|eot|ttf)$/,
                    use: "url-loader?limit=100000",
                }
            ]
        },
        resolve: {
            extensions: ['.jsx', '.js', '.tsx', '.ts'],
            alias: {
                '@': path.resolve(__dirname, './src'),
                '~': path.resolve(__dirname, './')
            }
        }
    }
}
