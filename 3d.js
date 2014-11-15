var vec3 = {
    create: require('gl-vec3/create'),
    sub: require('gl-vec3/subtract'),
    copy: require('gl-vec3/copy')
}
module.exports = require('./lib/build')(vec3)