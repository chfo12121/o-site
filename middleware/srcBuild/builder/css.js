const path = require('path')
const webpack = require('webpack')
var MemoryFileSystem = require("memory-fs")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = (ctx, meta) => {
    const compiler = webpack({
        entry: {
            [ctx.path]: '.' + ctx.path + '#/' + meta.entry,
        },
        output: {
            path: process.cwd(),
            filename: '.' + ctx.path,
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        "css-loader",
                    ],
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name]",
            }),
        ],
    })
    compiler.outputFileSystem = new MemoryFileSystem
    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            if (err || stats.hasErrors()) {
                console.log(err || stats.toString())
                reject()
            }
            else {
                resolve(compiler.outputFileSystem.readFileSync(ctx.path) + '')
            }
        })
    })
}