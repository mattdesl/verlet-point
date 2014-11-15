var vec2 = {
    create: require('gl-vec2/create'),
    sub: require('gl-vec2/subtract'),
    copy: require('gl-vec2/copy')
}
module.exports = require('./lib/build')(vec2)