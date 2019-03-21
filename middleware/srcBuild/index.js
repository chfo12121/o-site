const fs = require('fs')
const path = require('path')
let htmlBuilder = require('./builder/html')
let jsBuilder = require('./builder/js')
let cssBuilder = require('./builder/css')
let imageBuilder = require('./builder/image')

module.exports = async (ctx, next) => {
    if (typeof ctx === 'string') {
        ctx = {
            path: ctx,
        }
    }
    var meta
    try {
        meta = require(`${process.cwd()}${ctx.path}#/@meta.json`)
    }
    catch (e) {
        meta = null
    }

    if (!meta) {
        if (ctx.path.endsWith('.html')) {
            if (!await new Promise((resolve) => {
                fs.access(`${process.cwd()}${ctx.path}#/@index.html`, resolve)
            })) {
                meta = {
                    entry: '@index.html',
                    type: 'text/html',
                }
            }
        }
        else if (ctx.path.endsWith('.js')) {
            if (!await new Promise((resolve) => {
                fs.access(`${process.cwd()}${ctx.path}#/@index.js`, resolve)
            })) {
                meta = {
                    entry: '@index.js',
                    type: 'application/javascript',
                }
            }
        }
        else if (ctx.path.endsWith('.css')) {
            if (!await new Promise((resolve) => {
                fs.access(`${process.cwd()}${ctx.path}#/@index.css`, resolve)
            })) {
                meta = {
                    entry: '@index.css',
                    type: 'text/css',
                }
            }
        }
        else {
            if (!await new Promise((resolve) => {
                fs.access(`${process.cwd()}${ctx.path.replace(/\/$/, '')}#/@index.html`, resolve)
            })) {
                meta = {
                    entry: '@index.html',
                    type: 'text/html',
                }
            }
        }
    }

    if (meta) {
        if (meta.type === 'text/html') {
            ctx.body = htmlBuilder(ctx.path.replace(/\/$/, ''), meta)
        }
        else if (meta.type === 'application/javascript') {
            ctx.body = await jsBuilder(ctx, meta)
        }
        else if (meta.type === 'text/css') {
            ctx.body = await cssBuilder(ctx, meta)
        }
        if (!ctx.set) {
            return ctx.body
        }
        ctx.set('Content-Type', meta.type)
        ctx.cacheResponse()
    }
    else {
        await next()
    }
}