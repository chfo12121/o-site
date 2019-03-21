/**
 * 返回应用的配置，包括使用者自定义的配置
 */
var customConfig
try {
    customConfig = require(`${process.cwd()}/[#]/config`)
}
catch (e) {
    console.log('No custom config loaded.')
    customConfig = {}
}
module.exports = Object.assign({}, require('./defaultConfig'), customConfig)