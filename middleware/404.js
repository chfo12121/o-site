const fs = require('fs')

module.exports = async (ctx, next) => {
    await next()
    if (ctx.status == 404) {
        await new Promise((resolve) => {
            fs.access(`[#]/template/${ctx.status}.html`, (err) => {
                if (err) {
                    return fs.readFile(`${__dirname}/../template/${ctx.status}.html`, 'utf8', (err, data) => {
                        ctx.body = data
                        ctx.status = 404
                        resolve()
                    })
                }
                fs.readFile(`[#]/template/${ctx.status}.html`, 'utf8', (err, data) => {
                    ctx.body = data
                    ctx.status = 404
                    resolve()
                })
            })
        })
    }
}