const path = require('path')
const webpack = require('webpack')
var MemoryFileSystem = require("memory-fs")
var webpackConfig
try {
    webpackConfig = require(`${process.cwd()}/[#]/webpack.config`)
}
catch (e) {
    console.log('No custom webpack.config loaded.')
    webpackConfig = {}
}

module.exports = (ctx, meta) => {
    const compiler = webpack({
        entry: '.' + ctx.path + '#/' + meta.entry,
        output: {
            path: process.cwd(),
            filename: '.' + ctx.path,
        },
        module: webpackConfig.module,
        plugins: webpackConfig.plugins,
        resolve: webpackConfig.resolve,
    })
    compiler.outputFileSystem = new MemoryFileSystem
    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            if (err || stats.hasErrors()) {
                console.log(err || stats.toString())
                reject()
            }
            else {
                resolve(compiler.outputFileSystem.readFileSync(path.join(process.cwd(), ctx.path)) + '')
            }
        })
    })
}