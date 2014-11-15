var Point2D = require('./')
var Point3D = require('./3d')

var vec2 = require('gl-matrix').vec2
var vec3 = require('gl-matrix').vec3

var test = require('tape').test

test('points in 2D space', function(t) {
    run(vec2, Point2D, t)
})

test('points in 3D space', function(t) {
    run(vec3, Point3D, t)
})

function run(vec, Point, t) {
    var vPos = vec.fromValues(5, 5, 5)
    var p1 = Point({
        position: vPos
    })
    t.notEqual(p1.position, vPos, 'copies position')
    t.deepEqual(p1.previous, vPos, 'previous defaults to position')

    var p = Point()
    var zero = vec.create()
    t.deepEqual(p.position, zero, 'default param position zero')
    t.deepEqual(p.previous, zero, 'default param previous zero')
    t.deepEqual(p.acceleration, zero, 'default param acceleration zero')
    t.deepEqual(p.mass, 1, 'default param mass one')

    var pos = vec.fromValues(25, 25, 25)
    p.place(pos)
    t.deepEqual(p.position, pos, 'place changes position')
    t.deepEqual(p.previous, pos, 'place changes position')

    var f = vec.fromValues(5, 0, 10)
    p.addForce(f)
    t.deepEqual(p.position, pos, 'addForce does not affect position')
    t.deepEqual(p.previous, vec.fromValues(20, 25, 15), 'addForce subtracts f from previous')

    t.end()
}