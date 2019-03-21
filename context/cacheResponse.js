module.exports = function () {
    if (process.env.NODE_ENV !== 'development') {
        cachedPathContent[this.path] = {
            contentType: this.response.get('content-type'),
            body: this.body,
        }
    }
}