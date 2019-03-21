module.exports = async (ctx, next) => {
    const start = Date.now()
    await next()
    let now = new Date
    let month = now.getMonth() + 1
    month = month > 9 ? month : '0' + month
    let date = now.getDate()
    date = date > 9 ? date : '0' + date
    let hour = now.getHours()
    hour = hour > 9 ? hour : '0' + hour
    let minute = now.getMinutes()
    minute = minute > 9 ? minute : '0' + minute
    let second = now.getSeconds()
    second = second > 9 ? second : '0' + second
    console.log(`${month}-${date} ${hour}:${minute}:${second} ${ctx.method} ${ctx.status} ${ctx.hostname} ${ctx.originalUrl} ${ctx.ip} ${Date.now() - start}ms`)
}