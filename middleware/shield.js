module.exports = async (ctx, next) => {
    if (
        ctx.path.split('/')[1] === '.git' ||
        ctx.path.split('/')[1] === '[#]'
    ) {
        return
    }
    var exclude = ['node_modules/', 'package.json', 'package-lock.json', 'Dockerfile']
    if (
        exclude.some((v) => {
            if (v[0] === '/') { //屏蔽某个目录
                if (ctx.path.startsWith(v)) { //和它里面的东西
                    return true
                }
            }
            else if (ctx.path.endsWith('/')) { //屏蔽xxx目录
                if (RegExp('/' + v).test(ctx.path)) { //及里面的东西
                    return true
                }
            }
            else if (RegExp('/' + v + '$').test(ctx.path)) { //屏蔽xxx文件或xxx目录，目录里面的东西不影响
                return true
            }
        })
    ) {
        return
    }
    var exclude = ['README.md']
    if (
        exclude.some((v) => {
            if (v[0] === '/') {
                if (ctx.path.startsWith(v)) {
                    return true
                }
            }
            else if (ctx.path.endsWith('/')) {
                if (RegExp('/' + v).test(ctx.path)) {
                    return true
                }
            }
            else if (RegExp('/' + v + '$').test(ctx.path)) {
                return true
            }
        })
    ) {
        return
    }
    await next()
}