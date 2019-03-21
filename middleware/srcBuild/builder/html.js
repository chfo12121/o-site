let path = require('path')
let template = require('art-template')
let config = require('../../../config')
template.defaults.rules[1].test = config.delimiters || template.defaults.rules[1].test

module.exports = (file, meta) => {
    try {
        var templateData = require(path.join(process.cwd(), '.' + file + '#' + '/@variable'))
    }
    catch (e) {
        var templateData = {}
    }
    return template(path.join(process.cwd(), '.' + file + '#' + '/' + meta.entry), templateData)
}