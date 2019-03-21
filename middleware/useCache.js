module.exports = async (ctx, next) => {
    if (cachedPathContent[ctx.path]) {
        ctx.set('content-type', cachedPathContent[ctx.path].contentType)
        ctx.body = cachedPathContent[ctx.path].body
    }
    else {
        await next()
        if (ctx.response.cachehMe) {
            cachedPathContent[ctx.path] = {
                contentType: ctx.response.get('content-type'),
                body: ctx.body,
            }
        }
    }
}