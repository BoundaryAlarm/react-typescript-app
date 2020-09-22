const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3004;

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    mode: "development",
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        port: DEFAULT_PORT,
        compress: true,
        overlay: {
            warnings: false,
            errors: true,
        }
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: '[local]'
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.html/,
                use: ['html-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
}
